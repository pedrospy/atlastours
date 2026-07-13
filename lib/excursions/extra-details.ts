import type { ExcursionDetailContent } from "./types";

type LocaleBlock = Record<
  "imlil" | "trois-vallees" | "casablanca" | "agadir-taghazout" | "agafay",
  ExcursionDetailContent
>;

const sharedGroupPricingFr = (base: number) => [
  { travelers: "2 voyageurs", price: `${Math.round(base * 1.35)} €/pers.` },
  { travelers: "3–4 voyageurs", price: `${base} €/pers.` },
  { travelers: "5–7 voyageurs", price: `${Math.round(base * 0.78)} €/pers.` },
  { travelers: "8–14 voyageurs", price: `${Math.round(base * 0.65)} €/pers.` },
  { travelers: "15–17 voyageurs", price: `${Math.round(base * 0.58)} €/pers.` },
];

const sharedGroupPricingEn = (base: number) => [
  { travelers: "2 travelers", price: `€${Math.round(base * 1.35)}/person` },
  { travelers: "3–4 travelers", price: `€${base}/person` },
  { travelers: "5–7 travelers", price: `€${Math.round(base * 0.78)}/person` },
  { travelers: "8–14 travelers", price: `€${Math.round(base * 0.65)}/person` },
  { travelers: "15–17 travelers", price: `€${Math.round(base * 0.58)}/person` },
];

const sharedFaqsFr = [
  {
    question: "Peut-on annuler sans frais ?",
    answer:
      "Oui, annulation gratuite jusqu'à 48 h avant le départ. Au-delà, des frais peuvent s'appliquer.",
  },
  {
    question: "Qu'est-ce qui est inclus ?",
    answer:
      "Transport privé climatisé, chauffeur-guide francophone, eau minérale à bord. Déjeuner inclus selon le programme indiqué.",
  },
  {
    question: "Combien de personnes maximum ?",
    answer: "De 1 à 17 personnes. Privatisation possible pour votre groupe.",
  },
  {
    question: "Quels horaires de départ ?",
    answer:
      "Départ entre 7h et 9h depuis votre riad, retour en fin d'après-midi ou en soirée selon la destination.",
  },
];

