import { ArrowRight, CheckCircle2, CalendarCheck, CreditCard } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-light/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-sun-light/50 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="eyebrow">Pour riads, maisons d&apos;hôtes et agences au Maroc</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Arrêtez d&apos;offrir <span className="text-brand">17 %</span> de chaque réservation à Booking.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Nous créons votre site avec réservation et paiement en ligne. Vos clients réservent chez
            vous, et la commission reste dans votre caisse.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#calculateur" className="btn-primary">
              Calculer mes économies <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#offres" className="btn-ghost">
              Voir les offres
            </a>
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-ink/70 sm:grid-cols-2">
            {["Livré en 7 à 21 jours", "Paiement en 2 fois", "Synchronisé avec Booking & Airbnb", "Support WhatsApp"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> {t}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-bold">Riad Yasmine</p>
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                Réservation directe
              </span>
            </div>
            <div className="mt-4 h-40 rounded-2xl bg-gradient-to-br from-sun-light via-sun/60 to-brand/70" />
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-ink/10 p-3">
                <p className="text-ink/50">Arrivée</p>
                <p className="font-semibold">12 nov.</p>
              </div>
              <div className="rounded-xl border border-ink/10 p-3">
                <p className="text-ink/50">Départ</p>
                <p className="font-semibold">15 nov.</p>
              </div>
            </div>
            <button className="btn-primary mt-4 w-full" type="button" tabIndex={-1}>
              Réserver · 3 nuits · 330 €
            </button>
          </div>
          <div className="absolute -left-6 -top-6 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold shadow-card sm:flex">
            <CalendarCheck className="h-5 w-5 text-brand" /> +3 réservations cette semaine
          </div>
          <div className="absolute -bottom-6 -right-4 hidden items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white shadow-card sm:flex">
            <CreditCard className="h-5 w-5 text-sun" /> 0 € de commission
          </div>
        </div>
      </div>
    </section>
  );
}
