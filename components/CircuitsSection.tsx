"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, MapPin, SlidersHorizontal, X } from "lucide-react";
import { circuitsCatalog } from "@/lib/catalog";
import { formatPrice, useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";
import { FilterRange, FilterSelect } from "@/components/shared/FilterSelect";
import { TourCardFooter } from "@/components/shared/TourCardFooter";
import { TourCardImage } from "@/components/shared/TourCardImage";

type Filters = {
  category: string;
  destination: string;
  departure: string;
  difficulty: string;
  maxDuration: number;
  maxBudget: number;
};

const DURATION_MAX = 8;
const BUDGET_MAX = 1200;

const defaultFilters: Filters = {
  category: "all",
  destination: "all",
  departure: "all",
  difficulty: "all",
  maxDuration: DURATION_MAX,
  maxBudget: BUDGET_MAX,
};

type Props = {
  variant?: "embed" | "page";
};

export function CircuitsSection({ variant = "embed" }: Props) {
  const dict = useDictionary();
  const { locale } = useLocale();
  const t = dict.circuits;

  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return circuitsCatalog.filter((circuit) => {
      if (filters.category !== "all" && circuit.category !== filters.category) {
        return false;
      }
      if (
        filters.destination !== "all" &&
        circuit.destination !== filters.destination
      ) {
        return false;
      }
      if (filters.departure !== "all" && circuit.departure !== filters.departure) {
        return false;
      }
      if (filters.difficulty !== "all" && circuit.difficulty !== filters.difficulty) {
        return false;
      }
      if (circuit.durationDays > filters.maxDuration) return false;
      if (circuit.price > filters.maxBudget) return false;
      return true;
    });
  }, [filters]);

  const resultsLabel = t.resultsCount.replace("{count}", String(filtered.length));

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
        label={t.filters.departure}
        value={filters.departure}
        onChange={(v) => setFilters((f) => ({ ...f, departure: v }))}
        options={[
          { value: "all", label: t.filters.all },
          ...Object.entries(t.departures).map(([value, label]) => ({ value, label })),
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
        label={t.filters.duration}
        value={filters.maxDuration}
        min={3}
        max={DURATION_MAX}
        step={1}
        formatValue={(v) => `${v} ${t.filters.days}`}
        onChange={(maxDuration) => setFilters((f) => ({ ...f, maxDuration }))}
      />

      <FilterRange
        label={t.filters.budget}
        value={filters.maxBudget}
        min={50}
        max={BUDGET_MAX}
        step={50}
        formatValue={(v) => formatPrice(v, locale)}
        onChange={(maxBudget) => setFilters((f) => ({ ...f, maxBudget }))}
      />
    </div>
  );

  return (
    <section
      id="circuits"
      className={`section-padding section-surface-dark pattern-section ${variant === "page" ? "pt-24" : ""}`}
    >
      <div className="container-wide">
        <div className="section-block">
          <div className="section-intro">
            <SectionArabic phrase="trips" />
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h2 className="section-title">{t.title}</h2>
            <div className="ornament-divider !mx-0 !max-w-[180px]" />
            <p className="max-w-xl text-midnight/85">{t.description}</p>
          </div>
          {variant === "embed" ? (
            <Link
              href={`/${locale}/circuits`}
              className="group inline-flex items-center gap-2 font-semibold text-burgundy hover:text-terracotta"
            >
              {t.viewAll}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          ) : null}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24 border border-sand-200 bg-white/90 p-5 backdrop-blur-sm">
              {filterPanel}
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium text-midnight/70">{resultsLabel}</p>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 border border-sand-200 bg-white px-3 py-2 text-sm font-medium text-midnight lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                {t.filters.title}
              </button>
            </div>

            <div className="grid min-w-0 gap-5 md:grid-cols-2 md:gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((circuit, i) => {
                  const content = t.items[circuit.id];
                  const collageImages = "images" in circuit ? circuit.images : undefined;

                  return (
                    <motion.article
                      key={circuit.id}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ delay: i * 0.06 }}
                      className="card-traditional min-w-0"
                    >
                      <Link
                        href={`/${locale}/circuits/${circuit.slug}`}
                        className="block min-w-0 overflow-hidden"
                      >
                        <TourCardImage
                          image={circuit.image}
                          images={collageImages}
                          alt={content.title}
                          wide
                        >
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy-dark/30 to-transparent" />
                          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                            <span
                              className={`${"badgeClass" in circuit && circuit.badgeClass ? circuit.badgeClass : "bg-oasis"} px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white sm:px-2.5 sm:py-1 sm:text-xs`}
                            >
                              {content.badge}
                            </span>
                            <span className="flex items-center gap-1 bg-burgundy/85 px-2 py-0.5 text-[11px] font-medium text-white sm:px-2.5 sm:py-1 sm:text-xs">
                              <Calendar className="h-3 w-3 shrink-0" />
                              {content.duration}
                            </span>
                          </div>
                        </TourCardImage>

                        <div className="card-body">
                          <p className="mb-2 inline-flex items-center gap-1 text-xs text-midnight/65">
                            <MapPin className="h-3.5 w-3.5 shrink-0" />
                            {t.destinations[circuit.destination]} ·{" "}
                            {t.departures[circuit.departure]}
                          </p>
                          <h3 className="card-title !text-lg sm:!text-xl">{content.title}</h3>
                          <p className="card-description !line-clamp-2">{content.description}</p>
                          <TourCardFooter
                            rating={circuit.rating}
                            reviews={circuit.reviews}
                            fromLabel={dict.common.from}
                            priceLabel={formatPrice(circuit.price, locale)}
                            perPersonLabel={dict.common.perPerson}
                          />
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>

            {filtered.length === 0 ? (
              <p className="py-12 text-center text-midnight/60">{t.filters.reset}</p>
            ) : null}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileFiltersOpen ? (
          <>
            <motion.button
              type="button"
              aria-label={dict.common.close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-midnight/40 lg:hidden"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed bottom-0 right-0 top-0 z-50 w-full max-w-sm overflow-y-auto bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{t.filters.title}</h3>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="rounded-full p-2 text-midnight/60 hover:bg-sand-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {filterPanel}
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-primary mt-8 w-full"
              >
                {resultsLabel}
              </button>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
