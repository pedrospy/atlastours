import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, CreditCard, MessageCircle, Plane, XCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TransfersSection } from "@/components/TransfersSection";
import { prisma } from "@/lib/db";
import { parseStoredAddons } from "@/lib/booking/addons";
import { getExperienceUrlForBooking } from "@/lib/booking/service";
import { getWhatsAppUrl } from "@/lib/catalog";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { fill, formatDate, formatMoney } from "@/lib/i18n/format";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isOnlinePaymentEnabled } from "@/lib/payments/config";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; reference: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: getDictionary(locale).booking.confirmation.metaTitle,
    robots: { index: false, follow: false },
  };
}

export default async function BookingPage({ params }: Props) {
  const { locale, reference } = await params;
  if (!isLocale(locale)) notFound();

  const booking = await prisma.booking.findUnique({ where: { reference } });
  if (!booking) notFound();

  const t = getDictionary(locale as Locale).booking;
  const c = t.confirmation;
  const money = (cents: number) => formatMoney(cents / 100, locale as Locale, booking.currency);
  const addons = parseStoredAddons(booking.addons);
  const hasAirportTransfer = addons.some((addon) => addon.id === "airportTransfer");
  const canPay = booking.status === "pending" && isOnlinePaymentEnabled();
  const whatsappUrl = getWhatsAppUrl(fill(c.whatsappMessage, { reference: booking.reference }));

  const title =
    booking.status === "paid" ? c.titlePaid : booking.status === "cancelled" ? c.titleCancelled : c.titlePending;
  const intro =
    booking.status === "paid" ? c.introPaid : booking.status === "cancelled" ? c.introCancelled : c.introPending;
  const StatusIcon = booking.status === "paid" ? CheckCircle2 : booking.status === "cancelled" ? XCircle : Clock;

  const rows: [string, string][] = [
    [c.reference, booking.reference],
    [c.date, formatDate(booking.travelDate, locale as Locale)],
    [c.travelers, String(booking.travelers)],
    ...(addons.length ? [[c.options, addons.map((addon) => t.addons[addon.id]).join(", ")] as [string, string]] : []),
    ...(booking.promoCode ? [[c.discount, booking.promoCode] as [string, string]] : []),
    [c.total, money(booking.totalCents)],
    [booking.status === "paid" ? c.depositPaid : c.depositDue, money(booking.depositCents)],
    [c.balanceDue, money(booking.totalCents - booking.depositCents)],
  ];

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="section-padding bg-sand-50 pt-32">
        <div className="container-wide page-gutter mx-auto max-w-2xl">
          <div className="border border-gold/30 bg-white p-8 shadow-card">
            <StatusIcon
              className={`h-12 w-12 ${booking.status === "paid" ? "text-oasis" : booking.status === "cancelled" ? "text-terracotta" : "text-gold"}`}
            />
            <h1 className="mt-4 font-display text-3xl font-bold text-midnight sm:text-4xl">{title}</h1>
            <p className="mt-3 text-midnight/70">{fill(intro, { name: booking.customerName })}</p>

            <h2 className="mt-8 font-display text-xl font-bold text-midnight">
              <Link href={getExperienceUrlForBooking(booking)} className="hover:text-burgundy">
                {booking.title}
              </Link>
            </h2>
            <dl className="mt-4 divide-y divide-sand-200 border-y border-sand-200 text-sm">
              {rows.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 py-2.5">
                  <dt className="text-midnight/55">{label}</dt>
                  <dd className="text-right font-medium text-midnight">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {canPay && (
                <a href={`/api/bookings/${booking.reference}/checkout`} className="btn-primary flex-1">
                  <CreditCard className="h-5 w-5" />
                  {c.payNow}
                </a>
              )}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1">
                <MessageCircle className="h-5 w-5" />
                {c.contactWhatsapp}
              </a>
            </div>
          </div>

          {!hasAirportTransfer && booking.status !== "cancelled" && (
            <div className="mt-8 border border-gold/25 bg-burgundy-dark p-6 text-white">
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-gold-light">
                <Plane className="h-6 w-6" />
                {c.upsellTitle}
              </h2>
              <p className="mt-2 text-sm text-sand-200/80">{c.upsellText}</p>
            </div>
          )}

          <p className="mt-8 text-center">
            <Link href={`/${locale}`} className="text-sm text-midnight/60 underline hover:text-burgundy">
              {c.backHome}
            </Link>
          </p>
        </div>
      </section>
      {!hasAirportTransfer && booking.status !== "cancelled" && <TransfersSection />}
      <Footer />
    </main>
  );
}
