"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Shield, Baby, Languages } from "lucide-react";
import {
  transfersCatalog,
  galleryCatalog,
  fleetCatalog,
  getWhatsAppUrl,
} from "@/lib/catalog";
import { formatPrice, useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";
import {
  TransportLineIcon,
  getTransferIcon,
} from "@/components/TransportLineIcon";

const featureIcons = [Snowflake, Languages, Baby, Shield];

export function TransfersSection() {
  const dict = useDictionary();
  const { locale } = useLocale();
  const t = dict.transfers;

  return (
    <section id="transferts" className="section-padding bg-burgundy-dark text-white">
      <div className="container-wide">
        <div className="section-block">
          <div className="section-intro">
            <SectionArabic phrase="welcome" />
            <span className="section-eyebrow text-gold-light">{t.eyebrow}</span>
            <h2 className="section-title text-white">{t.title}</h2>
            <div className="ornament-divider !mx-0 !max-w-[180px]" />
            <p className="max-w-xl text-sand-200/80">{t.description}</p>
          </div>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-gold-light hover:text-white"
          >
            {t.viewAll}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mb-14 border border-gold/15 bg-burgundy/40 p-6 backdrop-blur-sm sm:p-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-gold-light/80">
            {t.fleetTitle}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-4">
            {fleetCatalog.map((vehicle, i) => {
              const info = t.fleet[vehicle.id];
              return (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="flex h-20 w-full items-center justify-center border border-gold/10 bg-burgundy-dark/50 px-4 transition group-hover:border-gold/30">
                    <TransportLineIcon
                      type={vehicle.icon}
                      size={112}
                      strokeWidth={1.05}
                      className="opacity-90 transition group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-3 font-display text-base font-semibold text-gold-light">
                    {info.name}
                  </p>
                  <p className="mt-0.5 text-xs text-sand-200/65">{info.detail}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-gold/50">
                    {vehicle.seats} pers.
                  </p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-gold/10 pt-6">
            {t.fleetFeatures.map((label, i) => {
              const Icon = featureIcons[i] ?? Shield;
              return (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-xs text-sand-200/70"
                >
                  <Icon className="h-3.5 w-3.5 text-gold-light/70" strokeWidth={1.25} />
                  {label}
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {transfersCatalog.map((transfer, i) => {
            const content = t.items[transfer.id];
            const iconType = getTransferIcon(transfer.id);
            return (
              <motion.article
                key={transfer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden border border-gold/20 bg-burgundy/60 transition hover:border-gold/45"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={transfer.image}
                    alt={content.title}
                    fill
                    unoptimized
                    className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark via-burgundy-dark/55 to-burgundy-dark/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TransportLineIcon
                      type={iconType}
                      size={130}
                      strokeWidth={1.1}
                      className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute left-3 top-3 border border-gold/30 bg-burgundy-dark/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-light backdrop-blur-sm">
                    {content.badge}
                  </span>
                </div>
                <div className="border-t border-gold/10 p-5">
                  <h3 className="font-display text-lg font-bold text-gold-light">
                    {content.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-sand-200/75">
                    {content.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-gold/15 pt-4">
                    <p className="font-display text-lg font-bold text-white">
                      {dict.common.from}{" "}
                      {formatPrice(transfer.price, locale)}
                    </p>
                    <a
                      href={getWhatsAppUrl(
                        `${dict.common.whatsappMessage}${content.title}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gold-light transition hover:text-white"
                    >
                      WhatsApp →
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-20 border-t border-gold/20 pt-16">
          <h3 className="font-display text-2xl font-bold text-gold-light sm:text-3xl">
            {t.galleryTitle}
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {galleryCatalog.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group relative aspect-[3/4] overflow-hidden border border-gold/20 sm:aspect-[4/5]"
              >
                <Image
                  src={photo.image}
                  alt={t.gallery[photo.id]}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 p-3 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 sm:text-sm">
                  {t.gallery[photo.id]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-gold bg-gold px-8 py-4 font-semibold text-burgundy-dark transition hover:bg-gold-light"
          >
            {t.cta}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
