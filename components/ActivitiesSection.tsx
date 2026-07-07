"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { activitiesCatalog } from "@/lib/catalog";
import { useDictionary } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";

export function ActivitiesSection() {
  const dict = useDictionary();
  const t = dict.activities;
  const preview = activitiesCatalog;

  return (
    <section id="activites" className="section-padding bg-sand-50">
      <div className="container-wide">
        <div className="section-intro section-intro-center mx-auto mb-12 max-w-3xl text-center">
          <SectionArabic phrase="desertSoul" centered className="text-burgundy/40" />
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="ornament-divider" />
          <p className="text-midnight/75">{t.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((activity, i) => (
            <motion.article
              key={activity.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-[4/5] overflow-hidden border border-sand-200 bg-white shadow-sm"
            >
              <Image
                src={activity.image}
                alt={t.items[activity.id]}
                fill
                unoptimized
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="font-display text-base font-semibold leading-snug text-white sm:text-lg">
                  {t.items[activity.id]}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 border border-burgundy/20 bg-white px-8 py-3 font-semibold text-burgundy shadow-sm transition hover:border-burgundy hover:bg-burgundy hover:text-white"
          >
            {t.viewAll}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
