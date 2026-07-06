export const siteConfig = {
  name: "Red Nomad",
  tagline: "Transferts aéroport · Excursions · Circuits privés au Maroc",
  phone: "+212634411760",
  whatsapp: "212634411760",
  email: "contact@rednomad.ma",
  address: "Marrakech, Maroc",
  googleRating: 4.9,
  reviewCount: 36,
  travelers: 300,
  responseTime: "2h",
};

export const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Excursions", href: "#excursions" },
  { label: "Circuits", href: "#circuits" },
  { label: "Activités", href: "#activites" },
  { label: "Transferts", href: "#contact" },
  { label: "Découvrir", href: "#pourquoi" },
];

export const circuits = [
  {
    id: "circuit-sahara-atlas-3j",
    title: "Circuit 3 jours Marrakech, Sahara & Atlas",
    badge: "Best-seller",
    duration: "3 jours",
    description:
      "L'essentiel en 3 jours : Haut Atlas, Aït Benhaddou, dunes de Merzouga, nuit en bivouac de luxe et retour à Marrakech.",
    rating: 4.9,
    reviews: 56,
    price: 95,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Desert_Merzouga_Morocco_Meditation.jpg/1280px-Desert_Merzouga_Morocco_Meditation.jpg",
  },
  {
    id: "sahara-dades-4j",
    title: "Sahara, Gorges du Dadès & Merzouga — 4 jours",
    badge: "Best-seller",
    duration: "4 jours",
    description:
      "Aït Benhaddou UNESCO, Gorges du Dadès et du Todra, Erg Chebbi à Merzouga, vallée du Drâa et oasis de Fint — le grand classique du Sud en 4 jours.",
    rating: 4.8,
    reviews: 62,
    price: 750,
    image: "/images/dest-merzouga-dunes.jpg",
  },
  {
    id: "grand-tour-3j",
    title: "Marrakech — Chefchaouen 3 jours",
    badge: "Villes impériales",
    duration: "3 jours",
    description:
      "Circuit 3 jours de Marrakech à Chefchaouen : Casablanca, Rabat, Fès la ville traditionnelle et les ruelles bleues de Chefchaouen.",
    rating: 4.9,
    reviews: 38,
    price: 450,
    image: "/images/dest-chefchaouen.jpg",
  },
  {
    id: "imperial-cities-8j",
    title: "Villes Impériales Maroc 8 jours — Fès, Meknès, Marrakech",
    badge: "Best-seller",
    duration: "8 jours",
    description:
      "Casablanca, Rabat, Volubilis, Meknès, Fès UNESCO et Chefchaouen la bleue — le grand circuit des villes impériales du Maroc.",
    rating: 4.8,
    reviews: 71,
    price: 1174,
    image: "/images/circuit-casablanca-mosque.jpg",
  },
  {
    id: "southern-coast-8j",
    title: "Taroudante & Essaouira — 8 jours sud marocain & côte atlantique",
    badge: "Insolite",
    duration: "8 jours",
    description:
      "Souss, Anti-Atlas et côte atlantique : Taroudante, Tafraoute, Taghazout et Essaouira — loin des sentiers battus.",
    rating: 4.8,
    reviews: 41,
    price: 1130,
    image: "/images/dest-essaouira-coast.jpg",
  },
  {
    id: "megdaz-3j",
    title: "Vallée de Megdaz",
    badge: "Authentique",
    duration: "3 jours",
    description:
      "L'Atlas authentique : trek dans un village berbère préservé, nuit chez l'habitant, marche dans les terrasses agricoles.",
    rating: 4.9,
    reviews: 31,
    price: 420,
    image: "/images/dest-megdaz-valley.jpg",
  },
];

export const excursions = [
  {
    id: "ourika",
    title: "Vallée de l'Ourika — Excursion privée 1 jour",
    badge: "Populaire",
    duration: "1 jour",
    description:
      "Villages berbères, cascades spectaculaires et vie authentique à seulement 1 h de Marrakech.",
    rating: 4.8,
    reviews: 94,
    price: 72,
    image: "/images/dest-ourika-valley.jpg",
  },
  {
    id: "imlil",
    title: "Imlil & Mont Toubkal — Randonnée Haut Atlas",
    badge: "Coup de cœur",
    duration: "1 jour",
    description:
      "Explorez Imlil (1740 m), porte du Toubkal, ses douars berbères et ses panoramas alpins.",
    rating: 4.9,
    reviews: 78,
    price: 84,
    image: "/images/dest-megdaz-atlas.jpg",
  },
  {
    id: "trois-vallees",
    title: "Les 3 Vallées du Haut Atlas — Journée 4×4",
    badge: "Nouvelle excursion",
    duration: "1 jour",
    description:
      "Ourika, Setti Fatma et Oukaimeden (2650 m) : le meilleur du Haut Atlas en une journée.",
    rating: 4.8,
    reviews: 56,
    price: 102,
    image: "/images/dest-ourika-waterfall.jpg",
  },
  {
    id: "ouzoud",
    title: "Cascades d'Ouzoud",
    badge: "Best-seller",
    duration: "1 jour",
    description:
      "Les plus grandes cascades du Maroc (110m), singes magots en liberté, déjeuner face aux chutes.",
    rating: 4.9,
    reviews: 112,
    price: 150,
    image: "/images/dest-ouzoud-falls.png",
  },
  {
    id: "essaouira",
    title: "Essaouira — Médina UNESCO",
    badge: "Populaire",
    duration: "1 jour",
    description:
      "Médina UNESCO, port de pêche, fruits de mer, ambiance bohème au bord de l'Atlantique.",
    rating: 4.8,
    reviews: 103,
    price: 290,
    image: "/images/dest-essaouira-coast.jpg",
  },
  {
    id: "ait-benhaddou",
    title: "Aït Benhaddou & Ouarzazate",
    badge: "Incontournable",
    duration: "1 jour",
    description:
      "Kasbah UNESCO d'Aït Benhaddou, studios Atlas, vues sur l'Atlas.",
    rating: 4.9,
    reviews: 87,
    price: 300,
    image: "/images/dest-ait-benhaddou.jpg",
  },
  {
    id: "casablanca",
    title: "Casablanca — Mosquée Hassan II",
    badge: "Nouveau",
    duration: "1 jour",
    description:
      "Mosquée Hassan II, Art Déco et Corniche atlantique depuis Marrakech.",
    rating: 4.7,
    reviews: 45,
    price: 156,
    image: "/images/circuit-casablanca-mosque.jpg",
  },
  {
    id: "agadir-taghazout",
    title: "Agadir & Taghazout — Surf & plage",
    badge: "Nouvelle excursion",
    duration: "1 jour",
    description:
      "Agadir et Taghazout, village de surf sur la côte atlantique.",
    rating: 4.8,
    reviews: 18,
    price: 125,
    image: "/images/dest-agadir-beach.jpg",
  },
];

