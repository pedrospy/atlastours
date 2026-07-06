"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinkIds } from "@/lib/catalog";
import { useDictionary, useLocale } from "@/lib/i18n/locale-context";
import { Logo, BrandWordmark } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dict = useDictionary();
  const { locale } = useLocale();

  const navLinks = navLinkIds.map((id) => {
    const href = dict.nav[id].href;
    const localizedHref = href.startsWith("#")
      ? `/${locale}${href}`
      : href.startsWith("/")
        ? `/${locale}${href}`
        : href;

    return {
      ...dict.nav[id],
      href: localizedHref,
      id,
    };
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-dark border-b border-gold/20 py-0 shadow-md shadow-black/20"
          : "border-b border-transparent bg-transparent py-0.5"
      }`}
    >
      <nav className="container-wide page-gutter flex items-center justify-between py-2 lg:py-2.5">
        <Link href={`/${locale}`} className="group flex items-center gap-3">
          <Logo
            size={46}
            priority
            className="logo-svg-frame transition duration-300 group-hover:scale-[1.04]"
          />
          <div className="hidden h-9 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent sm:block" aria-hidden />
          <div className="min-w-0">
            <BrandWordmark />
          </div>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="rounded-sm px-2.5 py-1.5 text-xs tracking-wide text-white/85 transition hover:bg-gold/10 hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="#contact"
              className="rounded-sm border border-gold/40 px-3 py-1.5 text-xs font-medium text-white transition hover:border-gold hover:bg-gold/10"
            >
              {dict.common.login}
            </Link>
            <Link href="#contact" className="btn-primary px-3 py-1.5 text-xs">
              {dict.common.contact}
            </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-sm p-1.5 text-white lg:hidden"
            aria-label={dict.common.menu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
