import type { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { appUrl } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = appUrl();
  const sites = await db.site
    .findMany({ where: { status: "PUBLISHED" }, select: { slug: true, updatedAt: true }, orderBy: { publishedAt: "desc" } })
    .catch(() => []);
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/commander`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
    ...sites.map((s) => ({ url: `${base}/s/${s.slug}`, lastModified: s.updatedAt, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
