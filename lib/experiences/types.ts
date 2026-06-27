import type { Locale } from "@/lib/i18n/config";

export type ExperienceItineraryDay = {
  dayLabel: string;
  title: string;
  description: string;
  steps: string[];
};

export type ExperienceGroupPrice = {
  travelers: string;
  price: string;
};

export type ExperienceFaq = {
  question: string;
  answer: string;
};

export type ExperienceDetailContent = {
  metaTitle: string;
  metaDescription: string;
  subtitle: string;
  difficulty: string;
  duration: string;
  groupSize: string;
  departure: string;
  languages: string;
  about: string;
  highlights: string[];
  itinerary: ExperienceItineraryDay[];
  included: string[];
  notIncluded: string[];
  groupPricing: ExperienceGroupPrice[];
  faqs: ExperienceFaq[];
};

export type ExperienceDetailsByLocale<T extends string> = Record<
  Locale,
  Record<T, ExperienceDetailContent>
>;
