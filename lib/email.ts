import { Resend } from "resend";
import type { Booking } from "@prisma/client";
import { siteConfig } from "@/lib/catalog";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { fill, formatDate, formatMoney } from "@/lib/i18n/format";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getSiteUrl } from "@/lib/payments/config";
import { parseStoredAddons } from "@/lib/booking/addons";

let client: Resend | null = null;

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  client ??= new Resend(key);
  return client;
}

const fromAddress = () => process.env.EMAIL_FROM ?? `${siteConfig.name} <${siteConfig.email}>`;
const adminAddress = () => process.env.ADMIN_EMAIL ?? siteConfig.email;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

type Message = { to: string; subject: string; html: string; text: string; replyTo?: string };

async function send(message: Message) {
  const resend = getResend();
  if (!resend) {
    console.info(`[email] RESEND_API_KEY missing, skipped "${message.subject}" to ${message.to}`);
    return;
  }
  const { error } = await resend.emails.send({ from: fromAddress(), ...message });
  if (error) console.error(`[email] failed to send "${message.subject}"`, error);
}

function bookingLocale(booking: Booking): Locale {
  return isLocale(booking.locale) ? booking.locale : "fr";
}

export function getBookingUrl(booking: Pick<Booking, "locale" | "reference">) {
  const locale = isLocale(booking.locale) ? booking.locale : "fr";
  return `${getSiteUrl()}/${locale}/booking/${booking.reference}`;
}

function summaryRows(booking: Booking, locale: Locale) {
  const t = getDictionary(locale).booking;
  const c = t.confirmation;
  const money = (cents: number) => formatMoney(cents / 100, locale, booking.currency);
  const addons = parseStoredAddons(booking.addons).map((addon) => t.addons[addon.id]);
  const isPaid = booking.status === "paid";

  return [
    [c.reference, booking.reference],
    [c.experience, booking.title],
    [c.date, formatDate(booking.travelDate, locale)],
    [c.travelers, String(booking.travelers)],
    ...(addons.length ? [[c.options, addons.join(", ")]] : []),
    [c.total, money(booking.totalCents)],
    [isPaid ? c.depositPaid : c.depositDue, money(booking.depositCents)],
    [c.balanceDue, money(booking.totalCents - booking.depositCents)],
  ] as [string, string][];
}

function renderTable(rows: [string, string][]) {
  return `<table cellpadding="6" style="border-collapse:collapse;font-size:14px">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="color:#6b5a4e">${escapeHtml(label)}</td><td style="font-weight:600">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;
}

function whatsappLinkFor(phone: string, message: string) {
  const digits = phone.replace(/\D/g, "").replace(/^00/, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export async function sendBookingEmails(booking: Booking) {
  const locale = bookingLocale(booking);
  const t = getDictionary(locale).booking.emails;
  const isPaid = booking.status === "paid";
  const rows = summaryRows(booking, locale);
  const url = getBookingUrl(booking);
  const values = { name: booking.customerName, reference: booking.reference };
  const body = isPaid ? t.bodyPaid : t.bodyPending;

  const customer: Message = {
    to: booking.email,
    replyTo: adminAddress(),
    subject: fill(isPaid ? t.subjectPaid : t.subjectPending, values),
    text: [
      fill(t.greeting, values),
      "",
      body,
      "",
      ...rows.map(([label, value]) => `${label}: ${value}`),
      "",
      `${t.viewBooking}: ${url}`,
      "",
      t.signoff,
    ].join("\n"),
    html: `<div style="font-family:Georgia,serif;color:#2b1d14;max-width:560px">
<p>${escapeHtml(fill(t.greeting, values))}</p>
<p>${escapeHtml(body)}</p>
${renderTable(rows)}
<p><a href="${url}" style="display:inline-block;background:#7a1f2b;color:#fff;padding:10px 18px;text-decoration:none">${escapeHtml(t.viewBooking)}</a></p>
<p style="white-space:pre-line">${escapeHtml(t.signoff)}</p>
</div>`,
  };

  const adminRows = summaryRows(booking, "fr");
  const whatsapp = whatsappLinkFor(
    booking.phone,
    `Bonjour ${booking.customerName}, ici ${siteConfig.name} au sujet de votre réservation ${booking.reference}.`,
  );
  const status = isPaid ? "ACOMPTE PAYÉ" : "NOUVELLE DEMANDE";
  const admin: Message = {
    to: adminAddress(),
    replyTo: booking.email,
    subject: `[${status}] ${booking.reference} – ${booking.title} – ${booking.customerName}`,
    text: [
      ...adminRows.map(([label, value]) => `${label}: ${value}`),
      `Client: ${booking.customerName} <${booking.email}> ${booking.phone}`,
      booking.promoCode ? `Code promo: ${booking.promoCode}` : "",
      booking.notes ? `Message: ${booking.notes}` : "",
      `WhatsApp: ${whatsapp}`,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `<div style="font-family:Arial,sans-serif;color:#222">
<h2>${escapeHtml(status)}</h2>
${renderTable([
  ...adminRows,
  ["Client", booking.customerName],
  ["Email", booking.email],
  ["Téléphone", booking.phone],
  ["Langue", booking.locale],
  ...(booking.promoCode ? [["Code promo", booking.promoCode] as [string, string]] : []),
  ...(booking.notes ? [["Message", booking.notes] as [string, string]] : []),
])}
<p><a href="${whatsapp}">Contacter le client sur WhatsApp</a> · <a href="${getSiteUrl()}/admin">Ouvrir l'admin</a></p>
</div>`,
  };

  await Promise.all([send(customer), send(admin)]);
}

export async function sendNewsletterWelcome(email: string, locale: Locale, code: string, percent: number) {
  const t = getDictionary(locale).booking.emails;
  const values = { code, percent };
  const body = fill(t.newsletterBody, values);
  await send({
    to: email,
    subject: fill(t.newsletterSubject, values),
    text: `${body}\n\n${getSiteUrl()}/${locale}\n\n${t.signoff}`,
    html: `<div style="font-family:Georgia,serif;color:#2b1d14;max-width:560px">
<p>${escapeHtml(body)}</p>
<p style="font-size:24px;font-weight:700;letter-spacing:2px">${escapeHtml(code)}</p>
<p><a href="${getSiteUrl()}/${locale}">${escapeHtml(siteConfig.name)}</a></p>
<p style="white-space:pre-line">${escapeHtml(t.signoff)}</p>
</div>`,
  });
}

export async function addToAudience(email: string) {
  const resend = getResend();
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!resend || !audienceId) return;
  const { error } = await resend.contacts.create({ email, audienceId, unsubscribed: false });
  if (error) console.error("[email] failed to add contact to audience", error);
}
