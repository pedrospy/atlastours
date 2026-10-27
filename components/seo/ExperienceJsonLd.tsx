import { siteConfig } from "@/lib/catalog";
import { getExperiencePath, type ExperienceKind } from "@/lib/booking/experiences";
import type { Locale } from "@/lib/i18n/config";
import { getSiteUrl } from "@/lib/payments/config";

type Props = {
  kind: ExperienceKind;
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
};

export function ExperienceJsonLd({ kind, slug, locale, title, description, image, price, rating, reviews }: Props) {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${getExperiencePath(kind, slug, locale)}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: title,
    description,
    url,
    image: image.startsWith("http") ? image : `${siteUrl}${image}`,
    inLanguage: locale,
    touristType: kind === "circuit" ? "Multi-day tour" : "Day trip",
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: reviews,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
