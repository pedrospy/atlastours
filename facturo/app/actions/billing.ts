"use server";

import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { appUrl, getStripe } from "@/lib/stripe";

export async function startCheckout() {
  const user = await requireUser();
  const stripe = getStripe();
  const price = process.env.STRIPE_PRICE_PRO;
  if (!stripe || !price) redirect("/app/abonnement?erreur=stripe");

  let customerId = user.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({ email: user.email, name: user.businessName || user.name, metadata: { userId: user.id } });
    customerId = customer.id;
    await db.user.update({ where: { id: user.id }, data: { stripeCustomerId: customerId } });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price, quantity: 1 }],
    client_reference_id: user.id,
    success_url: `${appUrl()}/app/abonnement?succes=1`,
    cancel_url: `${appUrl()}/app/abonnement`,
    allow_promotion_codes: true,
  });
  redirect(session.url!);
}

export async function openBillingPortal() {
  const user = await requireUser();
  const stripe = getStripe();
  if (!stripe || !user.stripeCustomerId) redirect("/app/abonnement");
  const portal = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: `${appUrl()}/app/abonnement`,
  });
  redirect(portal.url);
}
