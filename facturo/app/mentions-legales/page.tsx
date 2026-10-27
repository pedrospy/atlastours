import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Mentions légales · Facturo" };

export default function LegalPage() {
  return (
    <main className="container-x max-w-3xl py-16">
      <Link href="/" className="text-sm font-semibold text-brand">← Accueil</Link>
      <h1 className="page-title mt-6">Mentions légales et confidentialité</h1>
      <div className="mt-8 space-y-6 text-ink/80">
        <section>
          <h2 className="font-semibold">Éditeur</h2>
          <p>Facturo — [raison sociale / statut], [adresse], [identifiant fiscal]. Contact : [email].</p>
        </section>
        <section>
          <h2 className="font-semibold">Hébergement</h2>
          <p>Application : Vercel Inc., Covina, CA, États-Unis. Base de données : [fournisseur, région].</p>
        </section>
        <section>
          <h2 className="font-semibold">Données personnelles</h2>
          <p>
            Nous stockons votre email, un mot de passe chiffré et les informations que vous saisissez (clients,
            documents) uniquement pour fournir le service. Elles ne sont ni revendues ni partagées. Les paiements
            sont traités par Stripe ; nous ne voyons jamais votre numéro de carte. Vous pouvez demander l&apos;export
            ou la suppression de vos données à [email] (loi 09-08 et RGPD).
          </p>
        </section>
      </div>
    </main>
  );
}
