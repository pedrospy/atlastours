export type TemplateId = "saveur" | "eclat" | "atelier";

export type ServiceItem = { name: string; price: number | null; description: string };

export type Category = {
  id: string;
  label: string;
  template: TemplateId;
  servicesTitle: string;
  ctaLabel: string;
  tagline: (city: string) => string;
  description: (name: string, city: string) => string;
  hours: string;
  services: ServiceItem[];
  color: string;
};

const s = (name: string, mad: number | null, description = ""): ServiceItem => ({
  name,
  price: mad === null ? null : mad * 100,
  description,
});

export const categories: Category[] = [
  {
    id: "restaurant",
    label: "Restaurant",
    template: "saveur",
    servicesTitle: "Notre carte",
    ctaLabel: "Réserver une table",
    tagline: (city) => `Cuisine maison et produits frais au cœur de ${city}`,
    description: (name, city) =>
      `${name} vous accueille à ${city} pour des plats généreux, préparés chaque jour avec des produits du marché. Sur place, à emporter ou en livraison.`,
    hours: "Lundi – Samedi : 12h00 – 23h00\nDimanche : 12h00 – 16h00",
    services: [
      s("Tajine poulet citron confit", 75, "Olives, pommes de terre fondantes"),
      s("Couscous royal (vendredi)", 95, "Sept légumes, agneau, merguez"),
      s("Pastilla au poulet", 85, "Amandes, cannelle, sucre glace"),
      s("Salade marocaine", 35, "Tomates, concombre, oignon, coriandre"),
      s("Thé à la menthe", 15),
    ],
    color: "#b45309",
  },
  {
    id: "cafe",
    label: "Café / Pâtisserie",
    template: "saveur",
    servicesTitle: "La carte",
    ctaLabel: "Commander sur WhatsApp",
    tagline: (city) => `Votre pause gourmande à ${city}`,
    description: (name, city) =>
      `${name} est le rendez-vous des gourmands à ${city} : cafés soignés, pâtisseries du jour, petits-déjeuners et jus frais pressés minute.`,
    hours: "Tous les jours : 7h00 – 22h00",
    services: [
      s("Petit-déjeuner complet", 45, "Msemen, baghrir, œuf, jus d'orange, boisson chaude"),
      s("Café crème", 15),
      s("Jus d'orange pressé", 18),
      s("Pâtisserie du jour", 12),
      s("Crêpe Nutella banane", 30),
    ],
    color: "#92400e",
  },
  {
    id: "coiffeur",
    label: "Coiffeur / Barbier",
    template: "eclat",
    servicesTitle: "Prestations & tarifs",
    ctaLabel: "Prendre rendez-vous",
    tagline: (city) => `Coupe, barbe et style à ${city}`,
    description: (name, city) =>
      `Chez ${name}, on prend le temps de vous écouter. Coupes modernes, dégradés précis et taille de barbe à l'ancienne, dans un salon propre et accueillant à ${city}.`,
    hours: "Mardi – Dimanche : 10h00 – 21h00\nLundi : fermé",
    services: [
      s("Coupe homme", 50),
      s("Dégradé + barbe", 80),
      s("Taille de barbe à l'ancienne", 40, "Serviette chaude"),
      s("Coupe enfant", 35),
      s("Soin du visage", 100),
    ],
    color: "#1f2937",
  },
  {
    id: "beaute",
    label: "Salon de beauté / Spa",
    template: "eclat",
    servicesTitle: "Soins & tarifs",
    ctaLabel: "Prendre rendez-vous",
    tagline: (city) => `Votre moment de beauté et de bien-être à ${city}`,
    description: (name, city) =>
      `${name} vous accueille à ${city} dans un espace calme et raffiné : coiffure, soins du visage, hammam, manucure et maquillage pour toutes les occasions.`,
    hours: "Lundi – Samedi : 10h00 – 20h00\nDimanche : sur rendez-vous",
    services: [
      s("Brushing", 80),
      s("Hammam traditionnel + gommage", 150),
      s("Soin du visage éclat", 250),
      s("Manucure semi-permanent", 120),
      s("Maquillage mariée", 800, "Essai inclus"),
    ],
    color: "#be185d",
  },
  {
    id: "sante",
    label: "Médecin / Dentiste / Kiné",
    template: "eclat",
    servicesTitle: "Consultations",
    ctaLabel: "Prendre rendez-vous",
    tagline: (city) => `Des soins attentifs et de qualité à ${city}`,
    description: (name, city) =>
      `${name} vous reçoit à ${city} dans un cabinet moderne. Consultations sur rendez-vous, prise en charge des urgences et suivi personnalisé.`,
    hours: "Lundi – Vendredi : 9h00 – 18h00\nSamedi : 9h00 – 13h00",
    services: [
      s("Consultation", 250),
      s("Contrôle et suivi", 200),
      s("Urgence", null, "Appelez-nous directement"),
    ],
    color: "#0369a1",
  },
  {
    id: "coach",
    label: "Coach / Salle de sport / Cours",
    template: "eclat",
    servicesTitle: "Formules",
    ctaLabel: "Réserver une séance",
    tagline: (city) => `Atteignez vos objectifs avec un accompagnement sur mesure à ${city}`,
    description: (name, city) =>
      `${name} vous accompagne à ${city} avec des programmes adaptés à votre niveau : remise en forme, perte de poids, préparation physique ou cours particuliers.`,
    hours: "Lundi – Samedi : 7h00 – 21h00",
    services: [
      s("Séance découverte", 0, "Offerte"),
      s("Séance individuelle", 200),
      s("Pack 10 séances", 1500),
      s("Abonnement mensuel", 350),
    ],
    color: "#6d28d9",
  },
  {
    id: "artisan",
    label: "Artisan (plombier, électricien, menuisier…)",
    template: "atelier",
    servicesTitle: "Nos services",
    ctaLabel: "Demander un devis",
    tagline: (city) => `Travaux rapides et soignés à ${city} et environs`,
    description: (name, city) =>
      `${name} intervient à ${city} et dans les environs pour vos travaux d'installation, de dépannage et de rénovation. Devis gratuit, travail propre et garanti.`,
    hours: "Lundi – Samedi : 8h00 – 19h00\nUrgences : 7j/7",
    services: [
      s("Dépannage urgent", 200, "Déplacement inclus en ville"),
      s("Installation complète", null, "Sur devis gratuit"),
      s("Rénovation", null, "Sur devis gratuit"),
      s("Entretien annuel", 300),
    ],
    color: "#1d4ed8",
  },
  {
    id: "garage",
    label: "Garage / Mécanique / Lavage auto",
    template: "atelier",
    servicesTitle: "Prestations",
    ctaLabel: "Prendre rendez-vous",
    tagline: (city) => `Entretien et réparation toutes marques à ${city}`,
    description: (name, city) =>
      `${name} entretient et répare votre véhicule à ${city} : vidange, freins, diagnostic électronique, climatisation. Prix clairs annoncés avant intervention.`,
    hours: "Lundi – Samedi : 8h30 – 19h00",
    services: [
      s("Vidange + filtres", 450, "Huile et filtres inclus"),
      s("Diagnostic électronique", 150),
      s("Plaquettes de frein (avant)", 400, "Pièces et main d'œuvre"),
      s("Recharge climatisation", 350),
      s("Lavage complet intérieur/extérieur", 80),
    ],
    color: "#dc2626",
  },
  {
    id: "boutique",
    label: "Boutique / Commerce",
    template: "atelier",
    servicesTitle: "Nos produits",
    ctaLabel: "Commander sur WhatsApp",
    tagline: (city) => `Qualité et bons prix, à ${city}`,
    description: (name, city) =>
      `${name} vous propose à ${city} une sélection de produits de qualité à prix justes. Commandez sur WhatsApp, retrait en boutique ou livraison.`,
    hours: "Lundi – Samedi : 9h30 – 21h00\nDimanche : 10h00 – 14h00",
    services: [
      s("Nouveautés de la semaine", null, "Demandez-nous les photos sur WhatsApp"),
      s("Livraison en ville", 20),
      s("Emballage cadeau", 0, "Offert"),
    ],
    color: "#0f766e",
  },
  {
    id: "autre",
    label: "Autre activité",
    template: "atelier",
    servicesTitle: "Nos services",
    ctaLabel: "Nous contacter",
    tagline: (city) => `Votre professionnel de confiance à ${city}`,
    description: (name, city) =>
      `${name} est à votre service à ${city}. Contactez-nous par téléphone ou WhatsApp pour toute demande, nous répondons rapidement.`,
    hours: "Lundi – Samedi : 9h00 – 19h00",
    services: [s("Service principal", null, "Sur devis"), s("Conseil", 0, "Gratuit")],
    color: "#0f766e",
  },
];

export function getCategory(id: string | null | undefined): Category {
  return categories.find((c) => c.id === id) ?? categories[categories.length - 1];
}

export const brandColors = [
  { name: "Émeraude", value: "#0f766e" },
  { name: "Océan", value: "#0369a1" },
  { name: "Indigo", value: "#1d4ed8" },
  { name: "Violet", value: "#6d28d9" },
  { name: "Rose", value: "#be185d" },
  { name: "Rouge", value: "#dc2626" },
  { name: "Terracotta", value: "#c2410c" },
  { name: "Ambre", value: "#b45309" },
  { name: "Chocolat", value: "#92400e" },
  { name: "Olive", value: "#4d7c0f" },
  { name: "Anthracite", value: "#1f2937" },
];
