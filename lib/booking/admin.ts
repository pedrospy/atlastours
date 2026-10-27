import type { BookingStatus, Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";

export const bookingStatuses: BookingStatus[] = ["pending", "paid", "cancelled"];

export type BookingFilters = {
  status?: BookingStatus;
  from?: string;
  to?: string;
};

const isoDate = /^\d{4}-\d{2}-\d{2}$/;

export function parseBookingFilters(params: Record<string, string | string[] | undefined>): BookingFilters {
  const pick = (key: string) => {
    const value = params[key];
    return typeof value === "string" && value ? value : undefined;
  };
  const status = pick("status");
  const from = pick("from");
  const to = pick("to");
  return {
    status: bookingStatuses.includes(status as BookingStatus) ? (status as BookingStatus) : undefined,
    from: from && isoDate.test(from) ? from : undefined,
    to: to && isoDate.test(to) ? to : undefined,
  };
}

export function bookingWhere({ status, from, to }: BookingFilters): Prisma.BookingWhereInput {
  return {
    ...(status ? { status } : {}),
    ...(from || to
      ? {
          travelDate: {
            ...(from ? { gte: new Date(`${from}T00:00:00Z`) } : {}),
            ...(to ? { lte: new Date(`${to}T00:00:00Z`) } : {}),
          },
        }
      : {}),
  };
}

export function listBookings(filters: BookingFilters, take = 500) {
  return prisma.booking.findMany({
    where: bookingWhere(filters),
    orderBy: [{ travelDate: "asc" }, { createdAt: "desc" }],
    take,
  });
}

export function filtersToSearchParams(filters: BookingFilters) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(filters)) if (value) params.set(key, value);
  return params;
}
