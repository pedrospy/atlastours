import Link from "next/link";
import { ArrowRight, Check, FileCheck2, Printer, Repeat, Users, Wallet, Zap } from "lucide-react";
import { Logo } from "@/components/Logo";
import { getCurrentUser } from "@/lib/auth";
import { FREE_DOCS_PER_MONTH, PRO_PRICE_LABEL, proFeatures } from "@/lib/plans";

const features = [
  { icon: Zap, title: "Une facture en 1 minute", text: "Choisissez le client, ajoutez vos lignes, c'est prêt. TVA et totaux calculés automatiquement." },
  { icon: Repeat, title: "Devis → facture en 1 clic", text: "Le client accepte votre devis ? Transformez-le en facture sans rien ressaisir." },
  { icon: Printer, title: "PDF propre et conforme", text: "Numérotation automatique, ICE / SIRET, mentions et coordonnées bancaires." },
  { icon: Wallet, title: "Suivi des paiements", text: "Voyez d'un coup d'œil ce qui est payé, en attente ou en retard." },
  { icon: Users, title: "Fichier clients", text: "Vos clients enregistrés une fois, réutilisés sur tous vos documents." },
  { icon: FileCheck2, title: "Multi-devises", text: "MAD, EUR, USD, XOF, TND… pour facturer vos clients locaux et étrangers." },
];

const faqs = [
  { q: "C'est vraiment gratuit ?", a: `Oui, le plan Gratuit permet ${FREE_DOCS_PER_MONTH} factures ou devis par mois, sans carte bancaire et sans limite de durée.` },
  { q: "Mes factures sont-elles conformes ?", a: "Elles contiennent numéro unique, dates, identifiants fiscaux (ICE, IF, SIRET…), détail HT / TVA / TTC et vos coordonnées. Vérifiez les mentions spécifiques à votre activité avec votre comptable." },
  { q: "Comment j'obtiens le PDF ?", a: "Sur chaque document, cliquez sur « Télécharger en PDF ». Vous pouvez l'envoyer par email ou WhatsApp à votre client." },
  { q: "Je peux résilier Pro quand je veux ?", a: "Oui, sans engagement, en un clic depuis votre espace. Vos documents restent accessibles." },
];

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-ink/5 bg-paper/85 backdrop-blur">
        <nav className="container-x flex h-16 items-center justify-between">
          <Logo />
          <div className="hidden gap-8 text-sm font-medium text-ink/70 md:flex">
            <a href="#fonctionnalites" className="hover:text-ink">Fonctionnalités</a>
            <a href="#tarifs" className="hover:text-ink">Tarifs</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </div>
          {user ? (
            <Link href="/app" className="btn-primary">Mon espace</Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/connexion" className="btn-secondary !border-transparent !bg-transparent">Connexion</Link>
              <Link href="/inscription" className="btn-primary">Essai gratuit</Link>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand-light/40 blur-3xl" />
          <div className="container-x relative py-20 text-center lg:py-28">
            <p className="mx-auto inline-flex rounded-full border border-brand/20 bg-white px-4 py-1 text-sm font-medium text-brand">
              Pour auto-entrepreneurs, freelances et TPE
            </p>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
              Vos factures et devis, <span className="text-brand">prêts en 1 minute</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70">
              Fini Word et Excel. Créez des documents professionnels, suivez vos paiements et soyez payé plus vite.
              Au Maroc, en France et partout en Afrique francophone.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/inscription" className="btn-primary !px-6 !py-3 !text-base">
                Créer ma première facture <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#tarifs" className="btn-secondary !px-6 !py-3 !text-base">Voir les tarifs</a>
            </div>
            <p className="mt-4 text-sm text-ink/50">Gratuit · Sans carte bancaire · Prêt en 30 secondes</p>

            <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-ink/10 bg-white p-6 text-left shadow-card sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">Facture</p>
                  <p className="mt-1 text-xl font-bold">F-2026-0042</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">Payée</span>
              </div>
              <div className="mt-6 divide-y divide-ink/5 text-sm">
                {[
                  ["Création site vitrine", "1", "6 000,00 MAD"],
                  ["Maintenance (3 mois)", "3", "1 500,00 MAD"],
                ].map(([d, q, t]) => (
                  <div key={d} className="flex justify-between py-3">
                    <span>{d} <span className="text-ink/40">× {q}</span></span>
                    <span className="font-medium">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end gap-8 border-t border-ink/10 pt-4 text-sm">
                <span className="text-ink/60">Total TTC</span>
                <span className="text-lg font-bold">9 000,00 MAD</span>
              </div>
            </div>
          </div>
        </section>

        <section id="fonctionnalites" className="bg-white py-20">
          <div className="container-x">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Tout ce qu&apos;il faut, rien de compliqué</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-ink/10 p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tarifs" className="py-20">
          <div className="container-x">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Des tarifs simples</h2>
            <p className="mt-3 text-center text-ink/70">Commencez gratuitement, passez à Pro quand votre activité décolle.</p>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              <div className="card">
                <h3 className="text-lg font-bold">Gratuit</h3>
                <p className="mt-4 text-4xl font-extrabold">0 €</p>
                <p className="text-sm text-ink/60">pour toujours</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[`${FREE_DOCS_PER_MONTH} factures ou devis par mois`, "Clients illimités", "PDF professionnel", "Devis → facture en 1 clic", "Suivi des paiements"].map((f) => (
                    <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-brand" /> {f}</li>
                  ))}
                </ul>
                <Link href="/inscription" className="btn-secondary mt-8 w-full">Commencer gratuitement</Link>
              </div>
              <div className="card relative border-brand bg-ink text-white">
                <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-bold">Recommandé</span>
                <h3 className="text-lg font-bold">Pro</h3>
                <p className="mt-4 text-4xl font-extrabold">{PRO_PRICE_LABEL.split(" / ")[0]}</p>
                <p className="text-sm text-white/60">par mois, sans engagement</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-brand-light" /> {f}</li>
                  ))}
                </ul>
                <Link href="/inscription" className="btn-primary mt-8 w-full">Essayer Pro</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20">
          <div className="container-x max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Questions fréquentes</h2>
            <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {f.q}
                    <span className="text-xl text-brand transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-ink/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-x">
            <div className="rounded-3xl bg-brand px-8 py-14 text-center text-white">
              <h2 className="text-3xl font-bold">Votre prochaine facture est à 1 minute</h2>
              <Link href="/inscription" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-brand hover:bg-brand-soft">
                Créer mon compte gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 py-8 text-sm text-ink/60">
        <div className="container-x flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {new Date().getFullYear()} Facturo</p>
          <Link href="/mentions-legales" className="hover:text-ink">Mentions légales et confidentialité</Link>
        </div>
      </footer>
    </>
  );
}
