import type { ExcursionDetailsByLocale } from "./types";
import {
  extraExcursionDetailsDe,
  extraExcursionDetailsEn,
  extraExcursionDetailsEs,
  extraExcursionDetailsFr,
} from "./extra-details";

export const excursionDetails: ExcursionDetailsByLocale = {
  fr: {
    "ait-benhaddou": {
      metaTitle:
        "Aït Benhaddou UNESCO & Ouarzazate — Hollywood du Maroc | 1j | Red Nomad",
      metaDescription:
        "Excursion d'une journée depuis Marrakech : Col du Tizi n'Tichka, kasbah UNESCO d'Aït Benhaddou, studios de cinéma et Ouarzazate. Chauffeur privé et guide local.",
      subtitle: "Hollywood du Maroc",
      difficulty: "Facile",
      duration: "1 jour",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "Franchir le Col du Tizi n'Tichka (2260 m) pour rejoindre le Sud marocain est déjà une aventure en soi. La Kasbah d'Aït Benhaddou, forteresse de pisé rouge inscrite au Patrimoine Mondial de l'UNESCO, servit de décor à Gladiator, Lawrence d'Arabie, Game of Thrones et Babel. Puis Ouarzazate, « Porte du Désert » et « Hollywood de l'Afrique », abrite les Atlas Corporation Studios et la Kasbah Taourirt.",
      highlights: [
        "Col du Tizi n'Tichka (2260 m) — panoramas sur le Grand Atlas",
        "Kasbah d'Aït Benhaddou — UNESCO, décor de Gladiator & GOT",
        "Visite guidée du ksar avec guide local",
        "Ouarzazate — Atlas Corporation Studios & Kasbah Taourirt",
        "Paysages du Haut Atlas Sud : ocre, pisé et villages berbères",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Programme — Aït Benhaddou & Ouarzazate",
          description:
            "Journée complète avec montée du col, visite UNESCO et retour au coucher du soleil.",
          steps: [
            "07h00 — Prise en charge à Marrakech, route vers le Haut Atlas",
            "Col du Tizi n'Tichka (2260 m) — arrêt photo panoramique",
            "Kasbah d'Aït Benhaddou — visite guidée UNESCO (1h–1h30)",
            "Déjeuner libre à Ouarzazate",
            "Atlas Corporation Studios & Kasbah Taourirt",
            "~20h00 — Retour à Marrakech",
          ],
        },
      ],
      included: [
        "Transport en 4x4 ou minibus climatisé",
        "Chauffeur professionnel bilingue (FR/EN)",
        "Guide local à Aït Benhaddou",
        "Eau minérale (1 bouteille/personne)",
        "Prise en charge à votre hébergement",
      ],
      notIncluded: [
        "Déjeuner et boissons",
        "Entrée Kasbah d'Aït Benhaddou (~30 MAD)",
        "Entrée Studios de cinéma (~80 MAD, optionnelle)",
        "Dépenses personnelles et pourboires",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "300 €" },
        { travelers: "3–4 voyageurs", price: "300 €" },
        { travelers: "5–7 voyageurs", price: "300 €" },
        { travelers: "8–14 voyageurs", price: "300 €" },
        { travelers: "15–17 voyageurs", price: "300 €" },
      ],
      faqs: [
        {
          question: "Peut-on annuler sans frais ?",
          answer:
            "Oui, annulation gratuite jusqu'à 48 h avant le départ. Au-delà, des frais peuvent s'appliquer selon les prestations engagées.",
        },
        {
          question: "Qu'est-ce qui est inclus dans le prix ?",
          answer:
            "Transport privé climatisé, chauffeur bilingue, guide local à Aït Benhaddou et eau à bord. Repas et entrées optionnelles sont à votre charge.",
        },
        {
          question: "Combien de personnes maximum ?",
          answer:
            "De 1 à 17 personnes. Privatisation possible pour votre groupe — demandez un devis personnalisé.",
        },
        {
          question: "Que dois-je apporter ?",
          answer:
            "Chaussures confortables, casquette, crème solaire, veste légère (frais au col). Vêtements adaptés à la saison.",
        },
        {
          question: "Meilleure période ?",
          answer:
            "Toute l'année. Mars–mai et septembre–novembre offrent les températures les plus douces et une lumière idéale.",
        },
      ],
    },
    ouzoud: {
      metaTitle: "Cascades d'Ouzoud — Excursion d'une journée | Red Nomad",
      metaDescription:
        "Excursion aux cascades d'Ouzoud (110 m) depuis Marrakech. Singes magots, balade au pied des chutes, déjeuner face aux cascades. Chauffeur privé.",
      subtitle: "Les plus grandes chutes du Maroc",
      difficulty: "Facile",
      duration: "1 jour",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "À 150 km de Marrakech, les cascades d'Ouzoud plongent de 110 mètres dans une vallée verdoyante de oliviers et de figuiers. Singes magots en liberté, moulin à huile traditionnel, bateaux au pied des chutes : une escapade nature incontournable, rafraîchissante en été et spectaculaire toute l'année.",
      highlights: [
        "Cascades de 110 m — les plus hautes du Maroc",
        "Singes magots en liberté dans la vallée",
        "Balade au pied des chutes et petit bateau (option)",
        "Moulins traditionnels et oliviers centenaires",
        "Déjeuner terrasse face aux cascades",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Programme — Cascades d'Ouzoud",
          description: "Journée nature avec 3 h sur place aux cascades.",
          steps: [
            "08h00 — Prise en charge à Marrakech, route vers le Moyen Atlas",
            "10h30 — Arrivée à Ouzoud, accueil par les guides locaux",
            "Visite des cascades, sentier jusqu'à la base des chutes",
            "Temps libre : photos, singes, déjeuner en terrasse",
            "16h00 — Départ retour vers Marrakech",
            "~18h30 — Arrivée à Marrakech",
          ],
        },
      ],
      included: [
        "Transport privé climatisé aller-retour",
        "Chauffeur professionnel bilingue",
        "Accompagnement local aux cascades",
        "Eau minérale à bord",
        "Prise en charge à votre riad ou hôtel",
      ],
      notIncluded: [
        "Déjeuner et boissons",
        "Balade en barque (~20 MAD, optionnelle)",
        "Guide officiel (~30 MAD, optionnel)",
        "Dépenses personnelles",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "150 €" },
        { travelers: "3–4 voyageurs", price: "150 €" },
        { travelers: "5–7 voyageurs", price: "150 €" },
        { travelers: "8–14 voyageurs", price: "150 €" },
        { travelers: "15–17 voyageurs", price: "150 €" },
      ],
      faqs: [
        {
          question: "Peut-on se baigner aux cascades ?",
          answer:
            "Oui, des zones de baignade existent en été. Prévoyez maillot et serviette si vous souhaitez vous rafraîchir.",
        },
        {
          question: "L'excursion convient-elle aux enfants ?",
          answer:
            "Oui, le sentier principal est accessible. Surveillez les jeunes enfants près des singes et des rebords.",
        },
        {
          question: "Faut-il une bonne condition physique ?",
          answer:
            "Non, marche modérée sur 30–45 minutes avec escaliers. Possibilité de rester en haut si besoin.",
        },
        {
          question: "Annulation gratuite ?",
          answer: "Oui, jusqu'à 48 h avant le départ sans frais.",
        },
      ],
    },
    essaouira: {
      metaTitle: "Essaouira Médina UNESCO — Excursion Atlantique | Red Nomad",
      metaDescription:
        "Excursion d'une journée à Essaouira depuis Marrakech : médina UNESCO, port de pêche, remparts et plage. Chauffeur privé, retour le soir.",
      subtitle: "Perle de l'Atlantique",
      difficulty: "Facile",
      duration: "1 jour",
      groupSize: "1–17 personnes",
      departure: "Marrakech",
      languages: "Français, English",
      about:
        "Essaouira, ancienne Mogador, est une cité fortifiée au bord de l'Atlantique. Médina UNESCO aux ruelles bleues et blanches, port animé de barques bleues, remparts du XVIIIe siècle et plage ventée prisée des surfeurs. Une escapade bohème à 2h30 de Marrakech, entre arganiers, fruits de mer et artisanat.",
      highlights: [
        "Médina UNESCO — ruelles, souks et artisans",
        "Port de pêche — barques bleues et grillades",
        "Remparts Skala — vue sur l'océan Atlantique",
        "Route des arganiers — coopératives féminines",
        "Plage et ambiance bohème",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Programme — Essaouira",
          description: "100 % libre à Essaouira après la route matinale.",
          steps: [
            "08h00 — Prise en charge à Marrakech",
            "Route via Chichaoua — arrêt coopérative d'argan (option)",
            "11h00 — Arrivée à Essaouira, découverte libre de la médina",
            "Déjeuner au port — poisson grillé frais",
            "Après-midi : remparts, plage, shopping artisanal",
            "17h00 — Départ retour, arrivée ~20h00 à Marrakech",
          ],
        },
      ],
      included: [
        "Transport privé climatisé aller-retour",
        "Chauffeur professionnel bilingue",
        "Eau minérale à bord",
        "Prise en charge à votre hébergement",
        "Conseils et recommandations locales",
      ],
      notIncluded: [
        "Déjeuner et boissons",
        "Entrées musées ou monuments",
        "Activités nautiques (surf, kitesurf)",
        "Dépenses personnelles",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "290 €" },
        { travelers: "3–4 voyageurs", price: "290 €" },
        { travelers: "5–7 voyageurs", price: "290 €" },
        { travelers: "8–14 voyageurs", price: "290 €" },
        { travelers: "15–17 voyageurs", price: "290 €" },
      ],
      faqs: [
        {
          question: "Combien de temps libre à Essaouira ?",
          answer:
            "Environ 5 à 6 heures sur place — suffisant pour la médina, le port et les remparts.",
        },
        {
          question: "Essaouira est-elle venteuse ?",
          answer:
            "Oui, l'Alizé souffle souvent l'après-midi. Prévoyez une veste légère même en été.",
        },
        {
          question: "Peut-on nager ?",
          answer:
            "La plage est accessible mais l'eau reste fraîche. Idéal pour se promener plutôt que pour la baignade.",
        },
        {
          question: "Annulation gratuite ?",
          answer: "Oui, jusqu'à 48 h avant le départ.",
        },
      ],
    },
    ourika: {
      metaTitle:
        "Vallée de l'Ourika & cascades — Excursion privée avec déjeuner | Red Nomad",
      metaDescription:
        "Excursion privée d'une journée à la vallée de l'Ourika depuis Marrakech : cascades Setti Fatma, coopérative d'argan, maison berbère, déjeuner traditionnel au bord de la rivière.",
      subtitle: "Cascades, argan & déjeuner berbère",
      difficulty: "Modéré",
      duration: "6 h",
      groupSize: "1–17 personnes (privé)",
      departure: "Marrakech",
      languages: "Français, English, Arabe",
      about:
        "Échappez à Marrakech pour une excursion privée dans la vallée de l'Ourika, au pied du Haut Atlas. Après une prise en charge à votre riad, profitez d'une route panoramique à travers oliviers et villages berbères. Promenade le long de la rivière, visite d'une coopérative d'argan tenue par des femmes berbères, thé à la menthe dans une maison traditionnelle, déjeuner marocain en 3 services face à la vallée, puis randonnée guidée vers les cascades de Setti Fatma — l'une des plus belles attractions naturelles de la région.",
      highlights: [
        "Excursion privée et personnalisée pour votre groupe",
        "Vallée de l'Ourika et paysages du Haut Atlas",
        "Randonnée guidée vers les cascades de Setti Fatma",
        "Coopérative d'argan et secrets du « or liquide » marocain",
        "Déjeuner traditionnel marocain au bord de la rivière",
        "Maison berbère et thé à la menthe",
      ],
      itinerary: [
        {
          dayLabel: "J1",
          title: "Marrakech — Ourika — Cascades — Marrakech",
          description:
            "Journée privée (~6 h) : nature, culture berbère et déjeuner inclus.",
          steps: [
            "Prise en charge à votre hôtel ou riad à Marrakech",
            "Route panoramique (~1 h) : campagne, oliviers et villages berbères",
            "Visite d'une coopérative d'argan — démonstration artisanale",
            "Balade dans la vallée de l'Ourika le long de la rivière",
            "Pause photo et visite d'une maison berbère (thé à la menthe)",
            "Déjeuner traditionnel au bord de la rivière (entrée, plat, dessert)",
            "Randonnée guidée vers les cascades de Setti Fatma",
            "Temps libre pour photos et exploration",
            "Retour à Marrakech (~1 h)",
          ],
        },
      ],
      included: [
        "Prise en charge et retour privés à votre hôtel ou riad",
        "Véhicule privé climatisé avec chauffeur professionnel",
        "Wi-Fi à bord",
        "Guide local francophone ou anglophone dans la vallée",
        "Arrêt photo panoramique",
        "Visite d'une maison berbère avec thé à la menthe",
        "Visite d'une coopérative d'argan féminine",
        "Randonnée guidée vers les cascades de Setti Fatma",
        "Temps libre pour photos sur le sentier",
        "Déjeuner au bord de la rivière (3 services)",
        "Demi-bouteille d'eau par personne",
      ],
      notIncluded: [
        "Boissons (hors eau fournie)",
        "Achats personnels à la coopérative",
        "Pourboires (usage local)",
      ],
      groupPricing: [
        { travelers: "2 voyageurs", price: "97 €/pers." },
        { travelers: "3–4 voyageurs", price: "72 €/pers." },
        { travelers: "5–7 voyageurs", price: "56 €/pers." },
        { travelers: "8–14 voyageurs", price: "47 €/pers." },
        { travelers: "15–17 voyageurs", price: "42 €/pers." },
      ],
      faqs: [
        {
          question: "La randonnée vers les cascades est-elle difficile ?",
          answer:
            "Modérée : sentier avec marches et passages rocheux. Chaussures confortables, lunettes de soleil et chapeau recommandés.",
        },
        {
          question: "Le déjeuner est-il inclus ?",
          answer:
            "Oui : menu traditionnel en 3 services (entrée, plat, dessert) dans un cadre au bord de la rivière. Les boissons sont en supplément.",
        },
        {
          question: "Convient aux familles ?",
          answer:
            "Oui, excursion idéale en famille ou entre amis. Rythme adaptable selon votre groupe.",
        },
        {
          question: "Annulation gratuite ?",
          answer: "Oui, jusqu'à 24 h avant le départ pour un remboursement complet.",
        },
      ],
    },
    ...extraExcursionDetailsFr,
  },
  en: {
    "ait-benhaddou": {
      metaTitle:
        "Aït Benhaddou UNESCO & Ouarzazate — Morocco's Hollywood | 1 day | Red Nomad",
      metaDescription:
        "Day trip from Marrakech: Tizi n'Tichka pass, UNESCO Aït Benhaddou kasbah, film studios and Ouarzazate. Private driver and local guide.",
      subtitle: "Morocco's Hollywood",
      difficulty: "Easy",
      duration: "1 day",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "Crossing the Tizi n'Tichka pass (2,260 m) to reach southern Morocco is an adventure in itself. Aït Benhaddou, a red earthen UNESCO fortress, starred in Gladiator, Lawrence of Arabia, Game of Thrones and Babel. Ouarzazate — the Gateway to the Desert and Africa's Hollywood — hosts Atlas Corporation Studios and Taourirt Kasbah.",
      highlights: [
        "Tizi n'Tichka pass (2,260 m) — Grand Atlas panoramas",
        "Aït Benhaddou kasbah — UNESCO, Gladiator & GOT filming location",
        "Guided visit with a local guide",
        "Ouarzazate — Atlas Corporation Studios & Taourirt Kasbah",
        "Southern High Atlas landscapes: ochre, pisé and Berber villages",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Program — Aït Benhaddou & Ouarzazate",
          description: "Full day with pass crossing, UNESCO visit and sunset return.",
          steps: [
            "7:00 AM — Pickup in Marrakech, drive to the High Atlas",
            "Tizi n'Tichka pass (2,260 m) — panoramic photo stop",
            "Aït Benhaddou — guided UNESCO visit (1–1.5 h)",
            "Free lunch in Ouarzazate",
            "Atlas Corporation Studios & Taourirt Kasbah",
            "~8:00 PM — Return to Marrakech",
          ],
        },
      ],
      included: [
        "Air-conditioned 4x4 or minibus",
        "Professional bilingual driver (FR/EN)",
        "Local guide at Aït Benhaddou",
        "Mineral water (1 bottle/person)",
        "Pickup at your accommodation",
      ],
      notIncluded: [
        "Lunch and drinks",
        "Aït Benhaddou entrance (~30 MAD)",
        "Film studio entrance (~80 MAD, optional)",
        "Personal expenses and tips",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€300" },
        { travelers: "3–4 travelers", price: "€300" },
        { travelers: "5–7 travelers", price: "€300" },
        { travelers: "8–14 travelers", price: "€300" },
        { travelers: "15–17 travelers", price: "€300" },
      ],
      faqs: [
        {
          question: "Can I cancel for free?",
          answer: "Yes, free cancellation up to 48 hours before departure.",
        },
        {
          question: "What's included in the price?",
          answer:
            "Private air-conditioned transport, bilingual driver, local guide at Aït Benhaddou and water on board.",
        },
        {
          question: "Maximum group size?",
          answer: "1 to 17 people. Private booking available — ask for a quote.",
        },
        {
          question: "What should I bring?",
          answer: "Comfortable shoes, hat, sunscreen, light jacket (cool at the pass).",
        },
        {
          question: "Best time of year?",
          answer: "Year-round. March–May and September–November offer the mildest weather.",
        },
      ],
    },
    ouzoud: {
      metaTitle: "Ouzoud Waterfalls — Day Trip | Red Nomad",
      metaDescription:
        "Day trip to Ouzoud Falls (110 m) from Marrakech. Barbary macaques, walk at the base of the falls. Private driver.",
      subtitle: "Morocco's tallest waterfalls",
      difficulty: "Easy",
      duration: "1 day",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "150 km from Marrakech, the Ouzoud Falls drop 110 metres into a green valley of olive and fig trees. Wild Barbary macaques, traditional olive mills and optional boat rides make this a refreshing nature escape.",
      highlights: [
        "110 m waterfalls — tallest in Morocco",
        "Wild Barbary macaques in the valley",
        "Walk to the base of the falls",
        "Traditional mills and ancient olive trees",
        "Lunch on a terrace facing the falls",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Program — Ouzoud Waterfalls",
          description: "Nature day with 3 hours at the falls.",
          steps: [
            "8:00 AM — Pickup in Marrakech",
            "10:30 AM — Arrival at Ouzoud",
            "Visit the falls, trail to the base",
            "Free time: photos, macaques, lunch",
            "4:00 PM — Return drive",
            "~6:30 PM — Arrival in Marrakech",
          ],
        },
      ],
      included: [
        "Private air-conditioned round-trip transport",
        "Professional bilingual driver",
        "Local assistance at the falls",
        "Mineral water on board",
        "Pickup at your riad or hotel",
      ],
      notIncluded: [
        "Lunch and drinks",
        "Boat ride (~20 MAD, optional)",
        "Official guide (~30 MAD, optional)",
        "Personal expenses",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€150" },
        { travelers: "3–4 travelers", price: "€150" },
        { travelers: "5–7 travelers", price: "€150" },
        { travelers: "8–14 travelers", price: "€150" },
        { travelers: "15–17 travelers", price: "€150" },
      ],
      faqs: [
        {
          question: "Can we swim at the falls?",
          answer: "Yes, swimming areas exist in summer. Bring swimwear and a towel.",
        },
        {
          question: "Is it suitable for children?",
          answer: "Yes, the main trail is accessible. Watch young children near macaques.",
        },
        {
          question: "Good fitness required?",
          answer: "No, moderate 30–45 minute walk with stairs.",
        },
        {
          question: "Free cancellation?",
          answer: "Yes, up to 48 hours before departure.",
        },
      ],
    },
    essaouira: {
      metaTitle: "Essaouira UNESCO Medina — Atlantic Day Trip | Red Nomad",
      metaDescription:
        "Day trip to Essaouira from Marrakech: UNESCO medina, fishing port, ramparts and beach. Private driver, evening return.",
      subtitle: "Pearl of the Atlantic",
      difficulty: "Easy",
      duration: "1 day",
      groupSize: "1–17 people",
      departure: "Marrakech",
      languages: "French, English",
      about:
        "Essaouira, ancient Mogador, is a fortified Atlantic city. UNESCO medina with blue-and-white alleys, animated fishing port, 18th-century ramparts and windy beach beloved by surfers — a bohemian escape 2.5 hours from Marrakech.",
      highlights: [
        "UNESCO medina — alleys, souks and artisans",
        "Fishing port — blue boats and grilled seafood",
        "Skala ramparts — Atlantic ocean views",
        "Argan tree route — women's cooperatives",
        "Beach and bohemian atmosphere",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Program — Essaouira",
          description: "Free time in Essaouira after the morning drive.",
          steps: [
            "8:00 AM — Pickup in Marrakech",
            "Drive via Chichaoua — argan cooperative stop (optional)",
            "11:00 AM — Arrival, free exploration of the medina",
            "Lunch at the port — fresh grilled fish",
            "Afternoon: ramparts, beach, artisan shopping",
            "5:00 PM — Return, ~8:00 PM in Marrakech",
          ],
        },
      ],
      included: [
        "Private air-conditioned round-trip transport",
        "Professional bilingual driver",
        "Mineral water on board",
        "Pickup at your accommodation",
        "Local tips and recommendations",
      ],
      notIncluded: [
        "Lunch and drinks",
        "Museum or monument entries",
        "Water sports (surf, kitesurf)",
        "Personal expenses",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€290" },
        { travelers: "3–4 travelers", price: "€290" },
        { travelers: "5–7 travelers", price: "€290" },
        { travelers: "8–14 travelers", price: "€290" },
        { travelers: "15–17 travelers", price: "€290" },
      ],
      faqs: [
        {
          question: "How much free time in Essaouira?",
          answer: "About 5–6 hours — enough for the medina, port and ramparts.",
        },
        {
          question: "Is it windy?",
          answer: "Yes, the trade wind often blows in the afternoon. Bring a light jacket.",
        },
        {
          question: "Can we swim?",
          answer: "The beach is accessible but water stays cool. Better for walking than swimming.",
        },
        {
          question: "Free cancellation?",
          answer: "Yes, up to 48 hours before departure.",
        },
      ],
    },
    ourika: {
      metaTitle:
        "Ourika Valley & Waterfalls — Private Day Trip with Lunch | Red Nomad",
      metaDescription:
        "Private day trip to Ourika Valley from Marrakech: Setti Fatma waterfalls, argan cooperative, Berber house visit, traditional riverside lunch.",
      subtitle: "Waterfalls, argan & Berber lunch",
      difficulty: "Moderate",
      duration: "6 h",
      groupSize: "1–17 people (private)",
      departure: "Marrakech",
      languages: "French, English, Arabic",
      about:
        "Escape Marrakech on a private day trip to the Ourika Valley at the foot of the High Atlas. After hotel pickup, enjoy a scenic drive through olive groves and Berber villages. Walk along the river, visit a women's argan cooperative, mint tea in a traditional Berber home, a 3-course Moroccan lunch overlooking the valley, then a guided hike to the Setti Fatma waterfalls — one of the region's most iconic natural sights.",
      highlights: [
        "Private, personalized experience for your group",
        "Ourika Valley and High Atlas landscapes",
        "Guided hike to Setti Fatma waterfalls",
        "Argan cooperative and Morocco's « liquid gold »",
        "Traditional Moroccan lunch by the river",
        "Berber house visit and mint tea",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech — Ourika — Waterfalls — Marrakech",
          description:
            "Private day (~6 h): nature, Berber culture and lunch included.",
          steps: [
            "Pickup at your hotel or riad in Marrakech",
            "Scenic drive (~1 h): countryside, olive groves and Berber villages",
            "Visit to an argan cooperative — traditional demonstration",
            "Walk along the Ourika Valley river",
            "Photo stop and Berber house visit (mint tea)",
            "Traditional riverside lunch (starter, main course, dessert)",
            "Guided hike to Setti Fatma waterfalls",
            "Free time for photos and exploration",
            "Return to Marrakech (~1 h)",
          ],
        },
      ],
      included: [
        "Private hotel or riad pickup and drop-off",
        "Private air-conditioned vehicle with professional driver",
        "Onboard Wi-Fi",
        "English or French-speaking local guide in the valley",
        "Scenic panoramic photo stop",
        "Traditional Berber house visit with mint tea",
        "Women's argan oil cooperative visit",
        "Guided walk to Setti Fatma waterfalls",
        "Free time for photo stops along the trail",
        "Riverside lunch (3-course meal)",
        "Half bottle of water per person",
      ],
      notIncluded: [
        "Drinks (except water provided)",
        "Personal purchases at the cooperative",
        "Tips (local custom)",
      ],
      groupPricing: [
        { travelers: "2 travelers", price: "€97/person" },
        { travelers: "3–4 travelers", price: "€72/person" },
        { travelers: "5–7 travelers", price: "€56/person" },
        { travelers: "8–14 travelers", price: "€47/person" },
        { travelers: "15–17 travelers", price: "€42/person" },
      ],
      faqs: [
        {
          question: "How difficult is the waterfall hike?",
          answer:
            "Moderate: trail with steps and rocky sections. Comfortable shoes, sunglasses and sun hat recommended.",
        },
        {
          question: "Is lunch included?",
          answer:
            "Yes: traditional 3-course menu (starter, main, dessert) in a riverside setting. Drinks are extra.",
        },
        {
          question: "Suitable for families?",
          answer:
            "Yes, ideal for families or friends. Pace can be adapted to your group.",
        },
        {
          question: "Free cancellation?",
          answer: "Yes, up to 24 hours before departure for a full refund.",
        },
      ],
    },
    ...extraExcursionDetailsEn,
  },
  es: {
    "ait-benhaddou": {
      metaTitle:
        "Aït Benhaddou UNESCO y Ouarzazate — Hollywood de Marruecos | 1 día | Red Nomad",
      metaDescription:
        "Excursión de un día desde Marrakech: paso Tizi n'Tichka, kasbah UNESCO, estudios de cine y Ouarzazate. Chófer privado y guía local.",
      subtitle: "Hollywood de Marruecos",
      difficulty: "Fácil",
      duration: "1 día",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, English",
      about:
        "Cruzar el paso del Tizi n'Tichka (2260 m) hacia el sur marroquí ya es una aventura. La kasbah de Aït Benhaddou, fortaleza de adobe rojo patrimonio UNESCO, fue escenario de Gladiator, Juego de Tronos y Babel. Ouarzazate, la Puerta del Desierto y Hollywood de África, alberga los Atlas Corporation Studios.",
      highlights: [
        "Paso Tizi n'Tichka (2260 m) — panoramas del Gran Atlas",
        "Kasbah de Aït Benhaddou — UNESCO, escenario de Gladiator y GOT",
        "Visita guiada con guía local",
        "Ouarzazate — estudios Atlas y Kasbah Taourirt",
        "Paisajes del Alto Atlas Sur: ocre, adobe y pueblos bereberes",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Programa — Aït Benhaddou y Ouarzazate",
          description: "Día completo con paso de montaña, visita UNESCO y regreso al atardecer.",
          steps: [
            "07h00 — Recogida en Marrakech",
            "Paso Tizi n'Tichka (2260 m) — parada fotográfica",
            "Aït Benhaddou — visita guiada UNESCO (1h–1h30)",
            "Almuerzo libre en Ouarzazate",
            "Atlas Corporation Studios y Kasbah Taourirt",
            "~20h00 — Regreso a Marrakech",
          ],
        },
      ],
      included: [
        "Transporte en 4x4 o minibus climatizado",
        "Chófer profesional bilingüe (FR/EN)",
        "Guía local en Aït Benhaddou",
        "Agua mineral (1 botella/persona)",
        "Recogida en su alojamiento",
      ],
      notIncluded: [
        "Almuerzo y bebidas",
        "Entrada kasbah (~30 MAD)",
        "Entrada estudios (~80 MAD, opcional)",
        "Gastos personales y propinas",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "300 €" },
        { travelers: "3–4 viajeros", price: "300 €" },
        { travelers: "5–7 viajeros", price: "300 €" },
        { travelers: "8–14 viajeros", price: "300 €" },
        { travelers: "15–17 viajeros", price: "300 €" },
      ],
      faqs: [
        {
          question: "¿Cancelación gratuita?",
          answer: "Sí, hasta 48 h antes del salida sin cargo.",
        },
        {
          question: "¿Qué incluye el precio?",
          answer: "Transporte privado, chófer bilingüe, guía local y agua a bordo.",
        },
        {
          question: "¿Tamaño máximo del grupo?",
          answer: "De 1 a 17 personas. Privatización disponible.",
        },
        {
          question: "¿Qué debo llevar?",
          answer: "Calzado cómodo, gorra, protector solar, chaqueta ligera.",
        },
        {
          question: "¿Mejor época?",
          answer: "Todo el año. Marzo–mayo y septiembre–noviembre son ideales.",
        },
      ],
    },
    ouzoud: {
      metaTitle: "Cascadas de Ouzoud — Excursión de un día | Red Nomad",
      metaDescription:
        "Excursión a las cascadas de Ouzoud (110 m) desde Marrakech. Monos, paseo al pie de las cataratas. Chófer privado.",
      subtitle: "Las cascadas más altas de Marruecos",
      difficulty: "Fácil",
      duration: "1 día",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, English",
      about:
        "A 150 km de Marrakech, las cascadas de Ouzoud caen 110 metros en un valle verde de olivos e higueras. Monos en libertad, molinos tradicionales y barcas al pie de las cataratas.",
      highlights: [
        "Cascadas de 110 m — las más altas de Marruecos",
        "Monos magotes en libertad",
        "Paseo al pie de las cataratas",
        "Molinos tradicionales y olivos centenarios",
        "Almuerzo en terraza frente a las cascadas",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Programa — Cascadas de Ouzoud",
          description: "Día de naturaleza con 3 h en las cascadas.",
          steps: [
            "08h00 — Recogida en Marrakech",
            "10h30 — Llegada a Ouzoud",
            "Visita de las cascadas y sendero",
            "Tiempo libre: fotos, monos, almuerzo",
            "16h00 — Regreso",
            "~18h30 — Llegada a Marrakech",
          ],
        },
      ],
      included: [
        "Transporte privado climatizado ida y vuelta",
        "Chófer profesional bilingüe",
        "Acompañamiento local",
        "Agua mineral a bordo",
        "Recogida en su riad u hotel",
      ],
      notIncluded: [
        "Almuerzo y bebidas",
        "Barca (~20 MAD, opcional)",
        "Guía oficial (~30 MAD, opcional)",
        "Gastos personales",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "150 €" },
        { travelers: "3–4 viajeros", price: "150 €" },
        { travelers: "5–7 viajeros", price: "150 €" },
        { travelers: "8–14 viajeros", price: "150 €" },
        { travelers: "15–17 viajeros", price: "150 €" },
      ],
      faqs: [
        {
          question: "¿Se puede bañar?",
          answer: "Sí en verano. Traje de baño y toalla recomendados.",
        },
        {
          question: "¿Apto para niños?",
          answer: "Sí, sendero accesible. Supervisar cerca de los monos.",
        },
        {
          question: "¿Buena forma física necesaria?",
          answer: "No, caminata moderada de 30–45 minutos.",
        },
        {
          question: "¿Cancelación gratuita?",
          answer: "Sí, hasta 48 h antes.",
        },
      ],
    },
    essaouira: {
      metaTitle: "Essaouira Medina UNESCO — Excursión Atlántica | Red Nomad",
      metaDescription:
        "Excursión de un día a Essaouira desde Marrakech: medina UNESCO, puerto pesquero, murallas y playa.",
      subtitle: "Perla del Atlántico",
      difficulty: "Fácil",
      duration: "1 día",
      groupSize: "1–17 personas",
      departure: "Marrakech",
      languages: "Francés, English",
      about:
        "Essaouira, antigua Mogador, es una ciudad fortificada junto al Atlántico. Medina UNESCO, puerto de barcas azules, murallas del siglo XVIII y playa ventosa — escapada bohemia a 2h30 de Marrakech.",
      highlights: [
        "Medina UNESCO — callejuelas y artesanos",
        "Puerto pesquero — barcas azules y pescado",
        "Murallas Skala — vista al océano",
        "Ruta de argán — cooperativas",
        "Playa y ambiente bohemio",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Programa — Essaouira",
          description: "Tiempo libre en Essaouira tras el trayecto matinal.",
          steps: [
            "08h00 — Recogida en Marrakech",
            "Ruta por Chichaoua — parada argán (opcional)",
            "11h00 — Llegada, medina libre",
            "Almuerzo en el puerto",
            "Tarde: murallas, playa, artesanía",
            "17h00 — Regreso (~20h00 Marrakech)",
          ],
        },
      ],
      included: [
        "Transporte privado climatizado",
        "Chófer bilingüe",
        "Agua mineral",
        "Recogida en alojamiento",
        "Recomendaciones locales",
      ],
      notIncluded: [
        "Almuerzo y bebidas",
        "Entradas museos",
        "Deportes acuáticos",
        "Gastos personales",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "290 €" },
        { travelers: "3–4 viajeros", price: "290 €" },
        { travelers: "5–7 viajeros", price: "290 €" },
        { travelers: "8–14 viajeros", price: "290 €" },
        { travelers: "15–17 viajeros", price: "290 €" },
      ],
      faqs: [
        {
          question: "¿Cuánto tiempo libre?",
          answer: "Unas 5–6 horas en Essaouira.",
        },
        {
          question: "¿Hace viento?",
          answer: "Sí, a menudo por la tarde. Chaqueta ligera recomendada.",
        },
        {
          question: "¿Se puede nadar?",
          answer: "Playa accesible pero agua fresca.",
        },
        {
          question: "¿Cancelación gratuita?",
          answer: "Sí, hasta 48 h antes.",
        },
      ],
    },
    ourika: {
      metaTitle:
        "Valle de Ourika y cascadas — Excursión privada con almuerzo | Red Nomad",
      metaDescription:
        "Excursión privada al valle de Ourika desde Marrakech: cascadas Setti Fatma, cooperativa de argán, casa bereber, almuerzo tradicional junto al río.",
      subtitle: "Cascadas, argán y almuerzo bereber",
      difficulty: "Moderado",
      duration: "6 h",
      groupSize: "1–17 personas (privado)",
      departure: "Marrakech",
      languages: "Francés, English, Árabe",
      about:
        "Escapa de Marrakech en una excursión privada al valle de Ourika, al pie del Alto Atlas. Tras la recogida en su riad, disfrute de un viaje panorámico entre olivares y pueblos bereberes. Paseo junto al río, visita a una cooperativa de argán, té de menta en una casa bereber, almuerzo marroquí de 3 platos con vistas al valle y senderismo guiado a las cascadas de Setti Fatma.",
      highlights: [
        "Experiencia privada y personalizada para su grupo",
        "Valle de Ourika y paisajes del Alto Atlas",
        "Senderismo guiado a las cascadas de Setti Fatma",
        "Cooperativa de argán y el « oro líquido » marroquí",
        "Almuerzo tradicional marroquí junto al río",
        "Casa bereber y té de menta",
      ],
      itinerary: [
        {
          dayLabel: "D1",
          title: "Marrakech — Ourika — Cascadas — Marrakech",
          description:
            "Día privado (~6 h): naturaleza, cultura bereber y almuerzo incluido.",
          steps: [
            "Recogida en su hotel o riad en Marrakech",
            "Ruta panorámica (~1 h): campo, olivares y pueblos bereberes",
            "Visita a una cooperativa de argán — demostración artesanal",
            "Paseo por el valle de Ourika a lo largo del río",
            "Parada fotográfica y visita a una casa bereber (té de menta)",
            "Almuerzo tradicional junto al río (entrante, plato principal, postre)",
            "Senderismo guiado a las cascadas de Setti Fatma",
            "Tiempo libre para fotos y exploración",
            "Regreso a Marrakech (~1 h)",
          ],
        },
      ],
      included: [
        "Recogida y regreso privados en hotel o riad",
        "Vehículo privado climatizado con conductor profesional",
        "Wi-Fi a bordo",
        "Guía local francófono o anglófono en el valle",
        "Parada fotográfica panorámica",
        "Visita a casa bereber con té de menta",
        "Visita a cooperativa de argán femenina",
        "Caminata guiada a las cascadas de Setti Fatma",
        "Tiempo libre para fotos en el sendero",
        "Almuerzo junto al río (3 platos)",
        "Media botella de agua por persona",
      ],
      notIncluded: [
        "Bebidas (excepto agua incluida)",
        "Compras personales en la cooperativa",
        "Propinas (costumbre local)",
      ],
      groupPricing: [
        { travelers: "2 viajeros", price: "97 €/pers." },
        { travelers: "3–4 viajeros", price: "72 €/pers." },
        { travelers: "5–7 viajeros", price: "56 €/pers." },
        { travelers: "8–14 viajeros", price: "47 €/pers." },
        { travelers: "15–17 viajeros", price: "42 €/pers." },
      ],
      faqs: [
        {
          question: "¿Es difícil la caminata a las cascadas?",
          answer:
            "Moderada: sendero con escalones y tramos rocosos. Calzado cómodo, gafas de sol y sombrero recomendados.",
        },
        {
          question: "¿Está incluido el almuerzo?",
          answer:
            "Sí: menú tradicional de 3 platos junto al río. Las bebidas son extra.",
        },
        {
          question: "¿Adecuado para familias?",
          answer:
            "Sí, ideal para familias o amigos. Ritmo adaptable a su grupo.",
        },
        {
          question: "¿Cancelación gratuita?",
          answer: "Sí, hasta 24 h antes para reembolso completo.",
        },
      ],
    },
    ...extraExcursionDetailsEs,
  },
  de: {
    "ait-benhaddou": {
      metaTitle:
        "Aït Benhaddou UNESCO & Ouarzazate — Hollywood Marokkos | 1 Tag | Red Nomad",
      metaDescription:
        "Tagesausflug ab Marrakesch: Tizi n'Tichka-Pass, UNESCO-Kasbah, Filmstudios und Ouarzazate. Privatchauffeur und lokaler Guide.",
      subtitle: "Hollywood Marokkos",
      difficulty: "Leicht",
      duration: "1 Tag",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, Englisch",
      about:
        "Die Überquerung des Tizi n'Tichka-Passes (2260 m) in den Süden Marokkos ist schon ein Abenteuer. Die UNESCO-Kasbah Aït Benhaddou diente als Kulisse für Gladiator, Game of Thrones und Babel. Ouarzazate — Tor zur Wüste und Hollywood Afrikas.",
      highlights: [
        "Tizi n'Tichka-Pass (2260 m) — Panorama auf den Hohen Atlas",
        "Kasbah Aït Benhaddou — UNESCO, Gladiator & GOT",
        "Geführte Besichtigung mit lokalem Guide",
        "Ouarzazate — Atlas Corporation Studios & Taourirt-Kasbah",
        "Landschaften des südlichen Hohen Atlas",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Programm — Aït Benhaddou & Ouarzazate",
          description: "Ganzer Tag mit Pass, UNESCO-Besuch und Rückfahrt bei Sonnenuntergang.",
          steps: [
            "07:00 — Abholung in Marrakesch",
            "Tizi n'Tichka-Pass (2260 m) — Fotostopp",
            "Aït Benhaddou — geführte UNESCO-Besichtigung",
            "Freies Mittagessen in Ouarzazate",
            "Filmstudios & Taourirt-Kasbah",
            "~20:00 — Rückkehr nach Marrakesch",
          ],
        },
      ],
      included: [
        "Klimatisierter 4x4 oder Minibus",
        "Professioneller zweisprachiger Fahrer",
        "Lokaler Guide in Aït Benhaddou",
        "Mineralwasser (1 Flasche/Person)",
        "Abholung an der Unterkunft",
      ],
      notIncluded: [
        "Mittagessen und Getränke",
        "Kasbah-Eintritt (~30 MAD)",
        "Studio-Eintritt (~80 MAD, optional)",
        "Persönliche Ausgaben und Trinkgeld",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "300 €" },
        { travelers: "3–4 Reisende", price: "300 €" },
        { travelers: "5–7 Reisende", price: "300 €" },
        { travelers: "8–14 Reisende", price: "300 €" },
        { travelers: "15–17 Reisende", price: "300 €" },
      ],
      faqs: [
        {
          question: "Kostenlose Stornierung?",
          answer: "Ja, bis 48 Stunden vor Abfahrt kostenlos.",
        },
        {
          question: "Was ist im Preis enthalten?",
          answer: "Privattransport, Fahrer, lokaler Guide und Wasser an Bord.",
        },
        {
          question: "Maximale Gruppengröße?",
          answer: "1 bis 17 Personen. Privatisierung möglich.",
        },
        {
          question: "Was mitbringen?",
          answer: "Bequeme Schuhe, Mütze, Sonnencreme, leichte Jacke.",
        },
        {
          question: "Beste Reisezeit?",
          answer: "Ganzjährig. März–Mai und September–November ideal.",
        },
      ],
    },
    ouzoud: {
      metaTitle: "Ouzoud-Wasserfälle — Tagesausflug | Red Nomad",
      metaDescription:
        "Tagesausflug zu den Ouzoud-Wasserfällen (110 m) ab Marrakesch. Berberaffen, Spaziergang am Fuß der Fälle.",
      subtitle: "Marokkos höchste Wasserfälle",
      difficulty: "Leicht",
      duration: "1 Tag",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, Englisch",
      about:
        "150 km von Marrakesch entfernt stürzen die Ouzoud-Fälle 110 Meter in ein grünes Tal. Wilde Berberaffen, traditionelle Ölmühlen und Bootsfahrten.",
      highlights: [
        "110 m Wasserfälle — höchste in Marokko",
        "Wilde Berberaffen",
        "Wanderung zum Fuß der Fälle",
        "Traditionelle Mühlen und Olivenbäume",
        "Mittagessen mit Blick auf die Fälle",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Programm — Ouzoud-Wasserfälle",
          description: "Naturtag mit 3 Stunden an den Fällen.",
          steps: [
            "08:00 — Abholung Marrakesch",
            "10:30 — Ankunft Ouzoud",
            "Besichtigung und Wanderweg",
            "Freizeit: Fotos, Affen, Mittagessen",
            "16:00 — Rückfahrt",
            "~18:30 — Marrakesch",
          ],
        },
      ],
      included: [
        "Privater klimatisierter Hin- und Rücktransport",
        "Professioneller Fahrer",
        "Lokale Begleitung",
        "Mineralwasser",
        "Abholung an der Unterkunft",
      ],
      notIncluded: [
        "Mittagessen und Getränke",
        "Boot (~20 MAD, optional)",
        "Offizieller Guide (~30 MAD, optional)",
        "Persönliche Ausgaben",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "150 €" },
        { travelers: "3–4 Reisende", price: "150 €" },
        { travelers: "5–7 Reisende", price: "150 €" },
        { travelers: "8–14 Reisende", price: "150 €" },
        { travelers: "15–17 Reisende", price: "150 €" },
      ],
      faqs: [
        {
          question: "Kann man baden?",
          answer: "Ja im Sommer. Badekleidung mitbringen.",
        },
        {
          question: "Für Kinder geeignet?",
          answer: "Ja, Hauptweg zugänglich. Kinder nahe Affen beaufsichtigen.",
        },
        {
          question: "Gute Kondition nötig?",
          answer: "Nein, moderate 30–45 Minuten Wanderung.",
        },
        {
          question: "Kostenlose Stornierung?",
          answer: "Ja, bis 48 Stunden vorher.",
        },
      ],
    },
    essaouira: {
      metaTitle: "Essaouira UNESCO-Medina — Atlantik-Tagesausflug | Red Nomad",
      metaDescription:
        "Tagesausflug nach Essaouira ab Marrakesch: UNESCO-Medina, Fischhafen, Stadtmauer und Strand.",
      subtitle: "Perle des Atlantiks",
      difficulty: "Leicht",
      duration: "1 Tag",
      groupSize: "1–17 Personen",
      departure: "Marrakesch",
      languages: "Französisch, Englisch",
      about:
        "Essaouira, das alte Mogador, ist eine befestigte Atlantikstadt. UNESCO-Medina, blauer Fischerhafen, Stadtmauer und windiger Strand — bohemische Auszeit 2,5 Stunden von Marrakesch.",
      highlights: [
        "UNESCO-Medina — Gassen und Handwerk",
        "Fischhafen — blaue Boote",
        "Skala-Stadtmauer — Meerblick",
        "Arganbaum-Route — Kooperativen",
        "Strand und bohemische Atmosphäre",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Programm — Essaouira",
          description: "Freizeit in Essaouira nach der Morgenfahrt.",
          steps: [
            "08:00 — Abholung Marrakesch",
            "Fahrt über Chichaoua — Argan-Stop (optional)",
            "11:00 — Ankunft, freie Medina",
            "Mittagessen am Hafen",
            "Nachmittag: Mauer, Strand, Shopping",
            "17:00 — Rückfahrt (~20:00 Marrakesch)",
          ],
        },
      ],
      included: [
        "Privater klimatisierter Transport",
        "Zweisprachiger Fahrer",
        "Mineralwasser",
        "Abholung",
        "Lokale Tipps",
      ],
      notIncluded: [
        "Mittagessen und Getränke",
        "Museumseintritte",
        "Wassersport",
        "Persönliche Ausgaben",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "290 €" },
        { travelers: "3–4 Reisende", price: "290 €" },
        { travelers: "5–7 Reisende", price: "290 €" },
        { travelers: "8–14 Reisende", price: "290 €" },
        { travelers: "15–17 Reisende", price: "290 €" },
      ],
      faqs: [
        {
          question: "Wie viel Freizeit?",
          answer: "Etwa 5–6 Stunden in Essaouira.",
        },
        {
          question: "Ist es windig?",
          answer: "Ja, oft am Nachmittag. Leichte Jacke mitbringen.",
        },
        {
          question: "Baden möglich?",
          answer: "Strand zugänglich, Wasser eher kühl.",
        },
        {
          question: "Kostenlose Stornierung?",
          answer: "Ja, bis 48 Stunden vorher.",
        },
      ],
    },
    ourika: {
      metaTitle:
        "Ourika-Tal & Wasserfälle — Privater Tagesausflug mit Mittagessen | Red Nomad",
      metaDescription:
        "Privater Tagesausflug ins Ourika-Tal ab Marrakesch: Setti-Fatma-Wasserfälle, Argan-Kooperative, Berberhaus, traditionelles Mittagessen am Fluss.",
      subtitle: "Wasserfälle, Argan & Berber-Mittagessen",
      difficulty: "Mittel",
      duration: "6 Std.",
      groupSize: "1–17 Personen (privat)",
      departure: "Marrakesch",
      languages: "Französisch, Englisch, Arabisch",
      about:
        "Entfliehen Sie Marrakesch auf einen privaten Tagesausflug ins Ourika-Tal am Fuße des Hohen Atlas. Nach der Abholung am Riad genießen Sie eine Panoramafahrt durch Olivenhaine und Berberdörfer. Spaziergang am Fluss, Besuch einer Argan-Kooperative, Minztee in einem Berberhaus, 3-Gänge-Mittagessen mit Talblick und geführte Wanderung zu den Setti-Fatma-Wasserfällen.",
      highlights: [
        "Private, personalisierte Erfahrung für Ihre Gruppe",
        "Ourika-Tal und Hoher-Atlas-Landschaften",
        "Geführte Wanderung zu den Setti-Fatma-Wasserfällen",
        "Argan-Kooperative und Marokkos « flüssiges Gold »",
        "Traditionelles marokkanisches Mittagessen am Fluss",
        "Berberhaus und Minztee",
      ],
      itinerary: [
        {
          dayLabel: "T1",
          title: "Marrakesch — Ourika — Wasserfälle — Marrakesch",
          description:
            "Privater Tag (~6 Std.): Natur, Berberkultur und Mittagessen inklusive.",
          steps: [
            "Abholung an Hotel oder Riad in Marrakesch",
            "Panoramafahrt (~1 Std.): Landschaft, Olivenhaine und Berberdörfer",
            "Besuch einer Argan-Kooperative — traditionelle Vorführung",
            "Spaziergang im Ourika-Tal entlang des Flusses",
            "Fotostopp und Berberhaus-Besuch (Minztee)",
            "Traditionelles Mittagessen am Fluss (Vorspeise, Hauptgericht, Dessert)",
            "Geführte Wanderung zu den Setti-Fatma-Wasserfällen",
            "Freizeit für Fotos und Erkundung",
            "Rückfahrt nach Marrakesch (~1 Std.)",
          ],
        },
      ],
      included: [
        "Private Abholung und Rückfahrt zum Hotel oder Riad",
        "Privates klimatisiertes Fahrzeug mit professionellem Fahrer",
        "WLAN an Bord",
        "Französisch- oder englischsprachiger lokaler Guide im Tal",
        "Panoramischer Fotostopp",
        "Berberhaus-Besuch mit Minztee",
        "Besuch einer Argan-Öl-Kooperative",
        "Geführter Spaziergang zu den Setti-Fatma-Wasserfällen",
        "Freizeit für Fotos entlang des Weges",
        "Mittagessen am Fluss (3 Gänge)",
        "Halbe Wasserflasche pro Person",
      ],
      notIncluded: [
        "Getränke (außer mitgeliefertem Wasser)",
        "Persönliche Einkäufe in der Kooperative",
        "Trinkgelder (lokaler Brauch)",
      ],
      groupPricing: [
        { travelers: "2 Reisende", price: "97 €/Pers." },
        { travelers: "3–4 Reisende", price: "72 €/Pers." },
        { travelers: "5–7 Reisende", price: "56 €/Pers." },
        { travelers: "8–14 Reisende", price: "47 €/Pers." },
        { travelers: "15–17 Reisende", price: "42 €/Pers." },
      ],
      faqs: [
        {
          question: "Wie anstrengend ist die Wanderung zu den Wasserfällen?",
          answer:
            "Mittel: Weg mit Stufen und felsigen Abschnitten. Bequeme Schuhe, Sonnenbrille und Hut empfohlen.",
        },
        {
          question: "Ist das Mittagessen inbegriffen?",
          answer:
            "Ja: traditionelles 3-Gänge-Menü am Fluss. Getränke extra.",
        },
        {
          question: "Für Familien geeignet?",
          answer:
            "Ja, ideal für Familien oder Freunde. Tempo an Ihre Gruppe anpassbar.",
        },
        {
          question: "Kostenlose Stornierung?",
          answer: "Ja, bis 24 Stunden vorher für volle Rückerstattung.",
        },
      ],
    },
    ...extraExcursionDetailsDe,
  },
};
