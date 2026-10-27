import Stripe from "stripe";
import { getSiteUrl } from "./config";
import type { PaymentProvider } from "./provider";

let client: Stripe | null = null;

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  client ??= new Stripe(key);
  return client;
}

const stripeLocales = new Set(["fr", "en", "es", "de"]);

export const stripeProvider: PaymentProvider = {
  name: "stripe",

  async createCheckout(request) {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      customer_email: request.email,
      client_reference_id: request.reference,
      locale: (stripeLocales.has(request.locale) ? request.locale : "auto") as Stripe.Checkout.SessionCreateParams.Locale,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: request.currency.toLowerCase(),
            unit_amount: request.depositCents,
            product_data: { name: `${request.title} – ${request.reference}` },
          },
        },
      ],
      metadata: { bookingId: request.bookingId, reference: request.reference },
      payment_intent_data: { metadata: { bookingId: request.bookingId, reference: request.reference } },
      // Stripe substitutes {CHECKOUT_SESSION_ID} itself, so it must stay unencoded.
      success_url: `${getSiteUrl()}/api/payments/return?provider=stripe&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: request.cancelUrl,
    });
    if (!session.url) throw new Error("Stripe did not return a checkout URL");
    return { url: session.url, providerRef: session.id };
  },

  async confirm(sessionId) {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);
    return session.payment_status === "paid";
  },
};
