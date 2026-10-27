import type { MetadataRoute } from "next";
import { appUrl } from "@/lib/stripe";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = appUrl();
  return [
    { url: base, priority: 1 },
    { url: `${base}/inscription`, priority: 0.8 },
    { url: `${base}/connexion`, priority: 0.3 },
    { url: `${base}/mentions-legales`, priority: 0.1 },
  ];
}
