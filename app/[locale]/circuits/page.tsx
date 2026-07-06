import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CircuitsSection } from "@/components/CircuitsSection";
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
    title: `${dict.circuits.title} | Red Nomad`,
    description: dict.circuits.description,
    openGraph: {
      title: dict.circuits.title,
      description: dict.circuits.description,
    },
  };
}

export default async function CircuitsListingPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <CircuitsSection variant="page" />
      <Footer />
    </main>
  );
}
