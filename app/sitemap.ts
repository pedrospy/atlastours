import type { MetadataRoute } from "next";
import { getAllCircuitSlugs } from "@/lib/circuits";
import { getAllDestinationSlugs } from "@/lib/destinations";
import { getAllExcursionSlugs } from "@/lib/excursions";
import { locales } from "@/lib/i18n/config";
import { getSiteUrl } from "@/lib/payments/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const paths = [
    { path: "", priority: 1 },
    { path: "/circuits", priority: 0.9 },
    { path: "/excursions", priority: 0.9 },
    ...getAllCircuitSlugs().map((slug) => ({ path: `/circuits/${slug}`, priority: 0.8 })),
    ...getAllExcursionSlugs().map((slug) => ({ path: `/excursions/${slug}`, priority: 0.8 })),
    ...getAllDestinationSlugs().map((slug) => ({ path: `/destinations/${slug}`, priority: 0.6 })),
  ];

  return paths.map(({ path, priority }) => ({
    url: `${siteUrl}/fr${path}`,
    changeFrequency: "weekly",
    priority,
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`])),
    },
  }));
}
