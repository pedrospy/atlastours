import type { ExperienceDetailContent } from "@/lib/experiences/types";

export type {
  ExperienceDetailContent,
  ExperienceItineraryDay,
  ExperienceGroupPrice,
  ExperienceFaq,
  ExperienceDetailsByLocale,
} from "@/lib/experiences/types";

export type ExcursionId = "ouzoud" | "essaouira" | "ait-benhaddou" | "ourika";

export type ExcursionDetailContent = ExperienceDetailContent;

export type ExcursionDetailsByLocale = import("@/lib/experiences/types").ExperienceDetailsByLocale<ExcursionId>;
