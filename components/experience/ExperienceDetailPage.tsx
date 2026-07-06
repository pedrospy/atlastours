"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Calendar,
  Users,
  MapPin,
  Check,
  X,
  ChevronRight,
  Shield,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getWhatsAppUrl, siteConfig } from "@/lib/catalog";
import type { ExperienceDetailContent } from "@/lib/experiences/types";
import { getTwoTravelerTotal } from "@/lib/experiences/pricing";
import { formatPrice, useDictionary, useLocale } from "@/lib/i18n/locale-context";

type CatalogItem = {
  rating: number;
  reviews: number;
  price: number;
  flatPrice?: boolean;
  image: string;
  images?: readonly string[];
};

type Props = {
  item: CatalogItem;
  detail: ExperienceDetailContent;
  cardTitle: string;
  badge: string;
  badgeClass?: string;
  textClasses?: {
    title: string;
    price: string;
  };
  listAnchor: "#excursions" | "/excursions" | "#circuits" | "/circuits" | "#destinations";
  listLabel: string;
};

export function ExperienceDetailPage({
  item,
  detail,
  cardTitle,
  badge,
  badgeClass = "bg-oasis",
  textClasses,
  listAnchor,
  listLabel,
}: Props) {
  const dict = useDictionary();
  const { locale } = useLocale();
  const t = dict.excursionDetail;
  const why = dict.whyUs;
  const whatsappMessage = `${dict.common.whatsappMessage} — ${cardTitle}`;
  const twoTravelerTotal =
    !item.flatPrice ? getTwoTravelerTotal(detail) ?? item.price * 2 : null;

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <section className="relative pt-20">
        <div className="tour-card-media !aspect-auto h-[42vh] min-h-[280px] md:h-[50vh]">
          <div className="absolute inset-0 overflow-hidden">
            {item.images && item.images.length > 0 ? (
              <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-px bg-sand-200">
                {item.images.slice(0, 4).map((src, idx) => (
                  <div key={`${src}-${idx}`} className="relative min-h-0 min-w-0 overflow-hidden">
                    <img
                      src={src}
                      alt={idx === 0 ? cardTitle : ""}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                      aria-hidden={idx > 0}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Image
                src={item.image}
                alt={cardTitle}
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="100vw"
              />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark via-burgundy-dark/60 to-burgundy-dark/30" />
          <div className="absolute left-0 top-0 h-1 w-full bg-gold-gradient" />
        </div>

        <div className="container-wide page-gutter relative z-10 -mt-24 pb-10 sm:-mt-28 lg:-mt-32">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-sand-200/80">
            <Link href={`/${locale}`} className="hover:text-gold-light">
              {t.breadcrumbHome}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={`/${locale}${listAnchor}`} className="hover:text-gold-light">
              {listLabel}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gold-light">{cardTitle}</span>
          </nav>

          <div className="flex flex-wrap gap-2">
            <span className={`${badgeClass} px-3 py-1 text-xs font-semibold text-white`}>
              {badge}
            </span>
            <span className="border border-gold/40 bg-burgundy/80 px-3 py-1 text-xs font-medium text-gold-light backdrop-blur-sm">
              {detail.difficulty}
            </span>
          </div>

          <h1 className={`mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl ${textClasses?.title ?? "text-white"}`}>
            {cardTitle}
          </h1>
          {detail.subtitle && (
            <p className="mt-2 text-lg text-gold-light">{detail.subtitle}</p>
          )}

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-sand-200">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gold" />
              {detail.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-gold text-gold" />
              {item.rating} ({item.reviews} {t.reviews})
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-gold" />
              {detail.groupSize}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold" />
              {t.departure}: {detail.departure}
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="space-y-14">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-midnight sm:text-3xl">{t.about}</h2>
              <div className="ornament-divider !mx-0 !max-w-[120px]" />
              <p className="mt-4 leading-relaxed text-midnight/75">{detail.about}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-midnight sm:text-3xl">{t.highlights}</h2>
              <div className="ornament-divider !mx-0 !max-w-[120px]" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {detail.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 border border-sand-200 bg-white p-4 text-sm text-midnight/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-oasis" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-midnight sm:text-3xl">{t.itinerary}</h2>
              <div className="ornament-divider !mx-0 !max-w-[120px]" />
              {detail.itinerary.map((day) => (
                <article key={day.title} className="mt-6 border border-sand-200 bg-white p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-burgundy font-display text-sm font-bold text-gold-light">
                      {day.dayLabel}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-midnight">{day.title}</h3>
                      <p className="mt-2 text-sm text-midnight/65">{day.description}</p>
                      <ul className="mt-4 space-y-2">
                        {day.steps.map((step) => (
                          <li key={step} className="flex gap-2 text-sm text-midnight/80 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-gold">
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-sand-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-midnight">{t.included}</h3>
                <ul className="mt-4 space-y-2">
                  {detail.included.map((entry) => (
                    <li key={entry} className="flex gap-2 text-sm text-midnight/75">
                      <Check className="h-4 w-4 shrink-0 text-oasis" />
                      {entry}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-sand-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-midnight">{t.notIncluded}</h3>
                <ul className="mt-4 space-y-2">
                  {detail.notIncluded.map((entry) => (
                    <li key={entry} className="flex gap-2 text-sm text-midnight/75">
                      <X className="h-4 w-4 shrink-0 text-terracotta/70" />
                      {entry}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-gold/25 bg-burgundy-dark p-8 text-white">
              <h2 className="font-display text-2xl font-bold text-gold-light">{t.whyBook}</h2>
              <p className="mt-3 text-sm leading-relaxed text-sand-200/80">{why.description}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {(["guides", "custom", "support", "tested"] as const).map((key) => (
                  <div key={key} className="border border-gold/20 p-4">
                    <h4 className="font-semibold text-gold-light">{why.features[key].title}</h4>
                    <p className="mt-1 text-xs text-sand-200/70">{why.features[key].description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-midnight sm:text-3xl">{t.faq}</h2>
              <div className="ornament-divider !mx-0 !max-w-[120px]" />
              <div className="mt-6 space-y-4">
                {detail.faqs.map((faq) => (
                  <details key={faq.question} className="group border border-sand-200 bg-white">
                    <summary className="cursor-pointer list-none p-5 font-semibold text-midnight marker:content-none">
                      {faq.question}
                    </summary>
                    <p className="border-t border-sand-200 px-5 pb-5 pt-3 text-sm leading-relaxed text-midnight/70">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>

          <aside className="lg:sticky lg:top-20 lg:self-start">
            <div className="border border-gold/30 bg-white p-6 shadow-card">
              <p className="text-xs uppercase tracking-wider text-midnight/50">{t.from}</p>
              <p className={`font-display text-4xl font-bold ${textClasses?.price ?? "text-midnight"}`}>
                {formatPrice(item.price, locale)}
                {item.flatPrice ? (
                  <span className="text-base font-normal text-midnight/50">{t.perTrip}</span>
                ) : (
                  <span className="text-base font-normal text-midnight/50">{t.perPerson}</span>
                )}
              </p>
              {!item.flatPrice && twoTravelerTotal != null ? (
                <p className="mt-1 text-sm text-midnight/50">
                  {formatPrice(twoTravelerTotal, locale)} {t.totalFor2}
                </p>
              ) : null}

              <div className="mt-6 space-y-3 border-t border-sand-200 pt-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-midnight/50">{t.duration}</span>
                  <span className="font-medium">{detail.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-midnight/50">{t.group}</span>
                  <span className="font-medium">{detail.groupSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-midnight/50">{t.languages}</span>
                  <span className="font-medium">{detail.languages}</span>
                </div>
              </div>

              <h4 className="mt-6 text-sm font-semibold text-midnight">
                {item.flatPrice ? t.tripPricing : t.groupPricing}
              </h4>
              {item.flatPrice ? (
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-sm text-midnight/75">
                    <span>{detail.groupSize}</span>
                    <span className={`font-medium ${textClasses?.price ?? "text-midnight"}`}>
                      {formatPrice(item.price, locale)}
                    </span>
                  </div>
                  <p className="text-xs text-midnight/55">{t.flatPriceNote}</p>
                </div>
              ) : (
                <ul className="mt-3 space-y-2">
                  {detail.groupPricing.map((tier) => (
                    <li key={tier.travelers} className="flex justify-between text-sm text-midnight/75">
                      <span>{tier.travelers}</span>
                      <span className={`font-medium ${textClasses?.price ?? "text-midnight"}`}>{tier.price}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 space-y-3">
                <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  <MessageCircle className="h-5 w-5" />
                  {t.book}
                </a>
                <Link href={`/${locale}#contact`} className="btn-outline w-full">
                  {t.requestQuote}
                </Link>
              </div>

              <div className="mt-4 space-y-2 text-xs text-midnight/55">
                <p className="flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5 text-oasis" />
                  {t.freeCancel}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-oasis" />
                  {t.instantConfirm}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-burgundy-dark py-16 text-center text-white">
        <div className="container-wide page-gutter">
          <h2 className="font-display text-2xl font-bold text-gold-light sm:text-3xl">{t.readyTitle}</h2>
          <p className="mt-2 text-sand-200/80">{siteConfig.name} — {dict.site.tagline}</p>
          <Link href={`/${locale}#contact`} className="btn-primary mt-8 inline-flex">
            {t.readyCta}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
