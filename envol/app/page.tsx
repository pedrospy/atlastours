import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Calculator,
  CircleX,
  Clock,
  Gift,
  Lock,
  PlayCircle,
  Repeat,
  ShieldCheck,
  Store,
} from "lucide-react";
import { LeadForm } from "@/components/forms";
import { OfferCards } from "@/components/OfferCards";
import { PublicShell } from "@/components/PublicChrome";
import { getCourse, tierLabel } from "@/lib/course";
import { minutes } from "@/lib/format";
import { owner } from "@/lib/owner";

export const dynamic = "force-dynamic";

const faq = [
  {
    q: "Je ne sais pas coder. C'est vraiment pour moi ?",
    a: "Oui. La méthode s'appuie sur des outils d'IA et des modèles prêts à l'emploi : vous décrivez, vous ajustez, vous publiez. Si vous savez utiliser un ordinateur et écrire un e-mail, vous pouvez suivre la formation.",
  },
  {
    q: "Combien de temps faut-il y consacrer ?",
    a: "Comptez 5 à 8 heures par semaine. Les leçons sont courtes et chacune se termine par une action concrète. La plupart des élèves sérieux envoient leurs premières propositions dès la deuxième semaine.",
  },
  {
    q: "Combien puis-je gagner ?",
    a: "Un site vitrine se vend généralement entre 400 et 900 €, plus 29 à 49 € par mois de maintenance. Quatre clients par mois plus une vingtaine d'abonnements dépassent 3 000 € mensuels. Mais vos résultats dépendent de votre travail de prospection : nous ne promettons aucun revenu.",
  },
  {
    q: "Ai-je besoin d'un statut d'entreprise ?",
    a: "Pour facturer, oui : micro-entreprise en France, auto-entrepreneur au Maroc, indépendant en Belgique ou en Suisse. Un module explique comment démarrer simplement et ce qu'il faut mettre sur un devis et une facture.",
  },
  {
    q: "Quels outils faut-il payer ?",
    a: "Rien au démarrage : la méthode utilise des offres gratuites (hébergement, IA, design). Comptez environ 10 € par an pour un nom de domaine par client, refacturé dans votre prix.",
  },
  {
    q: "Et si la formation ne me convient pas ?",
    a: "Vous avez 14 jours pour demander un remboursement intégral, sans justification. Un message suffit.",
  },
  {
    q: "Comment se passent les coachings Pro ?",
    a: "8 sessions en direct de 90 minutes sur 2 mois, en visio. Vous posez vos questions, montrez vos sites et vos messages, et on les améliore ensemble. Les replays sont disponibles dans votre espace.",
  },
];

