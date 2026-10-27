import type { BookingStatus } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { bookingStatuses } from "@/lib/booking/admin";
import { markBookingPaid } from "@/lib/booking/service";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  // Basic-auth credentials are sent automatically by the browser, so reject cross-site form posts.
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== request.headers.get("host")) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const form = await request.formData();
  const id = form.get("id");
  const status = form.get("status");
  const back = form.get("back");
  if (typeof id !== "string" || !bookingStatuses.includes(status as BookingStatus)) {
    return new NextResponse("Invalid request", { status: 400 });
  }

  if (status === "paid") {
    await prisma.booking.updateMany({ where: { id, status: "cancelled" }, data: { status: "pending" } });
    // Same path as an online payment so the customer gets the confirmation email (cash, bank transfer…).
    await markBookingPaid(id, "manual");
  } else {
    await prisma.booking.update({ where: { id }, data: { status: status as BookingStatus } });
  }

  const redirectPath = typeof back === "string" && back.startsWith("/admin") ? back : "/admin";
  return NextResponse.redirect(new URL(redirectPath, request.url), 303);
}
