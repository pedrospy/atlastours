"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { OrderStatus, ProspectStatus } from "@prisma/client";
import { checkPassword, createSession, destroySession, requireAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import type { FormState } from "@/lib/forms";
import { getPlan } from "@/lib/plans";
import { demoSiteData, readSiteForm, uniqueSlug } from "@/lib/sites";
import { getCategory } from "@/lib/categories";

const ORDER_STATUSES: OrderStatus[] = ["NOUVEAU", "PAYE", "PUBLIE", "ANNULE"];
const PROSPECT_STATUSES: ProspectStatus[] = ["CONTACTE", "INTERESSE", "GAGNE", "PERDU"];

function refresh() {
  revalidatePath("/", "layout");
}

export async function login(_: FormState, formData: FormData): Promise<FormState> {
  const password = String(formData.get("password") ?? "");
  if (!process.env.ADMIN_PASSWORD) return { error: "ADMIN_PASSWORD n'est pas configuré sur le serveur." };
  if (!checkPassword(password)) {
    await new Promise((r) => setTimeout(r, 600));
    return { error: "Mot de passe incorrect." };
  }
  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin/connexion");
}

export async function markPaid(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("orderId") ?? "");
  const method = String(formData.get("method") ?? "Espèces").slice(0, 40);
  await db.order.updateMany({
    where: { id, status: { in: ["NOUVEAU", "ANNULE"] } },
    data: { status: "PAYE", paidAt: new Date(), paymentMethod: method },
  });
  refresh();
}

export async function setOrderStatus(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("orderId") ?? "");
  const status = String(formData.get("status") ?? "") as OrderStatus;
  if (!ORDER_STATUSES.includes(status)) return;
  const order = await db.order.findUnique({ where: { id } });
  if (!order) return;
  await db.order.update({
    where: { id },
    data: {
      status,
      paidAt: status === "NOUVEAU" ? null : status === "ANNULE" ? order.paidAt : (order.paidAt ?? new Date()),
    },
  });
  if (status === "PUBLIE") await db.site.update({ where: { id: order.siteId }, data: { status: "PUBLISHED", publishedAt: new Date() } });
  if (status === "ANNULE" || status === "NOUVEAU") await db.site.update({ where: { id: order.siteId }, data: { status: "DRAFT" } });
  refresh();
}

export async function setSitePublished(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("siteId") ?? "");
  const publish = formData.get("publish") === "1";
  const site = await db.site.update({
    where: { id },
    data: publish ? { status: "PUBLISHED", publishedAt: new Date() } : { status: "DRAFT" },
    include: { order: true },
  });
  if (site.order) {
    if (publish) {
      await db.order.update({
        where: { id: site.order.id },
        data: { status: "PUBLIE", paidAt: site.order.paidAt ?? new Date() },
      });
    } else if (site.order.status === "PUBLIE") {
      await db.order.update({ where: { id: site.order.id }, data: { status: "PAYE" } });
    }
  }
  refresh();
}

export async function updateSite(siteId: string, _: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const { data, error } = readSiteForm(formData, { fillDefaults: false });
  if (!data) return { error };
  const requested = String(formData.get("slug") ?? "").trim();
  const slug = requested ? await uniqueSlug(requested, "", siteId) : undefined;
  await db.site.update({ where: { id: siteId }, data: { ...data, ...(slug ? { slug } : {}) } });
  refresh();
  return { ok: "Site enregistré." };
}

export async function deleteSite(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("siteId") ?? "");
  const back = String(formData.get("back") ?? "/admin");
  await db.site.delete({ where: { id } }).catch(() => null);
  refresh();
  redirect(back.startsWith("/admin") ? back : "/admin");
}

export async function createProspect(_: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const businessName = String(formData.get("businessName") ?? "").trim().slice(0, 80);
  const category = getCategory(String(formData.get("category") ?? "")).id;
  const city = String(formData.get("city") ?? "").trim().slice(0, 60);
  const phone = String(formData.get("phone") ?? "").trim().slice(0, 30);
  const notes = String(formData.get("notes") ?? "").trim().slice(0, 1000);

  if (businessName.length < 2) return { error: "Indiquez le nom du commerce." };
  if (!city) return { error: "Indiquez la ville." };
  if (phone && phone.replace(/\D/g, "").length < 8) return { error: "Numéro de téléphone invalide." };

  const slug = await uniqueSlug(businessName, city);
  const prospect = await db.prospect.create({
    data: {
      businessName,
      category,
      city,
      phone,
      notes,
      site: { create: { ...demoSiteData({ businessName, category, city, phone: phone || "06 00 00 00 00" }), slug } },
    },
  });
  refresh();
  redirect(`/admin/prospects/${prospect.id}`);
}

export async function updateProspect(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("prospectId") ?? "");
  const status = String(formData.get("status") ?? "") as ProspectStatus;
  const notes = formData.get("notes");
  await db.prospect.update({
    where: { id },
    data: {
      ...(PROSPECT_STATUSES.includes(status) ? { status } : {}),
      ...(notes !== null ? { notes: String(notes).slice(0, 1000) } : {}),
    },
  });
  refresh();
}

export async function convertProspect(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("prospectId") ?? "");
  const plan = getPlan(String(formData.get("plan") ?? ""));
  const prospect = await db.prospect.findUnique({ where: { id }, include: { site: { include: { order: true } } } });
  if (!prospect || !plan) return;
  let orderId = prospect.site.order?.id;
  if (!orderId) {
    const order = await db.order.create({
      data: {
        siteId: prospect.siteId,
        plan: plan.id,
        amount: plan.price,
        monthly: plan.monthly,
        customerName: prospect.businessName,
        customerPhone: prospect.phone,
        note: "Commande créée depuis la prospection",
      },
    });
    orderId = order.id;
  }
  await db.prospect.update({ where: { id }, data: { status: "GAGNE" } });
  refresh();
  redirect(`/admin/commandes/${orderId}`);
}
