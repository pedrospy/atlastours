const steps = [
  { n: "01", title: "Audit gratuit", text: "15 minutes sur WhatsApp ou en visio pour analyser vos réservations et vos commissions." },
  { n: "02", title: "Maquette en 72 h", text: "Vous voyez votre futur site avec vos photos et vos chambres avant de valider." },
  { n: "03", title: "Mise en ligne", text: "Réservation, paiement, synchronisation des calendriers et fiche Google configurés." },
  { n: "04", title: "Suivi mensuel", text: "Maintenance, modifications et rapport des réservations directes chaque mois." },
];

export function Process() {
  return (
    <section id="methode" className="py-20">
      <div className="container-x">
        <p className="eyebrow">Méthode</p>
        <h2 className="section-title mt-3 max-w-2xl">Votre site en ligne sans y passer vos soirées</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-ink/10 bg-white p-6">
              <p className="font-display text-3xl font-extrabold text-brand/30">{s.n}</p>
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
