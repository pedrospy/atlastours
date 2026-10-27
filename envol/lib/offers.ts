export type OfferId = "essentiel" | "pro" | "vip";

export type Offer = {
  id: OfferId;
  rank: number;
  name: string;
  price: number;
  tagline: string;
  features: string[];
  highlight?: boolean;
  limited?: string;
};

export const offers: Offer[] = [
  {
    id: "essentiel",
    rank: 1,
    name: "Essentiel",
    price: 19700,
    tagline: "La méthode complète, à votre rythme",
    features: [
      "Les 6 modules vidéo + supports écrits",
      "Modèles de sites, scripts de prospection et de vente",
      "Modèle de devis, de contrat et de facture",
      "Accès à vie et mises à jour incluses",
      "Certificat de fin de formation",
    ],
  },
  {
    id: "pro",
    rank: 2,
    name: "Pro",
    price: 49700,
    tagline: "La méthode + un accompagnement de groupe",
    highlight: true,
    features: [
      "Tout le contenu Essentiel",
      "8 coachings de groupe en direct (2 mois)",
      "Communauté privée des élèves",
      "Relecture de votre offre et de votre premier site",
      "Module bonus : vendre la maintenance mensuelle",
    ],
  },
  {
    id: "vip",
    rank: 3,
    name: "VIP",
    price: 149000,
    tagline: "On construit votre activité ensemble",
    limited: "3 places par mois",
    features: [
      "Tout le contenu Pro",
      "4 séances individuelles de 60 min",
      "Prospection faite avec vous : vos 50 premiers contacts",
      "Accès WhatsApp direct pendant 60 jours",
      "Analyse de vos appels de vente",
    ],
  },
];

export function getOffer(id: string | null | undefined): Offer | undefined {
  return offers.find((o) => o.id === id);
}

export function offerRank(id: string | null | undefined) {
  return getOffer(id)?.rank ?? 0;
}

export function offerName(id: string | null | undefined) {
  return getOffer(id)?.name ?? id ?? "—";
}
