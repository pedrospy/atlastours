import "server-only";
import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  return key ? new Stripe(key) : null;
}

export function stripeReady() {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}
