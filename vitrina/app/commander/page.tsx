import type { Metadata } from "next";
import { Clock, ShieldCheck, Smartphone } from "lucide-react";
import { OrderForm } from "@/components/OrderForm";
import { PublicFooter, PublicHeader } from "@/components/PublicChrome";
import { getPlan } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Commander votre site · Vitrina",
  description: "Décrivez votre commerce en 3 minutes : nous générons votre site et le mettons en ligne en 48 h.",
};

export default async function CommanderPage({ searchParams }: { searchParams: Promise<{ offre?: string }> }) {
  const plan = getPlan((await searchParams).offre)?.id ?? "pro";
  return (
    <>
      <PublicHeader />
      <main className="container-x grid gap-10 py-10 lg:grid-cols-[1fr_20rem] lg:py-16">
        <div className="card p-5 shadow-card sm:p-8">
          <h1 className="page-title text-3xl">Commander votre site</h1>
          <p className="mt-2 text-ink/60">3 minutes pour décrire votre activité. Vous voyez votre site tout de suite après.</p>
          <div className="mt-8">
            <OrderForm initialPlan={plan} />
          </div>
        </div>
        <aside className="space-y-4 lg:pt-4">
          {[
            { icon: Smartphone, title: "Aperçu immédiat", text: "Votre site est généré dès la validation : vous le voyez sur votre téléphone." },
            { icon: Clock, title: "En ligne en 48 h", text: "Après paiement, nous vérifions les textes et photos puis publions votre site." },
            { icon: ShieldCheck, title: "Sans engagement", text: "L'hébergement mensuel est résiliable à tout moment." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink/5">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-ink/60">{text}</p>
              </div>
            </div>
          ))}
        </aside>
      </main>
      <PublicFooter />
    </>
  );
}
