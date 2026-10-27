import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Mentions légales · ${site.name}` };

export default function LegalPage() {
  return (
    <main className="container-x max-w-3xl py-20">
      <a href="/" className="text-sm font-semibold text-brand">
        ← Retour à l&apos;accueil
      </a>
      <h1 className="section-title mt-6">Mentions légales</h1>
      <div className="mt-8 space-y-6 text-ink/80">
        <section>
          <h2 className="font-display text-lg font-bold">Éditeur</h2>
          <p>
            {site.name} — [Raison sociale / statut auto-entrepreneur], [adresse], [ICE / identifiant fiscal].
            Contact : {site.email}
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">Hébergement</h2>
          <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold">Données personnelles</h2>
          <p>
            Les informations saisies dans le formulaire sont transmises directement par WhatsApp ou par
            email et ne sont pas stockées sur ce site. Elles servent uniquement à répondre à votre
            demande. Conformément à la loi 09-08 et au RGPD, vous pouvez demander leur suppression à{" "}
            {site.email}.
          </p>
        </section>
      </div>
    </main>
  );
}
