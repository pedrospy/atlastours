"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { locales, localeLabels, type Locale } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/locale-context";

type LanguageSwitcherProps = {
  variant?: "dropdown" | "inline";
};

function useLocalePath() {
  const pathname = usePathname();

  const switchPath = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  return switchPath;
}

export function LanguageSwitcher({ variant = "dropdown" }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const { locale } = useLocale();
  const switchPath = useLocalePath();

  if (variant === "inline") {
    return (
      <div
        className="inline-flex items-center gap-1 rounded-sm border border-gold/30 bg-burgundy/40 p-1 backdrop-blur-sm"
        role="group"
        aria-label="Language"
      >
        <Globe className="ml-2 h-4 w-4 text-gold-light/80" aria-hidden />
        {locales.map((loc) => (
          <Link
            key={loc}
            href={switchPath(loc)}
            className={`rounded-sm px-3 py-1.5 text-sm font-medium transition ${
              loc === locale
                ? "bg-gold/20 text-gold-light"
                : "text-white/70 hover:bg-gold/10 hover:text-white"
            }`}
            aria-current={loc === locale ? "true" : undefined}
          >
            {loc.toUpperCase()}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm text-white/70 hover:text-gold-light"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe className="h-4 w-4" />
        {locale.toUpperCase()}
        <ChevronDown className="h-3 w-3" />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <ul
            role="listbox"
            className="absolute right-0 top-full z-50 mt-1 min-w-[140px] border border-gold/30 bg-burgundy-dark py-1 shadow-lg"
          >
            {locales.map((loc) => (
              <li key={loc}>
                <Link
                  href={switchPath(loc)}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 text-sm transition hover:bg-gold/10 ${
                    loc === locale
                      ? "text-gold-light font-medium"
                      : "text-white/80"
                  }`}
                  role="option"
                  aria-selected={loc === locale}
                >
                  {localeLabels[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
