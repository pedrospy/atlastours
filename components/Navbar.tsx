"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/catalog";
import { navLinkIds } from "@/lib/catalog";
import { useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { ArabicCalligraphy } from "@/components/ArabicCalligraphy";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dict = useDictionary();
  const { locale } = useLocale();

  const navLinks = navLinkIds.map((id) => ({
    ...dict.nav[id],
    href: dict.nav[id].href.startsWith("#")
      ? `/${locale}${dict.nav[id].href}`
      : dict.nav[id].href,
    id,
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark border-b border-gold/20 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="group flex items-center gap-3">
          <Logo size={56} priority />
          <div>
            <p className="font-display text-xl font-semibold leading-tight text-white">
              {siteConfig.name}
            </p>
            <p className="text-xs tracking-wide text-gold-light/80">
              {dict.site.tagline}
            </p>
            <ArabicCalligraphy phrase="saharaTravel" variant="nav" />
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="rounded-sm px-4 py-2 text-sm tracking-wide text-white/85 transition hover:bg-gold/10 hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="#contact"
              className="rounded-sm border border-gold/40 px-5 py-2.5 text-sm font-medium text-white transition hover:border-gold hover:bg-gold/10"
            >
              {dict.common.login}
            </Link>
            <Link href="#contact" className="btn-primary px-5 py-2.5 text-sm">
              {dict.common.contact}
            </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-sm p-2 text-white lg:hidden"
            aria-label={dict.common.menu}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-dark border-t border-gold/20 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-4 py-3 text-white/85 hover:bg-gold/10 hover:text-gold-light"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 px-4 py-3 text-center"
              >
                {dict.common.contactUs}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
