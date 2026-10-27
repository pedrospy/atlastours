"use server";

import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checkAdminPassword, createAdminSession, destroyAdminSession, hashPassword, requireAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import { isEmail, slugify } from "@/lib/format";
import type { FormState } from "@/lib/forms";
import { getOffer } from "@/lib/offers";

const field = (formData: FormData, name: string, max = 200) => String(formData.get(name) ?? "").trim().slice(0, max);

function refresh() {
  revalidatePath("/", "layout");
}

function tempPassword() {
  return randomBytes(6).toString("base64url");
}

export async function adminLogin(_: FormState, formData: FormData): Promise<FormState> {
  if (!process.env.ADMIN_PASSWORD) return { error: "ADMIN_PASSWORD n'est pas configuré sur le serveur." };
  if (!checkAdminPassword(String(formData.get("password") ?? ""))) {
    await new Promise((r) => setTimeout(r, 600));
    return { error: "Mot de passe incorrect." };
  }
  await createAdminSession();
  redirect("/admin");
}

export async function adminLogout() {
  await destroyAdminSession();
  redirect("/admin/connexion");
}

export async function markOrderPaid(formData: FormData) {
  await requireAdmin();
  await db.order.updateMany({
    where: { id: field(formData, "orderId"), status: { in: ["EN_ATTENTE", "ANNULEE"] } },
    data: { status: "PAYEE", paidAt: new Date(), paymentMethod: field(formData, "method", 40) || "Virement" },
  });
  refresh();
}

export async function setOrderStatus(formData: FormData) {
  await requireAdmin();
  const id = field(formData, "orderId");
  const status = field(formData, "status");
  if (status === "REMBOURSEE") {
    await db.order.updateMany({ where: { id, status: "PAYEE" }, data: { status, refundedAt: new Date() } });
  } else if (status === "ANNULEE") {
    await db.order.updateMany({ where: { id, status: "EN_ATTENTE" }, data: { status } });
  } else if (status === "EN_ATTENTE") {
    await db.order.updateMany({ where: { id, status: "ANNULEE" }, data: { status } });
  }
  refresh();
}

export async function addManualSale(_: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const name = field(formData, "name", 80);
  const email = field(formData, "email", 160).toLowerCase();
  const phone = field(formData, "phone", 30);
  const offer = getOffer(field(formData, "offer", 20));
  const method = field(formData, "method", 40) || "Virement";
  const euros = Number(field(formData, "amount", 12).replace(",", "."));
  if (!offer) return { error: "Choisissez une offre." };
  if (!isEmail(email)) return { error: "Adresse e-mail invalide." };
  const amount = Number.isFinite(euros) && euros >= 0 && field(formData, "amount") ? Math.round(euros * 100) : offer.price;

  let student = await db.student.findUnique({ where: { email } });
  let password = "";
  if (!student) {
    if (name.length < 2) return { error: "Indiquez le nom de l'élève." };
    password = tempPassword();
    student = await db.student.create({ data: { name, email, phone, passwordHash: hashPassword(password) } });
  }
  await db.order.create({
    data: { studentId: student.id, offer: offer.id, amount, status: "PAYEE", paidAt: new Date(), paymentMethod: method, note: "Vente saisie dans l'admin" },
  });
  refresh();
  return {
    ok: password
      ? `Vente enregistrée. Identifiants à envoyer à l'élève : ${email} / ${password}`
      : `Vente enregistrée sur le compte existant de ${student.name}.`,
  };
}

export async function resetStudentPassword(studentId: string, _: FormState): Promise<FormState> {
  await requireAdmin();
  const password = tempPassword();
  const student = await db.student.update({ where: { id: studentId }, data: { passwordHash: hashPassword(password) } }).catch(() => null);
  if (!student) return { error: "Élève introuvable." };
  return { ok: `Nouveau mot de passe pour ${student.email} : ${password}` };
}

async function uniqueLessonSlug(title: string, excludeId?: string) {
  const base = slugify(title) || "lecon";
  let slug = base;
  for (let i = 2; ; i++) {
    const existing = await db.lesson.findUnique({ where: { slug } });
    if (!existing || existing.id === excludeId) return slug;
    slug = `${base}-${i}`;
  }
}

