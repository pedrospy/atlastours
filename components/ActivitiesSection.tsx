"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Tent,
  CloudSun,
  ChefHat,
  Sunset,
  Sparkles,
  Mountain,
  Car,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { activitiesCatalog } from "@/lib/catalog";
import { formatPrice, useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { ArabicCalligraphy } from "@/components/ArabicCalligraphy";

const iconMap: Record<string, React.ElementType> = {
  camel: Compass,
  tent: Tent,
  balloon: CloudSun,
  chef: ChefHat,
  sunset: Sunset,
  spa: Sparkles,
  hiking: Mountain,
  quad: Car,
};

export function ActivitiesSection() {
  const dict = useDictionary();
  const { locale } = useLocale();
  const t = dict.activities;

  return (
    <section
      id="activites"
      className="section-padding bg-burgundy-dark bg-moroccan-pattern text-white"
    >
      <div className="container-wide">
        <div className="mb-14 text-center">
          <ArabicCalligraphy
            phrase="desertSoul"
            variant="section"
            className="mb-4 block text-gold-light/70"
          />
          <span className="section-eyebrow text-gold-light">{t.eyebrow}</span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            {t.title}
          </h2>
          <div className="ornament-divider" />
          <p className="mx-auto max-w-xl text-sand-200/75">{t.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activitiesCatalog.map((activity, i) => {
            const Icon = iconMap[activity.icon] || Compass;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer border border-gold/20 bg-burgundy/50 p-6 backdrop-blur-sm transition hover:border-gold/50 hover:bg-burgundy/70"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-gold/30 bg-gold/10 text-gold-light transition group-hover:border-gold group-hover:bg-gold group-hover:text-burgundy-dark">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {t.items[activity.id]}
                </h3>
                <p className="mt-3 font-display text-2xl font-bold text-gold-light">
                  {dict.common.from} {formatPrice(activity.price, locale)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 border border-gold/40 px-8 py-3 font-semibold text-gold-light transition hover:border-gold hover:bg-gold/10"
          >
            {t.viewAll}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
