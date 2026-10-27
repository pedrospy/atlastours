import { TrendingDown, Globe2, Smartphone } from "lucide-react";

const items = [
  {
    icon: TrendingDown,
    title: "Des commissions qui coûtent un salaire",
    text: "Un riad de 8 chambres paie souvent plus de 20 000 € de commissions par an aux plateformes.",
  },
  {
    icon: Globe2,
    title: "Invisible sur Google",
    text: "Sans site, vos anciens clients et leurs amis tombent sur Booking… et vous repayez la commission.",
  },
  {
    icon: Smartphone,
    title: "Des demandes perdues sur WhatsApp",
    text: "Pas de prix clairs, pas de calendrier, pas de paiement : le client hésite et réserve ailleurs.",
  },
];

export function Problem() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="container-x">
        <p className="eyebrow !text-brand-light">Le problème</p>
        <h2 className="section-title mt-3 max-w-2xl">
          Les plateformes vous apportent des clients, puis gardent une partie de votre marge pour
          toujours.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="h-8 w-8 text-sun" />
              <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
