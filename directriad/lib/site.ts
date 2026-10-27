export const site = {
  name: "DirectRiad",
  tagline: "Sites de réservation directe pour riads, maisons d'hôtes et agences au Maroc",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3010",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "212600000000",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "contact@directriad.com",
  city: "Marrakech · Casablanca · Agadir · Fès",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Offer = {
  id: string;
  name: string;
  setup: number;
  monthly: number;
  pitch: string;
  delivery: string;
  features: string[];
  highlighted?: boolean;
};

export const offers: Offer[] = [
  {
    id: "vitrine",
    name: "Vitrine",
    setup: 690,
    monthly: 29,
    pitch: "Un beau site rapide pour être trouvé sur Google et contacté sur WhatsApp.",
    delivery: "Livré en 7 jours",
    features: [
      "Site 5 pages, mobile et ultra rapide",
      "Bilingue français / anglais",
      "Galerie photos, chambres, avis clients",
      "Bouton WhatsApp et formulaire de contact",
      "Fiche Google Business optimisée",
      "Hébergement, SSL et maintenance inclus",
    ],
  },
  {
    id: "reservation",
    name: "Réservation directe",
    setup: 1490,
    monthly: 59,
    pitch: "Vos clients réservent et paient l'acompte chez vous, sans commission Booking.",
    delivery: "Livré en 14 jours",
    highlighted: true,
    features: [
      "Tout le pack Vitrine",
      "Moteur de réservation avec calendrier de disponibilités",
      "Paiement d'acompte en ligne (Stripe / CMI)",
      "Synchronisation iCal avec Booking et Airbnb",
      "4 langues : FR, EN, ES, DE",
      "Emails de confirmation automatiques",
    ],
  },
  {
    id: "croissance",
    name: "Croissance",
    setup: 2490,
    monthly: 149,
    pitch: "On s'occupe aussi de vous ramener des clients chaque mois.",
    delivery: "Livré en 21 jours",
    features: [
      "Tout le pack Réservation directe",
      "Référencement Google (SEO) local et international",
      "2 articles de blog optimisés par mois",
      "Campagne Google Ads configurée",
      "Rapport mensuel des réservations directes",
      "Support prioritaire WhatsApp",
    ],
  },
];

export const faqs = [
  {
    q: "Pourquoi un site alors que je suis déjà sur Booking et Airbnb ?",
    a: "Les plateformes prennent 15 à 20 % de chaque réservation. Un client qui vous a trouvé une fois sur Booking peut réserver directement chez vous la fois suivante, ou recommander votre site à ses amis. Chaque réservation directe, c'est la commission qui reste dans votre poche.",
  },
  {
    q: "Est-ce que je dois quitter Booking ?",
    a: "Non. Le site complète les plateformes. Les calendriers sont synchronisés pour éviter les doubles réservations.",
  },
  {
    q: "Que comprend l'abonnement mensuel ?",
    a: "L'hébergement, le nom de domaine, le certificat SSL, les sauvegardes, les mises à jour de sécurité et les petites modifications (prix, photos, textes). Sans engagement après 12 mois.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "50 % à la commande, 50 % à la mise en ligne. Paiement par virement, carte ou espèces au Maroc.",
  },
  {
    q: "Je n'ai pas de bonnes photos, c'est un problème ?",
    a: "Nous pouvons organiser un shooting photo professionnel en option (à partir de 150 €) dans les grandes villes du Maroc.",
  },
];
