import type { Dictionary } from "../types";

export const fr: Dictionary = {
  locale: "fr",
  meta: {
    title: "Transferts aéroport & circuits | Arganis Nomad",
    description:
      "Transferts aéroport, excursions et circuits privés au Maroc. Véhicules récents, chauffeurs locaux, voyages sur mesure de Marrakech au Sahara.",
    keywords: [
      "Maroc",
      "transfert Marrakech",
      "circuits Maroc",
      "transport touristique",
      "Marrakech",
      "excursions",
    ],
    ogTitle: "Arganis Nomad — Transferts aéroport, excursions et circuits au Maroc",
    ogDescription:
      "Transferts aéroport, excursions et circuits privés au Maroc avec chauffeurs locaux.",
  },
  site: {
    tagline: "Transferts aéroport · Excursions · Circuits privés au Maroc",
    logoSubtitle: "Tourisme · Transport",
    address: "Marrakech, Maroc",
  },
  nav: {
    destinations: { label: "Destinations", href: "#destinations" },
    excursions: { label: "Excursions", href: "/excursions" },
    circuits: { label: "Circuits", href: "/circuits" },
    activities: { label: "Activités", href: "#activites" },
    transfers: { label: "Transferts", href: "#transferts" },
    discover: { label: "Découvrir", href: "#pourquoi" },
  },
  common: {
    contact: "Contact",
    contactUs: "Contactez-nous",
    login: "Connexion",
    from: "Dès",
    perPerson: "/pers.",
    perTrip: "/voyage",
    menu: "Menu",
    discover: "Découvrir",
    whatsapp: "Arganis Nomad",
    whatsappAria: "Contacter Arganis Nomad via WhatsApp",
    whatsappMessage: "Bonjour Arganis Nomad, ",
    excursionsCount: "excursions",
    close: "Fermer",
  },
  hero: {
    imageAlt: "Dunes du Sahara au coucher du soleil",
    badge: "Aventures premium au Maroc",
    title: "Le Maroc hors",
    titleHighlight: "des sentiers battus",
    description:
      "Bivouacs confidentiels, treks berbères, vallées oubliées. Vos aventures sur mesure conçues par des guides locaux qui connaissent le vrai Maroc.",
    googleRating: "/5 sur Google",
    travelers: "aventuriers",
    responseTime: "Réponse en",
    ctaCustomize: "Configurez votre aventure",
    scrollHint: "Découvrir",
  },
  trustBar: {
    securePayment: "Paiement sécurisé",
    rated: "Noté 4.9/5",
    confirmation: "Confirmation sous 2 heures",
    documents: "Documents sous 24 h",
  },
  transfers: {
    eyebrow: "Transport touristique",
    title: "Transferts privés & chauffeur",
    description:
      "Véhicules récents, climatisés, avec chauffeur local francophone. Accueil à l'aéroport, transferts en ville et trajets longue distance au Maroc.",
    viewAll: "Demander un devis",
    cta: "Réserver un transfert",
    galleryTitle: "Notre flotte & nos routes au Maroc",
    fleetTitle: "Flotte touristique",
    fleet: {
      sedan: { name: "Berline confort", detail: "Aéroport & ville" },
      van: { name: "Van premium", detail: "Familles & excursions" },
      suv: { name: "SUV 4×4", detail: "Désert & Atlas" },
      minibus: { name: "Minibus", detail: "Groupes & séminaires" },
    },
    fleetFeatures: ["Climatisé", "Chauffeur FR/EN", "Sièges bébé", "Assurance incluse"],
    items: {
      airport: {
        title: "Transfert aéroport Marrakech",
        badge: "Accueil personnalisé",
        description:
          "Prise en charge à l'aéroport Menara, panneau nominatif, suivi de vol, sièges bébé sur demande.",
      },
      city: {
        title: "Transfert privé en ville",
        badge: "Riad & hôtel",
        description:
          "Déplacements à Marrakech : médina, hôtels, gare, restaurants. Véhicule privé avec chauffeur à l'heure ou à la journée.",
      },
      intercity: {
        title: "Trajets inter-villes",
        badge: "Longue distance",
        description:
          "Marrakech ↔ Casablanca, Fès, Essaouira, Agadir, Ouarzazate. Confort, pauses café, itinéraire flexible.",
      },
      group: {
        title: "Van & minibus groupe",
        badge: "Familles & groupes",
        description:
          "Minivan 7 places ou minibus pour familles, séminaires et groupes. Idéal pour circuits et excursions privées.",
      },
    },
    gallery: {
      "van-desert": "Van de luxe dans le désert",
      "vans-tunnel": "Minibus sur les routes de montagne",
      "suv-kasbah": "SUV 4×4 devant une kasbah",
      "atlas-highway": "Route de l'Atlas depuis le véhicule",
      "mountain-pass": "Route sinueuse dans le Haut Atlas",
      "dades-gorges": "Gorges du Dadès en minibus",
      ouzoud: "Excursion aux cascades d'Ouzoud",
      ourika: "Excursion vallée de l'Ourika & cascades",
      essaouira: "Transfert vers Essaouira",
      volubilis: "Circuit Volubilis",
      "desert-oasis": "Oasis du Sahara",
      "fes-tannery": "Transfert vers Fès",
      sunset: "Coucher de soleil au Maroc",
    },
  },
  circuits: {
    eyebrow: "Circuits multi-jours",
    title: "Nos circuits sur mesure",
    description:
      "Du court séjour 3 jours au désert jusqu'au circuit Marrakech–Chefchaouen. Sur mesure, petits groupes, guide francophone berbère.",
    viewAll: "Tous nos circuits",
    resultsCount: "{count} résultats",
    filters: {
      title: "Filtres",
      category: "Catégorie",
      destination: "Destination",
      departure: "Départ",
      difficulty: "Difficulté",
      duration: "Durée max.",
      budget: "Budget max.",
      all: "Toutes",
      reset: "Réinitialiser",
      days: "jours",
    },
    categories: {
      desert: "Désert",
      culture: "Culture & villes",
      coast: "Côte",
      adventure: "Aventure & Atlas",
    },
    difficulties: {
      easy: "Facile",
      moderate: "Modéré",
    },
    destinations: {
      merzouga: "Merzouga & Sahara",
      chefchaouen: "Chefchaouen & Nord",
      imperial: "Villes impériales",
      essaouira: "Essaouira & côte sud",
      atlas: "Atlas & Megdaz",
    },
    departures: {
      marrakech: "Marrakech",
      casablanca: "Casablanca",
    },
    items: {
      "circuit-sahara-atlas-3j": {
        title: "Circuit 3 jours Marrakech, Sahara & Atlas",
        badge: "Best-seller",
        duration: "3 jours",
        description:
          "L'essentiel en 3 jours : Haut Atlas, Aït Benhaddou, dunes de Merzouga, nuit en bivouac de luxe et retour à Marrakech.",
      },
      "sahara-dades-4j": {
        title: "Sahara, Gorges du Dadès & Merzouga — 4 jours",
        badge: "Désert & gorges",
        duration: "4 jours",
        description:
          "Aït Benhaddou, Gorges du Dadès et du Todra, Erg Chebbi à Merzouga, vallée du Drâa et oasis de Fint — le grand sud en 4 jours.",
      },
      "grand-tour-3j": {
        title: "Marrakech — Chefchaouen 3 jours",
        badge: "Villes impériales",
        duration: "3 jours",
        description:
          "De Marrakech à Chefchaouen : Casablanca, Rabat, Fès la ville la plus traditionnelle et les ruelles bleues de Chefchaouen.",
      },
      "imperial-cities-8j": {
        title: "Villes Impériales Maroc 8 jours — Fès, Meknès, Marrakech",
        badge: "Best-seller",
        duration: "8 jours",
        description:
          "Casablanca, Rabat, Volubilis, Meknès, Fès UNESCO et Chefchaouen la bleue — le grand circuit des villes impériales du Maroc.",
      },
      "southern-coast-8j": {
        title: "Taroudante & Essaouira — 8 jours sud marocain & côte atlantique",
        badge: "Insolite",
        duration: "8 jours",
        description:
          "Souss, Anti-Atlas et côte atlantique : Taroudante, Tafraoute, Taghazout et Essaouira — loin des sentiers battus.",
      },
      "megdaz-3j": {
        title: "Vallée de Megdaz",
        badge: "Authentique",
        duration: "3 jours",
        description:
          "L'Atlas authentique : trek dans un village berbère préservé, nuit chez l'habitant, marche dans les terrasses agricoles.",
      },
    },
  },
  excursions: {
    eyebrow: "Excursions à la journée",
    title: "Excursions phares depuis Marrakech",
    description:
      "Les itinéraires que nos voyageurs choisissent encore et encore — une journée, un guide local, votre véhicule privé.",
    viewAll: "Toutes les excursions",
    viewDetails: "Voir les détails",
    resultsCount: "{count} résultats",
    departure: "Marrakech",
    filters: {
      title: "Filtres",
      category: "Catégorie",
      destination: "Destination",
      difficulty: "Difficulté",
      duration: "Durée",
      budget: "Budget max.",
      all: "Toutes",
      reset: "Réinitialiser",
    },
    categories: {
      nature: "Nature",
      culture: "Culture",
      coast: "Côte",
      adventure: "Aventure",
    },
    difficulties: {
      easy: "Facile",
      moderate: "Modéré",
    },
    destinations: {
      atlas: "Atlas & Ourika",
      agafay: "Désert d'Agafay",
      ouzoud: "Ouzoud",
      essaouira: "Essaouira",
      ouarzazate: "Ouarzazate & Aït Benhaddou",
      casablanca: "Casablanca",
      agadir: "Agadir & Taghazout",
    },
    footerIntro:
      "Toutes nos excursions à la journée au départ de Marrakech : trekking dans l'Atlas, Aït Benhaddou, Cascades d'Ouzoud, Vallée de l'Ourika, Essaouira. Opérées par notre équipe locale berbère, avec transferts privés climatisés, guide francophone, eau minérale offerte et déjeuner traditionnel inclus selon le programme.",
    whyTitle: "Pourquoi partir en excursion avec nous ?",
    why: [
      {
        title: "Petits groupes",
        description:
          "Maximum 17 voyageurs, le plus souvent 2 à 8. Pas de bus géant — plus de temps avec votre guide et plus d'arrêts spontanés.",
      },
      {
        title: "Itinéraires hors sentiers battus",
        description:
          "Nous évitons les arrêts touristiques piégés. Nos guides privilégient les vraies rencontres : artisans locaux, familles berbères, cuisines de village.",
      },
      {
        title: "Tout compris, sans surprise",
        description:
          "Transfert privé, guide francophone, entrées des sites mentionnés, eau minérale, déjeuner traditionnel selon programme. Aucun frais caché.",
      },
      {
        title: "Confirmation rapide",
        description:
          "Réservation confirmée en moins de 2 h. Annulation gratuite jusqu'à 48 h avant le départ. Paiement sécurisé ou virement bancaire.",
      },
    ],
    faqs: [
      {
        question: "Combien coûte une excursion à la journée au Maroc ?",
        answer:
          "Comptez 70 à 130 €/personne pour les excursions classiques (Ourika, 3 Vallées) en petit groupe. 130 à 200 €/personne pour les destinations plus éloignées (Aït Benhaddou, Ouzoud, Essaouira). Tous nos tarifs incluent transferts, guide et eau — déjeuner inclus selon le programme.",
      },
      {
        question: "Quels horaires pour une excursion à la journée ?",
        answer:
          "Départ entre 7 h et 9 h depuis votre hôtel ou riad, retour entre 17 h et 20 h selon la destination. Pour Aït Benhaddou, Ouzoud ou Essaouira, prévoyez une journée complète (10–12 h).",
      },
      {
        question: "Que dois-je apporter ?",
        answer:
          "Tenue confortable, chaussures fermées, casquette, crème solaire, lunettes et appareil photo. L'eau minérale est fournie. Pour Imlil ou l'Atlas, une polaire est utile même en été.",
      },
      {
        question: "Les excursions sont-elles adaptées aux enfants ?",
        answer:
          "Oui, la plupart sont familiales. Nous adaptons les rythmes, fournissons sièges enfants gratuits et proposons des pauses fréquentes. Contactez-nous pour les très jeunes enfants.",
      },
      {
        question: "Puis-je privatiser une excursion ?",
        answer:
          "Oui, sans surcoût important. Vous gardez le contrôle des horaires, arrêts et pauses. Pour 4 personnes, le tarif privé est souvent moins de 15 % plus cher que le tarif partagé.",
      },
    ],
    items: {
      ourika: {
        title: "Vallée de l'Ourika — Excursion privée 1 jour",
        badge: "Populaire",
        duration: "1 j",
        description:
          "Villages berbères, cascades spectaculaires et vie authentique à seulement 1 h de Marrakech.",
      },
      agafay: {
        title: "Désert d'Agafay — Excursion 1 jour",
        badge: "Phare",
        duration: "1 j",
        description:
          "Désert de pierre à 45 min de Marrakech : balade à dos de chameau, coucher de soleil et dîner berbère face à l'Atlas.",
      },
      imlil: {
        title: "Imlil & Mont Toubkal — Randonnée Haut Atlas",
        badge: "Coup de cœur",
        duration: "1 j",
        description:
          "Explorez Imlil (1740 m), porte du Toubkal, ses douars berbères et ses panoramas alpins à couper le souffle.",
      },
      "trois-vallees": {
        title: "Les 3 Vallées du Haut Atlas — Journée 4×4",
        badge: "Nouvelle excursion",
        duration: "1 j",
        description:
          "Ourika, Setti Fatma et Oukaimeden (2650 m) : le meilleur du Haut Atlas en une seule journée.",
      },
      ouzoud: {
        title: "Cascades d'Ouzoud — Excursion 1 jour",
        badge: "Best-seller",
        duration: "1 j",
        description:
          "Les plus grandes cascades du Maroc (110 m), singes magots sauvages et oliveraies centenaires.",
      },
      essaouira: {
        title: "Essaouira — Médina UNESCO & côte atlantique",
        badge: "Populaire",
        duration: "1 j",
        description:
          "Médina classée UNESCO, port de pêche animé, artisanat de thuya et lumière atlantique unique.",
      },
      "ait-benhaddou": {
        title: "Aït Benhaddou UNESCO & Ouarzazate",
        badge: "Incontournable",
        duration: "1 j",
        description:
          "Col du Tizi n'Tichka (2260 m), Kasbah UNESCO d'Aït Benhaddou et Ouarzazate, Hollywood de l'Afrique.",
      },
      casablanca: {
        title: "Casablanca — Mosquée Hassan II, journée privée",
        badge: "Nouveau",
        duration: "1 j",
        description:
          "Mosquée Hassan II (3e plus grande du monde), Art Déco des années 1930 et Corniche atlantique.",
      },
      "agadir-taghazout": {
        title: "Agadir & Taghazout — Surf, plage atlantique",
        badge: "Nouvelle excursion",
        duration: "1 j",
        description:
          "Découvrez Agadir et le charme de Taghazout, village de surf sur la côte atlantique.",
      },
    },
  },
  excursionDetail: {
    breadcrumbHome: "Accueil",
    breadcrumbAll: "Toutes les expériences",
    about: "À propos de ce voyage",
    highlights: "Points forts",
    itinerary: "Itinéraire jour par jour",
    included: "Inclus",
    notIncluded: "Non inclus",
    groupPricing: "Tarifs par groupe",
    faq: "Questions fréquentes",
    whyBook: "Pourquoi réserver avec Arganis Nomad ?",
    book: "Réserver",
    requestQuote: "Demander un devis",
    freeCancel: "Annulation gratuite 48h avant",
    instantConfirm: "Confirmation instantanée",
    duration: "Durée",
    group: "Groupe",
    departure: "Départ",
    languages: "Langues",
    reviews: "avis",
    from: "À partir de",
    perPerson: "/ personne",
    perTrip: "/ voyage",
    tripPricing: "Tarif du voyage",
    flatPriceNote: "Prix forfaitaire pour votre véhicule privé",
    totalFor2: "pour 2 (total)",
    discover: "À découvrir",
    readyTitle: "Prêt à vivre l'aventure ?",
    readyCta: "Créez votre voyage sur mesure",
  },
  activities: {
    eyebrow: "Ce que vous allez vivre",
    title: "Activités phares au Maroc",
    description:
      "Des expériences authentiques sélectionnées par notre équipe berbère",
    viewAll: "Voir toutes les activités",
    items: {
      camel: "Balade à dos de dromadaire",
      tent: "Bivouac de luxe dans le désert",
      balloon: "Vol en montgolfière au-dessus de Marrakech",
      chef: "Cours de cuisine marocaine",
      sunset: "Dîner & coucher de soleil dans le désert",
      spa: "Hammam & spa traditionnel marocain",
      hiking: "Randonnée & nature dans l'Atlas",
      quad: "Quad & Buggy dans le désert",
    },
  },
  whyUs: {
    eyebrow: "Pourquoi nous",
    title: "Le Maroc authentique, par ceux qui le vivent",
    description:
      "Pas une agence étrangère qui sous-traite. Une équipe berbère qui conçoit chaque voyage avec l'hospitalité et la tradition du vrai Maroc.",
    cta: "Créer mon voyage sur mesure",
    features: {
      guides: {
        title: "Guides berbères locaux",
        description:
          "Nés et grandis dans l'Atlas, le Sahara, les vallées. Ils connaissent les villages, les passes, les familles.",
      },
      custom: {
        title: "Aventures sur mesure",
        description:
          "Bivouac privatisé, trek hors GPS, route off-road. On dessine votre itinéraire selon votre tempo.",
      },
      support: {
        title: "Un humain joignable 24/7",
        description:
          "WhatsApp direct avec votre conseiller pendant tout le séjour. Pas un chatbot, pas un standard.",
      },
      tested: {
        title: "Tout testé sur le terrain",
        description:
          "Aucun hôtel, bivouac ou chauffeur que nous n'ayons personnellement testé. Zéro mauvaise surprise.",
      },
    },
    stats: {
      "0": "Années d'expérience",
      "1": "Voyages réalisés",
      "2": "Destinations",
      "3": "Note moyenne",
    },
  },
  testimonials: {
    eyebrow: "Avis vérifiés Google",
    title: "Ce que disent nos voyageurs",
    subtitle:
      "avis vérifiés sur Google · {rating}/5 en moyenne · 96% de voyageurs satisfaits",
    readAll: "Lire les {count} avis sur Google",
    items: {
      claire: {
        date: "il y a 2 mois",
        text: "Nous avons fait appel aux services de cette entreprise pour nos trajets lors de nos vacances à Marrakech. Service parfait avec 2 enfants en bas âge, sièges auto et communication impeccable. Nous contacterons Hamid sans aucun doute !",
      },
      adil: {
        date: "il y a un mois",
        text: "Une agence sérieuse avec un service de grande qualité. Toujours à l'écoute, réactive et fiable. C'est un vrai plaisir de travailler avec eux.",
      },
      genevieve: {
        date: "il y a 7 mois",
        text: "Service parfait, gentillesse, patience car nous étions souvent en retard, véhicule récent et très propre. Merci.",
      },
      salvatore: {
        date: "il y a 3 mois",
        text: "Super service et professionnalisme. Merci beaucoup Hamid et à bientôt.",
      },
    },
  },
  destinations: {
    eyebrow: "Destinations",
    title: "Destinations d'Exception",
    viewAll: "Toutes les destinations",
    breadcrumbAll: "Toutes les destinations",
    names: {
      marrakech: "Marrakech",
      merzouga: "Merzouga",
      "nord-maroc": "Nord du Maroc",
      fes: "Fès",
      essaouira: "Essaouira",
      megdaz: "Megdaz",
      agadir: "Agadir",
      oualili: "Fès (Oualili)",
    },
    items: {
      marrakech: { badge: "Ville impériale" },
      merzouga: { badge: "Désert du Sahara" },
      "nord-maroc": { badge: "Côte & Rif" },
      fes: { badge: "Médina UNESCO" },
      essaouira: { badge: "Perle atlantique" },
      megdaz: { badge: "Atlas authentique" },
      agadir: { badge: "Côte sud" },
      oualili: { badge: "Sites antiques" },
    },
  },
  newsletter: {
    badge: "Guide gratuit offert",
    title: "Restez Inspiré",
    description:
      "Recevez nos meilleures offres et conseils de voyage au Maroc",
    placeholder: "Votre adresse email",
    submit: "S'abonner",
    success: "Merci ! Vérifiez votre boîte mail.",
    disclaimer: "Pas de spam. Désabonnement en un clic.",
  },
  footer: {
    ctaTitle: "Prêt à vivre l'aventure ?",
    ctaDescription:
      "Créez votre voyage sur mesure au cœur du Maroc traditionnel",
    customTrip: "Voyage sur mesure",
    about:
      "Votre partenaire de confiance pour circuits sur mesure et transferts privés au Maroc — de l'aéroport aux dunes du Sahara.",
    discover: "Découvrir",
    company: "Entreprise",
    newsletter: "Newsletter",
    newsletterDescription:
      "Recevez nos meilleures offres et inspirations voyage",
    blog: "Blog",
    companyLinks: [
      "À propos",
      "Contact",
      "FAQ",
      "Conditions",
      "Confidentialité",
      "Remboursement",
    ],
    securePayment: "Paiement sécurisé",
    multiCurrency: "Multi-devises",
    certified: "Certifié Tourisme",
    copyright: "Tous droits réservés.",
    legal:
      "RC : 152895 · ICE : 00356224500026 · Autorisation transport touristique N° 2674/TOUR/2024",
    contactForm: {
      title: "Envoyez-nous un message",
      description: "Décrivez votre projet, nous vous répondons rapidement.",
      nameLabel: "Nom",
      emailLabel: "Email",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre email",
      messagePlaceholder: "Votre message (dates, destinations, nombre de personnes…)",
      submit: "Envoyer par email",
      subjectPrefix: "Demande voyage",
    },
  },
  cookies: {
    message:
      "Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de confidentialité.",
    decline: "Refuser",
    accept: "Accepter",
  },
};
