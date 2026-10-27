import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Globe,
  Images,
  MapPin,
  MessageCircle,
  Pencil,
  Phone,
  Rocket,
  Search,
  Sparkles,
  Store,
} from "lucide-react";
import { PublicFooter, PublicHeader } from "@/components/PublicChrome";
import { db } from "@/lib/db";
import { getCategory } from "@/lib/categories";
import { formatMoney, waLink } from "@/lib/format";
import { owner } from "@/lib/owner";
import { plans } from "@/lib/plans";

export const dynamic = "force-dynamic";

const steps = [
  { icon: Store, title: "Vous décrivez votre commerce", text: "Nom, activité, adresse, horaires et prix : 3 minutes en ligne, ou on le fait avec vous sur place." },
  { icon: Sparkles, title: "Vous voyez votre site tout de suite", text: "Une première version est générée immédiatement. Vous la regardez sur votre téléphone avant de payer." },
  { icon: Rocket, title: "En ligne en 48 h", text: "Nous ajustons textes et photos, connectons votre nom de domaine et publions. Vous n'avez rien à gérer." },
];

const features = [
  { icon: Phone, title: "Bouton Appeler", text: "Vos clients vous appellent en un clic depuis leur téléphone." },
  { icon: MessageCircle, title: "WhatsApp direct", text: "Réservations et commandes arrivent sur votre WhatsApp." },
  { icon: MapPin, title: "Carte Google Maps", text: "Votre adresse et l'itinéraire, sans se perdre." },
  { icon: Clock, title: "Horaires à jour", text: "Fini les appels pour savoir si vous êtes ouvert." },
  { icon: Images, title: "Prix et galerie", text: "Votre carte, vos prestations et vos plus belles photos." },
  { icon: Search, title: "Visible sur Google", text: "Site rapide, optimisé pour le référencement local." },
];

