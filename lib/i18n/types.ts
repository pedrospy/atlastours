import type { Locale } from "./config";

export type NavLinkId =
  | "destinations"
  | "excursions"
  | "circuits"
  | "activities"
  | "transfers"
  | "discover";

export type Dictionary = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  site: {
    tagline: string;
    address: string;
  };
  nav: Record<NavLinkId, { label: string; href: string }>;
  common: {
    contact: string;
    contactUs: string;
    login: string;
    from: string;
    perPerson: string;
    menu: string;
    discover: string;
    whatsapp: string;
    whatsappAria: string;
    whatsappMessage: string;
    excursionsCount: string;
    close: string;
  };
  hero: {
    imageAlt: string;
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    googleRating: string;
    travelers: string;
    responseTime: string;
    ctaCircuits: string;
    scrollHint: string;
  };
  trustBar: {
    securePayment: string;
    rated: string;
    confirmation: string;
    documents: string;
  };
  transfers: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    cta: string;
    galleryTitle: string;
    items: Record<string, { title: string; badge: string; description: string }>;
    gallery: Record<string, string>;
  };
  circuits: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    items: Record<
      string,
      { title: string; badge: string; duration: string; description: string }
    >;
  };
  excursions: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    items: Record<string, { title: string; badge: string; description: string }>;
  };
  excursionDetail: {
    breadcrumbHome: string;
    breadcrumbAll: string;
    about: string;
    highlights: string;
    itinerary: string;
    included: string;
    notIncluded: string;
    groupPricing: string;
    faq: string;
    whyBook: string;
    book: string;
    requestQuote: string;
    freeCancel: string;
    instantConfirm: string;
    duration: string;
    group: string;
    departure: string;
    languages: string;
    reviews: string;
    from: string;
    perPerson: string;
    totalFor2: string;
    discover: string;
    readyTitle: string;
    readyCta: string;
  };
  activities: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    items: Record<string, string>;
  };
  whyUs: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    features: Record<string, { title: string; description: string }>;
    stats: Record<string, string>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    readAll: string;
    items: Record<string, { date: string; text: string }>;
  };
  destinations: {
    eyebrow: string;
    title: string;
    viewAll: string;
    names: Record<string, string>;
  };
  newsletter: {
    badge: string;
    title: string;
    description: string;
    placeholder: string;
    submit: string;
    success: string;
    disclaimer: string;
  };
  footer: {
    ctaTitle: string;
    ctaDescription: string;
    customTrip: string;
    about: string;
    discover: string;
    company: string;
    newsletter: string;
    newsletterDescription: string;
    blog: string;
    companyLinks: string[];
    securePayment: string;
    multiCurrency: string;
    certified: string;
    copyright: string;
    legal: string;
    contactForm: {
      title: string;
      description: string;
      nameLabel: string;
      emailLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      subjectPrefix: string;
    };
  };
  cookies: {
    message: string;
    decline: string;
    accept: string;
  };
};
