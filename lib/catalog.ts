export const siteConfig = {
  name: "Sahara Star Tour",
  whatsappName: "Sahara Travel",
  phone: "+212634411760",
  whatsapp: "212634411760",
  email: "contact@saharatravel.com",
  googleRating: 4.9,
  reviewCount: 36,
  travelers: 300,
  responseTime: "2h",
};

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const circuitsCatalog = [
  {
    id: "circuit-11-jours",
    rating: 4.9,
    reviews: 56,
    price: 1290,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Desert_Merzouga_Morocco_Meditation.jpg/1280px-Desert_Merzouga_Morocco_Meditation.jpg",
  },
  {
    id: "grand-tour-17",
    rating: 4.9,
    reviews: 38,
    price: 2190,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Chefchaouen_%2836081254503%29.jpg/1280px-Chefchaouen_%2836081254503%29.jpg",
  },
  {
    id: "merzouga-3j",
    rating: 4.9,
    reviews: 142,
    price: 380,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Desert_Merzouga_Morocco_Meditation.jpg/1280px-Desert_Merzouga_Morocco_Meditation.jpg",
  },
  {
    id: "megdaz-3j",
    rating: 4.9,
    reviews: 31,
    price: 420,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Djebel_Ayachi%2C_Eastern_High_Atlas%2C_Morocco.jpg/1280px-Djebel_Ayachi%2C_Eastern_High_Atlas%2C_Morocco.jpg",
  },
] as const;

export const excursionsCatalog = [
  {
    id: "ouzoud",
    rating: 4.9,
    reviews: 112,
    price: 80,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ouzoud_Falls%2C_Morocco%2C_20250126_1355_7465.jpg/1280px-Ouzoud_Falls%2C_Morocco%2C_20250126_1355_7465.jpg",
  },
  {
    id: "essaouira",
    rating: 4.8,
    reviews: 103,
    price: 80,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Blue_Fishing_Boat_and_Medina_Walls%2C_Essaouira%2C_Morocco.jpg/1280px-Blue_Fishing_Boat_and_Medina_Walls%2C_Essaouira%2C_Morocco.jpg",
  },
  {
    id: "ait-benhaddou",
    rating: 4.9,
    reviews: 87,
    price: 90,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg/1280px-Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg",
  },
  {
    id: "ourika",
    rating: 4.8,
    reviews: 134,
    price: 72,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ourika_Valley%2C_Morocco_%285218373547%29.jpg/1280px-Ourika_Valley%2C_Morocco_%285218373547%29.jpg",
  },
] as const;

export const activitiesCatalog = [
  { id: "camel", price: 35, icon: "camel" },
  { id: "tent", price: 180, icon: "tent" },
  { id: "balloon", price: 195, icon: "balloon" },
  { id: "chef", price: 55, icon: "chef" },
  { id: "sunset", price: 65, icon: "sunset" },
  { id: "spa", price: 30, icon: "spa" },
  { id: "hiking", price: 45, icon: "hiking" },
  { id: "quad", price: 60, icon: "quad" },
] as const;

export const destinationsCatalog = [
  {
    id: "marrakech",
    count: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Jemaa_el-Fnaa_at_night.jpg/1280px-Jemaa_el-Fnaa_at_night.jpg",
  },
  {
    id: "merzouga",
    count: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Desert_Merzouga_Morocco_Meditation.jpg/1280px-Desert_Merzouga_Morocco_Meditation.jpg",
  },
  {
    id: "chefchaouen",
    count: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Chefchaouen_%2836081254503%29.jpg/1280px-Chefchaouen_%2836081254503%29.jpg",
  },
  {
    id: "fes",
    count: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Fes_Medina.jpg/1280px-Fes_Medina.jpg",
  },
  {
    id: "essaouira",
    count: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Blue_Fishing_Boat_and_Medina_Walls%2C_Essaouira%2C_Morocco.jpg/1280px-Blue_Fishing_Boat_and_Medina_Walls%2C_Essaouira%2C_Morocco.jpg",
  },
  {
    id: "megdaz",
    count: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Djebel_Ayachi%2C_Eastern_High_Atlas%2C_Morocco.jpg/1280px-Djebel_Ayachi%2C_Eastern_High_Atlas%2C_Morocco.jpg",
  },
  {
    id: "agadir",
    count: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Agadir_beach.jpg/1280px-Agadir_beach.jpg",
  },
  {
    id: "ouarzazate",
    count: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kasbah_Taourirt_in_Ouarzazate_2011.jpg/1280px-Kasbah_Taourirt_in_Ouarzazate_2011.jpg",
  },
] as const;

export const statsCatalog = [
  { value: 12, suffix: "+" },
  { value: 300, suffix: "+" },
  { value: 45, suffix: "+" },
  { value: 4.9, suffix: "/5" },
] as const;

export const testimonialsCatalog = [
  { id: "claire", name: "Claire Aufrechter" },
  { id: "adil", name: "Adil Kharbouch" },
  { id: "genevieve", name: "Geneviève Boutin" },
  { id: "salvatore", name: "Salvatore Ristagno" },
] as const;

export const featuresCatalog = [
  { id: "guides" },
  { id: "custom" },
  { id: "support" },
  { id: "tested" },
] as const;

export const navLinkIds = [
  "destinations",
  "excursions",
  "circuits",
  "activities",
  "transfers",
  "discover",
] as const;
