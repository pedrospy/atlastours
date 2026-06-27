import type { Locale } from "@/lib/i18n/config";
import { excursionsCatalog } from "@/lib/catalog";
import { excursionDetails } from "./details";
import type { ExcursionDetailContent, ExcursionId } from "./types";

export type { ExcursionId, ExcursionDetailContent } from "./types";

export const excursionSlugs = Object.fromEntries(
  excursionsCatalog.map((e) => [e.id, e.slug])
) as Record<ExcursionId, string>;

export const slugToExcursionId = Object.fromEntries(
  excursionsCatalog.map((e) => [e.slug, e.id])
) as Record<string, ExcursionId>;

export function getExcursionBySlug(slug: string) {
  const id = slugToExcursionId[slug];
  if (!id) return null;
  return excursionsCatalog.find((e) => e.id === id) ?? null;
}

export function getExcursionDetail(
  locale: Locale,
  id: ExcursionId
): ExcursionDetailContent {
  return excursionDetails[locale][id];
}

export function getAllExcursionSlugs() {
  return excursionsCatalog.map((e) => e.slug);
}

export function getExcursionHref(locale: Locale, id: ExcursionId) {
  return `/${locale}/excursions/${excursionSlugs[id]}`;
}
