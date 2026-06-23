"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Shield, Clock } from "lucide-react";
import { siteConfig } from "@/lib/catalog";
import { useDictionary } from "@/lib/i18n/locale-context";
import { ArabicCalligraphy } from "@/components/ArabicCalligraphy";

export function Hero() {
  const dict = useDictionary();
  const t = dict.hero;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Desert_Merzouga_Morocco_Meditation.jpg/1920px-Desert_Merzouga_Morocco_Meditation.jpg"
        alt={t.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.15),transparent_55%)]" />

      <ArabicCalligraphy
        phrase="morocco"
        variant="hero-watermark"
        className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block xl:right-8"
      />

      <div className="relative flex min-h-screen flex-col justify-center section-padding pt-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="mb-6 inline-flex flex-col gap-1 border border-gold/30 bg-burgundy/50 px-5 py-2 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-4">
              <span className="flex items-center gap-2 text-sm tracking-wide text-gold-light">
                <Star className="h-4 w-4 fill-gold text-gold" />
                {t.badge}
              </span>
              <ArabicCalligraphy
                phrase="authenticJourney"
                variant="hero-accent"
                className="text-lg sm:text-xl"
              />
            </span>

            <h1 className="font-display text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl text-balance">
              {t.title}{" "}
              <span className="text-gold-light">{t.titleHighlight}</span>
            </h1>

            <div className="ornament-divider !mx-0 !max-w-[200px]" />

            <p className="max-w-xl text-lg leading-relaxed text-sand-100/90 sm:text-xl">
              {t.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-sand-200/80">
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-gold text-gold" />
                {siteConfig.googleRating}
                {t.googleRating}
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold-light" />
                {siteConfig.travelers}+ {t.travelers}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-light" />
                {t.responseTime} {siteConfig.responseTime}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#contact" className="btn-primary group">
                {dict.common.contactUs}
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <Link href="#circuits" className="btn-outline-light">
                {t.ctaCircuits}
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#20bd5a]"
              >
                <MessageCircle className="h-5 w-5" />
                {dict.common.whatsapp}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gold-light/60">
            <span className="text-xs uppercase tracking-[0.3em]">
              {t.scrollHint}
            </span>
            <ArabicCalligraphy
              phrase="discover"
              variant="nav"
              className="text-base text-gold-light/50"
            />
            <div className="h-12 w-6 border border-gold/40 p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="h-2 w-full bg-gold/70"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
