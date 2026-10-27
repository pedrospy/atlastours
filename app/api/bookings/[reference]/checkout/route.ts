import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getBookingPagePath, startCheckout } from "@/lib/booking/service";
import { getSiteUrl } from "@/lib/payments/config";

export const runtime = "nodejs";

type Params = { params: Promise<{ reference: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { reference } = await params;
  const booking = await prisma.booking.findUnique({ where: { reference } });
  if (!booking) return NextResponse.redirect(`${getSiteUrl()}/`);

  const bookingUrl = `${getSiteUrl()}${getBookingPagePath(booking)}`;
  if (booking.status !== "pending") return NextResponse.redirect(bookingUrl);

  try {
    const checkoutUrl = await startCheckout(booking, bookingUrl);
    return NextResponse.redirect(checkoutUrl ?? bookingUrl);
  } catch (error) {
    console.error("[bookings] retry checkout failed", error);
    return NextResponse.redirect(bookingUrl);
  }
}
