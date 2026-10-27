import { CalendarHeart, MessageCircle, Phone, Sparkles } from "lucide-react";
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
  initials,
  priceLabel,
  whatsappHref,
  type TemplateProps,
} from "./parts";

export function TemplateEclat({ site, servicesTitle, ctaLabel }: TemplateProps) {
  const hero = site.photos[0];
  return (
    <div className="bg-[color-mix(in_srgb,var(--c)_5%,white)] text-slate-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <span className="font-serif text-2xl italic text-[var(--c)]">{site.businessName}</span>
        <a href={whatsappHref(site)} className="hidden rounded-full bg-[var(--c)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110 sm:inline-flex">
          {ctaLabel}
        </a>
      </nav>

      <header className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-6 md:grid-cols-2 md:pb-24 md:pt-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--c)] shadow-sm">
            <Sparkles className="h-3.5 w-3.5" /> {site.city}
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-slate-900 sm:text-6xl">{site.businessName}</h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-600">{site.tagline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappHref(site)} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--c)] px-7 py-3.5 font-semibold text-white shadow-[0_15px_40px_-15px_var(--c)] hover:brightness-110">
              <CalendarHeart className="h-5 w-5" /> {ctaLabel}
            </a>
            <a href={telLink(site.phone)} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold hover:border-slate-400">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-full bg-[color-mix(in_srgb,var(--c)_18%,transparent)] blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-gradient-to-br from-[color-mix(in_srgb,var(--c)_85%,white)] to-[color-mix(in_srgb,var(--c)_100%,black_25%)] shadow-2xl">
            {hero ? (
              <img src={hero} alt={site.businessName} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-white">
                <span className="font-serif text-8xl italic">{initials(site.businessName)}</span>
                <span className="mt-4 text-xs uppercase tracking-[0.4em] text-white/80">{site.city}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="bg-white px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--c)]">Bienvenue</p>
          <p className="mt-5 text-xl leading-relaxed text-slate-600">{site.description}</p>
        </div>
      </section>

      {site.services.length > 0 && (
        <section id="services" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h2 className="text-center font-serif text-4xl text-slate-900">{servicesTitle}</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((item, i) => (
              <div key={i} className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>
                  <span className="whitespace-nowrap rounded-full bg-[color-mix(in_srgb,var(--c)_10%,white)] px-3 py-1 text-sm font-semibold text-[var(--c)]">
                    {priceLabel(item.price, site.currency)}
                  </span>
                </div>
                {item.description && <p className="mt-2 text-sm text-slate-500">{item.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {site.photos.length > 1 && (
        <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
          <h2 className="mb-10 text-center font-serif text-4xl text-slate-900">Galerie</h2>
          <Gallery photos={site.photos.slice(1)} name={site.businessName} />
        </section>
      )}

      {site.reviews.length > 0 && (
        <section className="bg-white px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-serif text-4xl text-slate-900">Avis de nos clientes et clients</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {site.reviews.map((r, i) => (
                <figure key={i} className="rounded-3xl bg-[color-mix(in_srgb,var(--c)_5%,white)] p-7">
                  <Stars rating={r.rating} className="text-[var(--c)]" />
                  <blockquote className="mt-4 text-slate-700">{r.text}</blockquote>
                  <figcaption className="mt-4 font-serif italic text-slate-900">{r.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-sm ring-1 ring-slate-900/5 md:grid-cols-2">
          <div className="p-8 sm:p-12">
            <h2 className="font-serif text-3xl text-slate-900">Venez nous voir</h2>
            <ContactList site={site} className="mt-6 text-slate-600" />
            <HoursTable hours={site.hours} className="mt-8 text-slate-700" />
            <SocialLinks site={site} className="mt-6 text-[var(--c)]" />
            <a href={whatsappHref(site)} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] py-3.5 font-semibold text-white hover:brightness-105">
              <MessageCircle className="h-5 w-5" /> Écrire sur WhatsApp
            </a>
          </div>
          <MapEmbed site={site} className="h-full min-h-[22rem]" />
        </div>
      </section>

      <SiteFooter site={site} />
      <MobileActionBar site={site} />
    </div>
  );
}
