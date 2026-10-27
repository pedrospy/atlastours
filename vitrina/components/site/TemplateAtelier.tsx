import { BadgeCheck, Clock3, FileText, MessageCircle, Phone, Wrench } from "lucide-react";
import { telLink } from "@/lib/format";
import {
  ContactList,
  Gallery,
  HoursTable,
  MapEmbed,
  MobileActionBar,
  SiteFooter,
  SocialLinks,
  Stars,
  priceLabel,
  whatsappHref,
  type TemplateProps,
} from "./parts";

const promises = [
  { icon: FileText, title: "Devis gratuit", text: "Prix annoncé avant toute intervention" },
  { icon: Clock3, title: "Réponse rapide", text: "On vous rappelle dans l'heure" },
  { icon: BadgeCheck, title: "Travail garanti", text: "Propre, soigné, sans surprise" },
];

export function TemplateAtelier({ site, servicesTitle, ctaLabel }: TemplateProps) {
  const hero = site.photos[0];
  return (
    <div className="bg-zinc-100 text-zinc-900">
      <div className="bg-zinc-950 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="flex items-center gap-2 font-display text-xl font-semibold uppercase tracking-wide">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--c)]">
              <Wrench className="h-5 w-5" />
            </span>
            {site.businessName}
          </span>
          <a href={telLink(site.phone)} className="hidden items-center gap-2 font-display text-lg tracking-wide text-white/90 hover:text-white sm:flex">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </nav>
      </div>

      <header className="relative isolate overflow-hidden bg-[var(--c)] text-white">
        <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0_14px,transparent_14px_28px)]" />
        {hero && (
          <img src={hero} alt="" className="absolute inset-y-0 right-0 -z-10 hidden h-full w-1/2 object-cover opacity-90 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] md:block" />
        )}
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="max-w-2xl">
            <span className="inline-block rounded bg-black/25 px-3 py-1 font-display text-sm uppercase tracking-[0.2em]">{site.city} et environs</span>
            <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">{site.businessName}</h1>
            <p className="mt-5 max-w-lg text-lg text-white/85">{site.tagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telLink(site.phone)} className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 font-display text-lg uppercase tracking-wide text-zinc-950 shadow-lg hover:bg-zinc-100">
                <Phone className="h-5 w-5" /> Appeler
              </a>
              <a href={whatsappHref(site)} className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-7 py-4 font-display text-lg uppercase tracking-wide text-white hover:bg-black">
                <MessageCircle className="h-5 w-5" /> {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto -mt-8 grid max-w-6xl gap-3 px-5 sm:grid-cols-3">
        {promises.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-4 rounded-md border-b-4 border-[var(--c)] bg-white p-5 shadow-lg">
            <Icon className="h-7 w-7 shrink-0 text-[var(--c)]" />
            <div>
              <p className="font-display text-lg uppercase tracking-wide">{title}</p>
              <p className="text-sm text-zinc-500">{text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.25em] text-[var(--c)]">Qui sommes-nous</p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-tight">Des pros à votre service</h2>
          <p className="mt-5 leading-relaxed text-zinc-600">{site.description}</p>
        </div>
        {site.services.length > 0 && (
          <div id="services">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-[var(--c)]">{servicesTitle}</p>
            <ol className="mt-4 divide-y divide-zinc-200 overflow-hidden rounded-md bg-white shadow-sm">
              {site.services.map((item, i) => (
                <li key={i} className="flex items-center gap-5 p-5">
                  <span className="font-display text-3xl font-bold text-[color-mix(in_srgb,var(--c)_35%,white)]">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    {item.description && <p className="text-sm text-zinc-500">{item.description}</p>}
                  </div>
                  <span className="whitespace-nowrap font-display text-lg tracking-wide">{priceLabel(item.price, site.currency)}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>

      {site.photos.length > 1 && (
        <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
          <h2 className="mb-8 font-display text-4xl font-bold uppercase">Nos réalisations</h2>
          <Gallery photos={site.photos.slice(1)} name={site.businessName} />
        </section>
      )}

      {site.reviews.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
          <h2 className="mb-8 font-display text-4xl font-bold uppercase">Avis clients</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {site.reviews.map((r, i) => (
              <figure key={i} className="rounded-md border-l-4 border-[var(--c)] bg-white p-6 shadow-sm">
                <Stars rating={r.rating} className="text-amber-500" />
                <blockquote className="mt-3 text-zinc-700">{r.text}</blockquote>
                <figcaption className="mt-3 font-semibold">{r.author}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="px-5 py-14 sm:px-10 sm:py-16">
            <h2 className="font-display text-4xl font-bold uppercase">Contact</h2>
            <ContactList site={site} className="mt-6 text-white/80" />
            <HoursTable hours={site.hours} className="mt-8 text-white/90" />
            <SocialLinks site={site} className="mt-6 text-white" />
            <a href={telLink(site.phone)} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--c)] py-4 font-display text-lg uppercase tracking-wide hover:brightness-110">
              <Phone className="h-5 w-5" /> {site.phone}
            </a>
          </div>
          <MapEmbed site={site} className="h-full min-h-[22rem]" />
        </div>
      </section>

      <SiteFooter site={site} dark />
      <MobileActionBar site={site} />
    </div>
  );
}
