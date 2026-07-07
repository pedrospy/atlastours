import type { Dictionary } from "../types";

export const en: Dictionary = {
  locale: "en",
  meta: {
    title: "Airport transfers & tours | Red Nomad",
    description:
      "Airport transfers, day trips and private tours in Morocco. Modern vehicles, local drivers, tailor-made journeys from Marrakech to the Sahara.",
    keywords: [
      "Morocco",
      "Marrakech transfer",
      "Morocco tours",
      "tourist transport",
      "Marrakech",
      "day trips",
    ],
    ogTitle: "Red Nomad — Airport transfers, day trips and private tours in Morocco",
    ogDescription:
      "Airport transfers, excursions and private tours in Morocco with local drivers.",
  },
  site: {
    tagline: "Airport transfers · Day trips · Private tours in Morocco",
    logoSubtitle: "Tours · Transport",
    address: "Marrakech, Morocco",
  },
  nav: {
    destinations: { label: "Destinations", href: "#destinations" },
    excursions: { label: "Day Trips", href: "/excursions" },
    circuits: { label: "Tours", href: "/circuits" },
    activities: { label: "Activities", href: "#activites" },
    transfers: { label: "Transfers", href: "#transferts" },
    discover: { label: "Discover", href: "#pourquoi" },
  },
  common: {
    contact: "Contact",
    contactUs: "Contact us",
    login: "Sign in",
    from: "From",
    perPerson: "/person",
    perTrip: "/trip",
    menu: "Menu",
    discover: "Discover",
    whatsapp: "Red Nomad",
    whatsappAria: "Contact Red Nomad via WhatsApp",
    whatsappMessage: "Hello Red Nomad, ",
    excursionsCount: "trips",
    close: "Close",
  },
  hero: {
    imageAlt: "Sahara dunes at sunset",
    badge: "Premium adventures in Morocco",
    title: "Morocco off",
    titleHighlight: "the beaten path",
    description:
      "Exclusive desert camps, Berber treks, forgotten valleys. Tailor-made adventures designed by local guides who know the real Morocco.",
    googleRating: "/5 on Google",
    travelers: "adventurers",
    responseTime: "Reply within",
    ctaCustomize: "Design your adventure",
    scrollHint: "Discover",
  },
  trustBar: {
    securePayment: "Secure payment",
    rated: "Rated 4.9/5",
    confirmation: "Confirmation within 2 hours",
    documents: "Documents within 24 h",
  },
  transfers: {
    eyebrow: "Tourist transport",
    title: "Private transfers & driver",
    description:
      "Modern air-conditioned vehicles with French-speaking local drivers. Airport meet-and-greet, city transfers and long-distance journeys across Morocco.",
    viewAll: "Request a quote",
    cta: "Book a transfer",
    galleryTitle: "Our fleet & routes in Morocco",
    fleetTitle: "Tourist fleet",
    fleet: {
      sedan: { name: "Comfort sedan", detail: "Airport & city" },
      van: { name: "Premium van", detail: "Families & day trips" },
      suv: { name: "4×4 SUV", detail: "Desert & Atlas" },
      minibus: { name: "Minibus", detail: "Groups & events" },
    },
    fleetFeatures: ["Air-conditioned", "FR/EN driver", "Child seats", "Insurance included"],
    items: {
      airport: {
        title: "Marrakech airport transfer",
        badge: "Personal meet & greet",
        description:
          "Pickup at Menara Airport, name sign, flight tracking, child seats on request.",
      },
      city: {
        title: "Private city transfer",
        badge: "Riad & hotel",
        description:
          "Getting around Marrakech: medina, hotels, train station, restaurants. Private car with driver by the hour or day.",
      },
      intercity: {
        title: "Inter-city journeys",
        badge: "Long distance",
        description:
          "Marrakech ↔ Casablanca, Fes, Essaouira, Agadir, Ouarzazate. Comfort, coffee breaks, flexible route.",
      },
      group: {
        title: "Van & group minibus",
        badge: "Families & groups",
        description:
          "7-seater minivan or minibus for families, seminars and groups. Ideal for private tours and excursions.",
      },
    },
    gallery: {
      "van-desert": "Luxury van in the desert",
      "vans-tunnel": "Minibus on mountain roads",
      "suv-kasbah": "4×4 SUV at a kasbah",
      "atlas-highway": "Atlas highway from the vehicle",
      "mountain-pass": "Winding road in the High Atlas",
      "dades-gorges": "Dades Gorges by minibus",
      ouzoud: "Day trip to Ouzoud Waterfalls",
      ourika: "Ourika Valley & waterfalls day trip",
      essaouira: "Transfer to Essaouira",
      volubilis: "Volubilis tour",
      "desert-oasis": "Sahara oasis",
      "fes-tannery": "Transfer to Fes",
      sunset: "Sunset in Morocco",
    },
  },
  circuits: {
    eyebrow: "Multi-day tours",
    title: "Our tailor-made tours",
    description:
      "From a 3-day desert break to a Marrakech–Chefchaouen imperial cities tour. Custom trips, small groups, Berber French-speaking guide.",
    viewAll: "All our tours",
    resultsCount: "{count} results",
    filters: {
      title: "Filters",
      category: "Category",
      destination: "Destination",
      departure: "Departure",
      difficulty: "Difficulty",
      duration: "Max duration",
      budget: "Max budget",
      all: "All",
      reset: "Reset",
      days: "days",
    },
    categories: {
      desert: "Desert",
      culture: "Culture & cities",
      coast: "Coast",
      adventure: "Adventure & Atlas",
    },
    difficulties: {
      easy: "Easy",
      moderate: "Moderate",
    },
    destinations: {
      merzouga: "Merzouga & Sahara",
      chefchaouen: "Chefchaouen & North",
      imperial: "Imperial cities",
      essaouira: "Essaouira & southern coast",
      atlas: "Atlas & Megdaz",
    },
    departures: {
      marrakech: "Marrakech",
      casablanca: "Casablanca",
    },
    items: {
      "circuit-sahara-atlas-3j": {
        title: "3-Day Marrakech, Sahara & Atlas Tour",
        badge: "Best seller",
        duration: "3 days",
        description:
          "The essentials in 3 days: High Atlas, Aït Benhaddou, Merzouga dunes, luxury desert camp night and return to Marrakech.",
      },
      "sahara-dades-4j": {
        title: "Sahara, Dades Gorges & Merzouga — 4 Days",
        badge: "Desert & gorges",
        duration: "4 days",
        description:
          "Aït Benhaddou, Dades and Todra gorges, Erg Chebbi at Merzouga, Drâa Valley and Fint oasis — the great south in 4 days.",
      },
      "grand-tour-3j": {
        title: "Marrakech — Chefchaouen 3 Days",
        badge: "Imperial cities",
        duration: "3 days",
        description:
          "Join a 3-day tour from Marrakech to Chefchaouen. Discover Fez, Rabat, Casablanca and the narrow streets of the blue city.",
      },
      "imperial-cities-8j": {
        title: "Imperial Cities Morocco 8 Days — Fez, Meknes, Marrakech",
        badge: "Best-seller",
        duration: "8 days",
        description:
          "Casablanca, Rabat, Volubilis, Meknes, UNESCO Fez and blue Chefchaouen — the grand tour of Morocco's imperial cities.",
      },
      "southern-coast-8j": {
        title: "Taroudante & Essaouira — 8-Day Southern Morocco & Atlantic Coast",
        badge: "Off the beaten path",
        duration: "8 days",
        description:
          "Souss, Anti-Atlas and Atlantic coast: Taroudante, Tafraoute, Taghazout and Essaouira — away from the crowds.",
      },
      "megdaz-3j": {
        title: "Megdaz Valley",
        badge: "Authentic",
        duration: "3 days",
        description:
          "Authentic Atlas: trek in a preserved Berber village, homestay, walks through agricultural terraces.",
      },
    },
  },
  excursions: {
    eyebrow: "Day trips",
    title: "Top day trips from Marrakech",
    description:
      "The routes our travelers choose again and again — one day, a local guide, your private vehicle.",
    viewAll: "All day trips",
    viewDetails: "View details",
    resultsCount: "{count} results",
    departure: "Marrakech",
    filters: {
      title: "Filters",
      category: "Category",
      destination: "Destination",
      difficulty: "Difficulty",
      duration: "Duration",
      budget: "Max budget",
      all: "All",
      reset: "Reset",
    },
    categories: {
      nature: "Nature",
      culture: "Culture",
      coast: "Coast",
      adventure: "Adventure",
    },
    difficulties: {
      easy: "Easy",
      moderate: "Moderate",
    },
    destinations: {
      atlas: "Atlas & Ourika",
      agafay: "Agafay Desert",
      ouzoud: "Ouzoud",
      essaouira: "Essaouira",
      ouarzazate: "Ouarzazate & Aït Benhaddou",
      casablanca: "Casablanca",
      agadir: "Agadir & Taghazout",
    },
    footerIntro:
      "All our day trips from Marrakech: Atlas trekking, Aït Benhaddou, Ouzoud waterfalls, Ourika Valley, Essaouira. Operated by our local Berber team with private air-conditioned transfers, French-speaking guide, complimentary water and traditional lunch included per programme.",
    whyTitle: "Why book a day trip with us?",
    why: [
      {
        title: "Small groups",
        description:
          "Maximum 17 travelers, usually 2 to 8. No giant buses — more time with your guide and more spontaneous stops.",
      },
      {
        title: "Off-the-beaten-path routes",
        description:
          "We avoid tourist traps. Our guides favor real encounters: local artisans, Berber families, village cooking.",
      },
      {
        title: "All-inclusive, no surprises",
        description:
          "Private transfer, French-speaking guide, site entries as stated, mineral water, traditional lunch per programme. No hidden fees.",
      },
      {
        title: "Fast confirmation",
        description:
          "Booking confirmed within 2 hours. Free cancellation up to 48 hours before departure. Secure card payment or bank transfer.",
      },
    ],
    faqs: [
      {
        question: "How much does a day trip cost in Morocco?",
        answer:
          "Expect €70–130/person for classic trips (Ourika, 3 Valleys) in a small group. €130–200/person for farther destinations (Aït Benhaddou, Ouzoud, Essaouira). Rates include transfers, guide and water — lunch included per programme.",
      },
      {
        question: "What are the typical schedules?",
        answer:
          "Departure between 7–9 AM from your hotel or riad, return between 5–8 PM depending on destination. For Aït Benhaddou, Ouzoud or Essaouira, plan a full day (10–12 hours).",
      },
      {
        question: "What should I bring?",
        answer:
          "Comfortable clothes, closed shoes, hat, sunscreen, sunglasses and camera. Mineral water is provided. For Imlil or the Atlas, a fleece is useful even in summer.",
      },
      {
        question: "Are trips suitable for children?",
        answer:
          "Yes, most are family-friendly. We adapt pace, provide free child seats and frequent breaks. Contact us for very young children.",
      },
      {
        question: "Can I privatize an excursion?",
        answer:
          "Yes, without a large surcharge. You control schedules, stops and breaks. For 4 people, private rates are often less than 15% above shared rates.",
      },
    ],
    items: {
      ourika: {
        title: "Ourika Valley — Private 1-day trip",
        badge: "Popular",
        duration: "1 d",
        description:
          "Berber villages, spectacular waterfalls and authentic life just 1 hour from Marrakech.",
      },
      agafay: {
        title: "Agafay Desert — Day trip",
        badge: "Featured",
        duration: "1 d",
        description:
          "Stone desert 45 min from Marrakech: camel ride, sunset and Berber dinner facing the Atlas.",
      },
      imlil: {
        title: "Imlil & Mount Toubkal — High Atlas hike",
        badge: "Favorite",
        duration: "1 d",
        description:
          "Explore Imlil (1740 m), gateway to Toubkal, Berber hamlets and breathtaking alpine views.",
      },
      "trois-vallees": {
        title: "3 High Atlas Valleys — 4×4 day trip",
        badge: "New",
        duration: "1 d",
        description:
          "Ourika, Setti Fatma and Oukaimeden (2650 m): the best of the High Atlas in one day.",
      },
      ouzoud: {
        title: "Ouzoud Waterfalls — Day trip",
        badge: "Best seller",
        duration: "1 d",
        description:
          "Morocco's tallest waterfalls (110 m), wild Barbary macaques and ancient olive groves.",
      },
      essaouira: {
        title: "Essaouira — UNESCO medina & Atlantic coast",
        badge: "Popular",
        duration: "1 d",
        description:
          "UNESCO medina, lively fishing port, thuya crafts and unique Atlantic light.",
      },
      "ait-benhaddou": {
        title: "Aït Benhaddou UNESCO & Ouarzazate",
        badge: "Must-see",
        duration: "1 d",
        description:
          "Tizi n'Tichka pass (2260 m), UNESCO Aït Benhaddou kasbah and Ouarzazate, Africa's Hollywood.",
      },
      casablanca: {
        title: "Casablanca — Hassan II Mosque private day",
        badge: "New",
        duration: "1 d",
        description:
          "Hassan II Mosque (3rd largest in the world), 1930s Art Deco and Atlantic corniche.",
      },
      "agadir-taghazout": {
        title: "Agadir & Taghazout — Surf & Atlantic beach",
        badge: "New",
        duration: "1 d",
        description:
          "Discover Agadir and charming Taghazout, the famous surf village on the Atlantic coast.",
      },
    },
  },
  excursionDetail: {
    breadcrumbHome: "Home",
    breadcrumbAll: "All experiences",
    about: "About this trip",
    highlights: "Highlights",
    itinerary: "Day-by-day itinerary",
    included: "Included",
    notIncluded: "Not included",
    groupPricing: "Group rates",
    faq: "Frequently asked questions",
    whyBook: "Why book with Red Nomad?",
    book: "Book now",
    requestQuote: "Request a quote",
    freeCancel: "Free cancellation 48h before",
    instantConfirm: "Instant confirmation",
    duration: "Duration",
    group: "Group",
    departure: "Departure",
    languages: "Languages",
    reviews: "reviews",
    from: "From",
    perPerson: "/ person",
    perTrip: "/ trip",
    tripPricing: "Trip rate",
    flatPriceNote: "Flat rate for your private vehicle",
    totalFor2: "for 2 (total)",
    discover: "Discover",
    readyTitle: "Ready for the adventure?",
    readyCta: "Create your tailor-made trip",
  },
  activities: {
    eyebrow: "What you'll experience",
    title: "Top activities in Morocco",
    description:
      "Authentic experiences handpicked by our Berber team",
    viewAll: "See all activities",
    items: {
      camel: "Camel ride",
      tent: "Luxury desert camp",
      balloon: "Hot air balloon over Marrakech",
      chef: "Moroccan cooking class",
      sunset: "Desert dinner & sunset",
      spa: "Traditional Moroccan hammam & spa",
      hiking: "Hiking & nature in the Atlas",
      quad: "Quad & buggy in the desert",
    },
  },
  whyUs: {
    eyebrow: "Why us",
    title: "Authentic Morocco, from those who live it",
    description:
      "Not a foreign agency outsourcing locally. A Berber team crafting every trip with the hospitality and tradition of real Morocco.",
    cta: "Design my custom trip",
    features: {
      guides: {
        title: "Local Berber guides",
        description:
          "Born and raised in the Atlas, Sahara, and valleys. They know the villages, passes, and families.",
      },
      custom: {
        title: "Tailor-made adventures",
        description:
          "Private camp, off-GPS trek, off-road routes. We design your itinerary at your pace.",
      },
      support: {
        title: "A real person 24/7",
        description:
          "Direct WhatsApp with your advisor throughout your stay. No chatbot, no call center.",
      },
      tested: {
        title: "Everything field-tested",
        description:
          "No hotel, camp, or driver we haven't personally vetted. Zero bad surprises.",
      },
    },
    stats: {
      "0": "Years of experience",
      "1": "Trips completed",
      "2": "Destinations",
      "3": "Average rating",
    },
  },
  testimonials: {
    eyebrow: "Verified Google reviews",
    title: "What our travelers say",
    subtitle:
      "verified Google reviews · {rating}/5 average · 96% satisfied travelers",
    readAll: "Read all {count} Google reviews",
    items: {
      claire: {
        date: "2 months ago",
        text: "We used this company for our transfers during our Marrakech holiday. Perfect service with 2 young children, car seats and flawless communication. We will definitely contact Hamid again!",
      },
      adil: {
        date: "1 month ago",
        text: "A serious agency with high-quality service. Always attentive, responsive and reliable. A real pleasure to work with them.",
      },
      genevieve: {
        date: "7 months ago",
        text: "Perfect service, kindness, patience as we were often late, recent and very clean vehicle. Thank you.",
      },
      salvatore: {
        date: "3 months ago",
        text: "Great service and professionalism. Thank you very much Hamid, see you soon.",
      },
    },
  },
  destinations: {
    eyebrow: "Destinations",
    title: "Exceptional Destinations",
    viewAll: "All destinations",
    breadcrumbAll: "All destinations",
    names: {
      marrakech: "Marrakech",
      merzouga: "Merzouga",
      "nord-maroc": "Northern Morocco",
      fes: "Fes",
      essaouira: "Essaouira",
      megdaz: "Megdaz",
      agadir: "Agadir",
      oualili: "Fes (Oualili)",
    },
    items: {
      marrakech: { badge: "Imperial city" },
      merzouga: { badge: "Sahara desert" },
      "nord-maroc": { badge: "Coast & Rif" },
      fes: { badge: "UNESCO medina" },
      essaouira: { badge: "Atlantic gem" },
      megdaz: { badge: "Authentic Atlas" },
      agadir: { badge: "Southern coast" },
      oualili: { badge: "Ancient sites" },
    },
  },
  newsletter: {
    badge: "Free guide included",
    title: "Stay Inspired",
    description:
      "Get our best offers and travel tips for Morocco",
    placeholder: "Your email address",
    submit: "Subscribe",
    success: "Thank you! Check your inbox.",
    disclaimer: "No spam. Unsubscribe in one click.",
  },
  footer: {
    ctaTitle: "Ready for the adventure?",
    ctaDescription:
      "Create your tailor-made journey in the heart of traditional Morocco",
    customTrip: "Custom trip",
    about:
      "Your trusted partner for tailor-made tours and private transfers in Morocco — from the airport to the Sahara dunes.",
    discover: "Discover",
    company: "Company",
    newsletter: "Newsletter",
    newsletterDescription:
      "Get our best offers and travel inspiration",
    blog: "Blog",
    companyLinks: [
      "About",
      "Contact",
      "FAQ",
      "Terms",
      "Privacy",
      "Refunds",
    ],
    securePayment: "Secure payment",
    multiCurrency: "Multi-currency",
    certified: "Tourism certified",
    copyright: "All rights reserved.",
    legal:
      "RC: 152895 · ICE: 00356224500026 · Tourist transport license N° 2674/TOUR/2024",
    contactForm: {
      title: "Send us a message",
      description: "Describe your trip, we'll get back to you quickly.",
      nameLabel: "Name",
      emailLabel: "Email",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message (dates, destinations, group size…)",
      submit: "Send by email",
      subjectPrefix: "Trip request",
    },
  },
  cookies: {
    message:
      "We use cookies to improve your experience. By continuing, you accept our privacy policy.",
    decline: "Decline",
    accept: "Accept",
  },
};
