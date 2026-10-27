import type { Metadata } from "next";
import { PublicShell } from "@/components/PublicChrome";
import { owner } from "@/lib/owner";

export const metadata: Metadata = { title: "Mentions légales et conditions de vente · Envol" };

export default function LegalPage() {
  const o = owner();
  return (
    <PublicShell>
      <div className="container-x max-w-3xl space-y-8 py-12 text-sm leading-7 text-ink/75">
        <h1 className="page-title text-3xl text-ink">Mentions légales et conditions générales de vente</h1>

        <section>
          <h2 className="mb-2 text-lg font-bold text-ink">Éditeur</h2>
          <p>
            Le site Envol Académie est édité par {o.name}
            {process.env.LEGAL_ENTITY ? `, ${process.env.LEGAL_ENTITY}` : ""}. Contact : {o.email || "voir la page d'accueil"}. Hébergement : Vercel Inc., 440 N
            Barranca Ave #4133, Covina, CA 91723, États-Unis.
          </p>
        </section>

        <section id="cgv" className="scroll-mt-24">
          <h2 className="mb-2 text-lg font-bold text-ink">Conditions générales de vente</h2>
          <ol className="list-decimal space-y-3 pl-5">
            <li><strong>Objet.</strong> Les présentes conditions régissent la vente de la formation en ligne Envol et de ses offres d&apos;accompagnement (Essentiel, Pro, VIP).</li>
            <li><strong>Prix et paiement.</strong> Les prix sont indiqués en euros, toutes taxes comprises le cas échéant. Le paiement est dû à la commande, par carte, PayPal ou virement. L&apos;accès est ouvert à réception du paiement. Un paiement en plusieurs fois peut être accordé sur demande.</li>
            <li><strong>Accès.</strong> L&apos;accès au contenu en ligne est personnel, non cessible et valable pour toute la durée d&apos;exploitation de la plateforme. Le partage des identifiants entraîne la fermeture du compte sans remboursement.</li>
            <li><strong>Accompagnement.</strong> Les coachings de groupe (offre Pro) se tiennent en visio sur une période de 2 mois à compter de l&apos;achat. Les séances individuelles (offre VIP) sont à utiliser dans les 3 mois suivant l&apos;achat. Les séances non utilisées dans ces délais ne sont pas reportées.</li>
            <li><strong>Droit de rétractation et garantie.</strong> En demandant l&apos;accès immédiat au contenu numérique, l&apos;acheteur reconnaît renoncer à son droit légal de rétractation. Envol accorde néanmoins une garantie commerciale « satisfait ou remboursé » de 14 jours à compter de l&apos;achat, sur simple demande écrite, sans justification. Le remboursement entraîne la fermeture de l&apos;accès.</li>
            <li><strong>Résultats.</strong> La formation transmet une méthode et des outils. Les exemples de revenus sont illustratifs : les résultats dépendent du travail, de l&apos;expérience et du marché de chaque élève, et ne sont pas garantis.</li>
            <li><strong>Propriété intellectuelle.</strong> Les vidéos, textes et modèles restent la propriété de l&apos;éditeur. Les modèles peuvent être utilisés par l&apos;élève pour ses propres clients, mais ne peuvent être revendus ou diffusés en tant que tels.</li>
            <li><strong>Données personnelles.</strong> Les données collectées (nom, e-mail, téléphone, progression) servent uniquement à fournir la formation et à communiquer avec l&apos;élève. Elles ne sont jamais revendues. Vous pouvez demander leur suppression à tout moment par e-mail.</li>
          </ol>
        </section>
      </div>
    </PublicShell>
  );
}
