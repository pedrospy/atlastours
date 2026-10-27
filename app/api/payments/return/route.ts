import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getBookingPagePath, markBookingPaid } from "@/lib/booking/service";
import { getSiteUrl } from "@/lib/payments/config";
import { getPaymentProvider } from "@/lib/payments/provider";

export const runtime = "nodejs";

/** Customers land here after paying; Stripe sends `session_id`, PayPal sends `token` (the order id). */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const providerName = searchParams.get("provider");
  const providerRef =
    providerName === "stripe" ? searchParams.get("session_id") : searchParams.get("token");
  const provider =
    providerName === "stripe" || providerName === "paypal" ? getPaymentProvider(providerName) : null;

  if (!provider || !providerRef) return NextResponse.redirect(`${getSiteUrl()}/`);

  const booking = await prisma.booking.findFirst({ where: { providerRef } });
  if (!booking) return NextResponse.redirect(`${getSiteUrl()}/`);

  if (booking.status === "pending") {
    try {
      if (await provider.confirm(providerRef)) {
        await markBookingPaid(booking.id, provider.name, providerRef);
      }
    } catch (error) {
      console.error("[payments] confirmation failed", error);
    }
  }

  return NextResponse.redirect(`${getSiteUrl()}${getBookingPagePath(booking)}`);
}
