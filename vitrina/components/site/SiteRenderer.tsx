import type { Site } from "@prisma/client";
import { getCategory } from "@/lib/categories";
import { DemoBanner, type SiteData } from "./parts";
import { TemplateAtelier } from "./TemplateAtelier";
import { TemplateEclat } from "./TemplateEclat";
import { TemplateSaveur } from "./TemplateSaveur";

const templates = { saveur: TemplateSaveur, eclat: TemplateEclat, atelier: TemplateAtelier };

export function toSiteData(site: Site): SiteData {
  return {
    slug: site.slug,
    status: site.status,
    businessName: site.businessName,
    category: site.category,
    city: site.city,
    address: site.address,
    phone: site.phone,
    whatsapp: site.whatsapp,
    email: site.email,
    instagram: site.instagram,
    facebook: site.facebook,
    tagline: site.tagline,
    description: site.description,
    hours: site.hours,
    services: Array.isArray(site.services) ? (site.services as SiteData["services"]) : [],
    reviews: Array.isArray(site.reviews) ? (site.reviews as SiteData["reviews"]) : [],
    photos: site.photos,
    color: site.color,
    currency: site.currency,
  };
}

export function SiteRenderer({ site }: { site: SiteData }) {
  const category = getCategory(site.category);
  const Template = templates[category.template];
  return (
    <div style={{ "--c": site.color } as React.CSSProperties}>
      <DemoBanner site={site} />
      <Template site={site} servicesTitle={category.servicesTitle} ctaLabel={category.ctaLabel} />
    </div>
  );
}
