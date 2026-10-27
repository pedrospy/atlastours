"use server";

import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import type { FormState } from "@/lib/forms";
import { getPlan } from "@/lib/plans";
import { readSiteForm, uniqueSlug } from "@/lib/sites";
import { getStripe, stripePrices, stripeReady } from "@/lib/stripe";
import { appUrl } from "@/lib/format";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function createOrder(_: FormState, formData: FormData): Promise<FormState> {
  if (String(formData.get("website") ?? "")) return { error: "Requête refusée." };

  const plan = getPlan(String(formData.get("plan") ?? ""));
  if (!plan) return { error: "Choisissez une offre." };

  const customerName = String(formData.get("customerName") ?? "").trim().slice(0, 80);
  if (customerName.length < 2) return { error: "Indiquez votre nom." };

  const { data, error } = readSiteForm(formData, { fillDefaults: true });
  if (!data) return { error };
  if (data.email && !EMAIL_RE.test(data.email)) return { error: "Adresse email invalide." };

  const slug = await uniqueSlug(data.businessName, data.city);
  const order = await db.order.create({
    data: {
      plan: plan.id,
      amount: plan.price,
      monthly: plan.monthly,
      customerName,
      customerEmail: data.email ?? "",
      customerPhone: data.phone ?? "",
      note: String(formData.get("note") ?? "").trim().slice(0, 1000),
      site: { create: { ...data, slug } },
    },
  });

  redirect(`/commande/${order.id}`);
}

export async function startCheckout(formData: FormData) {
  const id = String(formData.get("orderId") ?? "");
  const order = await db.order.findUnique({ where: { id }, include: { site: true } });
  if (!order || order.status !== "NOUVEAU") redirect(order ? `/commande/${order.id}` : "/commander");

  const plan = getPlan(order.plan);
  const stripe = getStripe();
  if (!plan || !stripe || !stripeReady(plan.id)) redirect(`/commande/${order.id}`);

  const prices = stripePrices(plan.id);
  const lineItems = [{ price: prices.oneTime!, quantity: 1 }];
  if (prices.monthly) lineItems.push({ price: prices.monthly, quantity: 1 });

  const session = await stripe.checkout.sessions.create({
    mode: prices.monthly ? "subscription" : "payment",
    line_items: lineItems,
    customer_email: order.customerEmail || undefined,
    client_reference_id: order.id,
    metadata: { orderId: order.id },
    success_url: `${appUrl()}/commande/${order.id}?paiement=ok`,
    cancel_url: `${appUrl()}/commande/${order.id}?paiement=annule`,
    locale: "fr",
  });

  await db.order.update({ where: { id: order.id }, data: { stripeSessionId: session.id } });
  redirect(session.url!);
}
