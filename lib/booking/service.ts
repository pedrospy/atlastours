import type { Booking, Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import type { Locale } from "@/lib/i18n/config";
import { sendBookingEmails } from "@/lib/email";
import { getPaymentProvider } from "@/lib/payments/provider";
import type { AddonId } from "./addons";
import { getBookableExperience, getExperiencePath, type ExperienceKind } from "./experiences";
import { computeQuote, PROMO_PERCENT, toCents } from "./pricing";
import { generateBookingReference } from "./reference";

export type BookingInput = {
  kind: ExperienceKind;
  slug: string;
  locale: Locale;
  travelDate: string;
  travelers: number;
  addons: AddonId[];
  customerName: string;
  email: string;
  phone: string;
  notes?: string;
  promoCode?: string;
};

export class BookingError extends Error {}

export function getPromoCode() {
  return (process.env.PROMO_CODE ?? "NOMAD5").trim().toUpperCase();
}

export function isValidPromo(code: string | undefined) {
  return Boolean(code) && code!.trim().toUpperCase() === getPromoCode();
}

export { PROMO_PERCENT };

export async function createBooking(input: BookingInput): Promise<Booking> {
  const experience = getBookableExperience(input.kind, input.slug, input.locale);
  if (!experience) throw new BookingError("unknown_experience");

  const travelDate = new Date(`${input.travelDate}T00:00:00Z`);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  if (Number.isNaN(travelDate.getTime()) || travelDate < today) throw new BookingError("invalid_date");

  const addons = experience.addons.filter((addon) => input.addons.includes(addon.id));
  const promoApplied = isValidPromo(input.promoCode);
  const quote = computeQuote({
    basePrice: experience.basePrice,
    flatPrice: experience.flatPrice,
    tiers: experience.tiers,
    travelers: input.travelers,
    addons,
    promoApplied,
  });

  return prisma.booking.create({
    data: {
      reference: generateBookingReference(),
      kind: input.kind,
      slug: experience.slug,
      title: experience.title,
      travelDate,
      travelers: input.travelers,
      addons: addons as unknown as Prisma.InputJsonValue,
      customerName: input.customerName,
      email: input.email.toLowerCase(),
      phone: input.phone,
      notes: input.notes || null,
      locale: input.locale,
      promoCode: promoApplied ? getPromoCode() : null,
      totalCents: toCents(quote.total),
      depositCents: toCents(quote.deposit),
    },
  });
}

export function getBookingPagePath(booking: Pick<Booking, "locale" | "reference">) {
  return `/${booking.locale}/booking/${booking.reference}`;
}

/** Starts a deposit checkout and returns the provider URL to redirect the customer to. */
export async function startCheckout(booking: Booking, cancelUrl: string): Promise<string | null> {
  const provider = getPaymentProvider();
  if (!provider) return null;

  const session = await provider.createCheckout({
    bookingId: booking.id,
    reference: booking.reference,
    title: booking.title,
    depositCents: booking.depositCents,
    currency: booking.currency,
    email: booking.email,
    locale: booking.locale,
    cancelUrl,
  });
  await prisma.booking.update({
    where: { id: booking.id },
    data: { provider: provider.name, providerRef: session.providerRef },
  });
  return session.url;
}

/** Idempotent: only the first call for a pending booking flips it to paid and sends emails. */
export async function markBookingPaid(bookingId: string, provider: string, providerRef?: string) {
  const { count } = await prisma.booking.updateMany({
    where: { id: bookingId, status: "pending" },
    data: { status: "paid", paidAt: new Date(), provider, ...(providerRef ? { providerRef } : {}) },
  });
  if (count === 0) return false;

  const booking = await prisma.booking.findUniqueOrThrow({ where: { id: bookingId } });
  await sendBookingEmails(booking);
  return true;
}

export function getExperienceUrlForBooking(booking: Pick<Booking, "kind" | "slug" | "locale">) {
  return getExperiencePath(booking.kind, booking.slug, booking.locale as Locale);
}
