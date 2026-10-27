"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createLeadSession,
  createStudentSession,
  currentStudent,
  destroyStudentSession,
  hashPassword,
  verifyPassword,
} from "@/lib/auth";
import { accessOffer, canAccess } from "@/lib/course";
import { db } from "@/lib/db";
import { appUrl, isEmail } from "@/lib/format";
import type { FormState } from "@/lib/forms";
import { getOffer } from "@/lib/offers";
import { getStripe } from "@/lib/stripe";

const field = (formData: FormData, name: string, max = 200) => String(formData.get(name) ?? "").trim().slice(0, max);

function safeNext(value: string) {
  return value.startsWith("/") && !value.startsWith("//") ? value : "/espace";
}

export async function joinFreeCourse(_: FormState, formData: FormData): Promise<FormState> {
  const name = field(formData, "name", 80);
  const email = field(formData, "email", 160).toLowerCase();
  const source = field(formData, "source", 60);
  if (!name) return { error: "Indiquez votre prénom." };
  if (!isEmail(email)) return { error: "Adresse e-mail invalide." };

  const lead = await db.lead.upsert({
    where: { email },
    create: { email, name, source },
    update: { name },
  });
  await createLeadSession(lead.id);

  const first = await db.lesson.findFirst({
    where: { freePreview: true, published: true },
    orderBy: [{ module: { position: "asc" } }, { position: "asc" }],
  });
  redirect(first ? `/gratuit/${first.slug}` : "/#offres");
}

export async function placeOrder(_: FormState, formData: FormData): Promise<FormState> {
  const offer = getOffer(field(formData, "offer", 20));
  if (!offer) return { error: "Choisissez une offre." };
  if (formData.get("consent") !== "on") return { error: "Merci d'accepter les conditions de vente." };

  let student = await currentStudent();
  if (!student) {
    const name = field(formData, "name", 80);
    const email = field(formData, "email", 160).toLowerCase();
    const phone = field(formData, "phone", 30);
    const password = String(formData.get("password") ?? "");
    if (name.length < 2) return { error: "Indiquez votre nom." };
    if (!isEmail(email)) return { error: "Adresse e-mail invalide." };
    if (password.length < 8) return { error: "Le mot de passe doit contenir au moins 8 caractères." };
    if (await db.student.findUnique({ where: { email } })) {
      return { error: "Un compte existe déjà avec cet e-mail : connectez-vous d'abord (lien ci-dessus)." };
    }
    const created = await db.student.create({ data: { name, email, phone, passwordHash: hashPassword(password) } });
    await createStudentSession(created.id);
    student = { ...created, orders: [] };
  }

  const current = accessOffer(student.orders);
  if (current && current.rank >= offer.rank) return { error: `Vous avez déjà accès à l'offre ${current.name}.` };

  await db.order.updateMany({ where: { studentId: student.id, status: "EN_ATTENTE" }, data: { status: "ANNULEE" } });
  const order = await db.order.create({
    data: {
      studentId: student.id,
      offer: offer.id,
      amount: offer.price - (current?.price ?? 0),
      note: current ? `Passage de ${current.name} à ${offer.name}` : "",
    },
  });
  revalidatePath("/admin", "layout");
  redirect(`/commande/${order.id}`);
}

export async function startCheckout(formData: FormData) {
  const stripe = getStripe();
  const student = await currentStudent();
  const order = await db.order.findUnique({ where: { id: String(formData.get("orderId") ?? "") } });
  if (!stripe || !student || !order || order.studentId !== student.id || order.status !== "EN_ATTENTE") return;
  const offer = getOffer(order.offer);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: student.email,
    client_reference_id: order.id,
    metadata: { orderId: order.id },
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: order.amount,
          product_data: { name: `Formation Envol — offre ${offer?.name ?? order.offer}` },
        },
      },
    ],
    success_url: `${appUrl()}/commande/${order.id}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl()}/commande/${order.id}`,
  });
  if (session.url) redirect(session.url);
}

export async function studentLogin(_: FormState, formData: FormData): Promise<FormState> {
  const email = field(formData, "email", 160).toLowerCase();
  const password = String(formData.get("password") ?? "");
  const student = await db.student.findUnique({ where: { email } });
  if (!student || !verifyPassword(password, student.passwordHash)) {
    await new Promise((r) => setTimeout(r, 500));
    return { error: "E-mail ou mot de passe incorrect." };
  }
  await createStudentSession(student.id);
  redirect(safeNext(field(formData, "next", 200)));
}

export async function studentLogout() {
  await destroyStudentSession();
  redirect("/connexion");
}

export async function toggleLessonDone(formData: FormData) {
  const student = await currentStudent();
  if (!student) redirect("/connexion");
  const lesson = await db.lesson.findUnique({ where: { id: String(formData.get("lessonId") ?? "") }, include: { module: true } });
  if (!lesson || !canAccess(accessOffer(student.orders), lesson.module.tier)) return;
  const key = { studentId_lessonId: { studentId: student.id, lessonId: lesson.id } };
  if (formData.get("done") === "1") {
    await db.lessonProgress.upsert({ where: key, create: { studentId: student.id, lessonId: lesson.id }, update: {} });
  } else {
    await db.lessonProgress.delete({ where: key }).catch(() => null);
  }
  revalidatePath("/espace", "layout");
  const next = String(formData.get("next") ?? "");
  if (next) redirect(safeNext(next));
}
