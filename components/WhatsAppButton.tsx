"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/catalog";
import { useDictionary } from "@/lib/i18n/locale-context";

export function WhatsAppButton() {
  const dict = useDictionary();

  return (
    <a
      href={getWhatsAppUrl(dict.common.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition hover:scale-110 hover:bg-[#20bd5a] animate-float"
      aria-label={dict.common.whatsappAria}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