function parseResources(text: string) {
  return text
    .split("\n")
    .map((line) => line.split("|").map((p) => p.trim()))
    .filter(([label, url]) => label && url && /^https?:\/\//.test(url))
    .slice(0, 20)
    .map(([label, url]) => ({ label: label.slice(0, 120), url: url.slice(0, 500) }));
}

export async function updateLesson(lessonId: string, _: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const title = field(formData, "title", 140);
  if (title.length < 3) return { error: "Le titre est trop court." };
  const videoUrl = field(formData, "videoUrl", 500);
  if (videoUrl && !videoUrl.startsWith("https://")) return { error: "Le lien vidéo doit commencer par https://" };
  const requestedSlug = slugify(field(formData, "slug", 80));
  await db.lesson.update({
    where: { id: lessonId },
    data: {
      title,
      slug: await uniqueLessonSlug(requestedSlug || title, lessonId),
      duration: Math.max(1, Math.min(600, Number(field(formData, "duration", 4)) || 10)),
      videoUrl,
      content: String(formData.get("content") ?? "").slice(0, 50000),
      resources: parseResources(String(formData.get("resources") ?? "")),
      freePreview: formData.get("freePreview") === "on",
      published: formData.get("published") === "on",
    },
  });
  refresh();
  return { ok: "Leçon enregistrée." };
}

export async function createLesson(formData: FormData) {
  await requireAdmin();
  const moduleId = field(formData, "moduleId");
  const last = await db.lesson.findFirst({ where: { moduleId }, orderBy: { position: "desc" } });
  const lesson = await db.lesson.create({
    data: {
      moduleId,
      position: (last?.position ?? 0) + 1,
      title: "Nouvelle leçon",
      slug: await uniqueLessonSlug("nouvelle-lecon"),
      published: false,
    },
  });
  refresh();
  redirect(`/admin/contenu/${lesson.id}`);
}

export async function deleteLesson(formData: FormData) {
  await requireAdmin();
  await db.lesson.delete({ where: { id: field(formData, "lessonId") } }).catch(() => null);
  refresh();
  redirect("/admin/contenu");
}

export async function createModule() {
  await requireAdmin();
  const last = await db.module.findFirst({ orderBy: { position: "desc" } });
  await db.module.create({ data: { position: (last?.position ?? 0) + 1, title: "Nouveau module" } });
  refresh();
}

export async function updateModule(formData: FormData) {
  await requireAdmin();
  const tier = getOffer(field(formData, "tier", 20))?.id ?? "essentiel";
  const title = field(formData, "title", 140);
  await db.module.update({
    where: { id: field(formData, "moduleId") },
    data: { ...(title ? { title } : {}), summary: field(formData, "summary", 400), tier },
  });
  refresh();
}

export async function deleteModule(formData: FormData) {
  await requireAdmin();
  await db.module.delete({ where: { id: field(formData, "moduleId") } }).catch(() => null);
  refresh();
}

export async function move(formData: FormData) {
  await requireAdmin();
  const kind = field(formData, "kind");
  const id = field(formData, "id");
  const dir = field(formData, "dir") === "up" ? -1 : 1;
  if (kind === "module") {
    const list = await db.module.findMany({ orderBy: { position: "asc" } });
    await swap(list, id, dir, (item, position) => db.module.update({ where: { id: item.id }, data: { position } }));
  } else {
    const lesson = await db.lesson.findUnique({ where: { id } });
    if (!lesson) return;
    const list = await db.lesson.findMany({ where: { moduleId: lesson.moduleId }, orderBy: { position: "asc" } });
    await swap(list, id, dir, (item, position) => db.lesson.update({ where: { id: item.id }, data: { position } }));
  }
  refresh();
}

async function swap<T extends { id: string }>(list: T[], id: string, dir: number, save: (item: T, position: number) => Promise<unknown>) {
  const index = list.findIndex((i) => i.id === id);
  const target = index + dir;
  if (index < 0 || target < 0 || target >= list.length) return;
  [list[index], list[target]] = [list[target], list[index]];
  await Promise.all(list.map((item, position) => save(item, position + 1)));
}
