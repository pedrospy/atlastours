import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { ExcursionDetailPage } from "@/components/excursion/ExcursionDetailPage";
import {
  getAllExcursionSlugs,
  getExcursionBySlug,
  getExcursionDetail,
} from "@/lib/excursions";
import type { ExcursionId } from "@/lib/excursions/types";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllExcursionSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const excursion = getExcursionBySlug(slug);
  if (!excursion) return {};

  const detail = getExcursionDetail(locale, excursion.id as ExcursionId);
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      images: [{ url: excursion.image }],
    },
  };
}

export default async function ExcursionPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const excursion = getExcursionBySlug(slug);
  if (!excursion) notFound();

  const dict = getDictionary(locale as Locale);
  const card = dict.excursions.items[excursion.id];
  const detail = getExcursionDetail(locale as Locale, excursion.id as ExcursionId);

  return (
    <ExcursionDetailPage
      excursion={excursion}
      detail={detail}
      cardTitle={card.title}
      badge={card.badge}
    />
  );
}
