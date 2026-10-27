"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Gift, ArrowRight } from "lucide-react";
import { fill } from "@/lib/i18n/format";
import { useDictionary, useLocale } from "@/lib/i18n/locale-context";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [promo, setPromo] = useState<{ promoCode: string; percent: number } | null>(null);
  const [error, setError] = useState(false);
  const { locale } = useLocale();
  const t = useDictionary().newsletter;
  const submitted = promo != null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError(false);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });
      if (!response.ok) throw new Error("subscribe_failed");
      setPromo(await response.json());
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-padding section-surface-dark bg-burgundy bg-moroccan-pattern">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-2xl border border-gold/30 bg-burgundy-dark/80 p-10 text-center text-white backdrop-blur-sm sm:p-14"
        >
          <div className="mb-1 h-1 w-full bg-gold-gradient" />
          <div className="mb-4 inline-flex items-center gap-2 border border-gold/30 px-4 py-2 text-sm text-gold-light">
            <Gift className="h-4 w-4" />
            {t.badge}
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            {t.title}
          </h2>
          <div className="ornament-divider" />
          <p className="text-sand-200/75">{t.description}</p>

          {submitted ? (
            <div className="mt-8 border border-gold/30 bg-gold/10 px-6 py-4 text-lg">
              <p>{t.success}</p>
              <p className="mt-2 font-semibold text-gold-light">
                {fill(t.promoMessage, { code: promo.promoCode, percent: promo.percent })}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold/50" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  className="w-full border border-gold/30 bg-burgundy/50 py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
              </div>
              <button type="submit" disabled={submitting} className="btn-primary group disabled:opacity-60">
                {t.submit}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </form>
          )}

          {error && <p className="mt-4 text-sm text-terracotta-light" role="alert">{t.error}</p>}
          <p className="mt-4 text-sm text-sand-200/50">{t.disclaimer}</p>
        </motion.div>
      </div>
    </section>
  );
}
