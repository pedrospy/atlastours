import type { Locale } from "@/lib/i18n/config";
import { circuitsCatalog } from "@/lib/catalog";
import { circuitDetails } from "./details";
import type { CircuitId } from "./types";

export type { CircuitId, CircuitDetailContent } from "./types";

export const slugToCircuitId = Object.fromEntries(
  circuitsCatalog.map((c) => [c.slug, c.id])
) as Record<string, CircuitId>;

export function getCircuitBySlug(slug: string) {
  const id = slugToCircuitId[slug];
  if (!id) return null;
  return circuitsCatalog.find((c) => c.id === id) ?? null;
}

export function getCircuitDetail(locale: Locale, id: CircuitId) {
  return circuitDetails[locale][id];
}

export function getAllCircuitSlugs() {
  return circuitsCatalog.map((c) => c.slug);
}