export const extraExcursionDetailsFr: LocaleBlock = {
  imlil: {
    metaTitle: "Imlil & Mont Toubkal — Randonnée Haut Atlas 1 jour | Arganis Nomad",
    metaDescription:
      "Excursion privée Imlil (1740 m), porte du Toubkal : douars berbères, panoramas alpins et déjeuner en montagne depuis Marrakech.",
    subtitle: "Porte du Toubkal",
    difficulty: "Modéré",
    duration: "1 jour",
    groupSize: "1–17 personnes",
    departure: "Marrakech",
    languages: "Français, English",
    about:
      "À 1h30 de Marrakech, Imlil (1740 m) est le village de départ des treks vers le mont Toubkal. Entre douars berbères, terrasses cultivées et sommets enneigés, cette excursion offre l'essentiel de l'Atlas en une journée : marche accessible, rencontres locales et déjeuner berbère avec vue sur la vallée.",
    highlights: [
      "Village d'Imlil — porte du Toubkal (4167 m)",
      "Douars berbères et terrasses agricoles",
      "Panoramas alpins à couper le souffle",
      "Marche guidée adaptée à votre niveau",
      "Déjeuner traditionnel en montagne",
    ],
    itinerary: [
      {
        dayLabel: "J1",
        title: "Marrakech — Imlil — Vallée — Marrakech",
        description: "Journée montagne avec marche et déjeuner berbère.",
        steps: [
          "08h00 — Prise en charge à Marrakech, route vers l'Atlas",
          "Arrivée à Imlil, accueil par guide local",
          "Marche dans la vallée : douars, terrasses et points de vue",
          "Déjeuner berbère dans un gîte ou chez l'habitant",
          "Temps libre photos — retour à Marrakech en fin d'après-midi",
        ],
      },
    ],
    included: [
      "Transport privé climatisé aller-retour",
      "Chauffeur-guide francophone",
      "Guide local à Imlil",
      "Marche guidée dans la vallée",
      "Déjeuner traditionnel",
      "Eau minérale à bord",
    ],
    notIncluded: ["Boissons hors eau", "Pourboires", "Équipement de randonnée personnel"],
    groupPricing: sharedGroupPricingFr(84),
    faqs: sharedFaqsFr,
  },
  "trois-vallees": {
    metaTitle: "3 Vallées du Haut Atlas — Journée 4×4 depuis Marrakech | Arganis Nomad",
    metaDescription:
      "Ourika, Setti Fatma et Oukaimeden (2650 m) : le meilleur du Haut Atlas en une journée 4×4 depuis Marrakech.",
    subtitle: "Ourika, Setti Fatma & Oukaimeden",
    difficulty: "Facile",
    duration: "1 jour",
    groupSize: "1–17 personnes",
    departure: "Marrakech",
    languages: "Français, English",
    about:
      "Cette excursion 4×4 réunit les trois joyaux du Haut Atlas proche de Marrakech : la vallée de l'Ourika et ses villages berbères, les cascades de Setti Fatma, puis la montée vers Oukaimerdene (2650 m), station de ski la plus haute d'Afrique du Nord, avec vues sur les sommets enneigés.",
    highlights: [
      "Vallée de l'Ourika — villages et palmeraies",
      "Cascades de Setti Fatma",
      "Oukaimeden (2650 m) — panoramas alpins",
      "Route 4×4 panoramique",
      "Déjeuner berbère en montagne",
    ],
    itinerary: [
      {
        dayLabel: "J1",
        title: "Les 3 vallées — Programme complet",
        description: "Journée 4×4 à travers le Haut Atlas.",
        steps: [
          "08h00 — Départ Marrakech en 4×4",
          "Vallée de l'Ourika — arrêts villages et coopérative argan",
          "Setti Fatma — promenade vers les cascades",
          "Montée vers Oukaimeden — arrêts photo",
          "Déjeuner berbère — retour Marrakech ~18h00",
        ],
      },
    ],
    included: [
      "4×4 privé climatisé avec chauffeur",
      "Guide francophone",
      "Arrêts photo panoramiques",
      "Déjeuner traditionnel",
      "Eau minérale",
    ],
    notIncluded: ["Boissons", "Pourboires", "Activités optionnelles"],
    groupPricing: sharedGroupPricingFr(102),
    faqs: sharedFaqsFr,
  },
  casablanca: {
    metaTitle: "Casablanca — Mosquée Hassan II, journée depuis Marrakech | Arganis Nomad",
    metaDescription:
      "Excursion privée Casablanca : mosquée Hassan II, architecture Art Déco et corniche atlantique depuis Marrakech.",
    subtitle: "Mosquée Hassan II & corniche",
    difficulty: "Facile",
    duration: "1 jour",
    groupSize: "1–17 personnes",
    departure: "Marrakech",
    languages: "Français, English",
    about:
      "À 2h30 de Marrakech, Casablanca révèle une facette moderne du Maroc : la mosquée Hassan II (3e plus grande au monde), l'architecture Art Déco des années 1930, le quartier Habous et la corniche atlantique animée. Une journée urbaine contrastée entre tradition et modernité.",
    highlights: [
      "Mosquée Hassan II — visite extérieure ou intérieure",
      "Corniche atlantique et quartier des Habous",
      "Architecture Art Déco du centre-ville",
      "Place Mohammed V et médina moderne",
      "Déjeuner libre en bord de mer",
    ],
    itinerary: [
      {
        dayLabel: "J1",
        title: "Marrakech — Casablanca — Marrakech",
        description: "Journée urbaine sur la côte atlantique.",
        steps: [
          "07h30 — Départ Marrakech",
          "Arrivée Casablanca — mosquée Hassan II",
          "Centre-ville Art Déco et place Mohammed V",
          "Corniche et quartier Habous",
          "Déjeuner libre — retour Marrakech en soirée",
        ],
      },
    ],
    included: [
      "Transport privé climatisé",
      "Chauffeur-guide francophone",
      "Eau minérale à bord",
      "Prise en charge à votre hébergement",
    ],
    notIncluded: [
      "Déjeuner et boissons",
      "Entrée mosquée Hassan II (~130 MAD)",
      "Pourboires",
    ],
    groupPricing: sharedGroupPricingFr(156),
    faqs: sharedFaqsFr,
  },
  "agadir-taghazout": {
    metaTitle: "Agadir & Taghazout — Surf et plage atlantique, journée | Arganis Nomad",
    metaDescription:
      "Excursion Agadir et Taghazout : plages atlantiques, village de surf et corniche ensoleillée depuis Marrakech.",
    subtitle: "Côte atlantique & surf",
    difficulty: "Facile",
    duration: "1 jour",
    groupSize: "1–17 personnes",
    departure: "Marrakech",
    languages: "Français, English",
    about:
      "Longue journée vers le sud atlantique : Agadir et sa baie ensoleillée de 10 km, puis Taghazout, village de surfeurs mythique. Entre plages dorées, marché aux épices et ambiance décontractée, une escapade balnéaire loin de Marrakech.",
    highlights: [
      "Baie d'Agadir — 300 jours de soleil par an",
      "Taghazout — capitale du surf marocain",
      "Corniche et kasbah d'Agadir Oufella",
      "Marché aux épices et souk local",
      "Déjeuner fruits de mer en bord de mer",
    ],
    itinerary: [
      {
        dayLabel: "J1",
        title: "Marrakech — Agadir — Taghazout — Marrakech",
        description: "Journée côte atlantique.",
        steps: [
          "07h00 — Départ Marrakech (route autoroute)",
          "Agadir — corniche, kasbah Oufella, marché",
          "Taghazout — village de surf et plages",
          "Déjeuner libre en bord de mer",
          "Retour Marrakech en fin de journée",
        ],
      },
    ],
    included: [
      "Transport privé climatisé",
      "Chauffeur-guide francophone",
      "Eau minérale",
      "Arrêts photo Taghazout et Agadir",
    ],
    notIncluded: ["Déjeuner et boissons", "Activités surf (option)", "Pourboires"],
    groupPricing: sharedGroupPricingFr(125),
    faqs: sharedFaqsFr,
  },
  agafay: {
    metaTitle: "Désert d'Agafay — Excursion 1 jour depuis Marrakech | Arganis Nomad",
    metaDescription:
      "Excursion privée au désert d'Agafay depuis Marrakech : paysages lunaires, balade à dos de chameau, coucher de soleil et déjeuner berbère dans un camp de luxe à 45 min de la ville.",
    subtitle: "Désert de pierre & coucher de soleil",
    difficulty: "Facile",
    duration: "½ journée ou 1 jour",
    groupSize: "1–17 personnes",
    departure: "Marrakech",
    languages: "Français, English",
    about:
      "À seulement 45 minutes de Marrakech, le désert d'Agafay offre une immersion saharienne sans les longues heures de route vers Merzouga. Collines de pierre dorée, campements berbères de luxe, randonnée à dos de chameau au coucher du soleil et vue sur l'Atlas enneigé : l'excursion idéale pour une première expérience désert ou une demi-journée d'évasion hors du temps.",
    highlights: [
      "Désert d'Agafay — paysages lunaires à 45 min de Marrakech",
      "Balade à dos de chameau au coucher ou lever du soleil",
      "Camp de luxe ou bivouac traditionnel avec vue sur l'Atlas",
      "Déjeuner ou dîner berbère sous tente nomade",
      "Photos spectaculaires — lumière dorée garantie",
      "Option quad ou buggy dans les collines (sur demande)",
    ],
    itinerary: [
      {
        dayLabel: "J1",
        title: "Marrakech — Agafay — Marrakech",
        description: "Demi-journée ou journée complète selon la formule choisie.",
        steps: [
          "14h00 ou 16h00 — Prise en charge à votre riad à Marrakech",
          "Route (~45 min) vers le désert d'Agafay, paysages de collines pierreuses",
          "Accueil thé à la menthe au camp ou point de rendez-vous",
          "Balade à dos de chameau (1h) — coucher de soleil sur les collines",
          "Dîner traditionnel marocain sous tente ou en plein air",
          "Musique berbère autour du feu (formule soirée)",
          "Retour à Marrakech (~45 min) — arrivée vers 22h–23h",
        ],
      },
    ],
    included: [
      "Transport privé aller-retour depuis Marrakech",
      "Chauffeur-guide francophone",
      "Balade à dos de chameau (1h environ)",
      "Thé à la menthe à l'arrivée",
      "Dîner ou déjeuner berbère selon formule",
      "Eau minérale à bord du véhicule",
    ],
    notIncluded: [
      "Boissons au camp (hors thé)",
      "Activités quad / buggy (option payante)",
      "Nuit en camp de luxe (sur devis)",
      "Pourboires chameliers et personnel",
    ],
    groupPricing: [
      { travelers: "2 voyageurs", price: "40 €" },
      { travelers: "3–4 voyageurs", price: "40 €" },
      { travelers: "5–7 voyageurs", price: "40 €" },
      { travelers: "8–14 voyageurs", price: "40 €" },
      { travelers: "15–17 voyageurs", price: "40 €" },
    ],
    faqs: [
      {
        question: "Agafay, c'est du vrai désert de sable ?",
        answer:
          "Agafay est un désert de pierre (reg) aux collines dorées — pas de dunes comme Merzouga, mais une atmosphère saharienne authentique avec vue sur l'Atlas, à 45 min de Marrakech.",
      },
      {
        question: "Peut-on faire l'excursion en demi-journée ?",
        answer:
          "Oui : départ après-midi pour le coucher de soleil et dîner, retour le soir. Formule journée complète avec déjeuner possible sur demande.",
      },
      {
        question: "Convient aux enfants et personnes âgées ?",
        answer:
          "Oui, balade chameau douce et accessible. Pas de marche difficile. Idéal en famille.",
      },
      {
        question: "Que porter pour Agafay ?",
        answer:
          "Chaussures fermées, vêtements couvrants le soir (fraîcheur), lunettes de soleil et chapeau. En hiver, prévoir une veste chaude.",
      },
    ],
  },
};

