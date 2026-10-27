import { activitiesCatalog } from "@/lib/catalog";

export const addonIds = [
  "airportTransfer",
  "camel",
  "quad",
  "sunset",
  "balloon",
  "chef",
  "spa",
  "privateGuide",
  "photographer",
] as const;

export type AddonId = (typeof addonIds)[number];

export type AddonDefinition = {
  id: AddonId;
  /** Price in EUR. */
  price: number;
  per: "person" | "group";
};

const activityPrice = (id: (typeof activitiesCatalog)[number]["id"]) =>
  activitiesCatalog.find((activity) => activity.id === id)?.price ?? 0;

export const addonCatalog: Record<AddonId, AddonDefinition> = {
  airportTransfer: { id: "airportTransfer", price: 35, per: "group" },
  camel: { id: "camel", price: activityPrice("camel"), per: "person" },
  quad: { id: "quad", price: activityPrice("quad"), per: "person" },
  sunset: { id: "sunset", price: activityPrice("sunset"), per: "person" },
  balloon: { id: "balloon", price: activityPrice("balloon"), per: "person" },
  chef: { id: "chef", price: activityPrice("chef"), per: "person" },
  spa: { id: "spa", price: activityPrice("spa"), per: "person" },
  privateGuide: { id: "privateGuide", price: 80, per: "group" },
  photographer: { id: "photographer", price: 120, per: "group" },
};

type ExperienceTraits = { category: string; departure?: string };

const categoryAddons: Record<string, AddonId[]> = {
  desert: ["camel", "quad", "sunset"],
  adventure: ["quad", "sunset"],
  culture: ["chef", "spa"],
  nature: ["chef"],
  coast: ["spa"],
};

export function parseStoredAddons(value: unknown): AddonDefinition[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((entry): AddonDefinition[] => {
    if (!entry || typeof entry !== "object") return [];
    const { id, price, per } = entry as Record<string, unknown>;
    if (typeof id !== "string" || !(addonIds as readonly string[]).includes(id)) return [];
    const addonId = id as AddonId;
    return [{
      id: addonId,
      price: typeof price === "number" ? price : addonCatalog[addonId].price,
      per: per === "group" ? "group" : "person",
    }];
  });
}

export function getAddonsForExperience({ category, departure }: ExperienceTraits): AddonDefinition[] {
  const ids = new Set<AddonId>(["airportTransfer", ...(categoryAddons[category] ?? [])]);
  if (departure === "marrakech") ids.add("balloon");
  ids.add("privateGuide");
  ids.add("photographer");
  return addonIds.filter((id) => ids.has(id)).map((id) => addonCatalog[id]);
}
