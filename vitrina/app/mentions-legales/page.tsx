import type { Metadata } from "next";
import { PublicFooter, PublicHeader } from "@/components/PublicChrome";
import { owner } from "@/lib/owner";

export const metadata: Metadata = { title: "Mentions légales & conditions de vente · Vitrina" };

export default function LegalPage() {
  const me = owner();
  return (
    <>
      <PublicHeader />
      <main className="container-x max-w-3xl py-14">
        <h1 className="page-title text-3xl">Mentions légales & conditions générales de vente</h1>
        <div className="mt-8 space-y-8 leading-relaxed text-ink/75 [&_h2]:mb-2 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink">
          <section>
            <h2>Éditeur</h2>
            <p>
              Vitrina est un service édité par {me.name}
              {me.email && <> — contact : {me.email}</>}
              {me.whatsapp && <> — WhatsApp : +{me.whatsapp}</>}. Les informations d&apos;immatriculation (auto-entrepreneur / ICE) sont communiquées sur chaque facture.
            </p>
          </section>
          <section>
            <h2>Hébergement</h2>
            <p>Le site et les sites clients sont hébergés par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Base de données hébergée dans l&apos;Union européenne.</p>
          </section>
          <section>
            <h2>Prestations</h2>
            <p>
              Vitrina conçoit et met en ligne des sites internet vitrines pour les professionnels. Le prix de création est payé une fois (acompte de 50 % possible, solde à la mise en ligne). Le délai de 48 h court à compter de la réception du paiement et des informations nécessaires (textes, photos, horaires).
            </p>
          </section>
          <section>
            <h2>Hébergement et maintenance</h2>
            <p>
              L&apos;abonnement mensuel couvre l&apos;hébergement, le certificat de sécurité, les sauvegardes et les mises à jour prévues par l&apos;offre. Il est sans engagement et résiliable à tout moment avec effet à la fin du mois en cours. En cas de non-paiement, le site peut être suspendu.
            </p>
          </section>
          <section>
            <h2>Contenus</h2>
            <p>
              Le client garantit disposer des droits sur les textes, logos et photos fournis. Les sites de démonstration créés à titre d&apos;exemple ne sont pas indexés par les moteurs de recherche et sont supprimés sur simple demande.
            </p>
          </section>
          <section>
            <h2>Données personnelles</h2>
            <p>
              Les informations collectées (nom, téléphone, email, informations sur l&apos;établissement) servent uniquement à réaliser la commande et à vous contacter. Elles ne sont jamais revendues. Conformément à la loi 09-08 (Maroc) et au RGPD, vous pouvez demander leur consultation, rectification ou suppression en nous écrivant.
            </p>
          </section>
          <section>
            <h2>Rétractation et remboursement</h2>
            <p>
              Vous voyez votre site avant de payer. Si la prestation n&apos;a pas commencé, l&apos;acompte est remboursé sur demande. Une fois le site mis en ligne, la prestation est considérée comme exécutée.
            </p>
          </section>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
