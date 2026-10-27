import Link from "next/link";
import { Plus } from "lucide-react";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { computeTotals, formatDate, formatMoney } from "@/lib/money";
import { documentsThisMonth, FREE_DOCS_PER_MONTH } from "@/lib/plans";
import { StatusBadge, typeLabel } from "@/components/StatusBadge";

export default async function Dashboard() {
  const user = await requireUser();
  const [invoices, recent, used] = await Promise.all([
    db.document.findMany({
      where: { userId: user.id, type: "INVOICE", currency: user.currency },
      select: { status: true, issueDate: true, dueDate: true, items: { select: { quantity: true, unitPrice: true, vatRate: true } } },
    }),
    db.document.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 6,
      include: { client: { select: { name: true } }, items: true },
    }),
    documentsThisMonth(user.id),
  ]);

  const now = new Date();
  const yearStart = new Date(now.getFullYear(), 0, 1);
  let paidThisYear = 0;
  let pending = 0;
  let overdue = 0;
  for (const inv of invoices) {
    const { total } = computeTotals(inv.items);
    if (inv.status === "PAID" && inv.issueDate >= yearStart) paidThisYear += total;
    if (inv.status === "SENT") {
      pending += total;
      if (inv.dueDate && inv.dueDate < now) overdue += total;
    }
  }

  const stats = [
    { label: `Encaissé en ${now.getFullYear()}`, value: formatMoney(paidThisYear, user.currency), tone: "text-emerald-700" },
    { label: "En attente de paiement", value: formatMoney(pending, user.currency), tone: "text-amber-700" },
    { label: "En retard", value: formatMoney(overdue, user.currency), tone: "text-red-700" },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="page-title">Bonjour {user.name.split(" ")[0]} 👋</h1>
          <p className="text-sm text-ink/60">Voici où en est votre activité.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/app/documents/nouveau?type=QUOTE" className="btn-secondary"><Plus className="h-4 w-4" /> Devis</Link>
          <Link href="/app/documents/nouveau" className="btn-primary"><Plus className="h-4 w-4" /> Facture</Link>
        </div>
      </div>

      {!user.businessName || !user.taxId ? (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          Complétez vos informations (adresse, ICE / SIRET) pour qu&apos;elles apparaissent sur vos factures.{" "}
          <Link href="/app/parametres" className="font-semibold underline">Paramètres</Link>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="card">
            <p className="text-sm text-ink/60">{s.label}</p>
            <p className={`mt-2 text-2xl font-bold ${s.tone}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {user.plan === "FREE" && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-brand-soft p-4 text-sm">
          <span>
            Plan Gratuit : <strong>{used} / {FREE_DOCS_PER_MONTH}</strong> documents utilisés ce mois-ci.
          </span>
          <Link href="/app/abonnement" className="font-semibold text-brand">Passer à Pro →</Link>
        </div>
      )}

      <div className="card mt-6 !p-0">
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4">
          <h2 className="font-semibold">Derniers documents</h2>
          <Link href="/app/documents" className="text-sm font-semibold text-brand">Tout voir</Link>
        </div>
        {recent.length === 0 ? (
          <p className="px-6 py-10 text-center text-sm text-ink/60">
            Aucun document pour l&apos;instant. Créez votre première facture en 1 minute.
          </p>
        ) : (
          <ul className="divide-y divide-ink/5">
            {recent.map((d) => (
              <li key={d.id}>
                <Link href={`/app/documents/${d.id}`} className="flex items-center justify-between gap-4 px-6 py-3 hover:bg-paper">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{typeLabel[d.type]} {d.number} · {d.client.name}</p>
                    <p className="text-xs text-ink/50">{formatDate(d.issueDate)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold">{formatMoney(computeTotals(d.items).total, d.currency)}</span>
                    <StatusBadge status={d.status} type={d.type} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
