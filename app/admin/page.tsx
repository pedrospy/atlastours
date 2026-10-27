import type { Metadata } from "next";
import { Download, MessageCircle } from "lucide-react";
import { parseStoredAddons } from "@/lib/booking/addons";
import { bookingStatuses, filtersToSearchParams, listBookings, parseBookingFilters } from "@/lib/booking/admin";
import { prisma } from "@/lib/db";
import { formatDate, formatMoney } from "@/lib/i18n/format";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { updateBookingStatus } from "./actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin – Réservations",
  robots: { index: false, follow: false },
};

const statusLabels = { pending: "En attente", paid: "Acompte payé", cancelled: "Annulée" } as const;
const statusClasses = {
  pending: "bg-gold/15 text-gold-dark",
  paid: "bg-oasis/15 text-oasis",
  cancelled: "bg-terracotta/15 text-terracotta",
} as const;

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

const eur = (cents: number) => formatMoney(cents / 100, "fr");

export default async function AdminPage({ searchParams }: Props) {
  const filters = parseBookingFilters(await searchParams);
  const bookings = await listBookings(filters);
  const addonLabels = getDictionary("fr").booking.addons;

  const monthStart = new Date();
  monthStart.setUTCDate(1);
  monthStart.setUTCHours(0, 0, 0, 0);
  const [paidThisMonth, pendingCount] = await Promise.all([
    prisma.booking.aggregate({
      where: { status: "paid", paidAt: { gte: monthStart } },
      _count: true,
      _sum: { totalCents: true, depositCents: true },
    }),
    prisma.booking.count({ where: { status: "pending" } }),
  ]);

  const stats = [
    { label: "Réservations payées ce mois", value: String(paidThisMonth._count) },
    { label: "Chiffre d'affaires ce mois", value: eur(paidThisMonth._sum.totalCents ?? 0) },
    { label: "Acomptes encaissés ce mois", value: eur(paidThisMonth._sum.depositCents ?? 0) },
    { label: "Demandes en attente", value: String(pendingCount) },
  ];

  const csvHref = `/api/admin/bookings?${filtersToSearchParams(filters).toString()}`;
  const inputClass = "border border-sand-200 bg-white px-3 py-2 text-sm";

  return (
    <main className="min-h-screen bg-sand-50 px-4 py-10 text-midnight sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-3xl font-bold">Réservations</h1>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border border-gold/30 bg-white p-4 shadow-card">
              <p className="text-xs uppercase tracking-wider text-midnight/50">{stat.label}</p>
              <p className="mt-1 font-display text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <form className="mt-8 flex flex-wrap items-end gap-3" method="get">
          <label className="text-xs text-midnight/60">
            Statut
            <select name="status" defaultValue={filters.status ?? ""} className={`${inputClass} mt-1 block`}>
              <option value="">Tous</option>
              {bookingStatuses.map((status) => (
                <option key={status} value={status}>{statusLabels[status]}</option>
              ))}
            </select>
          </label>
          <label className="text-xs text-midnight/60">
            Départ du
            <input type="date" name="from" defaultValue={filters.from} className={`${inputClass} mt-1 block`} />
          </label>
          <label className="text-xs text-midnight/60">
            au
            <input type="date" name="to" defaultValue={filters.to} className={`${inputClass} mt-1 block`} />
          </label>
          <button type="submit" className="btn-primary !py-2">Filtrer</button>
          <a href="/admin" className="btn-outline !py-2">Réinitialiser</a>
          <a href={csvHref} className="btn-outline !py-2 ml-auto">
            <Download className="h-4 w-4" />
            Export CSV
          </a>
        </form>

        <div className="mt-6 overflow-x-auto border border-sand-200 bg-white">
          <table className="w-full min-w-[960px] text-left text-sm">
            <thead className="bg-sand-100 text-xs uppercase tracking-wider text-midnight/60">
              <tr>
                <th className="px-3 py-3">Départ</th>
                <th className="px-3 py-3">Référence</th>
                <th className="px-3 py-3">Expérience</th>
                <th className="px-3 py-3">Client</th>
                <th className="px-3 py-3 text-right">Total</th>
                <th className="px-3 py-3 text-right">Acompte</th>
                <th className="px-3 py-3">Statut</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-200">
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-3 py-10 text-center text-midnight/50">Aucune réservation.</td>
                </tr>
              )}
              {bookings.map((booking) => {
                const addons = parseStoredAddons(booking.addons);
                const whatsapp = `https://wa.me/${booking.phone.replace(/\D/g, "").replace(/^00/, "")}`;
                return (
                  <tr key={booking.id} className="align-top">
                    <td className="whitespace-nowrap px-3 py-3">{formatDate(booking.travelDate, "fr")}</td>
                    <td className="px-3 py-3 font-mono text-xs">
                      <a href={`/${booking.locale}/booking/${booking.reference}`} className="underline hover:text-burgundy">
                        {booking.reference}
                      </a>
                      <div className="mt-1 text-midnight/45">{booking.locale.toUpperCase()}</div>
                    </td>
                    <td className="px-3 py-3">
                      <div className="font-medium">{booking.title}</div>
                      <div className="text-xs text-midnight/55">
                        {booking.travelers} voyageur{booking.travelers > 1 ? "s" : ""}
                        {addons.length > 0 && ` · ${addons.map((addon) => addonLabels[addon.id]).join(", ")}`}
                      </div>
                      {booking.notes && <div className="mt-1 text-xs italic text-midnight/55">« {booking.notes} »</div>}
                    </td>
                    <td className="px-3 py-3">
                      <div className="font-medium">{booking.customerName}</div>
                      <a href={`mailto:${booking.email}`} className="block text-xs text-midnight/60 hover:underline">{booking.email}</a>
                      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-oasis hover:underline">
                        <MessageCircle className="h-3 w-3" />
                        {booking.phone}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-right">
                      {eur(booking.totalCents)}
                      {booking.promoCode && <div className="text-xs text-midnight/45">{booking.promoCode}</div>}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-right">{eur(booking.depositCents)}</td>
                    <td className="px-3 py-3">
                      <span className={`inline-block px-2 py-0.5 text-xs font-semibold ${statusClasses[booking.status]}`}>
                        {statusLabels[booking.status]}
                      </span>
                      {booking.provider && <div className="mt-1 text-xs text-midnight/45">{booking.provider}</div>}
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex flex-col gap-1">
                        {bookingStatuses
                          .filter((status) => status !== booking.status && !(booking.status === "paid" && status === "pending"))
                          .map((status) => (
                            <form key={status} action={updateBookingStatus}>
                              <input type="hidden" name="id" value={booking.id} />
                              <input type="hidden" name="status" value={status} />
                              <button type="submit" className="text-xs text-burgundy underline hover:text-burgundy-light">
                                {status === "paid" ? "Marquer payé" : status === "cancelled" ? "Annuler" : "Remettre en attente"}
                              </button>
                            </form>
                          ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
