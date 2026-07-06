"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { circuitsCatalog } from "@/lib/catalog";
import { formatPrice, useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";
import { TourCardFooter } from "@/components/shared/TourCardFooter";
import { TourCardImage } from "@/components/shared/TourCardImage";

type Props = {
  variant?: "embed" | "page";
};

export function CircuitsSection({ variant = "embed" }: Props) {
  const dict = useDictionary();
  const { locale } = useLocale();
  const t = dict.circuits;

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

        <div className="grid min-w-0 gap-5 md:grid-cols-2 md:gap-6">
          {circuitsCatalog.map((circuit, i) => {
            const content = t.items[circuit.id];
            const collageImages = "images" in circuit ? circuit.images : undefined;

            return (
              <motion.article
                key={circuit.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="card-traditional min-w-0"
              >
                <Link href={`/${locale}/circuits/${circuit.slug}`} className="block min-w-0 overflow-hidden">
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
        </div>
      </div>
    </section>
  );
}
