import type { MetadataRoute } from "next";
import { appUrl } from "@/lib/format";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/espace", "/commande/", "/gratuit/"] },
    sitemap: `${appUrl()}/sitemap.xml`,
  };
}
