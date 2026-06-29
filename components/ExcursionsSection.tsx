"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { excursionsCatalog, excursionCardTextClasses } from "@/lib/catalog";
import { formatPrice, useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";

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
            <p className="max-w-xl text-midnight/70">{t.description}</p>
          </div>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-burgundy hover:text-terracotta"
          >
            {t.viewAll}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {excursionsCatalog.map((excursion, i) => {
            const content = t.items[excursion.id];
            const text = excursionCardTextClasses;
            return (
              <motion.article
                key={excursion.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-traditional group cursor-pointer"
              >
                <Link href={`/${locale}/excursions/${excursion.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  {"images" in excursion && excursion.images ? (
                    <div className="grid h-full w-full grid-cols-2 grid-rows-2">
                      {excursion.images.map((src, idx) => (
                        <div key={src} className="relative overflow-hidden">
                          <Image
                            src={src}
                            alt={idx === 0 ? content.title : ""}
                            fill
                            unoptimized
                            className="object-cover transition duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 12vw"
                            aria-hidden={idx > 0}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                  <Image
                    src={excursion.image}
                    alt={content.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  )}
                  <div className="absolute left-0 top-0 h-1 w-full bg-gold-gradient" />
                  <span className="absolute left-3 top-4 bg-oasis px-2.5 py-1 text-xs font-semibold text-white">
                    {content.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className={`font-display text-lg font-bold ${text.title}`}>
                    {content.title}
                  </h3>
                  <p className={`mt-2 line-clamp-2 text-sm ${text.description}`}>
                    {content.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-sand-200 pt-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                      <span className="font-semibold">{excursion.rating}</span>
                      <span className={text.muted}>
                        ({excursion.reviews})
                      </span>
                    </div>
                    <p className={`font-display text-lg font-bold ${text.price}`}>
                      {dict.common.from}{" "}
                      {formatPrice(excursion.price, locale)}
                    </p>
                  </div>
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
