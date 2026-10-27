import Link from "next/link";
import type { OrderStatus } from "@prisma/client";
import { Target, TrendingUp } from "lucide-react";
import { ManualSaleForm } from "@/components/forms";
import { OrderActions } from "@/components/OrderActions";
import { OrderStatusBadge } from "@/components/OrderStatusBadge";
import { db } from "@/lib/db";
import { formatDateTime, formatMoney, waLink } from "@/lib/format";
import { offerName, offers } from "@/lib/offers";
import { revenueStats } from "@/lib/stats";

const filters: { value: OrderStatus | "TOUTES"; label: string }[] = [
  { value: "TOUTES", label: "Toutes" },
  { value: "EN_ATTENTE", label: "En attente" },
  { value: "PAYEE", label: "Payées" },
  { value: "REMBOURSEE", label: "Remboursées" },
  { value: "ANNULEE", label: "Annulées" },
];

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<{ statut?: string }> }) {
  const { statut = "TOUTES" } = await searchParams;
  const filter = filters.find((f) => f.value === statut)?.value ?? "TOUTES";
  const [s, orders] = await Promise.all([
    revenueStats(),
    db.order.findMany({
      where: filter === "TOUTES" ? {} : { status: filter },
      include: { student: true },
      orderBy: { createdAt: "desc" },
      take: 100,
    }),
  ]);
  const scale = Math.max(s.goal.max, s.revenue);
  const pct = (v: number) => `${Math.min(100, (v / scale) * 100)}%`;
  const month = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date());

  return (
    <div className="space-y-8">
      <div>
        <h1 className="page-title">Tableau de bord</h1>
        <p className="text-sm capitalize text-ink/55">{month}</p>
      </div>

      <section className="card">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-ink/60"><Target className="h-4 w-4 text-brand" /> Objectif du mois</p>
            <p className="mt-1 font-display text-4xl font-extrabold">{formatMoney(s.revenue)}</p>
            <p className="text-sm text-ink/55">
              encaissés · objectif {formatMoney(s.goal.min)} – {formatMoney(s.goal.max)}
            </p>
          </div>
          <div className="text-right text-sm">
            <p className="flex items-center justify-end gap-1.5 text-ink/55"><TrendingUp className="h-4 w-4" /> Projection fin de mois</p>
            <p className="font-display text-2xl font-bold">{formatMoney(s.projection)}</p>
          </div>
        </div>
        <div className="relative mt-6 h-4 rounded-full bg-paper ring-1 ring-ink/10">
          <div
            className={`h-full rounded-full ${s.revenue >= s.goal.max ? "bg-emerald-500" : s.revenue >= s.goal.min ? "bg-brand" : "bg-accent"}`}
            style={{ width: pct(s.revenue) }}
          />
          <span className="absolute -top-1 h-6 w-0.5 bg-ink/40" style={{ left: pct(s.goal.min) }} title="Objectif bas" />
          <span className="absolute -top-1 h-6 w-0.5 bg-ink/40" style={{ left: pct(s.goal.max) }} title="Objectif haut" />
        </div>
        <p className="mt-4 text-sm">
          {s.missing > 0 ? (
            <>
              Il manque <strong>{formatMoney(s.missing)}</strong> pour l&apos;objectif bas, soit{" "}
              {s.paths.map((p, i) => (
                <span key={p.offer.id}>
                  {i > 0 && (i === s.paths.length - 1 ? " ou " : ", ")}
                  <strong>{p.needed} {p.offer.name}</strong>
                </span>
              ))}
              .
            </>
          ) : s.missingMax > 0 ? (
            <>
              Objectif bas atteint. Encore <strong>{formatMoney(s.missingMax)}</strong> pour {formatMoney(s.goal.max)}.
            </>
          ) : (
            <>Objectif haut atteint ce mois-ci.</>
          )}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Ventes du mois", String(s.sales), `Panier moyen ${formatMoney(s.averageBasket)}`],
          ["Prospects du mois", String(s.leads), `Mois précédent : ${s.previousLeads}`],
          ["Conversion prospects → ventes", `${(s.conversion * 100).toFixed(1)} %`, "Repère : 2 à 5 %"],
          ["Paiements en attente", formatMoney(s.pendingAmount), `${s.pendingCount} commande(s) à relancer`],
        ].map(([label, value, hint]) => (
          <div key={label} className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">{label}</p>
            <p className="mt-2 font-display text-2xl font-bold">{value}</p>
            <p className="mt-1 text-xs text-ink/50">{hint}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {s.byOffer.map(({ offer, count, total }) => (
          <div key={offer.id} className="card flex items-center justify-between p-5">
            <div>
              <p className="font-semibold">{offer.name}</p>
              <p className="text-sm text-ink/50">{formatMoney(offer.price)}</p>
            </div>
            <div className="text-right">
              <p className="font-display text-xl font-bold">{count} vente{count > 1 ? "s" : ""}</p>
              <p className="text-sm text-ink/50">{formatMoney(total)}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="card">
        <h2 className="font-semibold">Enregistrer une vente (appel, WhatsApp, paiement hors site)</h2>
        <p className="mb-4 mt-1 text-sm text-ink/55">Crée le compte élève si besoin, ouvre l&apos;accès et affiche les identifiants à transmettre.</p>
        <ManualSaleForm offers={offers} />
      </section>

      <section>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold">Commandes</h2>
          <div className="flex flex-wrap gap-1">
            {filters.map((f) => (
              <Link
                key={f.value}
                href={f.value === "TOUTES" ? "/admin" : `/admin?statut=${f.value}`}
                className={`rounded-lg px-3 py-1.5 text-sm ${filter === f.value ? "bg-ink text-white" : "text-ink/60 hover:bg-white"}`}
              >
                {f.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
          <table className="w-full min-w-[820px] text-sm">
            <thead className="border-b border-ink/10 text-left text-xs uppercase tracking-wide text-ink/45">
              <tr>
                <th className="px-4 py-3">N°</th>
                <th className="px-4 py-3">Élève</th>
                <th className="px-4 py-3">Offre</th>
                <th className="px-4 py-3">Montant</th>
                <th className="px-4 py-3">Statut</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {orders.map((o) => (
                <tr key={o.id} className="align-middle">
                  <td className="px-4 py-3 font-mono text-xs text-ink/55">
                    ENVOL-{o.number}
                    <br />
                    {formatDateTime(o.createdAt)}
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/eleves/${o.studentId}`} className="font-medium hover:text-brand">{o.student.name}</Link>
                    <br />
                    <span className="text-xs text-ink/50">{o.student.email}</span>
                    {o.student.phone && (
                      <a href={waLink(o.student.phone)} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs font-semibold text-[#1ebe5b]">WhatsApp</a>
                    )}
                  </td>
                  <td className="px-4 py-3">{offerName(o.offer)}{o.note && <span className="block text-xs text-ink/45">{o.note}</span>}</td>
                  <td className="px-4 py-3 font-semibold">
                    {formatMoney(o.amount)}
                    {o.paymentMethod && <span className="block text-xs font-normal text-ink/45">{o.paymentMethod}</span>}
                  </td>
                  <td className="px-4 py-3"><OrderStatusBadge status={o.status} /></td>
                  <td className="px-4 py-3"><OrderActions order={o} /></td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-ink/45">Aucune commande pour l&apos;instant.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
