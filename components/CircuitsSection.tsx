"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, Calendar } from "lucide-react";
import { circuitsCatalog } from "@/lib/catalog";
import { formatPrice, useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";

export function CircuitsSection() {
  const dict = useDictionary();
  const { locale } = useLocale();
  const t = dict.circuits;

  return (
    <section id="circuits" className="section-padding pattern-section">
      <div className="container-wide">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionArabic phrase="trips" />
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h2 className="section-title mt-4">{t.title}</h2>
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

        <div className="grid gap-8 md:grid-cols-2">
          {circuitsCatalog.map((circuit, i) => {
            const content = t.items[circuit.id];
            return (
              <motion.article
                key={circuit.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="card-traditional group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={circuit.image}
                    alt={content.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/90 via-burgundy/30 to-transparent" />
                  <div className="absolute left-0 top-0 h-1 w-full bg-gold-gradient" />
                  <div className="absolute left-4 top-5 flex gap-2">
                    <span className="bg-terracotta px-3 py-1 text-xs font-semibold text-white">
                      {content.badge}
                    </span>
                    <span className="flex items-center gap-1 border border-gold/40 bg-burgundy/60 px-3 py-1 text-xs font-medium text-gold-light backdrop-blur-sm">
                      <Calendar className="h-3 w-3" />
                      {content.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {content.title}
                    </h3>
                  </div>
                </div>
                <div className="border-t border-gold/20 p-6">
                  <p className="leading-relaxed text-midnight/70">
                    {content.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-sand-200 pt-5">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-gold text-gold" />
                      <span className="font-semibold">{circuit.rating}</span>
                      <span className="text-sm text-midnight/50">
                        ({circuit.reviews})
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-midnight/50">
                        {dict.common.from}
                      </span>
                      <p className="font-display text-2xl font-bold text-terracotta">
                        {formatPrice(circuit.price, locale)}
                        <span className="text-sm font-normal text-midnight/50">
                          {dict.common.perPerson}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
