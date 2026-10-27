import { getCircuitBySlug, getCircuitDetail } from "@/lib/circuits";
import type { CircuitId } from "@/lib/circuits/types";
import { getExcursionBySlug, getExcursionDetail } from "@/lib/excursions";
import type { ExcursionId } from "@/lib/excursions/types";
import type { ExperienceGroupPrice } from "@/lib/experiences/types";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getAddonsForExperience, type AddonDefinition } from "./addons";

export type ExperienceKind = "circuit" | "excursion";

export type BookableExperience = {
  kind: ExperienceKind;
  id: string;
  slug: string;
  title: string;
  image: string;
  basePrice: number;
  flatPrice: boolean;
  tiers: readonly ExperienceGroupPrice[];
  addons: AddonDefinition[];
};

/**
 * Prices are always read from the French catalog so every locale is charged the same amount.
 */
export function getBookableExperience(
  kind: ExperienceKind,
  slug: string,
  locale: Locale,
): BookableExperience | null {
  if (kind === "excursion") {
    const item = getExcursionBySlug(slug);
    if (!item) return null;
    return {
      kind,
      id: item.id,
      slug: item.slug,
      title: getDictionary(locale).excursions.items[item.id]?.title ?? item.slug,
      image: item.image,
      basePrice: item.price,
      flatPrice: "flatPrice" in item ? Boolean(item.flatPrice) : false,
      tiers: getExcursionDetail("fr", item.id as ExcursionId).groupPricing,
      addons: getAddonsForExperience(item),
    };
  }

  const item = getCircuitBySlug(slug);
  if (!item) return null;
  return {
    kind,
    id: item.id,
    slug: item.slug,
    title: getDictionary(locale).circuits.items[item.id]?.title ?? item.slug,
    image: item.image,
    basePrice: item.price,
    flatPrice: false,
    tiers: getCircuitDetail("fr", item.id as CircuitId).groupPricing,
    addons: getAddonsForExperience(item),
  };
}

export function getExperiencePath(kind: ExperienceKind, slug: string, locale: Locale) {
  return `/${locale}/${kind === "circuit" ? "circuits" : "excursions"}/${slug}`;
}
