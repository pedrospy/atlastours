"use client";

import { Shield, Star, Clock, FileCheck } from "lucide-react";
import { useDictionary } from "@/lib/i18n/locale-context";

export function TrustBar() {
  const t = useDictionary().trustBar;

  const items = [
    { icon: Shield, label: t.securePayment },
    { icon: Star, label: t.rated },
    { icon: Clock, label: t.confirmation },
    { icon: FileCheck, label: t.documents },
  ];

  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="container-wide">
        <div className="grid gap-4 border border-gold/30 bg-white p-6 shadow-gold sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 border border-sand-200 bg-sand-50 px-4 py-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30 bg-burgundy text-gold-light">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-midnight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
