"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/content";

export default function HtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  return null;
}
