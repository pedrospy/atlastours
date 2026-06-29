"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { excursionsCatalog } from "@/lib/catalog";
import { formatPrice, useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";
import { TourCardFooter } from "@/components/shared/TourCardFooter";
import { TourCardImage } from "@/components/shared/TourCardImage";

export function ExcursionsSection() {
  const dict = useDictionary();
  const { locale } = useLocale();
  const t = dict.excursions;

  return (
    <section id="excursions" className="section-padding bg-white">
      <div className="container-wide">
        <div className="section-block">
          <div className="section-intro">
            <SectionArabic phrase="discover" />
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h2 className="section-title">{t.title}</h2>
            <div className="ornament-divider !mx-0 !max-w-[180px]" />
            <p className="max-w-xl text-midnight/85">{t.description}</p>
          </div>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-burgundy hover:text-terracotta"
          >
            {t.viewAll}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {excursionsCatalog.map((excursion, i) => {
            const content = t.items[excursion.id];

            return (
              <motion.article
                key={excursion.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-traditional min-w-0"
              >
                <Link href={`/${locale}/excursions/${excursion.slug}`} className="block min-w-0 overflow-hidden">
                  <TourCardImage image={excursion.image} alt={content.title}>
                    <span className="absolute left-3 top-3 bg-oasis px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white sm:px-2.5 sm:py-1 sm:text-xs">
                      {content.badge}
                    </span>
                  </TourCardImage>

                  <div className="card-body">
                    <h3 className="card-title">{content.title}</h3>
                    <p className="card-description">{content.description}</p>
                    <TourCardFooter
                      rating={excursion.rating}
                      reviews={excursion.reviews}
                      fromLabel={dict.common.from}
                      priceLabel={formatPrice(excursion.price, locale)}
                      compact
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
