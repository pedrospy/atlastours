"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Gift, ArrowRight } from "lucide-react";
import { useDictionary } from "@/lib/i18n/locale-context";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const t = useDictionary().newsletter;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="section-padding bg-burgundy bg-moroccan-pattern">
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
            <p className="mt-8 border border-gold/30 bg-gold/10 px-6 py-4 text-lg">
              {t.success}
            </p>
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
              <button type="submit" className="btn-primary group">
                {t.submit}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </form>
          )}

          <p className="mt-4 text-sm text-sand-200/50">{t.disclaimer}</p>
        </motion.div>
      </div>
    </section>
  );
}
