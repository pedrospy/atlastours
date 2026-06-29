export const siteConfig = {
  name: "Red Nomad",
  whatsappName: "Red Nomad",
  phone: "+212634411760",
  whatsapp: "212634411760",
  email: "contact@rednomad.ma",
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
    slug: "marrakech-sahara-atlas-11-days",
    rating: 4.9,
    reviews: 56,
    price: 1290,
    image: "/images/dest-desert-oasis.png",
    images: [
      "/images/dest-marrakech-jemaa.jpg",
      "/images/dest-desert-oasis.png",
      "/images/fleet-suv-kasbah.png",
      "/images/route-mountain-pass.png",
    ],
  },
  {
    id: "grand-tour-17",
    slug: "grand-tour-maroc-17-jours",
    rating: 4.9,
    reviews: 38,
    price: 2190,
    image: "/images/dest-volubilis-site.png",
  },
  {
    id: "merzouga-3j",
    slug: "desert-merzouga-3-jours",
    rating: 4.9,
    reviews: 142,
    price: 380,
    image: "/images/dest-sunset-horses.png",
  },
  {
    id: "megdaz-3j",
    slug: "vallee-megdaz-3-jours",
    rating: 4.9,
    reviews: 31,
    price: 420,
    image: "/images/dest-megdaz-village.jpg",
  },
] as const;

export const excursionsCatalog = [
  {
    id: "ouzoud",
    slug: "cascades-ouzoud-day-trip",
    rating: 4.9,
    reviews: 112,
    price: 80,
    image: "/images/dest-ouzoud-falls.png",
  },
  {
    id: "essaouira",
    slug: "essaouira-medina-day-trip",
    rating: 4.8,
    reviews: 103,
    price: 80,
    image: "/images/dest-essaouira-port.png",
  },
  {
    id: "ait-benhaddou",
    slug: "ait-benhaddou-ouarzazate-unesco-day-trip",
    rating: 4.9,
    reviews: 87,
    price: 90,
    image: "/images/fleet-suv-kasbah.png",
  },
  {
    id: "ourika",
    slug: "ourika-valley-day-trip",
    rating: 4.8,
    reviews: 134,
    price: 72,
    image: "/images/dest-ourika-valley.jpg",
    images: [
      "/images/dest-ourika-valley.jpg",
      "/images/dest-ourika-waterfall.jpg",
      "/images/dest-ourika-river.jpg",
      "/images/dest-ourika-argan.jpg",
    ],
  },
] as const;

export const fleetCatalog = [
  { id: "sedan", icon: "sedan" as const, seats: "1-3" },
  { id: "van", icon: "van" as const, seats: "4-7" },
  { id: "suv", icon: "suv" as const, seats: "1-4" },
  { id: "minibus", icon: "minibus" as const, seats: "8-17" },
] as const;

export const transfersCatalog = [
  {
    id: "airport",
    price: 25,
    image: "/images/transfer-marrakech-airport.jpg",
  },
  {
    id: "city",
    price: 20,
    image: "/images/dest-marrakech-souk.jpg",
  },
  {
    id: "intercity",
    price: 80,
    image: "/images/route-mountain-pass.png",
  },
  {
    id: "group",
    price: 120,
    image: "/images/fleet-van-desert.png",
  },
] as const;

export const galleryCatalog = [
  { id: "van-desert", image: "/images/fleet-van-desert.png" },
  { id: "vans-tunnel", image: "/images/fleet-vans-tunnel.png" },
  { id: "suv-kasbah", image: "/images/fleet-suv-kasbah.png" },
  { id: "atlas-highway", image: "/images/route-atlas-highway.png" },
  { id: "mountain-pass", image: "/images/route-mountain-pass.png" },
  { id: "dades-gorges", image: "/images/route-dades-gorges.png" },
  { id: "ouzoud", image: "/images/dest-ouzoud-falls.png" },
  { id: "ourika", image: "/images/dest-ourika-valley.jpg" },
  { id: "essaouira", image: "/images/dest-essaouira-port.png" },
  { id: "volubilis", image: "/images/dest-volubilis-arches.png" },
  { id: "desert-oasis", image: "/images/dest-desert-oasis.png" },
  { id: "fes-tannery", image: "/images/dest-fes-tannery.png" },
  { id: "sunset", image: "/images/dest-sunset-lake.png" },
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
    slug: "marrakech-imperial-city",
    count: 20,
    rating: 4.9,
    reviews: 186,
    price: 25,
    image: "/images/dest-marrakech-jemaa.jpg",
    images: [
      "/images/dest-marrakech-jemaa.jpg",
      "/images/dest-marrakech-medina.jpg",
      "/images/dest-marrakech-souk.jpg",
      "/images/dest-marrakech-night.jpg",
    ],
  },
  {
    id: "merzouga",
    slug: "merzouga-sahara-desert",
    count: 6,
    rating: 4.9,
    reviews: 142,
    price: 380,
    image: "/images/dest-merzouga-dunes.jpg",
    images: [
      "/images/dest-merzouga-dunes.jpg",
      "/images/dest-desert-oasis.png",
      "/images/dest-sunset-horses.png",
      "/images/dest-desert-mesa.png",
    ],
  },
  {
    id: "nord-maroc",
    slug: "northern-morocco-tangier-chefchaouen",
    count: 5,
    rating: 4.8,
    reviews: 67,
    price: 120,
    image: "/images/dest-chefchaouen.jpg",
    images: [
      "/images/dest-chefchaouen.jpg",
      "/images/dest-tangier-medina.jpg",
      "/images/dest-tangier-street.jpg",
      "/images/dest-cape-spartel.png",
    ],
  },
  {
    id: "fes",
    slug: "fes-imperial-medina",
    count: 5,
    rating: 4.9,
    reviews: 98,
    price: 95,
    image: "/images/dest-fes-tannery.png",
    images: [
      "/images/dest-fes-tannery.png",
      "/images/dest-fes-medina.jpg",
      "/images/dest-fes-bab.jpg",
    ],
  },
  {
    id: "essaouira",
    slug: "essaouira-atlantic-medina",
    count: 5,
    rating: 4.8,
    reviews: 103,
    price: 80,
    image: "/images/dest-essaouira-medina.jpg",
    images: [
      "/images/dest-essaouira-medina.jpg",
      "/images/dest-essaouira-port.png",
      "/images/dest-essaouira-harbor.png",
      "/images/dest-essaouira-ramparts.jpg",
    ],
  },
  {
    id: "megdaz",
    slug: "megdaz-atlas-valley",
    count: 3,
    rating: 4.9,
    reviews: 31,
    price: 420,
    image: "/images/dest-megdaz-valley.jpg",
    images: [
      "/images/dest-megdaz-valley.jpg",
      "/images/dest-megdaz-village.jpg",
      "/images/dest-megdaz-atlas.jpg",
      "/images/route-mountain-pass.png",
    ],
  },
  {
    id: "agadir",
    slug: "agadir-south-coast",
    count: 2,
    rating: 4.7,
    reviews: 45,
    price: 90,
    image: "/images/dest-agadir-beach.jpg",
  },
  {
    id: "oualili",
    slug: "oualili-volubilis-ruins",
    count: 8,
    rating: 4.9,
    reviews: 74,
    price: 85,
    image: "/images/dest-volubilis-mosaic.png",
    images: [
      "/images/dest-volubilis-mosaic.png",
      "/images/dest-volubilis-ruins.png",
      "/images/dest-volubilis-site.png",
      "/images/dest-volubilis-arches.png",
    ],
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
  "excursions",
  "circuits",
  "destinations",
  "activities",
  "transfers",
  "discover",
] as const;
