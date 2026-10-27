import "server-only";
import type { Prisma } from "@prisma/client";
import { db } from "./db";
import { getCategory, type ServiceItem } from "./categories";
import { slugify } from "./format";

export type Review = { author: string; text: string; rating: number };

const HEX_RE = /^#[0-9a-f]{6}$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^https?:\/\/\S+$/i;

export function parseServices(value: unknown): ServiceItem[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((raw) => {
      const item = (raw ?? {}) as Record<string, unknown>;
      const price = typeof item.price === "number" && Number.isFinite(item.price) ? Math.max(0, Math.round(item.price)) : null;
      return {
        name: String(item.name ?? "").trim().slice(0, 120),
        price,
        description: String(item.description ?? "").trim().slice(0, 240),
      };
    })
    .filter((item) => item.name)
    .slice(0, 40);
}

export function parseReviews(value: unknown): Review[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((raw) => {
      const item = (raw ?? {}) as Record<string, unknown>;
      const rating = Number(item.rating);
      return {
        author: String(item.author ?? "").trim().slice(0, 80),
        text: String(item.text ?? "").trim().slice(0, 500),
        rating: Number.isFinite(rating) ? Math.min(5, Math.max(1, Math.round(rating))) : 5,
      };
    })
    .filter((r) => r.author && r.text)
    .slice(0, 12);
}

function jsonField(formData: FormData, key: string): unknown {
  try {
    return JSON.parse(String(formData.get(key) ?? "[]"));
  } catch {
    return [];
  }
}

function text(formData: FormData, key: string, max = 300) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

export type SiteInput = Omit<Prisma.SiteCreateInput, "slug" | "order" | "prospect" | "status">;

export function readSiteForm(formData: FormData, { fillDefaults }: { fillDefaults: boolean }): { data?: SiteInput; error?: string } {
  const businessName = text(formData, "businessName", 80);
  const category = getCategory(text(formData, "category"));
  const city = text(formData, "city", 60);
  const phone = text(formData, "phone", 30);
  const whatsapp = text(formData, "whatsapp", 30);
  const email = text(formData, "email", 120).toLowerCase();
  const color = text(formData, "color", 7);
  const currency = text(formData, "currency", 3).toUpperCase() || "MAD";

  if (businessName.length < 2) return { error: "Indiquez le nom de l'établissement." };
  if (!city) return { error: "Indiquez la ville." };
  if (phone.replace(/\D/g, "").length < 8) return { error: "Numéro de téléphone invalide." };
  if (whatsapp && whatsapp.replace(/\D/g, "").length < 8) return { error: "Numéro WhatsApp invalide." };
  if (email && !EMAIL_RE.test(email)) return { error: "Adresse email invalide." };
  if (!["MAD", "EUR"].includes(currency)) return { error: "Devise non prise en charge." };

  const photos = String(formData.get("photos") ?? "")
    .split(/\s+/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (photos.some((p) => !URL_RE.test(p))) return { error: "Les photos doivent être des liens commençant par https://" };

  let services = parseServices(jsonField(formData, "services"));
  if (!services.length && fillDefaults) services = category.services;

  return {
    data: {
      businessName,
      category: category.id,
      city,
      address: text(formData, "address", 200),
      phone,
      whatsapp: whatsapp || phone,
      email,
      instagram: text(formData, "instagram", 120),
      facebook: text(formData, "facebook", 120),
      tagline: text(formData, "tagline", 140) || (fillDefaults ? category.tagline(city) : ""),
      description: text(formData, "description", 1200) || (fillDefaults ? category.description(businessName, city) : ""),
      hours: text(formData, "hours", 600) || (fillDefaults ? category.hours : ""),
      services,
      reviews: parseReviews(jsonField(formData, "reviews")),
      photos: photos.slice(0, 12),
      color: HEX_RE.test(color) ? color : category.color,
      currency,
    },
  };
}

export async function uniqueSlug(businessName: string, city: string, excludeId?: string) {
  const base = slugify(`${businessName} ${city}`) || "site";
  let candidate = base;
  for (let i = 2; i < 200; i++) {
    const existing = await db.site.findUnique({ where: { slug: candidate }, select: { id: true } });
    if (!existing || existing.id === excludeId) return candidate;
    candidate = `${base}-${i}`;
  }
  return `${base}-${Date.now().toString(36)}`;
}

export function demoSiteData(input: { businessName: string; category: string; city: string; phone: string }): SiteInput {
  const category = getCategory(input.category);
  return {
    businessName: input.businessName,
    category: category.id,
    city: input.city,
    address: input.city,
    phone: input.phone,
    whatsapp: input.phone,
    tagline: category.tagline(input.city),
    description: category.description(input.businessName, input.city),
    hours: category.hours,
    services: category.services,
    color: category.color,
  };
}
