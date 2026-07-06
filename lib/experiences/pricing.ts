import type { ExperienceDetailContent } from "./types";

/** Extract the first numeric amount from a localized price label (e.g. "1 060 €/pers."). */
export function parsePerPersonPrice(priceLabel: string): number | null {
  const match = priceLabel.match(/(\d[\d\s,]*\d|\d+)/);
  if (!match) return null;

  const value = Number.parseInt(match[0].replace(/[\s,]/g, ""), 10);
  return Number.isFinite(value) ? value : null;
}

/** Total for 2 travelers from the first "2 …" group tier, when available. */
export function getTwoTravelerTotal(detail: ExperienceDetailContent): number | null {
  const twoTravelerTier = detail.groupPricing.find((tier) =>
    /^2(\s|–|-)/.test(tier.travelers.trim()),
  );
  if (!twoTravelerTier) return null;

  const perPerson = parsePerPersonPrice(twoTravelerTier.price);
  if (perPerson == null) return null;

  return perPerson * 2;
}
