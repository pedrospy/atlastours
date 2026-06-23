"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteConfig, testimonialsCatalog } from "@/lib/catalog";
import { useDictionary } from "@/lib/i18n/locale-context";

export function TestimonialsSection() {
  const dict = useDictionary();
  const t = dict.testimonials;

  const subtitle = t.subtitle
    .replace("{rating}", String(siteConfig.googleRating))
    .replace("{count}", String(siteConfig.reviewCount));

  return (
    <section className="section-padding bg-sand-100">
      <div className="container-wide">
        <div className="mb-14 text-center">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 className="section-title mt-4">{t.title}</h2>
          <div className="ornament-divider" />
          <p className="text-midnight/65">
            {siteConfig.reviewCount} {subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonialsCatalog.map((review, i) => {
            const content = t.items[review.id];
            return (
              <motion.blockquote
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative border border-gold/20 bg-white p-8 shadow-card"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/20" />
                <div className="flex items-center gap-4">
                  <div className="logo-mark !h-12 !w-12 text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-midnight">{review.name}</p>
                    <p className="text-sm text-midnight/50">{content.date}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-5 italic leading-relaxed text-midnight/70">
                  &ldquo;{content.text}&rdquo;
                </p>
              </motion.blockquote>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-oasis/40 px-6 py-3 font-semibold text-oasis transition hover:border-oasis hover:bg-oasis hover:text-white"
          >
            <Star className="h-4 w-4 fill-gold text-gold" />
            {t.readAll.replace("{count}", String(siteConfig.reviewCount))}
          </a>
        </div>
      </div>
    </section>
  );
}
