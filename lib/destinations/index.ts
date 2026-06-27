import type { Locale } from "@/lib/i18n/config";
import { destinationsCatalog } from "@/lib/catalog";
import { destinationDetails } from "./details";
import type { DestinationDetailContent, DestinationId } from "./types";

export type { DestinationId, DestinationDetailContent } from "./types";

export const destinationSlugs = Object.fromEntries(
  destinationsCatalog.map((d) => [d.id, d.slug])
) as Record<DestinationId, string>;

export const slugToDestinationId = Object.fromEntries(
  destinationsCatalog.map((d) => [d.slug, d.id])
) as Record<string, DestinationId>;

export function getDestinationBySlug(slug: string) {
  const id = slugToDestinationId[slug];
  if (!id) return null;
  return destinationsCatalog.find((d) => d.id === id) ?? null;
}

export function getDestinationDetail(
  locale: Locale,
  id: DestinationId
): DestinationDetailContent {
  return destinationDetails[locale][id];
}

export function getAllDestinationSlugs() {
  return destinationsCatalog.map((d) => d.slug);
}
