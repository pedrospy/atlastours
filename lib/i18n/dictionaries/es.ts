import type { Dictionary } from "../types";

export const es: Dictionary = {
  locale: "es",
  meta: {
    title: "Traslados aeropuerto y circuitos | Red Nomad",
    description:
      "Traslados al aeropuerto, excursiones y circuitos privados en Marruecos. Vehículos modernos, conductores locales, viajes a medida de Marrakech al Sahara.",
    keywords: [
      "Marruecos",
      "traslado Marrakech",
      "circuitos Marruecos",
      "transporte turístico",
      "Marrakech",
      "excursiones",
    ],
    ogTitle: "Red Nomad — Traslados al aeropuerto, excursiones y circuitos en Marruecos",
    ogDescription:
      "Traslados al aeropuerto, excursiones y circuitos privados en Marruecos con conductores locales.",
  },
  site: {
    tagline: "Traslados aeropuerto · Excursiones · Circuitos privados en Marruecos",
    logoSubtitle: "Turismo · Transporte",
    address: "Marrakech, Marruecos",
  },
  nav: {
    destinations: { label: "Destinos", href: "#destinations" },
    excursions: { label: "Excursiones", href: "/excursions" },
    circuits: { label: "Circuitos", href: "/circuits" },
    activities: { label: "Actividades", href: "#activites" },
    transfers: { label: "Traslados", href: "#transferts" },
    discover: { label: "Descubrir", href: "#pourquoi" },
  },
  common: {
    contact: "Contacto",
    contactUs: "Contáctenos",
    login: "Iniciar sesión",
    from: "Desde",
    perPerson: "/pers.",
    perTrip: "/viaje",
    menu: "Menú",
    discover: "Descubrir",
    whatsapp: "Red Nomad",
    whatsappAria: "Contactar Red Nomad por WhatsApp",
    whatsappMessage: "Hola Red Nomad, ",
    excursionsCount: "excursiones",
    close: "Cerrar",
  },
  hero: {
    imageAlt: "Dunas del Sahara al atardecer",
    badge: "Aventuras premium en Marruecos",
    title: "Marruecos fuera de",
    titleHighlight: "los caminos trillados",
    description:
      "Campamentos exclusivos, treks bereberes, valles olvidados. Aventuras a medida diseñadas por guías locales que conocen el verdadero Marruecos.",
    googleRating: "/5 en Google",
    travelers: "aventureros",
    responseTime: "Respuesta en",
    ctaCustomize: "Configure su aventura",
    scrollHint: "Descubrir",
  },
  trustBar: {
    securePayment: "Pago seguro",
    rated: "Valorado 4.9/5",
    confirmation: "Confirmación en 2 horas",
    documents: "Documentos en 24 h",
  },
  transfers: {
    eyebrow: "Transporte turístico",
    title: "Traslados privados y chófer",
    description:
      "Vehículos modernos con aire acondicionado y chófer local de habla francesa. Recogida en aeropuerto, traslados urbanos y viajes de larga distancia en Marruecos.",
    viewAll: "Solicitar presupuesto",
    cta: "Reservar un traslado",
    galleryTitle: "Nuestra flota y rutas en Marruecos",
    fleetTitle: "Flota turística",
    fleet: {
      sedan: { name: "Berlina confort", detail: "Aeropuerto y ciudad" },
      van: { name: "Van premium", detail: "Familias y excursiones" },
      suv: { name: "SUV 4×4", detail: "Desierto y Atlas" },
      minibus: { name: "Minibús", detail: "Grupos y eventos" },
    },
    fleetFeatures: ["Climatizado", "Conductor FR/EN", "Sillas infantiles", "Seguro incluido"],
    items: {
      airport: {
        title: "Traslado aeropuerto Marrakech",
        badge: "Recepción personalizada",
        description:
          "Recogida en el aeropuerto Menara, cartel con nombre, seguimiento de vuelo, sillas de bebé bajo petición.",
      },
      city: {
        title: "Traslado privado en ciudad",
        badge: "Riad y hotel",
        description:
          "Desplazamientos en Marrakech: medina, hoteles, estación, restaurantes. Vehículo privado con chófer por horas o día.",
      },
      intercity: {
        title: "Viajes interurbanos",
        badge: "Larga distancia",
        description:
          "Marrakech ↔ Casablanca, Fez, Essaouira, Agadir, Ouarzazate. Confort, pausas café, ruta flexible.",
      },
      group: {
        title: "Van y minibus para grupos",
        badge: "Familias y grupos",
        description:
          "Minivan de 7 plazas o minibus para familias, seminarios y grupos. Ideal para circuitos y excursiones privadas.",
      },
    },
    gallery: {
      "van-desert": "Van de lujo en el desierto",
      "vans-tunnel": "Minibús en carreteras de montaña",
      "suv-kasbah": "SUV 4×4 frente a una kasbah",
      "atlas-highway": "Carretera del Atlas desde el vehículo",
      "mountain-pass": "Carretera sinuosa en el Alto Atlas",
      "dades-gorges": "Gargantas del Dadès en minibús",
      ouzoud: "Excursión a las cascadas de Ouzoud",
      ourika: "Excursión valle de Ourika y cascadas",
      essaouira: "Traslado a Essaouira",
      volubilis: "Circuito Volubilis",
      "desert-oasis": "Oasis del Sahara",
      "fes-tannery": "Traslado a Fez",
      sunset: "Atardecer en Marruecos",
    },
  },
  circuits: {
    eyebrow: "Circuitos de varios días",
    title: "Nuestros circuitos a medida",
    description:
      "Desde una escapada de 3 días al desierto hasta el circuito Marrakech–Chefchaouen. A medida, grupos reducidos, guía bereber de habla francesa.",
    viewAll: "Todos nuestros circuitos",
    resultsCount: "{count} resultados",
    filters: {
      title: "Filtros",
      category: "Categoría",
      destination: "Destino",
      departure: "Salida",
      difficulty: "Dificultad",
      duration: "Duración máx.",
      budget: "Presupuesto máx.",
      all: "Todas",
      reset: "Restablecer",
      days: "días",
    },
    categories: {
      desert: "Desierto",
      culture: "Cultura y ciudades",
      coast: "Costa",
      adventure: "Aventura y Atlas",
    },
    difficulties: {
      easy: "Fácil",
      moderate: "Moderado",
    },
    destinations: {
      merzouga: "Merzouga y Sahara",
      chefchaouen: "Chefchaouen y Norte",
      imperial: "Ciudades imperiales",
      essaouira: "Essaouira y costa sur",
      atlas: "Atlas y Megdaz",
    },
    departures: {
      marrakech: "Marrakech",
      casablanca: "Casablanca",
    },
    items: {
      "circuit-sahara-atlas-3j": {
        title: "Circuito 3 días Marrakech, Sahara y Atlas",
        badge: "Más vendido",
        duration: "3 días",
        description:
          "Lo esencial en 3 días: Alto Atlas, Aït Benhaddou, dunas de Merzouga, noche en campamento de lujo y regreso a Marrakech.",
      },
      "sahara-dades-4j": {
        title: "Sahara, Gargantas del Dadès y Merzouga — 4 días",
        badge: "Desierto y gargantas",
        duration: "4 días",
        description:
          "Aït Benhaddou, gargantas del Dadès y del Todra, Erg Chebbi en Merzouga, valle del Drâa y oasis de Fint — el gran sur en 4 días.",
      },
      "grand-tour-3j": {
        title: "Marrakech — Chefchaouen 3 días",
        badge: "Ciudades imperiales",
        duration: "3 días",
        description:
          "Circuito de 3 días de Marrakech a Chefchaouen: Casablanca, Rabat, Fez la ciudad más tradicional y las callejuelas azules de Chefchaouen.",
      },
      "imperial-cities-8j": {
        title: "Ciudades Imperiales Marruecos 8 días — Fez, Meknes, Marrakech",
        badge: "Best-seller",
        duration: "8 días",
        description:
          "Casablanca, Rabat, Volubilis, Meknes, Fez UNESCO y Chefchaouen la azul — el gran circuito de las ciudades imperiales de Marruecos.",
      },
      "southern-coast-8j": {
        title: "Taroudante y Essaouira — 8 días sur marroquí y costa atlántica",
        badge: "Insólito",
        duration: "8 días",
        description:
          "Souss, Anti-Atlas y costa atlántica: Taroudante, Tafraoute, Taghazout y Essaouira — lejos de las rutas turísticas.",
      },
      "megdaz-3j": {
        title: "Valle de Megdaz",
        badge: "Auténtico",
        duration: "3 días",
        description:
          "El Atlas auténtico: trek en un pueblo bereber preservado, noche en casa de familia, paseo por las terrazas agrícolas.",
      },
    },
  },
  excursions: {
    eyebrow: "Excursiones de un día",
    title: "Excursiones destacadas desde Marrakech",
    description:
      "Los itinerarios que nuestros viajeros eligen una y otra vez — un día, un guía local, su vehículo privado.",
    viewAll: "Todas las excursiones",
    viewDetails: "Ver detalles",
    resultsCount: "{count} resultados",
    departure: "Marrakech",
    filters: {
      title: "Filtros",
      category: "Categoría",
      destination: "Destino",
      difficulty: "Dificultad",
      duration: "Duración",
      budget: "Presupuesto máx.",
      all: "Todas",
      reset: "Restablecer",
    },
    categories: {
      nature: "Naturaleza",
      culture: "Cultura",
      coast: "Costa",
      adventure: "Aventura",
    },
    difficulties: {
      easy: "Fácil",
      moderate: "Moderado",
    },
    destinations: {
      atlas: "Atlas y Ourika",
      agafay: "Desierto de Agafay",
      ouzoud: "Ouzoud",
      essaouira: "Essaouira",
      ouarzazate: "Ouarzazate y Aït Benhaddou",
      casablanca: "Casablanca",
      agadir: "Agadir y Taghazout",
    },
    footerIntro:
      "Todas nuestras excursiones de un día desde Marrakech: trekking en el Atlas, Aït Benhaddou, Cascadas de Ouzoud, Valle de Ourika, Essaouira. Operadas por nuestro equipo bereber local con traslados privados climatizados, guía francófono, agua mineral y almuerzo tradicional según programa.",
    whyTitle: "¿Por qué reservar una excursión con nosotros?",
    why: [
      {
        title: "Grupos pequeños",
        description:
          "Máximo 17 viajeros, normalmente de 2 a 8. Sin autobuses gigantes — más tiempo con su guía.",
      },
      {
        title: "Rutas fuera de lo común",
        description:
          "Evitamos trampas turísticas. Nuestros guías favorecen encuentros auténticos con artesanos y familias bereberes.",
      },
      {
        title: "Todo incluido, sin sorpresas",
        description:
          "Traslado privado, guía francófono, entradas indicadas, agua mineral, almuerzo según programa.",
      },
      {
        title: "Confirmación rápida",
        description:
          "Reserva confirmada en menos de 2 h. Cancelación gratuita hasta 48 h antes del salida.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta una excursión de un día en Marruecos?",
        answer:
          "Cuente 70–130 €/persona para excursiones clásicas (Ourika, 3 Valles). 130–200 €/persona para destinos más lejanos (Aït Benhaddou, Ouzoud, Essaouira).",
      },
      {
        question: "¿Qué horarios tienen las excursiones?",
        answer:
          "Salida entre 7 y 9 h desde su hotel, regreso entre 17 y 20 h según destino.",
      },
      {
        question: "¿Qué debo llevar?",
        answer:
          "Ropa cómoda, calzado cerrado, gorra, protector solar y cámara. Agua mineral incluida.",
      },
      {
        question: "¿Son aptas para niños?",
        answer: "Sí, la mayoría son familiares. Adaptamos el ritmo y ofrecemos sillas infantiles gratuitas.",
      },
      {
        question: "¿Puedo privatizar una excursión?",
        answer: "Sí, sin recargo importante. Control total de horarios y paradas.",
      },
    ],
    items: {
      ourika: {
        title: "Valle de Ourika — Excursión privada 1 día",
        badge: "Popular",
        duration: "1 d",
        description:
          "Pueblos bereberes, cascadas espectaculares y vida auténtica a solo 1 h de Marrakech.",
      },
      agafay: {
        title: "Desierto de Agafay — Excursión 1 día",
        badge: "Destacada",
        duration: "1 d",
        description:
          "Desierto de piedra a 45 min de Marrakech: paseo en camello, atardecer y cena bereber frente al Atlas.",
      },
      imlil: {
        title: "Imlil y Monte Toubkal — Senderismo Atlas",
        badge: "Favorito",
        duration: "1 d",
        description:
          "Explore Imlil (1740 m), puerta del Toubkal, douars bereberes y panoramas alpinos.",
      },
      "trois-vallees": {
        title: "3 Valles del Alto Atlas — Día 4×4",
        badge: "Nueva",
        duration: "1 d",
        description:
          "Ourika, Setti Fatma y Oukaimeden (2650 m): lo mejor del Atlas en un día.",
      },
      ouzoud: {
        title: "Cascadas de Ouzoud — Excursión 1 día",
        badge: "Más vendido",
        duration: "1 d",
        description:
          "Las cascadas más altas de Marruecos (110 m), monos de Berbería y olivares centenarios.",
      },
      essaouira: {
        title: "Essaouira — Medina UNESCO y costa atlántica",
        badge: "Popular",
        duration: "1 d",
        description:
          "Medina UNESCO, puerto pesquero, artesanía de thuya y luz atlántica única.",
      },
      "ait-benhaddou": {
        title: "Aït Benhaddou UNESCO y Ouarzazate",
        badge: "Imprescindible",
        duration: "1 d",
        description:
          "Paso Tizi n'Tichka (2260 m), Kasbah UNESCO y Ouarzazate, Hollywood de África.",
      },
      casablanca: {
        title: "Casablanca — Mezquita Hassan II, día privado",
        badge: "Nuevo",
        duration: "1 d",
        description:
          "Mezquita Hassan II (3ª del mundo), Art Déco y Corniche atlántica.",
      },
      "agadir-taghazout": {
        title: "Agadir y Taghazout — Surf y playa atlántica",
        badge: "Nueva",
        duration: "1 d",
        description:
          "Descubra Agadir y el encanto de Taghazout, famoso pueblo de surf.",
      },
    },
  },
  excursionDetail: {
    breadcrumbHome: "Inicio",
    breadcrumbAll: "Todas las experiencias",
    about: "Sobre este viaje",
    highlights: "Puntos destacados",
    itinerary: "Itinerario día a día",
    included: "Incluido",
    notIncluded: "No incluido",
    groupPricing: "Tarifas por grupo",
    faq: "Preguntas frecuentes",
    whyBook: "¿Por qué reservar con Red Nomad?",
    book: "Reservar",
    requestQuote: "Solicitar presupuesto",
    freeCancel: "Cancelación gratuita 48h antes",
    instantConfirm: "Confirmación instantánea",
    duration: "Duración",
    group: "Grupo",
    departure: "Salida",
    languages: "Idiomas",
    reviews: "opiniones",
    from: "Desde",
    perPerson: "/ persona",
    perTrip: "/ viaje",
    tripPricing: "Tarifa del viaje",
    flatPriceNote: "Precio fijo para su vehículo privado",
    totalFor2: "para 2 (total)",
    discover: "Descubrir",
    readyTitle: "¿Listo para la aventura?",
    readyCta: "Crea tu viaje a medida",
  },
  activities: {
    eyebrow: "Lo que vivirá",
    title: "Actividades destacadas en Marruecos",
    description:
      "Experiencias auténticas seleccionadas por nuestro equipo bereber",
    viewAll: "Ver todas las actividades",
    items: {
      camel: "Paseo en dromedario",
      tent: "Campamento de lujo en el desierto",
      balloon: "Vuelo en globo sobre Marrakech",
      chef: "Clase de cocina marroquí",
      sunset: "Cena y puesta de sol en el desierto",
      spa: "Hammam y spa tradicional marroquí",
      hiking: "Senderismo y naturaleza en el Atlas",
      quad: "Quad y buggy en el desierto",
    },
  },
  whyUs: {
    eyebrow: "Por qué nosotros",
    title: "Marruecos auténtico, de quienes lo viven",
    description:
      "No somos una agencia extranjera que subcontrata. Un equipo bereber que diseña cada viaje con la hospitalidad y tradición del auténtico Marruecos.",
    cta: "Crear mi viaje a medida",
    features: {
      guides: {
        title: "Guías bereberes locales",
        description:
          "Nacidos y criados en el Atlas, el Sahara y los valles. Conocen los pueblos, los pasos y las familias.",
      },
      custom: {
        title: "Aventuras a medida",
        description:
          "Campamento privado, trek fuera de GPS, rutas off-road. Diseñamos su itinerario según su ritmo.",
      },
      support: {
        title: "Una persona disponible 24/7",
        description:
          "WhatsApp directo con su asesor durante toda la estancia. Sin chatbot, sin centralita.",
      },
      tested: {
        title: "Todo probado en el terreno",
        description:
          "Ningún hotel, campamento o conductor que no hayamos probado personalmente. Cero sorpresas desagradables.",
      },
    },
    stats: {
      "0": "Años de experiencia",
      "1": "Viajes realizados",
      "2": "Destinos",
      "3": "Nota media",
    },
  },
  testimonials: {
    eyebrow: "Opiniones verificadas en Google",
    title: "Lo que dicen nuestros viajeros",
    subtitle:
      "opiniones verificadas en Google · {rating}/5 de media · 96% de viajeros satisfechos",
    readAll: "Leer las {count} opiniones en Google",
    items: {
      claire: {
        date: "hace 2 meses",
        text: "Utilizamos los servicios de esta empresa para nuestros traslados durante las vacaciones en Marrakech. Servicio perfecto con 2 niños pequeños, sillas de coche y comunicación impecable. ¡Sin duda volveremos a contactar con Hamid!",
      },
      adil: {
        date: "hace 1 mes",
        text: "Una agencia seria con un servicio de gran calidad. Siempre atentos, reactivos y fiables. Es un verdadero placer trabajar con ellos.",
      },
      genevieve: {
        date: "hace 7 meses",
        text: "Servicio perfecto, amabilidad, paciencia porque llegábamos tarde a menudo, vehículo reciente y muy limpio. Gracias.",
      },
      salvatore: {
        date: "hace 3 meses",
        text: "Excelente servicio y profesionalidad. Muchas gracias Hamid, hasta pronto.",
      },
    },
  },
  destinations: {
    eyebrow: "Destinos",
    title: "Destinos excepcionales",
    viewAll: "Todos los destinos",
    breadcrumbAll: "Todos los destinos",
    names: {
      marrakech: "Marrakech",
      merzouga: "Merzouga",
      "nord-maroc": "Norte de Marruecos",
      fes: "Fez",
      essaouira: "Essaouira",
      megdaz: "Megdaz",
      agadir: "Agadir",
      oualili: "Fez (Oualili)",
    },
    items: {
      marrakech: { badge: "Ciudad imperial" },
      merzouga: { badge: "Desierto del Sahara" },
      "nord-maroc": { badge: "Costa y Rif" },
      fes: { badge: "Medina UNESCO" },
      essaouira: { badge: "Perla atlántica" },
      megdaz: { badge: "Atlas auténtico" },
      agadir: { badge: "Costa sur" },
      oualili: { badge: "Sitios antiguos" },
    },
  },
  newsletter: {
    badge: "Guía gratuita incluida",
    title: "Manténgase inspirado",
    description:
      "Reciba nuestras mejores ofertas y consejos de viaje por Marruecos",
    placeholder: "Su dirección de email",
    submit: "Suscribirse",
    success: "¡Gracias! Revise su bandeja de entrada.",
    disclaimer: "Sin spam. Cancelación con un clic.",
  },
  footer: {
    ctaTitle: "¿Listo para la aventura?",
    ctaDescription:
      "Cree su viaje a medida en el corazón del Marruecos tradicional",
    customTrip: "Viaje a medida",
    about:
      "Su socio de confianza para circuitos a medida y traslados privados en Marruecos — del aeropuerto a las dunas del Sahara.",
    discover: "Descubrir",
    company: "Empresa",
    newsletter: "Newsletter",
    newsletterDescription:
      "Reciba nuestras mejores ofertas e inspiración de viaje",
    blog: "Blog",
    companyLinks: [
      "Sobre nosotros",
      "Contacto",
      "FAQ",
      "Condiciones",
      "Privacidad",
      "Reembolsos",
    ],
    securePayment: "Pago seguro",
    multiCurrency: "Multidivisa",
    certified: "Certificado Turismo",
    copyright: "Todos los derechos reservados.",
    legal:
      "RC: 152895 · ICE: 00356224500026 · Autorización transporte turístico N° 2674/TOUR/2024",
    contactForm: {
      title: "Envíenos un mensaje",
      description: "Describa su viaje, le responderemos rápidamente.",
      nameLabel: "Nombre",
      emailLabel: "Email",
      namePlaceholder: "Su nombre",
      emailPlaceholder: "Su email",
      messagePlaceholder: "Su mensaje (fechas, destinos, número de personas…)",
      submit: "Enviar por email",
      subjectPrefix: "Solicitud de viaje",
    },
  },
  cookies: {
    message:
      "Utilizamos cookies para mejorar su experiencia. Al continuar, acepta nuestra política de privacidad.",
    decline: "Rechazar",
    accept: "Aceptar",
  },
};
