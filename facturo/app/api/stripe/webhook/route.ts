import type Stripe from "stripe";
import { db } from "@/lib/db";
import { getStripe } from "@/lib/stripe";

const ACTIVE: Stripe.Subscription.Status[] = ["active", "trialing", "past_due"];

export async function POST(req: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) return new Response("Stripe non configuré", { status: 503 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(await req.text(), req.headers.get("stripe-signature") ?? "", secret);
  } catch {
    return new Response("Signature invalide", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      if (session.client_reference_id && typeof session.customer === "string") {
        await db.user.updateMany({
          where: { id: session.client_reference_id },
          data: { plan: "PRO", stripeCustomerId: session.customer },
        });
      }
      break;
    }
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object;
      const customer = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
      await db.user.updateMany({
        where: { stripeCustomerId: customer },
        data: { plan: ACTIVE.includes(sub.status) ? "PRO" : "FREE" },
      });
      break;
    }
  }

  return Response.json({ received: true });
}
