import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const mad = (n) => (n === null ? null : n * 100);

const sites = [
  {
    slug: "cafe-nour-marrakech",
    businessName: "Café Nour",
    category: "cafe",
    city: "Marrakech",
    address: "12 rue de la Liberté, Guéliz",
    phone: "06 61 23 45 67",
    whatsapp: "06 61 23 45 67",
    instagram: "@cafenour.mrk",
    tagline: "Petits-déjeuners, pâtisseries maison et jus frais au cœur de Guéliz",
    description:
      "Depuis 2015, Café Nour accueille habitants et voisins de Guéliz pour un café soigné, des msemen tout chauds et des pâtisseries préparées chaque matin dans notre cuisine. Terrasse ombragée, Wi-Fi gratuit et service avec le sourire.",
    hours: "Lundi – Samedi : 7h00 – 22h00\nDimanche : 8h00 – 20h00",
    services: [
      { name: "Petit-déjeuner beldi", price: mad(45), description: "Msemen, baghrir, amlou, œuf, jus d'orange, thé ou café" },
      { name: "Café crème", price: mad(15), description: "" },
      { name: "Thé à la menthe (théière)", price: mad(20), description: "Pour 2 personnes" },
      { name: "Jus d'orange pressé", price: mad(18), description: "" },
      { name: "Avocat lait-amandes", price: mad(30), description: "" },
      { name: "Pâtisserie du jour", price: mad(12), description: "Cornes de gazelle, ghriba, millefeuille" },
    ],
    reviews: [
      { author: "Salma B.", text: "Le meilleur petit-déjeuner de Guéliz, et le personnel est adorable.", rating: 5 },
      { author: "Thomas R.", text: "Terrasse agréable, café excellent, prix très corrects.", rating: 5 },
      { author: "Youssef A.", text: "Mon arrêt quotidien avant le travail. Les msemen sont parfaits.", rating: 4 },
    ],
    color: "#b45309",
  },
  {
    slug: "salon-yasmine-casablanca",
    businessName: "Salon Yasmine",
    category: "beaute",
    city: "Casablanca",
    address: "45 boulevard Ghandi, Maârif",
    phone: "06 70 11 22 33",
    whatsapp: "06 70 11 22 33",
    instagram: "@salonyasmine.casa",
    tagline: "Coiffure, hammam et soins du visage dans un cadre raffiné",
    description:
      "Salon Yasmine est un espace 100 % féminin au Maârif. Notre équipe de coiffeuses et d'esthéticiennes vous accueille sur rendez-vous pour un brushing express comme pour une journée de mariée complète.",
    hours: "Mardi – Samedi : 10h00 – 20h00\nDimanche : 10h00 – 15h00\nLundi : fermé",
    services: [
      { name: "Brushing", price: mad(80), description: "Cheveux courts à mi-longs" },
      { name: "Coupe + brushing", price: mad(180), description: "" },
      { name: "Hammam traditionnel + gommage", price: mad(150), description: "Savon beldi, ghassoul" },
      { name: "Soin du visage éclat", price: mad(250), description: "60 minutes" },
      { name: "Manucure semi-permanent", price: mad(120), description: "" },
      { name: "Forfait mariée", price: mad(2500), description: "Essai, coiffure, maquillage le jour J" },
    ],
    reviews: [
      { author: "Imane K.", text: "Accueil chaleureux et résultat impeccable pour mon mariage. Merci à toute l'équipe !", rating: 5 },
      { author: "Nadia L.", text: "Hammam propre et relaxant, je recommande le gommage.", rating: 5 },
    ],
    color: "#be185d",
  },
  {
    slug: "garage-atlas-auto-rabat",
    businessName: "Garage Atlas Auto",
    category: "garage",
    city: "Rabat",
    address: "Zone industrielle Takadoum, lot 18",
    phone: "05 37 12 34 56",
    whatsapp: "06 62 98 76 54",
    tagline: "Entretien et réparation toutes marques, prix annoncés avant intervention",
    description:
      "Garage Atlas Auto entretient les véhicules des particuliers et des professionnels de Rabat depuis plus de 10 ans. Diagnostic électronique, mécanique générale, freins, climatisation : on vous explique tout et on vous donne le prix avant de commencer.",
    hours: "Lundi – Vendredi : 8h30 – 19h00\nSamedi : 8h30 – 14h00",
    services: [
      { name: "Vidange + filtres", price: mad(450), description: "Huile et filtres inclus, citadine" },
      { name: "Diagnostic électronique", price: mad(150), description: "Offert si réparation" },
      { name: "Plaquettes de frein avant", price: mad(400), description: "Pièces et main d'œuvre" },
      { name: "Recharge climatisation", price: mad(350), description: "" },
      { name: "Distribution", price: null, description: "Sur devis selon modèle" },
    ],
    reviews: [
      { author: "Hamza E.", text: "Honnêtes et rapides. Le prix annoncé était le prix payé.", rating: 5 },
      { author: "Karim T.", text: "Diagnostic clair, voiture prête le jour même.", rating: 4 },
    ],
    color: "#dc2626",
  },
];

for (const site of sites) {
  await db.site.upsert({
    where: { slug: site.slug },
    update: { ...site, status: "PUBLISHED" },
    create: { ...site, status: "PUBLISHED", publishedAt: new Date(), currency: "MAD" },
  });
  console.log(`✔ /s/${site.slug}`);
}

await db.$disconnect();