export const extraExcursionDetailsEn: LocaleBlock = {
  imlil: {
    metaTitle: "Imlil & Mount Toubkal — High Atlas Day Hike | Arganis Nomad",
    metaDescription:
      "Private Imlil day trip (1740 m): Berber villages, alpine views and mountain lunch from Marrakech.",
    subtitle: "Gateway to Toubkal",
    difficulty: "Moderate",
    duration: "1 day",
    groupSize: "1–17 people",
    departure: "Marrakech",
    languages: "French, English",
    about:
      "90 minutes from Marrakech, Imlil (1740 m) is the trekking base for Mount Toubkal. Between Berber hamlets, cultivated terraces and snowy peaks, this day trip delivers the Atlas essentials: an accessible walk, local encounters and a Berber lunch overlooking the valley.",
    highlights: [
      "Imlil village — gateway to Toubkal (4167 m)",
      "Berber hamlets and agricultural terraces",
      "Breathtaking alpine panoramas",
      "Guided walk adapted to your level",
      "Traditional mountain lunch",
    ],
    itinerary: [
      {
        dayLabel: "D1",
        title: "Marrakech — Imlil — Valley — Marrakech",
        description: "Mountain day with walk and Berber lunch.",
        steps: [
          "8:00 AM — Pick-up in Marrakech, drive to the Atlas",
          "Arrive in Imlil, welcome by local guide",
          "Valley walk: hamlets, terraces and viewpoints",
          "Berber lunch at a lodge or homestay",
          "Free time for photos — return to Marrakech late afternoon",
        ],
      },
    ],
    included: [
      "Private air-conditioned return transport",
      "French-speaking driver-guide",
      "Local guide in Imlil",
      "Guided valley walk",
      "Traditional lunch",
      "Mineral water on board",
    ],
    notIncluded: ["Drinks except water", "Tips", "Personal hiking gear"],
    groupPricing: sharedGroupPricingEn(84),
    faqs: [
      {
        question: "Can I cancel for free?",
        answer: "Yes, free cancellation up to 48 hours before departure.",
      },
      {
        question: "What is included?",
        answer:
          "Private transport, French-speaking driver-guide, mineral water. Lunch included as stated in the programme.",
      },
      {
        question: "Maximum group size?",
        answer: "1 to 17 people. Private booking available for your group.",
      },
      {
        question: "What time do we leave?",
        answer: "Departure between 7–9 AM from your riad, return late afternoon.",
      },
    ],
  },
  "trois-vallees": {
    metaTitle: "3 High Atlas Valleys — 4×4 Day Trip from Marrakech | Arganis Nomad",
    metaDescription:
      "Ourika, Setti Fatma and Oukaimeden (2650 m): the best of the High Atlas in one 4×4 day from Marrakech.",
    subtitle: "Ourika, Setti Fatma & Oukaimeden",
    difficulty: "Easy",
    duration: "1 day",
    groupSize: "1–17 people",
    departure: "Marrakech",
    languages: "French, English",
    about:
      "This 4×4 excursion combines the three jewels of the High Atlas near Marrakech: the Ourika Valley and its Berber villages, Setti Fatma waterfalls, then the climb to Oukaimeden (2650 m), North Africa's highest ski resort, with views of snow-capped peaks.",
    highlights: [
      "Ourika Valley — villages and palm groves",
      "Setti Fatma waterfalls",
      "Oukaimeden (2650 m) — alpine panoramas",
      "Scenic 4×4 route",
      "Berber mountain lunch",
    ],
    itinerary: [
      {
        dayLabel: "D1",
        title: "The 3 valleys — full programme",
        description: "4×4 day through the High Atlas.",
        steps: [
          "8:00 AM — Depart Marrakech by 4×4",
          "Ourika Valley — village and argan cooperative stops",
          "Setti Fatma — walk to the waterfalls",
          "Climb to Oukaimeden — photo stops",
          "Berber lunch — return Marrakech ~6:00 PM",
        ],
      },
    ],
    included: [
      "Private air-conditioned 4×4 with driver",
      "French-speaking guide",
      "Panoramic photo stops",
      "Traditional lunch",
      "Mineral water",
    ],
    notIncluded: ["Drinks", "Tips", "Optional activities"],
    groupPricing: sharedGroupPricingEn(102),
    faqs: [
      {
        question: "Can I cancel for free?",
        answer: "Yes, free cancellation up to 48 hours before departure.",
      },
      {
        question: "What is included?",
        answer: "Private 4×4, guide, lunch and water as per programme.",
      },
      {
        question: "Maximum group size?",
        answer: "1 to 17 people.",
      },
      {
        question: "Departure times?",
        answer: "Between 7–9 AM from your accommodation.",
      },
    ],
  },
  casablanca: {
    metaTitle: "Casablanca — Hassan II Mosque Day Trip from Marrakech | Arganis Nomad",
    metaDescription:
      "Private Casablanca day trip: Hassan II Mosque, Art Deco architecture and Atlantic corniche from Marrakech.",
    subtitle: "Hassan II Mosque & corniche",
    difficulty: "Easy",
    duration: "1 day",
    groupSize: "1–17 people",
    departure: "Marrakech",
    languages: "French, English",
    about:
      "2.5 hours from Marrakech, Casablanca reveals Morocco's modern face: Hassan II Mosque (3rd largest in the world), 1930s Art Deco architecture, the Habous quarter and the lively Atlantic corniche.",
    highlights: [
      "Hassan II Mosque — exterior or interior visit",
      "Atlantic corniche and Habous quarter",
      "Art Deco architecture downtown",
      "Mohammed V Square",
      "Seaside lunch (free choice)",
    ],
    itinerary: [
      {
        dayLabel: "D1",
        title: "Marrakech — Casablanca — Marrakech",
        description: "Urban day on the Atlantic coast.",
        steps: [
          "7:30 AM — Depart Marrakech",
          "Arrive Casablanca — Hassan II Mosque",
          "Art Deco downtown and Mohammed V Square",
          "Corniche and Habous quarter",
          "Free lunch — return Marrakech evening",
        ],
      },
    ],
    included: [
      "Private air-conditioned transport",
      "French-speaking driver-guide",
      "Mineral water on board",
      "Pick-up at your accommodation",
    ],
    notIncluded: [
      "Lunch and drinks",
      "Hassan II Mosque entry (~130 MAD)",
      "Tips",
    ],
    groupPricing: sharedGroupPricingEn(156),
    faqs: [
      {
        question: "Can I cancel for free?",
        answer: "Yes, up to 48 hours before departure.",
      },
      {
        question: "What is included?",
        answer: "Private transport, driver-guide and water.",
      },
      {
        question: "Group size?",
        answer: "1 to 17 people.",
      },
      {
        question: "Departure time?",
        answer: "Around 7:30 AM from Marrakech.",
      },
    ],
  },
  "agadir-taghazout": {
    metaTitle: "Agadir & Taghazout — Surf & Atlantic Beach Day Trip | Arganis Nomad",
    metaDescription:
      "Agadir and Taghazout day trip: Atlantic beaches, surf village and sunny corniche from Marrakech.",
    subtitle: "Atlantic coast & surf",
    difficulty: "Easy",
    duration: "1 day",
    groupSize: "1–17 people",
    departure: "Marrakech",
    languages: "French, English",
    about:
      "A long day south to the Atlantic: Agadir's 10 km sunny bay, then Taghazout, the legendary surf village. Golden beaches, spice market and relaxed vibes — a seaside escape from Marrakech.",
    highlights: [
      "Agadir bay — 300 days of sunshine a year",
      "Taghazout — Morocco's surf capital",
      "Corniche and Agadir Oufella kasbah",
      "Spice market and local souk",
      "Seaside seafood lunch",
    ],
    itinerary: [
      {
        dayLabel: "D1",
        title: "Marrakech — Agadir — Taghazout — Marrakech",
        description: "Atlantic coast day.",
        steps: [
          "7:00 AM — Depart Marrakech (highway)",
          "Agadir — corniche, Oufella kasbah, market",
          "Taghazout — surf village and beaches",
          "Free seaside lunch",
          "Return Marrakech end of day",
        ],
      },
    ],
    included: [
      "Private air-conditioned transport",
      "French-speaking driver-guide",
      "Mineral water",
      "Photo stops in Taghazout and Agadir",
    ],
    notIncluded: ["Lunch and drinks", "Surf activities (optional)", "Tips"],
    groupPricing: sharedGroupPricingEn(125),
    faqs: [
      {
        question: "Can I cancel for free?",
        answer: "Yes, up to 48 hours before departure.",
      },
      {
        question: "What is included?",
        answer: "Private transport, driver-guide and water.",
      },
      {
        question: "Group size?",
        answer: "1 to 17 people.",
      },
      {
        question: "How long is the drive?",
        answer: "About 3 hours each way via highway.",
      },
    ],
  },
  agafay: {
    metaTitle: "Agafay Desert — Day Trip from Marrakech | Arganis Nomad",
    metaDescription:
      "Private Agafay desert trip from Marrakech: lunar landscapes, camel ride, sunset and Berber dinner at a luxury camp just 45 minutes from the city.",
    subtitle: "Stone desert & sunset",
    difficulty: "Easy",
    duration: "Half day or full day",
    groupSize: "1–17 people",
    departure: "Marrakech",
    languages: "French, English",
    about:
      "Just 45 minutes from Marrakech, the Agafay Desert delivers a Sahara feel without the long drive to Merzouga. Golden stone hills, luxury Berber camps, a sunset camel trek and views of the snow-capped Atlas — ideal for a first desert experience or a half-day escape.",
    highlights: [
      "Agafay Desert — lunar landscapes 45 min from Marrakech",
      "Sunset or sunrise camel ride",
      "Luxury camp or traditional bivouac with Atlas views",
      "Berber lunch or dinner under a nomad tent",
      "Spectacular golden-hour photography",
      "Optional quad or buggy in the hills (on request)",
    ],
    itinerary: [
      {
        dayLabel: "D1",
        title: "Marrakech — Agafay — Marrakech",
        description: "Half-day or full-day formula available.",
        steps: [
          "2:00 or 4:00 PM — Pick-up at your riad in Marrakech",
          "Drive (~45 min) to Agafay stone desert",
          "Welcome mint tea at the camp",
          "Camel ride (~1 h) at sunset over the hills",
          "Traditional Moroccan dinner under tent or open sky",
          "Berber music by the fire (evening formula)",
          "Return to Marrakech (~45 min) — arrive around 10–11 PM",
        ],
      },
    ],
    included: [
      "Private round-trip transport from Marrakech",
      "French-speaking driver-guide",
      "Camel ride (~1 hour)",
      "Welcome mint tea",
      "Berber lunch or dinner depending on formula",
      "Mineral water in the vehicle",
    ],
    notIncluded: [
      "Drinks at camp (except tea)",
      "Quad / buggy activities (optional extra)",
      "Luxury camp overnight (on request)",
      "Tips for cameleers and staff",
    ],
    groupPricing: [
      { travelers: "2 travelers", price: "€40" },
      { travelers: "3–4 travelers", price: "€40" },
      { travelers: "5–7 travelers", price: "€40" },
      { travelers: "8–14 travelers", price: "€40" },
      { travelers: "15–17 travelers", price: "€40" },
    ],
    faqs: [
      {
        question: "Is Agafay a real sand desert?",
        answer:
          "Agafay is a stone desert (reg) with golden hills — not Merzouga-style dunes, but an authentic Saharan atmosphere with Atlas views, 45 minutes from Marrakech.",
      },
      {
        question: "Can we do a half-day trip?",
        answer:
          "Yes: afternoon departure for sunset and dinner, return in the evening. Full day with lunch available on request.",
      },
      {
        question: "Is it suitable for children and seniors?",
        answer: "Yes, gentle camel ride with no difficult walking. Great for families.",
      },
      {
        question: "What should I wear?",
        answer:
          "Closed shoes, layers for the evening chill, sunglasses and a hat. Bring a warm jacket in winter.",
      },
    ],
  },
};

