import type { ExperienceDetailContent } from "@/lib/experiences/types";

export type {
  ExperienceDetailContent,
  ExperienceItineraryDay,
  ExperienceGroupPrice,
  ExperienceFaq,
  ExperienceDetailsByLocale,
} from "@/lib/experiences/types";

export type DestinationId =
  | "marrakech"
  | "merzouga"
  | "nord-maroc"
  | "fes"
  | "essaouira"
  | "megdaz"
  | "agadir"
  | "oualili";

export type DestinationDetailContent = ExperienceDetailContent;

export type DestinationDetailsByLocale =
  import("@/lib/experiences/types").ExperienceDetailsByLocale<DestinationId>;
