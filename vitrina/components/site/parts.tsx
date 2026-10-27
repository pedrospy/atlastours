import Link from "next/link";
import { Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import type { ServiceItem } from "@/lib/categories";
import { formatMoney, telLink, waLink } from "@/lib/format";

export type SiteData = {
  slug: string;
  status: "DRAFT" | "PUBLISHED";
  businessName: string;
  category: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  facebook: string;
  tagline: string;
  description: string;
  hours: string;
  services: ServiceItem[];
  reviews: { author: string; text: string; rating: number }[];
  photos: string[];
  color: string;
  currency: string;
};

export type TemplateProps = { site: SiteData; servicesTitle: string; ctaLabel: string };

export function priceLabel(price: number | null, currency: string) {
  if (price === null) return "Sur devis";
  if (price === 0) return "Offert";
  return formatMoney(price, currency);
}

export function hoursRows(hours: string) {
  return hours
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const idx = line.indexOf(":");
      return idx > 0 ? [line.slice(0, idx).trim(), line.slice(idx + 1).trim()] : [line, ""];
    });
}

export function fullAddress(site: SiteData) {
  return [site.address, site.city].filter(Boolean).filter((v, i, arr) => arr.indexOf(v) === i).join(", ");
}

export function mapsLink(site: SiteData) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.businessName}, ${fullAddress(site)}`)}`;
}

export function whatsappHref(site: SiteData) {
  return waLink(site.whatsapp || site.phone, `Bonjour ${site.businessName}, je vous contacte depuis votre site internet.`);
}

export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export function DemoBanner({ site }: { site: SiteData }) {
  if (site.status === "PUBLISHED") return null;
  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-ink/90 px-4 py-2 text-center text-xs text-white backdrop-blur">
      <span>Aperçu – site de démonstration Vitrina</span>
      <Link href="/commander" className="font-semibold text-amber-300 underline-offset-2 hover:underline">
        Obtenir ce site
      </Link>
    </div>
  );
}

export function MapEmbed({ site, className = "" }: { site: SiteData; className?: string }) {
  const query = encodeURIComponent(`${site.businessName}, ${fullAddress(site)}`);
  return (
    <iframe
      title={`Carte – ${site.businessName}`}
      src={`https://www.google.com/maps?q=${query}&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`h-72 w-full border-0 ${className}`}
    />
  );
}

export function Gallery({ photos, name, className = "" }: { photos: string[]; name: string; className?: string }) {
  if (!photos.length) return null;
  return (
    <div className={`grid grid-cols-2 gap-3 md:grid-cols-3 ${className}`}>
      {photos.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={`${name} – photo ${i + 1}`}
          loading="lazy"
          className={`h-full w-full rounded-2xl object-cover ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
        />
      ))}
    </div>
  );
}

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${rating} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-current" : "opacity-25"}`} />
      ))}
    </div>
  );
}

export function MobileActionBar({ site }: { site: SiteData }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-black/10 bg-white/95 p-3 backdrop-blur md:hidden">
      <a href={telLink(site.phone)} className="flex items-center justify-center gap-2 rounded-xl bg-[var(--c)] py-3 text-sm font-semibold text-white">
        <Phone className="h-4 w-4" /> Appeler
      </a>
      <a href={whatsappHref(site)} className="flex items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3 text-sm font-semibold text-white">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}

export function ContactList({ site, className = "" }: { site: SiteData; className?: string }) {
  return (
    <ul className={`space-y-3 text-sm ${className}`}>
      <li className="flex items-start gap-3">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
        <a href={mapsLink(site)} target="_blank" rel="noopener" className="hover:underline">
          {fullAddress(site)}
        </a>
      </li>
      <li className="flex items-start gap-3">
        <Phone className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
        <a href={telLink(site.phone)} className="hover:underline">
          {site.phone}
        </a>
      </li>
      {site.whatsapp && (
        <li className="flex items-start gap-3">
          <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
          <a href={whatsappHref(site)} className="hover:underline">
            WhatsApp : {site.whatsapp}
          </a>
        </li>
      )}
      {site.email && (
        <li className="flex items-start gap-3">
          <span className="mt-0.5 h-4 w-4 shrink-0 text-center text-xs opacity-70">@</span>
          <a href={`mailto:${site.email}`} className="hover:underline">
            {site.email}
          </a>
        </li>
      )}
    </ul>
  );
}

export function HoursTable({ hours, className = "" }: { hours: string; className?: string }) {
  const rows = hoursRows(hours);
  if (!rows.length) return null;
  return (
    <div className={className}>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider opacity-70">
        <Clock className="h-4 w-4" /> Horaires
      </div>
      <dl className="divide-y divide-[color-mix(in_srgb,currentColor_15%,transparent)]">
        {rows.map(([day, value], i) => (
          <div key={i} className="flex justify-between gap-4 py-2 text-sm">
            <dt className="font-medium">{day}</dt>
            <dd className="text-right opacity-80">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function SiteFooter({ site, dark = false }: { site: SiteData; dark?: boolean }) {
  return (
    <footer className={`px-5 pb-28 pt-10 text-center text-xs md:pb-10 ${dark ? "bg-black text-white/60" : "bg-white text-black/50"}`}>
      <p>
        © {new Date().getFullYear()} {site.businessName} · {site.city}
      </p>
      <p className="mt-1">
        Site réalisé par{" "}
        <Link href="/" className="font-semibold underline-offset-2 hover:underline">
          Vitrina
        </Link>
      </p>
    </footer>
  );
}

export function SocialLinks({ site, className = "" }: { site: SiteData; className?: string }) {
  if (!site.instagram && !site.facebook) return null;
  const href = (value: string, base: string) => (value.startsWith("http") ? value : `${base}${value.replace(/^@/, "")}`);
  return (
    <div className={`flex gap-4 text-sm font-semibold ${className}`}>
      {site.instagram && (
        <a href={href(site.instagram, "https://instagram.com/")} target="_blank" rel="noopener" className="hover:underline">
          Instagram
        </a>
      )}
      {site.facebook && (
        <a href={href(site.facebook, "https://facebook.com/")} target="_blank" rel="noopener" className="hover:underline">
          Facebook
        </a>
      )}
    </div>
  );
}