export default async function HomePage() {
  const course = await getCourse();
  const lessonCount = course.reduce((n, m) => n + m.lessons.length, 0);
  const totalMinutes = course.reduce((n, m) => n + m.lessons.reduce((s, l) => s + l.duration, 0), 0);
  const bio = process.env.OWNER_BIO;
  const { name } = owner();

  return (
    <PublicShell>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 -left-40 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
        <div className="container-x relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <Bot className="h-3.5 w-3.5 text-accent" /> Formation en ligne · 100 % à distance · sans coder
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Créez des sites pour les commerces avec l&apos;IA et <span className="text-accent">vivez de votre activité freelance</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              La méthode pas à pas pour livrer un site professionnel en une journée, trouver vos premiers clients et facturer 400 à 900 € par site, plus un
              abonnement mensuel de maintenance.
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2"><PlayCircle className="h-4 w-4 text-brand-light" /> {course.length} modules · {lessonCount} leçons</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-light" /> {minutes(totalMinutes)} de contenu</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-light" /> Satisfait ou remboursé 14 jours</div>
            </dl>
          </div>
          <div className="rounded-3xl bg-white p-6 text-ink shadow-glow sm:p-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent-dark">
              <Gift className="h-3.5 w-3.5" /> Gratuit
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold">Mini-formation : votre premier client en 30 jours</h2>
            <p className="mb-5 mt-2 text-sm text-ink/60">3 leçons pour comprendre le marché, choisir votre niche et créer votre première démo de site ce soir.</p>
            <LeadForm source="accueil-hero" />
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <p className="eyebrow">Pourquoi maintenant</p>
        <h2 className="section-title mt-2 max-w-3xl">Un marché énorme, et des outils qui font le travail technique à votre place.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: Store, title: "Des millions de commerces sans vrai site", text: "Coiffeurs, restaurants, artisans, cabinets : une grande partie n'a qu'une page Facebook ou une fiche Google incomplète. Ils perdent des clients chaque jour." },
            { icon: Bot, title: "L'IA divise le temps de création par 5", text: "Textes, structure, design, code : ce qui prenait une semaine à une agence se fait en une journée. Vous vendez le résultat, pas les heures." },
            { icon: Repeat, title: "Un revenu qui s'accumule", text: "Chaque client paie aussi une maintenance mensuelle (hébergement, mises à jour, modifications). Au bout de 6 mois, ce socle couvre une grande partie de vos charges." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="card">
              <Icon className="h-7 w-7 text-brand" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Le calcul</p>
            <h2 className="section-title mt-2">3 000 € par mois, c&apos;est 4 clients par mois.</h2>
            <p className="mt-4 text-ink/65">
              Pas besoin de centaines de clients. Une offre claire, un prix assumé et une prospection régulière suffisent. Voici l&apos;objectif concret que la
              formation vous apprend à atteindre en 4 à 6 mois.
            </p>
            <p className="mt-4 text-xs text-ink/45">Exemple illustratif, pas une promesse de revenus : vos résultats dépendent de votre investissement.</p>
          </div>
          <div className="card bg-paper">
            <div className="flex items-center gap-2 font-semibold"><Calculator className="h-5 w-5 text-brand" /> Mois 6, exemple réaliste</div>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                ["4 sites vendus × 600 €", "2 400 €"],
                ["20 clients en maintenance × 39 €", "780 €"],
                ["Options (fiche Google, logo, rédaction)", "250 €"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                  <dt className="text-ink/70">{label}</dt>
                  <dd className="font-semibold">{value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 pt-1 text-lg">
                <dt className="font-bold">Total mensuel</dt>
                <dd className="font-display font-extrabold text-brand">3 430 €</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="programme" className="container-x scroll-mt-20 py-20">
        <p className="eyebrow">Le programme</p>
        <h2 className="section-title mt-2">De zéro à votre premier client, puis à un revenu stable.</h2>
        <div className="mt-10 space-y-4">
          {course.map((m, i) => (
            <details key={m.id} className="group card p-0" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start gap-4 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft font-display font-bold text-brand">{i + 1}</span>
                <span className="flex-1">
                  <span className="flex flex-wrap items-center gap-2 font-semibold">
                    {m.title}
                    {m.tier !== "essentiel" && (
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-bold text-accent-dark">Bonus {tierLabel(m.tier)}</span>
                    )}
                  </span>
                  <span className="mt-1 block text-sm text-ink/60">{m.summary}</span>
                </span>
                <span className="text-sm text-ink/40 group-open:rotate-90">›</span>
              </summary>
              <ul className="space-y-2 border-t border-ink/5 px-6 pb-6 pt-4 sm:pl-20">
                {m.lessons.map((l) => (
                  <li key={l.id} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2">
                      {l.freePreview ? <Gift className="h-4 w-4 text-accent" /> : <Lock className="h-4 w-4 text-ink/25" />}
                      {l.title}
                      {l.freePreview && <Link href="/gratuit" className="text-xs font-semibold text-accent-dark underline">gratuit</Link>}
                    </span>
                    <span className="shrink-0 text-ink/40">{l.duration} min</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="card border-emerald-200 bg-emerald-50/50">
            <h3 className="font-display text-xl font-bold">C&apos;est pour vous si…</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Vous voulez un revenu complémentaire ou une activité à plein temps, depuis n'importe où",
                "Vous êtes prêt à contacter des commerçants chaque semaine",
                "Vous préférez une méthode concrète à de la théorie",
                "Vous débutez ou vous êtes déjà freelance mais sans clients réguliers",
              ].map((t) => (
                <li key={t} className="flex gap-2.5"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="card border-red-200 bg-red-50/40">
            <h3 className="font-display text-xl font-bold">Ce n&apos;est pas pour vous si…</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Vous cherchez à gagner de l'argent sans effort ni prospection",
                "Vous ne pouvez pas dégager au moins 5 heures par semaine",
                "Vous voulez devenir développeur et apprendre à coder en profondeur",
              ].map((t) => (
                <li key={t} className="flex gap-2.5"><CircleX className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="offres" className="container-x scroll-mt-20 py-20">
        <div className="text-center">
          <p className="eyebrow">Les offres</p>
          <h2 className="section-title mt-2">Choisissez votre niveau d&apos;accompagnement</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/60">Un seul paiement, accès à vie. Vous pourrez passer à l&apos;offre supérieure plus tard en payant seulement la différence.</p>
        </div>
        <div className="mt-14">
          <OfferCards />
        </div>
        <div className="mx-auto mt-12 flex max-w-2xl items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <ShieldCheck className="h-8 w-8 shrink-0 text-emerald-600" />
          <p className="text-sm text-ink/75">
            <strong>Garantie satisfait ou remboursé 14 jours.</strong> Suivez les premiers modules. Si la méthode ne vous convient pas, écrivez-nous dans les
            14 jours : vous êtes remboursé intégralement, sans justification.
          </p>
        </div>
      </section>

      {bio && (
        <section className="bg-white py-20">
          <div className="container-x max-w-3xl">
            <p className="eyebrow">Votre formateur</p>
            <h2 className="section-title mt-2">{name}</h2>
            <p className="mt-4 whitespace-pre-line text-ink/70">{bio}</p>
          </div>
        </section>
      )}

      <section id="faq" className="container-x scroll-mt-20 py-20">
        <p className="eyebrow">Questions fréquentes</p>
        <h2 className="section-title mt-2">Vos questions, nos réponses franches</h2>
        <div className="mt-8 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
          {faq.map(({ q, a }) => (
            <details key={q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q}
                <span className="text-xl text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-ink/65">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand to-brand-dark py-20 text-white">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title">Commencez gratuitement dès ce soir.</h2>
            <p className="mt-4 text-white/80">Les 3 premières leçons sont offertes. Si elles vous apportent de la valeur, vous saurez que la suite est faite pour vous.</p>
            <Link href="/#offres" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4">
              Ou voir directement les offres <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl bg-white p-6 text-ink sm:p-8">
            <LeadForm source="accueil-bas" />
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
