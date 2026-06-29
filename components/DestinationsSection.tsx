"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { destinationsCatalog } from "@/lib/catalog";
import { useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";

export function DestinationsSection() {
  const dict = useDictionary();
  const { locale } = useLocale();
  const t = dict.destinations;

  return (
    <section id="destinations" className="section-padding section-surface-light bg-white">
      <div className="container-wide">
        <div className="section-block">
          <div className="section-intro">
            <SectionArabic phrase="morocco" />
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h2 className="section-title">{t.title}</h2>
            <div className="ornament-divider !mx-0 !max-w-[180px]" />
          </div>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-burgundy hover:text-terracotta"
          >
            {t.viewAll}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinationsCatalog.map((dest, i) => {
            const name = t.names[dest.id];
            const badge = t.items[dest.id].badge;
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden border border-gold/20"
              >
                <Link href={`/${locale}/destinations/${dest.slug}`}>
                  {"images" in dest && dest.images ? (
                    <div
                      className={`absolute inset-0 grid h-full w-full ${
                        dest.images.length >= 4
                          ? "grid-cols-2 grid-rows-2"
                          : dest.images.length === 3
                            ? "grid-cols-2 grid-rows-2"
                            : "grid-cols-2"
                      }`}
                    >
                      {dest.images.map((src, idx) => (
                        <div
                          key={`${dest.id}-${idx}`}
                          className={`relative overflow-hidden ${
                            dest.images!.length === 3 && idx === 2
                              ? "col-span-2"
                              : ""
                          }`}
                        >
                          <Image
                            src={src}
                            alt={idx === 0 ? name : ""}
                            fill
                            unoptimized
                            className="object-cover transition duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 12vw"
                            aria-hidden={idx > 0}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={dest.image}
                      alt={name}
                      fill
                      unoptimized
                      className="object-cover transition duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/95 via-burgundy/40 to-transparent transition group-hover:from-burgundy-dark" />
                  <div className="absolute left-0 top-0 h-1 w-full bg-gold-gradient opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute left-3 top-4 z-10 bg-oasis px-2.5 py-1 text-xs font-semibold text-white">
                    {badge}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <h3 className="font-display text-xl font-bold text-white">
                      {name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-gold-light/80">
                      <MapPin className="h-3.5 w-3.5" />
                      {dest.count} {dict.common.excursionsCount}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
