"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  MapPin,
  Star,
} from "lucide-react";
import { excursionsCatalog, HOME_PREVIEW_LIMIT } from "@/lib/catalog";
import { formatPrice, useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";
import { FilterRange, FilterSelect } from "@/components/shared/FilterSelect";
import { TourCardImage } from "@/components/shared/TourCardImage";

type Filters = {
  category: string;
  destination: string;
  difficulty: string;
  maxBudget: number;
};

const BUDGET_MAX = 350;

const defaultFilters: Filters = {
  category: "all",
  destination: "all",
  difficulty: "all",
  maxBudget: BUDGET_MAX,
};

type Props = {
  variant?: "embed" | "page";
};

export function ExcursionsSection({ variant = "embed" }: Props) {
  const dict = useDictionary();
  const { locale } = useLocale();
  const t = dict.excursions;

  const [filters, setFilters] = useState<Filters>(defaultFilters);

  useEffect(() => {
    if (variant !== "page" || typeof window === "undefined") return;
    if (window.location.hash === "#excursion-filters") {
      document.getElementById("excursion-filters")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [variant]);

  const displayed =
    variant === "embed"
      ? excursionsCatalog.slice(0, HOME_PREVIEW_LIMIT)
      : excursionsCatalog.filter((excursion) => {
          if (filters.category !== "all" && excursion.category !== filters.category) {
            return false;
          }
          if (
            filters.destination !== "all" &&
            excursion.destination !== filters.destination
          ) {
            return false;
          }
          if (filters.difficulty !== "all" && excursion.difficulty !== filters.difficulty) {
            return false;
          }
          if (excursion.price > filters.maxBudget) return false;
          return true;
        });

  const resultsLabel = t.resultsCount.replace("{count}", String(displayed.length));

  const filterPanel = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-midnight">{t.filters.title}</h3>
        <button
          type="button"
          onClick={() => setFilters(defaultFilters)}
          className="text-xs font-medium text-burgundy hover:text-terracotta"
        >
          {t.filters.reset}
        </button>
      </div>

      <FilterSelect
        label={t.filters.category}
        value={filters.category}
        onChange={(v) => setFilters((f) => ({ ...f, category: v }))}
        options={[
          { value: "all", label: t.filters.all },
          ...Object.entries(t.categories).map(([value, label]) => ({ value, label })),
        ]}
      />

      <FilterSelect
        label={t.filters.destination}
        value={filters.destination}
        onChange={(v) => setFilters((f) => ({ ...f, destination: v }))}
        options={[
          { value: "all", label: t.filters.all },
          ...Object.entries(t.destinations).map(([value, label]) => ({ value, label })),
        ]}
      />

      <FilterSelect
        label={t.filters.difficulty}
        value={filters.difficulty}
        onChange={(v) => setFilters((f) => ({ ...f, difficulty: v }))}
        options={[
          { value: "all", label: t.filters.all },
          ...Object.entries(t.difficulties).map(([value, label]) => ({ value, label })),
        ]}
      />

      <FilterRange
        label={t.filters.budget}
        value={filters.maxBudget}
        min={50}
        max={BUDGET_MAX}
        step={10}
        formatValue={(v) => formatPrice(v, locale)}
        onChange={(maxBudget) => setFilters((f) => ({ ...f, maxBudget }))}
      />
    </div>
  );

  return (
    <section
      id="excursions"
      className={`section-padding bg-white ${variant === "page" ? "pt-24" : ""}`}
    >
      <div className="container-wide">
        <div className="section-block">
          <div className="section-intro">
            <SectionArabic phrase="discover" />
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h2 className="section-title">{t.title}</h2>
            <div className="ornament-divider !mx-0 !max-w-[180px]" />
            <p className="max-w-2xl text-midnight/85">{t.description}</p>
          </div>
        </div>

        <div className={variant === "page" ? "flex flex-col gap-8 md:flex-row md:gap-10" : ""}>
          {variant === "page" ? (
            <aside id="excursion-filters" className="w-full shrink-0 scroll-mt-28 md:w-64">
              <div className="border border-sand-200 bg-sand-50/80 p-5 shadow-sm md:sticky md:top-24">
                {filterPanel}
              </div>
            </aside>
          ) : null}

          <div className="min-w-0 flex-1">
            {variant === "page" ? (
              <p className="mb-5 text-sm font-medium text-midnight/70">{resultsLabel}</p>
            ) : null}

            <div
              className={`grid min-w-0 gap-5 ${
                variant === "embed"
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : "sm:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              <AnimatePresence mode="popLayout">
                {displayed.map((excursion, i) => {
                  const content = t.items[excursion.id];
                  const badgeClass =
                    "badgeClass" in excursion && excursion.badgeClass
                      ? excursion.badgeClass
                      : "bg-oasis";

                  return (
                    <motion.article
                      key={excursion.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ delay: i * 0.04 }}
                      className="card-traditional flex min-w-0 flex-col"
                    >
                      <Link
                        href={`/${locale}/excursions/${excursion.slug}`}
                        className="flex min-h-0 flex-1 flex-col overflow-hidden"
                      >
                        <TourCardImage image={excursion.image} alt={content.title}>
                          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                            <span
                              className={`${badgeClass} px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white`}
                            >
                              {content.badge}
                            </span>
                            <span className="flex items-center gap-1 bg-burgundy/90 px-2 py-0.5 text-[11px] font-medium text-white">
                              <Calendar className="h-3 w-3 shrink-0" />
                              {content.duration}
                            </span>
                          </div>
                        </TourCardImage>

                        <div className="flex flex-1 flex-col p-4 sm:p-5">
                          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-midnight/65">
                            <span className="inline-flex items-center gap-1">
                              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                              <span className="font-semibold text-midnight">
                                {excursion.rating}
                              </span>
                              <span>({excursion.reviews})</span>
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 shrink-0" />
                              {t.destinations[excursion.destination]}
                            </span>
                          </div>

                          <h3 className="font-display text-base font-semibold leading-snug text-midnight sm:text-lg">
                            {content.title}
                          </h3>
                          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-midnight/75">
                            {content.description}
                          </p>

                          <div className="mt-4 flex items-end justify-between gap-3 border-t border-sand-200 pt-4">
                            <div>
                              <p className="text-[11px] uppercase tracking-wider text-midnight/50">
                                {dict.common.from}
                              </p>
                              <p className="font-display text-xl font-bold text-midnight">
                                {formatPrice(excursion.price, locale)}
                                {"flatPrice" in excursion && excursion.flatPrice ? (
                                  <span className="text-xs font-normal text-midnight/60">
                                    {dict.common.perTrip}
                                  </span>
                                ) : (
                                  <span className="text-xs font-normal text-midnight/60">
                                    {dict.common.perPerson}
                                  </span>
                                )}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-burgundy">
                              {t.viewDetails}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>

            {variant === "page" && displayed.length === 0 ? (
              <p className="py-12 text-center text-midnight/60">
                {t.filters.reset} — {resultsLabel}
              </p>
            ) : null}
          </div>
        </div>

        {variant === "embed" ? (
          <div className="mt-10 text-center">
            <Link
              href={`/${locale}/excursions#excursion-filters`}
              className="group inline-flex items-center gap-2 border border-burgundy/20 bg-white px-8 py-3 font-semibold text-burgundy shadow-sm transition hover:border-burgundy hover:bg-burgundy hover:text-white"
            >
              {t.viewAll}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        ) : null}

        {variant === "page" ? (
          <>
            {/* Footer intro */}
            <p className="mx-auto mt-16 max-w-4xl text-center text-sm leading-relaxed text-midnight/75 sm:text-base">
              {t.footerIntro}
            </p>

            {/* Why us */}
            <div className="mt-16 border-t border-sand-200 pt-16">
              <h3 className="text-center font-display text-2xl font-semibold text-midnight sm:text-3xl">
                {t.whyTitle}
              </h3>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {t.why.map((item) => (
                  <div
                    key={item.title}
                    className="border border-sand-200 bg-sand-50/50 p-5"
                  >
                    <h4 className="font-display text-base font-semibold text-midnight">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-midnight/75">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16 border-t border-sand-200 pt-16">
              <h3 className="text-center font-display text-2xl font-semibold text-midnight">
                {dict.excursionDetail.faq}
              </h3>
              <div className="mx-auto mt-8 max-w-3xl divide-y divide-sand-200 border border-sand-200 bg-white">
                {t.faqs.map((faq) => (
                  <details key={faq.question} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-medium text-midnight marker:content-none hover:bg-sand-50/80">
                      {faq.question}
                      <ChevronDown className="h-4 w-4 shrink-0 text-midnight/50 transition group-open:rotate-180" />
                    </summary>
                    <p className="border-t border-sand-100 px-5 py-4 text-sm leading-relaxed text-midnight/75">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
