import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { db } from "@/lib/db";
import { getCategory } from "@/lib/categories";
import { appUrl } from "@/lib/format";
import { SiteRenderer, toSiteData } from "@/components/site/SiteRenderer";
import { fullAddress } from "@/components/site/parts";

export const dynamic = "force-dynamic";

const getSite = cache((slug: string) => db.site.findUnique({ where: { slug } }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const site = await getSite((await params).slug);
  if (!site) return { title: "Site introuvable" };
  const category = getCategory(site.category);
  const title = `${site.businessName} – ${category.label.split(" (")[0]} à ${site.city}`;
  const description = (site.tagline ? `${site.tagline}. ` : "") + site.description.slice(0, 140);
  const published = site.status === "PUBLISHED";
  return {
    title,
    description,
    alternates: { canonical: `${appUrl()}/s/${site.slug}` },
    robots: published ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "fr_FR",
      url: `${appUrl()}/s/${site.slug}`,
      images: site.photos[0] ? [site.photos[0]] : undefined,
    },
    other: { "theme-color": site.color },
  };
}

export default async function ClientSitePage({ params }: Props) {
  const site = await getSite((await params).slug);
  if (!site) notFound();
  const data = toSiteData(site);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.businessName,
    description: site.description,
    telephone: site.phone,
    email: site.email || undefined,
    address: { "@type": "PostalAddress", streetAddress: fullAddress(data), addressLocality: site.city },
    url: `${appUrl()}/s/${site.slug}`,
    image: site.photos[0] || undefined,
  };
  return (
    <>
      {site.status === "PUBLISHED" && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      )}
      <SiteRenderer site={data} />
    </>
  );
}
