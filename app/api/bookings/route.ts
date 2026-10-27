import { NextResponse } from "next/server";
import { z } from "zod";
import { addonIds } from "@/lib/booking/addons";
import { MAX_TRAVELERS } from "@/lib/booking/pricing";
import {
  BookingError,
  createBooking,
  getBookingPagePath,
  startCheckout,
} from "@/lib/booking/service";
import { sendBookingEmails } from "@/lib/email";
import { locales } from "@/lib/i18n/config";
import { getSiteUrl } from "@/lib/payments/config";

export const runtime = "nodejs";

const bookingSchema = z.object({
  kind: z.enum(["circuit", "excursion"]),
  slug: z.string().min(1).max(120),
  locale: z.enum(locales),
  travelDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  travelers: z.number().int().min(1).max(MAX_TRAVELERS),
  addons: z.array(z.enum(addonIds)).max(addonIds.length).default([]),
  customerName: z.string().trim().min(2).max(120),
  email: z.email().max(200),
  phone: z.string().trim().min(6).max(40),
  notes: z.string().trim().max(1000).optional(),
  promoCode: z.string().trim().max(40).optional(),
  company: z.string().max(200).optional(),
});

export async function POST(request: Request) {
  const parsed = bookingSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_request", issues: parsed.error.issues }, { status: 400 });
  }

  const { company, ...input } = parsed.data;
  if (company) return NextResponse.json({ redirectUrl: `/${input.locale}` });

  let booking;
  try {
    booking = await createBooking(input);
  } catch (error) {
    if (error instanceof BookingError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error("[bookings] create failed", error);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }

  const bookingPath = getBookingPagePath(booking);
  try {
    const checkoutUrl = await startCheckout(booking, `${getSiteUrl()}${bookingPath}`);
    if (checkoutUrl) return NextResponse.json({ reference: booking.reference, redirectUrl: checkoutUrl });
  } catch (error) {
    console.error("[bookings] checkout failed, falling back to request", error);
  }

  await sendBookingEmails(booking);
  return NextResponse.json({ reference: booking.reference, redirectUrl: bookingPath });
}
