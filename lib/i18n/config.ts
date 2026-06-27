export const locales = ["fr", "en", "es", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  de: "Deutsch",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
