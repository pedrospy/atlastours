import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { DestinationDetailPage } from "@/components/destination/DestinationDetailPage";
import {
  getAllDestinationSlugs,
  getDestinationBySlug,
  getDestinationDetail,
} from "@/lib/destinations";
import type { DestinationId } from "@/lib/destinations/types";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllDestinationSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const destination = getDestinationBySlug(slug);
  if (!destination) return {};

  const detail = getDestinationDetail(locale, destination.id as DestinationId);
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      images: [{ url: destination.image }],
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const dict = getDictionary(locale as Locale);
  const card = dict.destinations.items[destination.id];
  const detail = getDestinationDetail(
    locale as Locale,
    destination.id as DestinationId
  );

  return (
    <DestinationDetailPage
      destination={destination}
      detail={detail}
      cardTitle={dict.destinations.names[destination.id]}
      badge={card.badge}
    />
  );
}
