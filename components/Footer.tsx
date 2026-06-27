"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Shield,
  CreditCard,
  Award,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl, navLinkIds } from "@/lib/catalog";
import { useDictionary } from "@/lib/i18n/locale-context";
import { ArabicCalligraphy } from "@/components/ArabicCalligraphy";
import { Logo } from "@/components/Logo";
import { ContactForm } from "@/components/ContactForm";

export function Footer() {
  const dict = useDictionary();
  const t = dict.footer;

  const navLinks = navLinkIds.slice(0, 4).map((id) => ({
    ...dict.nav[id],
    id,
  }));

  return (
    <footer id="contact" className="bg-burgundy-dark text-white">
      <div className="section-padding pb-8">
        <div className="container-wide">
          <div className="relative mb-16 overflow-hidden border-2 border-gold/30 bg-burgundy p-10 sm:p-14">
            <div className="absolute left-0 top-0 h-1 w-full bg-gold-gradient" />
            <div className="text-center">
              <ArabicCalligraphy
                phrase="welcome"
                variant="footer"
                className="mb-2 block"
              />
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                {t.ctaTitle}
              </h2>
              <div className="ornament-divider" />
              <p className="text-sand-200/80">{t.ctaDescription}</p>
            </div>
            <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
                <Link
                  href={getWhatsAppUrl(dict.common.whatsappMessage)}
                  className="border-2 border-gold bg-gold px-8 py-4 font-semibold text-burgundy-dark transition hover:bg-gold-light"
                >
                  {t.customTrip}
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="border-2 border-gold/40 px-8 py-4 font-semibold transition hover:border-gold hover:bg-gold/10"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex justify-center lg:justify-end">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <Logo size={56} />
                <span className="font-display text-xl font-bold text-gold-light">
                  {siteConfig.name}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-sand-200/65">
                {t.about}
              </p>
              <div className="mt-6 space-y-3 text-sm text-sand-200/75">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-gold-light" />
                  {dict.site.address}
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-gold-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-light" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-gold-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-light" />
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold text-gold-light">
                {t.discover}
              </h4>
              <div className="mt-2 h-0.5 w-8 bg-gold" />
              <ul className="mt-4 space-y-2 text-sm text-sand-200/65">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="hover:text-gold-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="#" className="hover:text-gold-light">
                    {t.blog}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold text-gold-light">
                {t.company}
              </h4>
              <div className="mt-2 h-0.5 w-8 bg-gold" />
              <ul className="mt-4 space-y-2 text-sm text-sand-200/65">
                {t.companyLinks.map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-gold-light">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold text-gold-light">
                {t.newsletter}
              </h4>
              <div className="mt-2 h-0.5 w-8 bg-gold" />
              <p className="mt-4 text-sm text-sand-200/65">
                {t.newsletterDescription}
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-gold/30 transition hover:border-gold hover:bg-gold/10"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-gold/30 transition hover:border-gold hover:bg-gold/10"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="flex items-center gap-1 border border-gold/20 px-3 py-1.5 text-xs text-sand-200/60">
                  <Shield className="h-3.5 w-3.5" /> {t.securePayment}
                </span>
                <span className="flex items-center gap-1 border border-gold/20 px-3 py-1.5 text-xs text-sand-200/60">
                  <CreditCard className="h-3.5 w-3.5" /> {t.multiCurrency}
                </span>
                <span className="flex items-center gap-1 border border-gold/20 px-3 py-1.5 text-xs text-sand-200/60">
                  <Award className="h-3.5 w-3.5" /> {t.certified}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gold/20 pt-8 text-center text-sm text-sand-200/45">
            <p>
              © 2026 {siteConfig.name} SARLAU. {t.copyright}
            </p>
            <p className="mt-2">{t.legal}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
