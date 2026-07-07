import type { ExperienceDetailContent } from "@/lib/experiences/types";

export type {
  ExperienceDetailContent,
  ExperienceItineraryDay,
  ExperienceGroupPrice,
  ExperienceFaq,
  ExperienceDetailsByLocale,
} from "@/lib/experiences/types";

export type ExcursionId =
  | "ourika"
  | "agafay"
  | "imlil"
  | "trois-vallees"
  | "ouzoud"
  | "essaouira"
  | "ait-benhaddou"
  | "casablanca"
  | "agadir-taghazout";

export type ExcursionDetailContent = ExperienceDetailContent;

export type ExcursionDetailsByLocale = import("@/lib/experiences/types").ExperienceDetailsByLocale<ExcursionId>;
