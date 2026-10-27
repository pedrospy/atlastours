import { MessageCircle, Phone, UtensilsCrossed } from "lucide-react";
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

export function TemplateSaveur({ site, servicesTitle, ctaLabel }: TemplateProps) {
  const hero = site.photos[0];
  return (
    <div className="bg-[#fbf6ee] text-stone-900">
      <header className="relative isolate overflow-hidden bg-stone-950 text-white">
        {hero ? (
          <img src={hero} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" />
        ) : (
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,color-mix(in_srgb,var(--c)_70%,transparent),transparent_55%),radial-gradient(circle_at_10%_90%,color-mix(in_srgb,var(--c)_35%,transparent),transparent_50%)]" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/20 to-stone-950/90" />
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <span className="font-serif text-xl font-bold">{site.businessName}</span>
          <a href={telLink(site.phone)} className="hidden items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-medium hover:bg-white/10 sm:inline-flex">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </nav>
        <div className="mx-auto max-w-5xl px-5 pb-24 pt-16 text-center sm:pb-32 sm:pt-24">
          <UtensilsCrossed className="mx-auto h-8 w-8 text-[color-mix(in_srgb,var(--c)_45%,white)]" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">{site.city}</p>
          <h1 className="mt-4 font-serif text-5xl font-bold leading-tight sm:text-7xl">{site.businessName}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">{site.tagline}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappHref(site)} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--c)] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:brightness-110">
              <MessageCircle className="h-5 w-5" /> {ctaLabel}
            </a>
            <a href="#carte" className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 font-semibold hover:bg-white/10">
              Voir la carte
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        <p className="font-serif text-2xl italic leading-relaxed text-stone-700 sm:text-3xl">« {site.description} »</p>
      </section>

      {site.services.length > 0 && (
        <section id="carte" className="mx-auto max-w-4xl px-5 pb-16 sm:pb-24">
          <div className="rounded-[2rem] border border-stone-900/10 bg-white px-6 py-12 shadow-[0_30px_80px_-40px_rgba(68,40,10,0.35)] sm:px-14">
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[var(--c)]">Menu</p>
            <h2 className="mt-2 text-center font-serif text-4xl font-bold">{servicesTitle}</h2>
            <div className="mx-auto mt-3 h-px w-16 bg-[var(--c)]" />
            <ul className="mt-10 grid gap-x-12 gap-y-7 md:grid-cols-2">
              {site.services.map((item, i) => (
                <li key={i}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-lg font-semibold">{item.name}</span>
                    <span className="flex-1 translate-y-[-4px] border-b-2 border-dotted border-stone-300" />
                    <span className="whitespace-nowrap font-semibold text-[var(--c)]">{priceLabel(item.price, site.currency)}</span>
                  </div>
                  {item.description && <p className="mt-1 text-sm text-stone-500">{item.description}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {site.photos.length > 1 && (
        <section className="mx-auto max-w-5xl px-5 pb-16 sm:pb-24">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold">En images</h2>
          <Gallery photos={site.photos.slice(1)} name={site.businessName} />
        </section>
      )}

      {site.reviews.length > 0 && (
        <section className="bg-stone-950 px-5 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-serif text-3xl font-bold">Ils en parlent</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {site.reviews.map((r, i) => (
                <figure key={i} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <Stars rating={r.rating} className="text-amber-400" />
                  <blockquote className="mt-3 font-serif text-lg italic text-white/90">« {r.text} »</blockquote>
                  <figcaption className="mt-4 text-sm text-white/60">— {r.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="infos" className="mx-auto grid max-w-5xl gap-8 px-5 py-16 sm:py-20 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5">
          <h2 className="font-serif text-3xl font-bold">Nous trouver</h2>
          <ContactList site={site} className="mt-6 text-stone-700" />
          <HoursTable hours={site.hours} className="mt-8" />
          <SocialLinks site={site} className="mt-6 text-[var(--c)]" />
          <a href={telLink(site.phone)} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 py-3.5 font-semibold text-white hover:bg-stone-800">
            <Phone className="h-4 w-4" /> Appeler maintenant
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-stone-900/5">
          <MapEmbed site={site} className="h-full min-h-[22rem]" />
        </div>
      </section>

      <SiteFooter site={site} dark />
      <MobileActionBar site={site} />
    </div>
  );
}
