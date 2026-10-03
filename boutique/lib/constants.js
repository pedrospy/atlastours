export const CATEGORIES = [
  ["takchita", "Takchita"],
  ["caftan", "Caftan"],
];

export const ROLES = [
  "Vendeur",
  "Vendeuse",
  "Manager",
  "Gérant",
  "Gérante",
  "Caissier",
  "Caissière",
  "Responsable stock",
];

export const MOVEMENT_TYPES = [
  ["entree", "Entrée"],
  ["vente", "Vente"],
  ["retour", "Retour"],
  ["ajustement", "Ajustement"],
];

export const JOURNAL_TYPES = [...MOVEMENT_TYPES, ["location", "Location"]];

export const RENTAL_CREATE_STATUSES = [
  ["reservee", "Réservée"],
  ["en_location", "En location"],
];

export const CONTRACTS = [
  ["horaire", "Horaire"],
  ["mensuel", "Mensuel"],
];

export const CONTRIBUTION_RATE = 0.22;

export const BRANDS = ["Maison Céleste", "Soieries Céleste", "Atelier Brume"];

export const COLOR_SUGGESTIONS = [
  "Ivoire",
  "Écru",
  "Bordeaux",
  "Or vieilli",
  "Émeraude",
  "Prune",
  "Grenat",
  "Blush",
  "Bleu nuit",
  "Noir",
];

export const NUMERIC_SIZES = ["36", "38", "40", "42", "44", "46"];
export const LETTER_SIZES = ["S", "M", "L", "XL"];

export const COLOR_HEX = {
  ivoire: "#f4efe4",
  écru: "#f0e6d0",
  ecru: "#f0e6d0",
  blanc: "#f7f7f5",
  noir: "#1c1c1c",
  charbon: "#2a2a2a",
  "bleu nuit": "#1c2740",
  bordeaux: "#722033",
  "gris perle": "#c8c2b8",
  indigo: "#2c3a66",
  camel: "#c49a6c",
  terracotta: "#c4623a",
  "vert sauge": "#8fa38a",
  beige: "#e4d5bc",
  cognac: "#8d4e2a",
  "or vieilli": "#b89a55",
  émeraude: "#0e6b4f",
  emeraude: "#0e6b4f",
  prune: "#5c2a45",
  grenat: "#7a1f32",
  blush: "#e8c6c4",
};

export const LIGHT_COLORS = new Set([
  "ivoire",
  "écru",
  "ecru",
  "blanc",
  "beige",
  "gris perle",
  "or vieilli",
  "blush",
]);