// Spanish & German: concise mirrors of EN structure
export const extraExcursionDetailsEs: LocaleBlock = {
  imlil: {
    ...extraExcursionDetailsEn.imlil,
    metaTitle: "Imlil y Monte Toubkal — Excursión Atlas 1 día | Arganis Nomad",
    subtitle: "Puerta del Toubkal",
    difficulty: "Moderado",
    duration: "1 día",
    groupSize: "1–17 personas",
    departure: "Marrakech",
    languages: "Francés, inglés",
    about:
      "A 1h30 de Marrakech, Imlil (1740 m) es la base del Toubkal. Pueblos bereberes, terrazas cultivadas y almuerzo tradicional con vistas al valle.",
    highlights: extraExcursionDetailsEn.imlil.highlights,
    itinerary: extraExcursionDetailsEn.imlil.itinerary,
    included: extraExcursionDetailsEn.imlil.included,
    notIncluded: extraExcursionDetailsEn.imlil.notIncluded,
    groupPricing: [
      { travelers: "2 viajeros", price: "113 €/pers." },
      { travelers: "3–4 viajeros", price: "84 €/pers." },
      { travelers: "5–7 viajeros", price: "66 €/pers." },
      { travelers: "8–14 viajeros", price: "55 €/pers." },
      { travelers: "15–17 viajeros", price: "49 €/pers." },
    ],
    faqs: sharedFaqsFr.map((f) => ({ ...f, question: f.question, answer: f.answer })),
  },
  "trois-vallees": {
    ...extraExcursionDetailsEn["trois-vallees"],
    metaTitle: "3 Valles del Alto Atlas — Excursión 4×4 | Arganis Nomad",
    subtitle: "Ourika, Setti Fatma y Oukaimeden",
    difficulty: "Fácil",
    duration: "1 día",
    groupPricing: [
      { travelers: "2 viajeros", price: "138 €/pers." },
      { travelers: "3–4 viajeros", price: "102 €/pers." },
      { travelers: "5–7 viajeros", price: "80 €/pers." },
      { travelers: "8–14 viajeros", price: "66 €/pers." },
      { travelers: "15–17 viajeros", price: "59 €/pers." },
    ],
    faqs: sharedFaqsFr,
  },
  casablanca: {
    ...extraExcursionDetailsEn.casablanca,
    metaTitle: "Casablanca — Mezquita Hassan II, excursión | Arganis Nomad",
    difficulty: "Fácil",
    duration: "1 día",
    groupPricing: [
      { travelers: "2 viajeros", price: "211 €/pers." },
      { travelers: "3–4 viajeros", price: "156 €/pers." },
      { travelers: "5–7 viajeros", price: "122 €/pers." },
      { travelers: "8–14 viajeros", price: "101 €/pers." },
      { travelers: "15–17 viajeros", price: "90 €/pers." },
    ],
    faqs: sharedFaqsFr,
  },
  "agadir-taghazout": {
    ...extraExcursionDetailsEn["agadir-taghazout"],
    metaTitle: "Agadir y Taghazout — Surf y playa atlántica | Arganis Nomad",
    difficulty: "Fácil",
    duration: "1 día",
    groupPricing: [
      { travelers: "2 viajeros", price: "169 €/pers." },
      { travelers: "3–4 viajeros", price: "125 €/pers." },
      { travelers: "5–7 viajeros", price: "98 €/pers." },
      { travelers: "8–14 viajeros", price: "81 €/pers." },
      { travelers: "15–17 viajeros", price: "73 €/pers." },
    ],
    faqs: sharedFaqsFr,
  },
  agafay: {
    ...extraExcursionDetailsEn.agafay,
    metaTitle: "Desierto de Agafay — Excursión 1 día desde Marrakech | Arganis Nomad",
    subtitle: "Desierto de piedra y atardecer",
    difficulty: "Fácil",
    duration: "Medio día o 1 día",
    groupSize: "1–17 personas",
    departure: "Marrakech",
    languages: "Francés, inglés",
    about:
      "A solo 45 minutos de Marrakech, el desierto de Agafay ofrece una experiencia sahariense sin las largas horas hacia Merzouga. Colinas doradas, campamentos de lujo, paseo en camello al atardecer y vistas del Atlas.",
    groupPricing: [
      { travelers: "2 viajeros", price: "40 €" },
      { travelers: "3–4 viajeros", price: "40 €" },
      { travelers: "5–7 viajeros", price: "40 €" },
      { travelers: "8–14 viajeros", price: "40 €" },
      { travelers: "15–17 viajeros", price: "40 €" },
    ],
    faqs: sharedFaqsFr,
  },
};

