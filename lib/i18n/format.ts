import type { Locale } from "./config";

const numberFormats: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
  es: "es-ES",
  de: "de-DE",
};

/** Server-safe money formatter (`formatPrice` in locale-context is a client module). */
export function formatMoney(amount: number, locale: Locale, currency = "EUR") {
  return new Intl.NumberFormat(numberFormats[locale], {
    style: "currency",
    currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(numberFormats[locale], {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(date);
}

export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
