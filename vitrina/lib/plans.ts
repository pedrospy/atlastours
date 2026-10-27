export type PlanId = "essentiel" | "pro" | "premium";

export type Plan = {
  id: PlanId;
  name: string;
  price: number;
  priceMad: number;
  monthly: number;
  pitch: string;
  features: string[];
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: 29000,
    priceMad: 290000,
    monthly: 1900,
    pitch: "Pour être trouvé et contacté facilement.",
    features: [
      "Site une page, mobile et rapide",
      "Boutons Appeler et WhatsApp",
      "Services et prix, horaires, carte",
      "Livré en 48 h",
      "Hébergement + adresse vitrina en ligne",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 59000,
    priceMad: 590000,
    monthly: 2900,
    pitch: "Le choix des commerces qui veulent plus de clients.",
    highlight: true,
    features: [
      "Tout Essentiel",
      "Galerie photos et avis clients",
      "Nom de domaine .ma ou .com inclus 1 an",
      "Fiche Google Business optimisée",
      "2 mises à jour par mois",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 99000,
    priceMad: 990000,
    monthly: 4900,
    pitch: "Une présence complète, gérée pour vous.",
    features: [
      "Tout Pro",
      "Séance photo sur place (20 photos)",
      "Textes rédigés en français et arabe",
      "Mises à jour illimitées",
      "Rapport de visites mensuel",
    ],
  },
];

export function getPlan(id: string | null | undefined): Plan | undefined {
  return plans.find((p) => p.id === id);
}
