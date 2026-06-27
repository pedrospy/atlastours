import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { CookieBanner } from "@/components/CookieBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HtmlLang } from "@/components/HtmlLang";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const ogLocales: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_GB",
  es: "es_ES",
  de: "de_DE",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      type: "website",
      locale: ogLocales[locale],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);

  return (
    <LocaleProvider locale={locale as Locale} dict={dict}>
      <HtmlLang locale={locale} />
      {children}
      <CookieBanner />
      <WhatsAppButton />
    </LocaleProvider>
  );
}
