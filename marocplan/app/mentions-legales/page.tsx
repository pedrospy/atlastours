import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Mentions légales · ${site.name}`,
  robots: { index: false },
};

const sections = [
  {
    title: "Éditeur du site",
    lines: [
      `${site.name} est édité par [Nom et prénom ou raison sociale], [statut : auto-entrepreneur, SARL…].`,
      "Adresse : [adresse complète], Maroc.",
      "Identifiant fiscal / ICE : [numéro].",
      `Contact : ${site.email}.`,
      "Directeur de la publication : [nom].",
    ],
  },
  {
    title: "Hébergement",
    lines: ["Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis · vercel.com."],
  },
  {
    title: "Prestations et paiement",
    lines: [
      "Les itinéraires sont des prestations de conseil personnalisées livrées par email ou WhatsApp sous 24 h après réception du paiement et des informations du client.",
      "Le paiement est traité par PayPal ou Stripe : aucune donnée bancaire ne transite par ce site.",
      "Si l'itinéraire ne convient pas après ajustement, le client est remboursé sur simple demande.",
    ],
  },
  {
    title: "Données personnelles",
    lines: [
      "Ce site ne stocke aucune donnée : les réponses au formulaire restent dans votre navigateur et ne sont transmises que lorsque vous les envoyez vous-même par WhatsApp ou email.",
      "Ces informations servent uniquement à préparer votre itinéraire et ne sont jamais revendues.",
      `Vous pouvez demander leur suppression à tout moment en écrivant à ${site.email}.`,
    ],
  },
];

export default function LegalPage() {
  return (
    <main className="container-x max-w-3xl py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-clay">
        <ArrowLeft className="h-4 w-4" />
        {site.name}
      </Link>
      <h1 className="section-title mt-6">Mentions légales</h1>
      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-ink/10 bg-white p-6">
            <h2 className="text-lg font-bold">{section.title}</h2>
            <div className="mt-3 space-y-2 text-ink/70">
              {section.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
