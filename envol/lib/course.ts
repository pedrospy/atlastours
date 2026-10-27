import "server-only";
import type { Order } from "@prisma/client";
import { db } from "./db";
import { getOffer, offerRank, offers, type Offer } from "./offers";

export type ResourceLink = { label: string; url: string };

export function accessOffer(orders: Pick<Order, "status" | "offer">[]): Offer | null {
  const ranks = orders.filter((o) => o.status === "PAYEE").map((o) => offerRank(o.offer));
  const best = Math.max(0, ...ranks);
  return offers.find((o) => o.rank === best) ?? null;
}

export function canAccess(offer: Offer | null, requiredTier: string) {
  return (offer?.rank ?? 0) >= Math.max(1, offerRank(requiredTier));
}

export async function getCourse() {
  return db.module.findMany({
    orderBy: { position: "asc" },
    include: { lessons: { where: { published: true }, orderBy: { position: "asc" } } },
  });
}

export type Course = Awaited<ReturnType<typeof getCourse>>;

export function flatLessons(course: Course) {
  return course.flatMap((m) => m.lessons.map((l) => ({ ...l, module: m })));
}

export function readResources(value: unknown): ResourceLink[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((r): r is ResourceLink => typeof r?.label === "string" && typeof r?.url === "string")
    .filter((r) => /^https?:\/\//.test(r.url));
}

export function tierLabel(tier: string) {
  return getOffer(tier)?.name ?? "Essentiel";
}

export type VideoEmbed = { kind: "iframe" | "file"; src: string } | null;

export function videoEmbed(url: string): VideoEmbed {
  const value = url.trim();
  if (!/^https:\/\//.test(value)) return null;
  const yt = value.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return { kind: "iframe", src: `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0` };
  const vimeo = value.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/(\w+))?/);
  if (vimeo) return { kind: "iframe", src: `https://player.vimeo.com/video/${vimeo[1]}${vimeo[2] ? `?h=${vimeo[2]}` : ""}` };
  if (/\.(mp4|webm)(\?|$)/i.test(value)) return { kind: "file", src: value };
  return { kind: "iframe", src: value };
}
