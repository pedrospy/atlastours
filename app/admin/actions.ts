"use server";

import type { BookingStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { isAdminAuthorization } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { bookingStatuses } from "@/lib/booking/admin";
import { markBookingPaid } from "@/lib/booking/service";

export async function updateBookingStatus(formData: FormData) {
  // Server actions can be invoked from any route, so the middleware check alone is not enough.
  if (!isAdminAuthorization((await headers()).get("authorization"))) throw new Error("Unauthorized");

  const id = formData.get("id");
  const status = formData.get("status");
  if (typeof id !== "string" || !bookingStatuses.includes(status as BookingStatus)) return;

  if (status === "paid") {
    // Reuses the payment path so the customer gets the confirmation email (e.g. cash or bank transfer).
    await prisma.booking.updateMany({ where: { id, status: "cancelled" }, data: { status: "pending" } });
    await markBookingPaid(id, "manual");
  } else {
    await prisma.booking.update({ where: { id }, data: { status: status as BookingStatus } });
  }
  revalidatePath("/admin");
}
