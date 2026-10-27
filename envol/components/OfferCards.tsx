import Link from "next/link";
import { Check } from "lucide-react";
import { formatMoney } from "@/lib/format";
import { offers } from "@/lib/offers";

export function OfferCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {offers.map((offer) => (
        <div
          key={offer.id}
          className={`relative flex flex-col rounded-3xl border p-7 ${offer.highlight ? "border-brand bg-ink text-white shadow-glow lg:-translate-y-3" : "border-ink/10 bg-white"}`}
        >
          {offer.highlight && (
            <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Le plus choisi</span>
          )}
          <h3 className="font-display text-2xl font-bold">{offer.name}</h3>
          <p className={`mt-1 text-sm ${offer.highlight ? "text-white/70" : "text-ink/60"}`}>{offer.tagline}</p>
          <p className="mt-6 font-display text-5xl font-extrabold tracking-tight">{formatMoney(offer.price)}</p>
          <p className={`mt-1 text-xs ${offer.highlight ? "text-white/60" : "text-ink/50"}`}>
            Paiement unique{offer.limited ? ` · ${offer.limited}` : ""}
          </p>
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {offer.features.map((f) => (
              <li key={f} className="flex gap-2.5">
                <Check className={`mt-0.5 h-4 w-4 shrink-0 ${offer.highlight ? "text-accent" : "text-brand"}`} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Link href={`/commander?offre=${offer.id}`} className={`mt-8 ${offer.highlight ? "btn-accent" : "btn-primary py-3.5 text-base"}`}>
            Choisir {offer.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
