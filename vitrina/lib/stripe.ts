import "server-only";
import Stripe from "stripe";
import type { PlanId } from "./plans";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  return key ? new Stripe(key) : null;
}

export function stripePrices(plan: PlanId) {
  const key = plan.toUpperCase();
  return {
    oneTime: process.env[`STRIPE_PRICE_${key}`] || null,
    monthly: process.env[`STRIPE_PRICE_HEBERGEMENT_${key}`] || null,
  };
}

export function stripeReady(plan: PlanId) {
  return Boolean(process.env.STRIPE_SECRET_KEY && stripePrices(plan).oneTime);
}