const faq = [
  {
    q: "Je ne suis pas à l'aise avec internet, c'est pour moi ?",
    a: "Oui, c'est fait pour ça. Vous nous donnez les informations (ou on vient les prendre en photo), on s'occupe de tout. Pour une modification, un simple message WhatsApp suffit.",
  },
  {
    q: "Pourquoi un site alors que j'ai déjà Facebook ou Instagram ?",
    a: "Vos clients vous cherchent sur Google. Un site avec vos horaires, vos prix et un bouton Appeler rassure et convertit bien mieux qu'une page de réseau social, et il vous appartient.",
  },
  {
    q: "Que comprend l'abonnement mensuel ?",
    a: "L'hébergement rapide et sécurisé, le certificat HTTPS, les sauvegardes, les mises à jour de vos horaires et prix, et le support sur WhatsApp. Résiliable à tout moment.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Par carte bancaire en ligne, par virement ou en espèces. Un acompte de 50 % suffit pour lancer la mise en ligne, le solde à la livraison.",
  },
  {
    q: "Et si le site ne me plaît pas ?",
    a: "Vous voyez votre site avant de payer. Ensuite, nous faisons les retouches nécessaires jusqu'à ce qu'il vous ressemble.",
  },
  {
    q: "Puis-je avoir mon propre nom de domaine (.ma, .com) ?",
    a: "Oui, il est inclus 1 an dans les offres Pro et Premium. Avec Essentiel, votre site est en ligne sur une adresse Vitrina et vous pouvez ajouter un domaine plus tard.",
  },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[17rem] sm:w-[19rem]">
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand/25 blur-3xl" />
      <div className="rounded-[2.6rem] bg-ink p-2.5 shadow-2xl">
        <div className="overflow-hidden rounded-[2.1rem] bg-[#fbf6ee]">
          <div className="relative bg-stone-950 px-5 pb-8 pt-10 text-center text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(180,83,9,0.75),transparent_60%)]" />
            <div className="relative">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">Marrakech</p>
              <p className="mt-2 font-serif text-3xl font-bold">Café Nour</p>
              <p className="mt-1 text-[11px] text-white/75">Votre pause gourmande à Marrakech</p>
              <div className="mt-4 inline-flex rounded-full bg-[#b45309] px-4 py-1.5 text-[11px] font-semibold">Commander sur WhatsApp</div>
            </div>
          </div>
          <div className="space-y-2.5 px-5 py-5">
            <p className="text-center font-serif text-lg font-bold">La carte</p>
            {[
              ["Petit-déjeuner complet", "45 MAD"],
              ["Café crème", "15 MAD"],
              ["Jus d'orange pressé", "18 MAD"],
              ["Pâtisserie du jour", "12 MAD"],
            ].map(([name, price]) => (
              <div key={name} className="flex items-baseline gap-2 text-[11px]">
                <span className="font-semibold">{name}</span>
                <span className="flex-1 border-b border-dotted border-stone-300" />
                <span className="font-semibold text-[#b45309]">{price}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 border-t border-black/5 bg-white p-3">
            <span className="rounded-lg bg-[#b45309] py-2 text-center text-[11px] font-semibold text-white">Appeler</span>
            <span className="rounded-lg bg-[#25d366] py-2 text-center text-[11px] font-semibold text-white">WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const examples = await db.site.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    take: 6,
  });
  const me = owner();

  return (
    <>
      <PublicHeader />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft via-white to-paper">
          <div className="container-x grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand shadow-sm ring-1 ring-brand/15">
                <Sparkles className="h-3.5 w-3.5" /> Restaurants · Coiffeurs · Artisans · Garages · Cabinets
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
                Le site internet de votre commerce, <span className="text-brand">en ligne en 48 h.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
                Vos clients vous trouvent sur Google, voient vos prix et vos horaires, puis vous appellent ou vous écrivent sur WhatsApp en un clic. Vous voyez votre site avant de payer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/commander" className="btn-primary px-7 py-4 text-base shadow-glow">
                  Créer mon site maintenant <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="#exemples" className="btn-secondary px-7 py-4 text-base">
                  Voir des exemples
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/60">
                {["À partir de 290 €", "Aperçu gratuit immédiat", "Aucune compétence technique"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-brand" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <PhoneMockup />
          </div>
        </section>

        <section id="comment" className="container-x scroll-mt-20 py-20">
          <p className="eyebrow text-center">Comment ça marche</p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">Simple comme un message WhatsApp</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="card relative shadow-card">
                <span className="absolute right-6 top-5 text-5xl font-black text-ink/5">{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-ink/60">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-ink py-20 text-white">
          <div className="container-x">
            <p className="eyebrow text-center text-brand-light">Inclus dans chaque site</p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">Tout ce qu&apos;il faut pour recevoir plus de clients</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-white/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="exemples" className="container-x scroll-mt-20 py-20">
          <p className="eyebrow text-center">Exemples</p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">Un style adapté à chaque métier</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink/60">
            Restaurant chaleureux, salon élégant ou artisan qui inspire confiance : chaque site part d&apos;un modèle pensé pour votre activité.
          </p>
          {examples.length > 0 ? (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {examples.map((site) => (
                <Link
                  key={site.id}
                  href={`/s/${site.slug}`}
                  target="_blank"
                  className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition hover:-translate-y-1"
                >
                  <div className="relative h-40 overflow-hidden" style={{ backgroundColor: site.color }}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.35),transparent_60%)]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">{site.city}</p>
                      <p className="mt-1 text-2xl font-bold">{site.businessName}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-semibold">{site.businessName}</p>
                      <p className="text-sm text-ink/50">{getCategory(site.category).label.split(" (")[0]}</p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand">
                      Voir <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center text-ink/50">Les premiers sites clients arrivent très bientôt.</p>
          )}
        </section>

        <section id="offres" className="scroll-mt-20 bg-white py-20">
          <div className="container-x">
            <p className="eyebrow text-center">Tarifs</p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">Un prix clair, payé une fois</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ink/60">Puis un petit abonnement pour l&apos;hébergement et les mises à jour, sans engagement.</p>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {plans.map((p) => (
                <div
                  key={p.id}
                  className={`relative flex flex-col rounded-3xl p-7 ${p.highlight ? "bg-ink text-white shadow-2xl lg:-my-3 lg:py-10" : "border border-ink/10 bg-paper"}`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">Le plus choisi</span>
                  )}
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className={`mt-1 text-sm ${p.highlight ? "text-white/65" : "text-ink/60"}`}>{p.pitch}</p>
                  <p className="mt-6 text-5xl font-extrabold tracking-tight">{formatMoney(p.price)}</p>
                  <p className={`mt-1 text-sm ${p.highlight ? "text-white/65" : "text-ink/50"}`}>
                    ≈ {formatMoney(p.priceMad, "MAD")} · puis {formatMoney(p.monthly)}/mois
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check className={`h-5 w-5 shrink-0 ${p.highlight ? "text-accent" : "text-brand"}`} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/commander?offre=${p.id}`} className={`mt-8 ${p.highlight ? "btn-primary bg-accent text-ink hover:bg-amber-400" : "btn-primary"}`}>
                    Choisir {p.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-3 text-sm text-ink/70 sm:grid-cols-3">
              {[
                { icon: Globe, text: "Fiche Google Business : 50 €" },
                { icon: Pencil, text: "Création de logo : 90 €" },
                { icon: Images, text: "Séance photo pro : dès 120 €" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 rounded-xl bg-paper px-4 py-3">
                  <Icon className="h-4 w-4 text-brand" /> {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="container-x max-w-3xl scroll-mt-20 py-20">
          <p className="eyebrow text-center">Questions fréquentes</p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">Vous vous demandez peut-être…</h2>
          <div className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            {faq.map(({ q, a }) => (
              <details key={q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {q}
                  <span className="text-xl text-brand transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-ink/65">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="container-x pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center text-white sm:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Votre site peut être en ligne après-demain.</h2>
              <p className="mx-auto mt-3 max-w-xl text-white/80">Décrivez votre commerce maintenant et découvrez votre site en quelques secondes.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/commander" className="btn-primary bg-white px-7 py-4 text-base text-brand hover:bg-brand-soft">
                  Commander mon site <ArrowRight className="h-5 w-5" />
                </Link>
                {me.whatsapp && (
                  <a href={waLink(me.whatsapp, "Bonjour, je voudrais un site internet pour mon commerce.")} target="_blank" rel="noopener" className="btn-whatsapp px-7 py-4 text-base">
                    <MessageCircle className="h-5 w-5" /> Nous écrire sur WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
