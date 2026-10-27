import type { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { appUrl } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const drafts = await db.site.findMany({ where: { status: "DRAFT" }, select: { slug: true }, take: 1000 }).catch(() => []);
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/api", "/commande/", ...drafts.map((d) => `/s/${d.slug}`)] },
    sitemap: `${appUrl()}/sitemap.xml`,
  };
}
