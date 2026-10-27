import type { PlanId } from "./site";

export type Lang = "fr" | "en";

export type Content = {
  meta: { title: string; description: string };
  nav: { example: string; plans: string; faq: string; cta: string; switchLabel: string; switchHref: string };
  hero: { eyebrow: string; title: string; highlight: string; subtitle: string; cta: string; secondary: string; bullets: string[] };
  why: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  example: { eyebrow: string; title: string; intro: string; days: { day: string; title: string; text: string }[] };
  plans: {
    eyebrow: string;
    title: string;
    subtitle: string;
    popular: string;
    choose: string;
    items: Record<PlanId, { name: string; pitch: string; features: string[] }>;
  };
  form: {
    eyebrow: string;
    title: string;
    subtitle: string;
    plan: string;
    name: string;
    email: string;
    dates: string;
    travellers: string;
    budget: string;
    budgets: string[];
    interests: string;
    interestOptions: string[];
    notes: string;
    submit: string;
    required: string;
    step2Title: string;
    step2Text: string;
    pay: string;
    payUnavailable: string;
    step3Title: string;
    step3Text: string;
    sendWhatsapp: string;
    sendEmail: string;
    edit: string;
    messageIntro: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  footer: { legal: string; tagline: string };
};

const fr: Content = {
  meta: {
    title: "MarocPlan · Votre itinéraire au Maroc sur mesure en 24 h",
    description:
      "Un expert local du tourisme au Maroc prépare votre itinéraire jour par jour : étapes, riads, restaurants, budget et transports. Livré en 24 h dès 19 €.",
  },
  nav: { example: "Exemple", plans: "Tarifs", faq: "FAQ", cta: "Commander", switchLabel: "EN", switchHref: "/en" },
  hero: {
    eyebrow: "Préparé par un professionnel du tourisme au Maroc",
    title: "Votre voyage au Maroc,",
    highlight: "planifié pour vous en 24 h",
    subtitle:
      "Fini les heures sur les forums. Dites-nous vos dates, votre budget et vos envies : vous recevez un itinéraire jour par jour, avec les bonnes adresses et les vrais prix.",
    cta: "Recevoir mon itinéraire",
    secondary: "Voir un exemple",
    bullets: ["Livré en 24 h", "Dès 19 €", "Adresses testées sur place", "Satisfait ou remboursé"],
  },
  why: {
    eyebrow: "Pourquoi MarocPlan",
    title: "Les conseils d'un local, pas d'un algorithme",
    items: [
      { title: "Éviter les pièges", text: "Faux guides, taxis sans compteur, souks hors de prix : on vous dit quoi faire et à quel prix." },
      { title: "Des trajets réalistes", text: "Les distances au Maroc sont longues. Votre itinéraire tient compte des vrais temps de route." },
      { title: "Votre budget respecté", text: "Riads, restaurants et activités choisis selon votre budget, avec les prix actuels." },
    ],
  },
  example: {
    eyebrow: "Exemple d'itinéraire",
    title: "7 jours : Marrakech, désert et Fès",
    intro: "Extrait de la formule Complet. Chaque jour inclut adresses, horaires, prix et conseils pratiques.",
    days: [
      { day: "J1", title: "Marrakech, la médina", text: "Jardin Majorelle tôt le matin, déjeuner à Mouassine, souks l'après-midi, coucher de soleil sur une terrasse de Jemaa el-Fna." },
      { day: "J2", title: "Palais et hammam", text: "Palais Bahia et tombeaux saadiens, hammam traditionnel, dîner dans un riad du quartier Kasbah." },
      { day: "J3", title: "Col du Tichka et Aït-Ben-Haddou", text: "Route de l'Atlas, visite de la kasbah classée UNESCO, nuit à Ouarzazate." },
      { day: "J4", title: "Gorges du Dadès et du Todra", text: "Vallée des roses, marche dans les gorges du Todra, nuit dans une maison d'hôtes berbère." },
      { day: "J5", title: "Désert de Merzouga", text: "Balade à dos de dromadaire au coucher du soleil, nuit sous tente dans les dunes de l'Erg Chebbi." },
      { day: "J6", title: "Route vers Fès", text: "Lever de soleil sur les dunes, forêt de cèdres d'Azrou et singes magots, arrivée à Fès." },
      { day: "J7", title: "Fès, la médina", text: "Tanneries Chouara, médersa Bou Inania, conseils pour choisir un guide officiel." },
    ],
  },
  plans: {
    eyebrow: "Tarifs",
    title: "Choisissez votre formule",
    subtitle: "Paiement sécurisé. Itinéraire livré par email et WhatsApp en 24 h. Remboursé si vous n'êtes pas satisfait.",
    popular: "Le plus choisi",
    choose: "Choisir",
    items: {
      essentiel: {
        name: "Essentiel",
        pitch: "L'itinéraire jour par jour pour partir serein.",
        features: ["Itinéraire jour par jour (PDF)", "Temps de trajet et transports", "Incontournables et conseils pratiques", "Livré en 24 h"],
      },
      complet: {
        name: "Complet",
        pitch: "Tout est prévu : où dormir, où manger, combien ça coûte.",
        features: ["Tout l'Essentiel", "Riads et hôtels recommandés selon votre budget", "Restaurants et adresses locales", "Budget détaillé par jour", "Appel WhatsApp de 20 min"],
      },
      premium: {
        name: "Premium",
        pitch: "Un local avec vous avant et pendant le voyage.",
        features: ["Tout le Complet", "Aide aux réservations (riads, chauffeurs, excursions)", "2 révisions de l'itinéraire", "Assistance WhatsApp pendant tout le voyage"],
      },
    },
  },
  form: {
    eyebrow: "Commander",
    title: "Parlez-nous de votre voyage",
    subtitle: "2 minutes pour répondre, puis paiement sécurisé. Votre itinéraire arrive sous 24 h.",
    plan: "Formule",
    name: "Votre prénom *",
    email: "Votre email *",
    dates: "Dates ou durée du voyage *",
    travellers: "Voyageurs (ex : 2 adultes, 1 enfant)",
    budget: "Budget par personne (hors vols)",
    budgets: ["Moins de 500 €", "500 à 1 000 €", "1 000 à 2 000 €", "Plus de 2 000 €"],
    interests: "Vos envies",
    interestOptions: ["Désert", "Médinas et culture", "Plage", "Montagne et randonnée", "Gastronomie", "Luxe et détente"],
    notes: "Autres précisions (ville d'arrivée, rythme, contraintes…)",
    submit: "Continuer vers le paiement",
    required: "Merci de remplir votre prénom, votre email et vos dates.",
    step2Title: "1. Payez votre formule",
    step2Text: "Paiement sécurisé par PayPal ou carte bancaire.",
    pay: "Payer",
    payUnavailable: "Le paiement en ligne arrive bientôt : envoyez vos réponses ci-dessous, nous vous envoyons le lien de paiement.",
    step3Title: "2. Envoyez vos réponses",
    step3Text: "Pour que l'on commence votre itinéraire tout de suite.",
    sendWhatsapp: "Envoyer sur WhatsApp",
    sendEmail: "Envoyer par email",
    edit: "Modifier mes réponses",
    messageIntro: "Bonjour MarocPlan, voici ma demande d'itinéraire.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes",
    items: [
      { q: "Qui prépare mon itinéraire ?", a: "Un professionnel du tourisme basé au Maroc, qui organise des excursions et circuits toute l'année. Pas une IA générique." },
      { q: "En combien de temps je le reçois ?", a: "Sous 24 h après le paiement et l'envoi de vos réponses (48 h pour les voyages de plus de 14 jours)." },
      { q: "Et si l'itinéraire ne me plaît pas ?", a: "On l'ajuste. Si vous n'êtes toujours pas satisfait, on vous rembourse." },
      { q: "Vous réservez à ma place ?", a: "Avec la formule Premium, on vous aide à réserver riads, chauffeurs et excursions auprès de partenaires de confiance." },
    ],
  },
  footer: { legal: "Mentions légales", tagline: "Itinéraires sur mesure au Maroc" },
};

const en: Content = {
  meta: {
    title: "MarocPlan · Your custom Morocco itinerary in 24 hours",
    description:
      "A local Morocco travel professional plans your trip day by day: stops, riads, restaurants, budget and transport. Delivered in 24 hours from €19.",
  },
  nav: { example: "Sample", plans: "Pricing", faq: "FAQ", cta: "Order", switchLabel: "FR", switchHref: "/" },
  hero: {
    eyebrow: "Planned by a Morocco travel professional",
    title: "Your Morocco trip,",
    highlight: "planned for you in 24 hours",
    subtitle:
      "Stop spending hours on forums. Tell us your dates, budget and interests: you get a day-by-day itinerary with trusted places and real prices.",
    cta: "Get my itinerary",
    secondary: "See a sample",
    bullets: ["Delivered in 24 hours", "From €19", "Places tested locally", "Money-back guarantee"],
  },
  why: {
    eyebrow: "Why MarocPlan",
    title: "Advice from a local, not an algorithm",
    items: [
      { title: "Avoid the tourist traps", text: "Fake guides, taxis without meters, overpriced souks: we tell you what to do and what to pay." },
      { title: "Realistic travel times", text: "Distances in Morocco are long. Your itinerary uses real driving times." },
      { title: "Your budget respected", text: "Riads, restaurants and activities picked for your budget, with current prices." },
    ],
  },
  example: {
    eyebrow: "Sample itinerary",
    title: "7 days: Marrakech, the Sahara and Fes",
    intro: "Excerpt from the Complete plan. Every day includes addresses, timings, prices and practical tips.",
    days: [
      { day: "D1", title: "Marrakech medina", text: "Majorelle Garden early morning, lunch in Mouassine, souks in the afternoon, sunset on a Jemaa el-Fna rooftop." },
      { day: "D2", title: "Palaces and hammam", text: "Bahia Palace and Saadian Tombs, traditional hammam, dinner in a riad in the Kasbah district." },
      { day: "D3", title: "Tichka Pass and Aït-Ben-Haddou", text: "Atlas mountain road, UNESCO-listed kasbah, night in Ouarzazate." },
      { day: "D4", title: "Dades and Todra Gorges", text: "Valley of Roses, walk through Todra Gorge, night in a Berber guesthouse." },
      { day: "D5", title: "Merzouga desert", text: "Camel ride at sunset, night in a desert camp in the Erg Chebbi dunes." },
      { day: "D6", title: "Road to Fes", text: "Sunrise over the dunes, Azrou cedar forest and Barbary macaques, arrival in Fes." },
      { day: "D7", title: "Fes medina", text: "Chouara tanneries, Bou Inania madrasa, tips for hiring an official guide." },
    ],
  },
  plans: {
    eyebrow: "Pricing",
    title: "Choose your plan",
    subtitle: "Secure payment. Itinerary delivered by email and WhatsApp within 24 hours. Refunded if you're not happy.",
    popular: "Most popular",
    choose: "Choose",
    items: {
      essentiel: {
        name: "Essential",
        pitch: "The day-by-day plan to travel with peace of mind.",
        features: ["Day-by-day itinerary (PDF)", "Travel times and transport", "Must-sees and practical tips", "Delivered in 24 hours"],
      },
      complet: {
        name: "Complete",
        pitch: "Everything planned: where to sleep, where to eat, what it costs.",
        features: ["Everything in Essential", "Riads and hotels matched to your budget", "Restaurants and local spots", "Daily budget breakdown", "20-minute WhatsApp call"],
      },
      premium: {
        name: "Premium",
        pitch: "A local by your side before and during your trip.",
        features: ["Everything in Complete", "Booking help (riads, drivers, tours)", "2 itinerary revisions", "WhatsApp support during your whole trip"],
      },
    },
  },
  form: {
    eyebrow: "Order",
    title: "Tell us about your trip",
    subtitle: "2 minutes to answer, then secure payment. Your itinerary arrives within 24 hours.",
    plan: "Plan",
    name: "First name *",
    email: "Email *",
    dates: "Travel dates or length *",
    travellers: "Travellers (e.g. 2 adults, 1 child)",
    budget: "Budget per person (excluding flights)",
    budgets: ["Under €500", "€500 to €1,000", "€1,000 to €2,000", "Over €2,000"],
    interests: "Interests",
    interestOptions: ["Desert", "Medinas and culture", "Beach", "Mountains and hiking", "Food", "Luxury and relaxation"],
    notes: "Anything else (arrival city, pace, constraints…)",
    submit: "Continue to payment",
    required: "Please fill in your first name, email and dates.",
    step2Title: "1. Pay for your plan",
    step2Text: "Secure payment by PayPal or card.",
    pay: "Pay",
    payUnavailable: "Online payment is coming soon: send your answers below and we'll send you a payment link.",
    step3Title: "2. Send your answers",
    step3Text: "So we can start your itinerary right away.",
    sendWhatsapp: "Send on WhatsApp",
    sendEmail: "Send by email",
    edit: "Edit my answers",
    messageIntro: "Hello MarocPlan, here is my itinerary request.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "Who plans my itinerary?", a: "A travel professional based in Morocco who runs tours and excursions all year round. Not a generic AI." },
      { q: "How fast will I get it?", a: "Within 24 hours of payment and receiving your answers (48 hours for trips longer than 14 days)." },
      { q: "What if I don't like it?", a: "We adjust it. If you're still not happy, we refund you." },
      { q: "Can you book things for me?", a: "With the Premium plan, we help you book riads, drivers and tours with trusted partners." },
    ],
  },
  footer: { legal: "Legal notice", tagline: "Custom Morocco itineraries" },
};

export const content: Record<Lang, Content> = { fr, en };
