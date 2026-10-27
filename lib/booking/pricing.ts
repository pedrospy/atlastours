import type { ExperienceGroupPrice } from "@/lib/experiences/types";
import { parsePerPersonPrice } from "@/lib/experiences/pricing";
import type { AddonDefinition } from "./addons";

export const DEPOSIT_PERCENT = 30;
export const PROMO_PERCENT = 5;
export const MAX_TRAVELERS = 17;

export type PricingInput = {
  basePrice: number;
  flatPrice: boolean;
  tiers: readonly ExperienceGroupPrice[];
  travelers: number;
  addons: readonly AddonDefinition[];
  promoApplied?: boolean;
};

export type Quote = {
  perPerson: number | null;
  baseTotal: number;
  addonsTotal: number;
  discount: number;
  total: number;
  deposit: number;
  balance: number;
};

function parseTierRange(label: string): { min: number; max: number } | null {
  const match = label.match(/(\d+)(?:\s*[–-]\s*(\d+))?/);
  if (!match) return null;
  const min = Number(match[1]);
  const max = match[2] ? Number(match[2]) : min;
  return { min, max };
}

export function getPerPersonPrice(
  basePrice: number,
  tiers: readonly ExperienceGroupPrice[],
  travelers: number,
): number {
  const parsed = tiers
    .map((tier) => ({ range: parseTierRange(tier.travelers), price: parsePerPersonPrice(tier.price) }))
    .filter((tier): tier is { range: { min: number; max: number }; price: number } =>
      tier.range != null && tier.price != null,
    );
  if (parsed.length === 0) return basePrice;

  const match = parsed.find(({ range }) => travelers >= range.min && travelers <= range.max);
  if (match) return match.price;
  if (travelers < parsed[0].range.min) return parsed[0].price;
  return parsed[parsed.length - 1].price;
}

const round2 = (value: number) => Math.round(value * 100) / 100;

/** All amounts are in EUR. Shared by the booking form (display) and the API (source of truth). */
export function computeQuote(input: PricingInput): Quote {
  const travelers = Math.min(Math.max(1, Math.floor(input.travelers)), MAX_TRAVELERS);
  const perPerson = input.flatPrice ? null : getPerPersonPrice(input.basePrice, input.tiers, travelers);
  const baseTotal = perPerson == null ? input.basePrice : perPerson * travelers;
  const addonsTotal = input.addons.reduce(
    (sum, addon) => sum + (addon.per === "person" ? addon.price * travelers : addon.price),
    0,
  );
  const subtotal = baseTotal + addonsTotal;
  const discount = input.promoApplied ? round2((subtotal * PROMO_PERCENT) / 100) : 0;
  const total = round2(subtotal - discount);
  const deposit = round2((total * DEPOSIT_PERCENT) / 100);
  return {
    perPerson,
    baseTotal,
    addonsTotal,
    discount,
    total,
    deposit,
    balance: round2(total - deposit),
  };
}

export const toCents = (amount: number) => Math.round(amount * 100);
