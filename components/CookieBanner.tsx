"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useDictionary } from "@/lib/i18n/locale-context";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const dict = useDictionary();
  const t = dict.cookies;

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="container-wide">
        <div className="relative flex flex-col gap-4 border border-gold/30 bg-white p-5 shadow-gold sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-midnight/70">{t.message}</p>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={() => setVisible(false)}
              className="rounded-sm border border-sand-300 px-5 py-2.5 text-sm font-medium text-midnight/70 hover:bg-sand-50"
            >
              {t.decline}
            </button>
            <button
              onClick={accept}
              className="btn-primary px-5 py-2.5 text-sm"
            >
              {t.accept}
            </button>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-8 top-8 text-midnight/40 sm:hidden"
            aria-label={dict.common.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
