"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { destinationsCatalog } from "@/lib/catalog";
import { useDictionary } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";

export function DestinationsSection() {
  const dict = useDictionary();
  const t = dict.destinations;

  return (
    <section id="destinations" className="section-padding bg-white">
      <div className="container-wide">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionArabic phrase="morocco" />
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h2 className="section-title mt-4">{t.title}</h2>
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
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden border border-gold/20"
              >
                <Image
                  src={dest.image}
                  alt={name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/95 via-burgundy/40 to-transparent transition group-hover:from-burgundy-dark" />
                <div className="absolute left-0 top-0 h-1 w-full bg-gold-gradient opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-bold text-white">
                    {name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-gold-light/80">
                    <MapPin className="h-3.5 w-3.5" />
                    {dest.count} {dict.common.excursionsCount}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