export const activities = [
  { title: "Balade à dos de dromadaire", price: 35, icon: "camel" },
  { title: "Bivouac de luxe dans le désert", price: 180, icon: "tent" },
  {
    title: "Vol en montgolfière au-dessus de Marrakech",
    price: 195,
    icon: "balloon",
  },
  { title: "Cours de cuisine marocaine", price: 55, icon: "chef" },
  { title: "Dîner & coucher de soleil dans le désert", price: 65, icon: "sunset" },
  { title: "Hammam & spa traditionnel marocain", price: 30, icon: "spa" },
  { title: "Randonnée & nature dans l'Atlas", price: 45, icon: "hiking" },
  { title: "Quad & Buggy dans le désert", price: 60, icon: "quad" },
];

export const destinations = [
  {
    name: "Marrakech",
    count: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Jemaa_el-Fnaa_at_night.jpg/1280px-Jemaa_el-Fnaa_at_night.jpg",
  },
  {
    name: "Merzouga",
    count: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Desert_Merzouga_Morocco_Meditation.jpg/1280px-Desert_Merzouga_Morocco_Meditation.jpg",
  },
  {
    name: "Chefchaouen",
    count: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Chefchaouen_%2836081254503%29.jpg/1280px-Chefchaouen_%2836081254503%29.jpg",
  },
  {
    name: "Fès",
    count: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Fes_Medina.jpg/1280px-Fes_Medina.jpg",
  },
  {
    name: "Essaouira",
    count: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Blue_Fishing_Boat_and_Medina_Walls%2C_Essaouira%2C_Morocco.jpg/1280px-Blue_Fishing_Boat_and_Medina_Walls%2C_Essaouira%2C_Morocco.jpg",
  },
  {
    name: "Megdaz",
    count: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Djebel_Ayachi%2C_Eastern_High_Atlas%2C_Morocco.jpg/1280px-Djebel_Ayachi%2C_Eastern_High_Atlas%2C_Morocco.jpg",
  },
  {
    name: "Agadir",
    count: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Agadir_beach.jpg/1280px-Agadir_beach.jpg",
  },
  {
    name: "Ouarzazate",
    count: 8,
    image: "/images/dest-ouarzazate.jpg",
  },
];

export const testimonials = [
  {
    name: "Claire Aufrechter",
    date: "il y a 2 mois",
    text: "Nous avons fait appel aux services de cette entreprise pour nos trajets lors de nos vacances à Marrakech. Service parfait avec 2 enfants en bas âge, sièges auto et communication impeccable. Nous contacterons Hamid sans aucun doute !",
  },
  {
    name: "Adil Kharbouch",
    date: "il y a un mois",
    text: "Une agence sérieuse avec un service de grande qualité. Toujours à l'écoute, réactive et fiable. C'est un vrai plaisir de travailler avec eux.",
  },
  {
    name: "Geneviève Boutin",
    date: "il y a 7 mois",
    text: "Service parfait, gentillesse, patience car nous étions souvent en retard, véhicule récent et très propre. Merci.",
  },
  {
    name: "Salvatore Ristagno",
    date: "il y a 3 mois",
    text: "Super service et professionnalisme. Merci beaucoup Hamid et à bientôt.",
  },
];

export const features = [
  {
    title: "Guides berbères locaux",
    description:
      "Nés et grandis dans l'Atlas, le Sahara, les vallées. Ils connaissent les villages, les passes, les familles.",
  },
  {
    title: "Aventures sur mesure",
    description:
      "Bivouac privatisé, trek hors GPS, route off-road. On dessine votre itinéraire selon votre tempo.",
  },
  {
    title: "Un humain joignable 24/7",
    description:
      "WhatsApp direct avec votre conseiller pendant tout le séjour. Pas un chatbot, pas un standard.",
  },
  {
    title: "Tout testé sur le terrain",
    description:
      "Aucun hôtel, bivouac ou chauffeur que nous n'ayons personnellement testé. Zéro mauvaise surprise.",
  },
];

export const stats = [
  { value: 12, suffix: "+", label: "Années d'expérience" },
  { value: 300, suffix: "+", label: "Voyages réalisés" },
  { value: 45, suffix: "+", label: "Destinations" },
  { value: 4.9, suffix: "/5", label: "Note moyenne" },
];
