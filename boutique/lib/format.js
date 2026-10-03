import { CATEGORIES, CONTRACTS, JOURNAL_TYPES } from "./constants.js";

export function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function euro(cents) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format((Number(cents) || 0) / 100);
}

export function moneyValue(cents) {
  return (Number(cents) / 100).toFixed(2).replace(".", ",");
}

export function formatHours(minutes) {
  const abs = Math.abs(Number(minutes) || 0);
  const text = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(abs / 60);
  return `${text} h`;
}

export function hoursValue(minutes) {
  const hours = Number(minutes) / 60;
  if (Number.isInteger(hours)) return String(hours);
  return String(Math.round(hours * 100) / 100).replace(".", ",");
}

export function formatInt(value) {
  return new Intl.NumberFormat("fr-FR").format(Number(value) || 0);
}

export function formatSignedQty(value) {
  const n = Number(value) || 0;
  const abs = formatInt(Math.abs(n));
  if (n > 0) return `+${abs}`;
  if (n < 0) return `−${abs}`;
  return "0";
}

export function formatDate(iso) {
  if (!iso) return "";
  const date = String(iso).length === 10 ? new Date(`${iso}T12:00:00+02:00`) : new Date(iso);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  }).format(date);
}

export function formatDateMedium(iso) {
  if (!iso) return "";
  const date = String(iso).length === 10 ? new Date(`${iso}T12:00:00+02:00`) : new Date(iso);
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeZone: "Europe/Paris",
  }).format(date);
}

export function formatDateTime(iso) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date(iso));
}

export function formatTodayLabel(date = new Date()) {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Paris",
  }).format(date);
}

export function categoryLabel(id) {
  return CATEGORIES.find(([key]) => key === id)?.[1] || id;
}

export function contractLabel(id) {
  return CONTRACTS.find(([key]) => key === id)?.[1] || id;
}

export function movementLabel(id) {
  return JOURNAL_TYPES.find(([key]) => key === id)?.[1] || id;
}

export function rentalStatusLabel(status) {
  return {
    reservee: "Réservée",
    en_location: "En location",
    retournee: "Retournée",
    en_retard: "En retard",
  }[status] || status;
}

export function rateLabel(contract, cents) {
  const unit = contract === "horaire" ? " / heure" : " / mois";
  return `${euro(cents)}${unit}`;
}

export function stockState(quantity, threshold) {
  if (quantity <= 0) return { key: "out", label: "Rupture" };
  if (quantity <= threshold) return { key: "low", label: "Stock bas" };
  return { key: "ok", label: "En stock" };
}

const SIZE_RANK = new Map([
  ["XS", 1],
  ["S", 2],
  ["M", 3],
  ["L", 4],
  ["XL", 5],
  ["XXL", 6],
  ["TU", 7],
]);

export function compareSize(a, b) {
  const left = sizeRank(a);
  const right = sizeRank(b);
  if (left !== right) return left - right;
  return String(a).localeCompare(String(b), "fr");
}

function sizeRank(size) {
  const key = String(size || "").toUpperCase();
  if (SIZE_RANK.has(key)) return SIZE_RANK.get(key);
  const numeric = Number.parseInt(key, 10);
  if (!Number.isNaN(numeric) && String(numeric) === key) return 100 + numeric;
  return 1000;
}

export function todayParis(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}
