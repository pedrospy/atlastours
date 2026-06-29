"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { statsCatalog, featuresCatalog } from "@/lib/catalog";
import { useDictionary } from "@/lib/i18n/locale-context";
import { SectionArabic } from "@/components/ArabicCalligraphy";

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Number(current.toFixed(value % 1 !== 0 ? 1 : 0)));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function WhyUsSection() {
  const dict = useDictionary();
  const t = dict.whyUs;

  return (
    <section id="pourquoi" className="section-padding section-surface-light pattern-section">
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="section-intro">
              <SectionArabic phrase="hospitality" />
              <span className="section-eyebrow">{t.eyebrow}</span>
              <h2 className="section-title text-balance">{t.title}</h2>
              <div className="ornament-divider !mx-0 !max-w-[180px]" />
              <p className="text-lg leading-relaxed text-midnight/70">
                {t.description}
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {featuresCatalog.map((feature, i) => {
                const content = t.features[feature.id];
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-sand-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-3 h-0.5 w-10 bg-gold" />
                    <h3 className="font-display text-lg font-bold text-midnight">
                      {content.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-midnight/65">
                      {content.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 blur-2xl" />
            <div className="relative overflow-hidden border-2 border-gold/30 bg-burgundy p-10 text-white shadow-gold">
              <div className="absolute left-0 top-0 h-1 w-full bg-gold-gradient" />
              <div className="grid grid-cols-2 gap-8">
                {statsCatalog.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="font-display text-4xl font-bold text-gold-light sm:text-5xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="mt-2 text-sm text-sand-200/70">
                      {t.stats[String(index)]}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="#contact"
                className="mt-10 flex w-full items-center justify-center gap-2 border-2 border-gold bg-gold px-6 py-4 font-semibold text-burgundy-dark transition hover:bg-gold-light"
              >
                {t.cta}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
