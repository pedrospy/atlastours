import { Check } from "lucide-react";
import { offers, whatsappLink } from "@/lib/site";

const euro = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export function Offers() {
  return (
    <section id="offres" className="bg-white py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Offres</p>
          <h2 className="section-title mt-3">Un prix fixe, sans surprise</h2>
          <p className="mt-4 text-ink/70">
            50 % à la commande, 50 % à la mise en ligne. L&apos;abonnement couvre l&apos;hébergement, la
            maintenance et vos petites modifications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.id}
              className={`relative flex flex-col rounded-3xl p-8 ${
                o.highlighted ? "bg-ink text-white shadow-card lg:-translate-y-3" : "border border-ink/10 bg-cream"
              }`}
            >
              {o.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-sun px-3 py-1 text-xs font-bold text-ink">
                  Le plus choisi
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{o.name}</h3>
              <p className={`mt-2 text-sm ${o.highlighted ? "text-white/70" : "text-ink/60"}`}>{o.pitch}</p>
              <p className="mt-6 font-display text-4xl font-extrabold">{euro.format(o.setup)}</p>
              <p className={`text-sm ${o.highlighted ? "text-white/70" : "text-ink/60"}`}>
                puis {euro.format(o.monthly)} / mois · {o.delivery}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {o.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${o.highlighted ? "text-sun" : "text-brand"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Bonjour, je suis intéressé(e) par l'offre « ${o.name} » de DirectRiad.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 ${o.highlighted ? "btn-primary" : "btn-ghost"}`}
              >
                Choisir {o.name}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/60">
          Options : shooting photo pro dès 150 € · Traduction supplémentaire 120 € / langue · Logo 190 €
        </p>
      </div>
    </section>
  );
}
