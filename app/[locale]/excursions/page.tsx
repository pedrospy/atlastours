import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExcursionsSection } from "@/components/ExcursionsSection";
import { locales, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);
  return {
    title: `${dict.excursions.title} | Arganis Nomad`,
    description: dict.excursions.description,
    openGraph: {
      title: dict.excursions.title,
      description: dict.excursions.description,
    },
  };
}

export default async function ExcursionsListingPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ExcursionsSection variant="page" />
      <Footer />
    </main>
  );
}
