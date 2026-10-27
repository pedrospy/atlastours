export const site = {
  name: "MarocPlan",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3020",
  paypalMe: process.env.NEXT_PUBLIC_PAYPAL_ME ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "contact@marocplan.com",
};

export type PlanId = "essentiel" | "complet" | "premium";

export const prices: Record<PlanId, number> = {
  essentiel: 19,
  complet: 39,
  premium: 79,
};

const stripeLinks: Record<PlanId, string | undefined> = {
  essentiel: process.env.NEXT_PUBLIC_STRIPE_ESSENTIEL,
  complet: process.env.NEXT_PUBLIC_STRIPE_COMPLET,
  premium: process.env.NEXT_PUBLIC_STRIPE_PREMIUM,
};

export function paymentLink(plan: PlanId): string | null {
  const stripe = stripeLinks[plan];
  if (stripe) return stripe;
  if (site.paypalMe) return `https://www.paypal.me/${site.paypalMe}/${prices[plan]}EUR`;
  return null;
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
