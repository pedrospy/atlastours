import type { NextRequest } from "next/server";
import { parseStoredAddons } from "@/lib/booking/addons";
import { listBookings, parseBookingFilters } from "@/lib/booking/admin";

export const runtime = "nodejs";

function csvCell(value: string | number | null | undefined) {
  const text = value == null ? "" : String(value);
  // Prefix formula-like values so spreadsheets don't execute them.
  const safe = /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;
  return /[",\n;]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
}

export async function GET(request: NextRequest) {
  const filters = parseBookingFilters(Object.fromEntries(request.nextUrl.searchParams));
  const bookings = await listBookings(filters, 10_000);

  const header = [
    "reference", "status", "kind", "experience", "travel_date", "travelers", "addons",
    "customer", "email", "phone", "locale", "promo", "total_eur", "deposit_eur", "balance_eur",
    "provider", "paid_at", "created_at", "notes",
  ];
  const lines = bookings.map((booking) =>
    [
      booking.reference,
      booking.status,
      booking.kind,
      booking.title,
      booking.travelDate.toISOString().slice(0, 10),
      booking.travelers,
      parseStoredAddons(booking.addons).map((addon) => addon.id).join(" "),
      booking.customerName,
      booking.email,
      booking.phone,
      booking.locale,
      booking.promoCode,
      (booking.totalCents / 100).toFixed(2),
      (booking.depositCents / 100).toFixed(2),
      ((booking.totalCents - booking.depositCents) / 100).toFixed(2),
      booking.provider,
      booking.paidAt?.toISOString(),
      booking.createdAt.toISOString(),
      booking.notes,
    ]
      .map(csvCell)
      .join(","),
  );

  const csv = `\uFEFF${[header.join(","), ...lines].join("\r\n")}\r\n`;
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="reservations-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
