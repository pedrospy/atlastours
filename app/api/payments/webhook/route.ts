import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { markBookingPaid } from "@/lib/booking/service";
import { getStripe } from "@/lib/payments/stripe";

export const runtime = "nodejs";

/** Stripe webhook: guarantees the booking is marked paid even if the customer never returns to the site. */
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");
  if (!secret || !signature) return NextResponse.json({ error: "not_configured" }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(await request.text(), signature, secret);
  } catch (error) {
    console.error("[payments] invalid Stripe signature", error);
    return NextResponse.json({ error: "invalid_signature" }, { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const session = event.data.object;
    const bookingId = session.metadata?.bookingId;
    if (bookingId && session.payment_status === "paid") {
      await markBookingPaid(bookingId, "stripe", session.id);
    }
  }

  return NextResponse.json({ received: true });
}
