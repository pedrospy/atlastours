import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Compass, MapPinned, Route, ShieldCheck, Star, Wallet } from "lucide-react";
import ChoosePlanButton from "@/components/ChoosePlanButton";
import OrderForm from "@/components/OrderForm";
import { content, type Lang } from "@/lib/content";
import { prices, site, type PlanId } from "@/lib/site";

const planIds: PlanId[] = ["essentiel", "complet", "premium"];
const whyIcons = [ShieldCheck, Route, Wallet];

export default function Landing({ lang }: { lang: Lang }) {
  const t = content[lang];
  const home = lang === "fr" ? "/" : "/en";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink/5 bg-sand/85 backdrop-blur">
        <nav className="container-x flex h-16 items-center justify-between gap-4">
          <Link href={home} className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-clay text-white">
              <Compass className="h-5 w-5" />
            </span>
            {site.name}
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <a href="#exemple" className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink/70 hover:text-ink md:inline-block">
              {t.nav.example}
            </a>
            <a href="#tarifs" className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink/70 hover:text-ink md:inline-block">
              {t.nav.plans}
            </a>
            <a href="#faq" className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink/70 hover:text-ink md:inline-block">
              {t.nav.faq}
            </a>
            <Link
              href={t.nav.switchHref}
              hrefLang={t.nav.switchLabel.toLowerCase()}
              className="rounded-full border border-ink/15 px-3 py-1.5 text-xs font-bold tracking-wider text-ink/70 hover:border-ink/40 hover:text-ink"
            >
              {t.nav.switchLabel}
            </Link>
            <a href="#commander" className="btn-primary px-5 py-2 text-sm">
              {t.nav.cta}
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-saffron-light/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-clay-light/30 blur-3xl" />
          <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
                {t.hero.title} <span className="text-clay">{t.hero.highlight}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink/70">{t.hero.subtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#commander" className="btn-primary py-4 text-lg">
                  {t.hero.cta}
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#exemple" className="btn-ghost py-4 text-lg">
                  {t.hero.secondary}
                </a>
              </div>
              <ul className="mt-8 grid max-w-lg grid-cols-2 gap-3">
                {t.hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-sm font-medium text-ink/80">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-light text-mint">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-3xl bg-clay/90" />
              <div className="relative rounded-3xl bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <p className="eyebrow text-xs">{t.example.eyebrow}</p>
                  <MapPinned className="h-5 w-5 text-clay" />
                </div>
                <p className="mt-2 font-display text-xl font-bold">{t.example.title}</p>
                <ol className="mt-5 space-y-3">
                  {t.example.days.slice(0, 4).map((day) => (
                    <li key={day.day} className="flex gap-3 rounded-xl bg-sand p-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-xs font-bold text-white">{day.day}</span>
                      <span>
                        <span className="block text-sm font-semibold">{day.title}</span>
                        <span className="line-clamp-1 text-xs text-ink/60">{day.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 flex items-center gap-1 text-saffron">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-medium text-ink/60">{t.hero.bullets[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-x">
            <p className="eyebrow">{t.why.eyebrow}</p>
            <h2 className="section-title mt-3 max-w-2xl">{t.why.title}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {t.why.items.map((item, i) => {
                const Icon = whyIcons[i % whyIcons.length];
                return (
                  <div key={item.title} className="rounded-2xl border border-ink/10 bg-sand p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-clay/10 text-clay">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-ink/70">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="exemple" className="scroll-mt-16 py-20">
          <div className="container-x">
            <div className="max-w-2xl">
              <p className="eyebrow">{t.example.eyebrow}</p>
              <h2 className="section-title mt-3">{t.example.title}</h2>
              <p className="mt-4 text-ink/70">{t.example.intro}</p>
            </div>
            <ol className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {t.example.days.map((day, i) => (
                <li
                  key={day.day}
                  className={`rounded-2xl bg-white p-5 shadow-card ${i === t.example.days.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <span className="inline-block rounded-full bg-clay px-3 py-1 text-xs font-bold text-white">{day.day}</span>
                  <h3 className="mt-3 font-bold">{day.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{day.text}</p>
                </li>
              ))}
              <li className="flex flex-col justify-between rounded-2xl bg-ink p-5 text-white md:col-span-2 lg:col-span-1">
                <p className="font-display text-lg font-bold">{t.hero.highlight}</p>
                <a href="#commander" className="mt-4 inline-flex items-center gap-2 font-semibold text-saffron hover:text-saffron-light">
                  {t.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ol>
          </div>
        </section>

        <section id="tarifs" className="scroll-mt-16 bg-white py-20">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">{t.plans.eyebrow}</p>
              <h2 className="section-title mt-3">{t.plans.title}</h2>
              <p className="mt-4 text-ink/70">{t.plans.subtitle}</p>
            </div>
            <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
              {planIds.map((id) => {
                const plan = t.plans.items[id];
                const highlighted = id === "complet";
                return (
                  <div
                    key={id}
                    className={`relative flex flex-col rounded-3xl p-8 ${
                      highlighted ? "bg-ink text-white shadow-card lg:-my-4 lg:py-12" : "border border-ink/10 bg-sand"
                    }`}
                  >
                    {highlighted && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-saffron px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                        {t.plans.popular}
                      </span>
                    )}
                    <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                    <p className={`mt-2 text-sm ${highlighted ? "text-white/70" : "text-ink/70"}`}>{plan.pitch}</p>
                    <p className="mt-6 flex items-baseline gap-1">
                      <span className="font-display text-5xl font-bold">{prices[id]}</span>
                      <span className={`text-xl font-semibold ${highlighted ? "text-white/70" : "text-ink/60"}`}>€</span>
                    </p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm">
                          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? "text-saffron" : "text-mint"}`} />
                          <span className={highlighted ? "text-white/90" : "text-ink/80"}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <ChoosePlanButton plan={id} label={`${t.plans.choose} ${plan.name}`} highlighted={highlighted} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="commander" className="scroll-mt-16 py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">{t.form.eyebrow}</p>
              <h2 className="section-title mt-3">{t.form.title}</h2>
              <p className="mt-4 text-ink/70">{t.form.subtitle}</p>
              <ul className="mt-8 space-y-3">
                {t.hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 font-medium text-ink/80">
                    <Check className="h-5 w-5 text-mint" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <OrderForm lang={lang} />
          </div>
        </section>

        <section id="faq" className="scroll-mt-16 bg-white py-20">
          <div className="container-x max-w-3xl">
            <p className="eyebrow text-center">{t.faq.eyebrow}</p>
            <h2 className="section-title mt-3 text-center">{t.faq.title}</h2>
            <div className="mt-10 space-y-3">
              {t.faq.items.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-ink/10 bg-sand px-6 py-5 open:bg-white open:shadow-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-clay transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-ink/70">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-10 text-white/70">
        <div className="container-x flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p>
            <span className="font-display text-base font-bold text-white">{site.name}</span> · {t.footer.tagline}
          </p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <Link href="/mentions-legales" className="hover:text-white">
              {t.footer.legal}
            </Link>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
