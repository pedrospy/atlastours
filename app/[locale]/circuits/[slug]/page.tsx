import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { CircuitDetailPage } from "@/components/circuit/CircuitDetailPage";
import {
  getAllCircuitSlugs,
  getCircuitBySlug,
  getCircuitDetail,
} from "@/lib/circuits";
import type { CircuitId } from "@/lib/circuits/types";
import { getAddonsForExperience } from "@/lib/booking/addons";
import { isOnlinePaymentEnabled } from "@/lib/payments/config";
import { ExperienceJsonLd } from "@/components/seo/ExperienceJsonLd";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllCircuitSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const circuit = getCircuitBySlug(slug);
  if (!circuit) return {};

  const detail = getCircuitDetail(locale, circuit.id as CircuitId);
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      images: [{ url: circuit.image }],
    },
  };
}

export default async function CircuitPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const circuit = getCircuitBySlug(slug);
  if (!circuit) notFound();

  const dict = getDictionary(locale as Locale);
  const card = dict.circuits.items[circuit.id];
  const detail = getCircuitDetail(locale as Locale, circuit.id as CircuitId);

  return (
    <>
      <ExperienceJsonLd
        kind="circuit"
        slug={circuit.slug}
        locale={locale as Locale}
        title={card.title}
        description={detail.metaDescription}
        image={circuit.image}
        price={circuit.price}
        rating={circuit.rating}
        reviews={circuit.reviews}
      />
      <CircuitDetailPage
        circuit={circuit}
        detail={detail}
        cardTitle={card.title}
        badge={card.badge}
        booking={{
          kind: "circuit",
          slug: circuit.slug,
          addons: getAddonsForExperience(circuit),
          paymentsEnabled: isOnlinePaymentEnabled(),
        }}
      />
    </>
  );
}
