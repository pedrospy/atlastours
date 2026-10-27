import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/en`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