export const extraExcursionDetailsDe: LocaleBlock = {
  imlil: {
    ...extraExcursionDetailsEn.imlil,
    metaTitle: "Imlil & Mount Toubkal — Atlas-Tagesausflug | Arganis Nomad",
    subtitle: "Tor zum Toubkal",
    difficulty: "Mittel",
    duration: "1 Tag",
    groupSize: "1–17 Personen",
    departure: "Marrakesch",
    languages: "Französisch, Englisch",
    groupPricing: [
      { travelers: "2 Reisende", price: "113 €/Pers." },
      { travelers: "3–4 Reisende", price: "84 €/Pers." },
      { travelers: "5–7 Reisende", price: "66 €/Pers." },
      { travelers: "8–14 Reisende", price: "55 €/Pers." },
      { travelers: "15–17 Reisende", price: "49 €/Pers." },
    ],
    faqs: sharedFaqsFr,
  },
  "trois-vallees": {
    ...extraExcursionDetailsEn["trois-vallees"],
    metaTitle: "3 Täler im Hohen Atlas — 4×4 Tagesausflug | Arganis Nomad",
    difficulty: "Leicht",
    duration: "1 Tag",
    groupPricing: [
      { travelers: "2 Reisende", price: "138 €/Pers." },
      { travelers: "3–4 Reisende", price: "102 €/Pers." },
      { travelers: "5–7 Reisende", price: "80 €/Pers." },
      { travelers: "8–14 Reisende", price: "66 €/Pers." },
      { travelers: "15–17 Reisende", price: "59 €/Pers." },
    ],
    faqs: sharedFaqsFr,
  },
  casablanca: {
    ...extraExcursionDetailsEn.casablanca,
    metaTitle: "Casablanca — Hassan-II-Moschee Tagesausflug | Arganis Nomad",
    difficulty: "Leicht",
    duration: "1 Tag",
    groupPricing: [
      { travelers: "2 Reisende", price: "211 €/Pers." },
      { travelers: "3–4 Reisende", price: "156 €/Pers." },
      { travelers: "5–7 Reisende", price: "122 €/Pers." },
      { travelers: "8–14 Reisende", price: "101 €/Pers." },
      { travelers: "15–17 Reisende", price: "90 €/Pers." },
    ],
    faqs: sharedFaqsFr,
  },
  "agadir-taghazout": {
    ...extraExcursionDetailsEn["agadir-taghazout"],
    metaTitle: "Agadir & Taghazout — Surf & Atlantikstrand | Arganis Nomad",
    difficulty: "Leicht",
    duration: "1 Tag",
    groupPricing: [
      { travelers: "2 Reisende", price: "169 €/Pers." },
      { travelers: "3–4 Reisende", price: "125 €/Pers." },
      { travelers: "5–7 Reisende", price: "98 €/Pers." },
      { travelers: "8–14 Reisende", price: "81 €/Pers." },
      { travelers: "15–17 Reisende", price: "73 €/Pers." },
    ],
    faqs: sharedFaqsFr,
  },
  agafay: {
    ...extraExcursionDetailsEn.agafay,
    metaTitle: "Agafay-Wüste — Tagesausflug ab Marrakesch | Arganis Nomad",
    subtitle: "Steinwüste & Sonnenuntergang",
    difficulty: "Leicht",
    duration: "Halbtag oder 1 Tag",
    groupSize: "1–17 Personen",
    departure: "Marrakesch",
    languages: "Französisch, Englisch",
    about:
      "Nur 45 Minuten von Marrakesch entfernt bietet die Agafay-Wüste Sahara-Feeling ohne die lange Fahrt nach Merzouga. Goldene Steinberge, Luxuscamps, Kamelritt bei Sonnenuntergang und Atlas-Blick.",
    groupPricing: [
      { travelers: "2 Reisende", price: "40 €" },
      { travelers: "3–4 Reisende", price: "40 €" },
      { travelers: "5–7 Reisende", price: "40 €" },
      { travelers: "8–14 Reisende", price: "40 €" },
      { travelers: "15–17 Reisende", price: "40 €" },
    ],
    faqs: sharedFaqsFr,
  },
};
