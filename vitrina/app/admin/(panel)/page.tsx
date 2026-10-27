import Link from "next/link";
import type { OrderStatus } from "@prisma/client";
import { ArrowRight, Banknote, Inbox, Repeat, Target } from "lucide-react";
import { markPaid, setSitePublished } from "@/app/actions/admin";
import { StatusBadge, orderStatusLabels } from "@/components/StatusBadge";
import { db } from "@/lib/db";
import { formatDateTime, formatMoney } from "@/lib/format";
import { getPlan } from "@/lib/plans";

const filters: (OrderStatus | "TOUS")[] = ["TOUS", "NOUVEAU", "PAYE", "PUBLIE", "ANNULE"];

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<{ statut?: string }> }) {
  const { statut } = await searchParams;
  const filter = filters.includes(statut as OrderStatus) ? (statut as OrderStatus) : "TOUS";
  const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  const [paid, paidThisMonth, active, toProcess, prospects, prospectsWon, orders] = await Promise.all([
    db.order.aggregate({ where: { status: { in: ["PAYE", "PUBLIE"] } }, _sum: { amount: true }, _count: true }),
    db.order.aggregate({ where: { status: { in: ["PAYE", "PUBLIE"] }, paidAt: { gte: monthStart } }, _sum: { amount: true } }),
    db.order.aggregate({ where: { status: "PUBLIE" }, _sum: { monthly: true }, _count: true }),
    db.order.count({ where: { status: { in: ["NOUVEAU", "PAYE"] } } }),
    db.prospect.count(),
    db.prospect.count({ where: { status: "GAGNE" } }),
    db.order.findMany({
      where: filter === "TOUS" ? {} : { status: filter },
      include: { site: true },
      orderBy: { createdAt: "desc" },
      take: 100,
    }),
  ]);

  const stats = [
    { icon: Banknote, label: "Encaissé (total)", value: formatMoney(paid._sum.amount ?? 0), sub: `${formatMoney(paidThisMonth._sum.amount ?? 0)} ce mois-ci` },
    { icon: Repeat, label: "Abonnements (MRR estimé)", value: `${formatMoney(active._sum.monthly ?? 0)}/mois`, sub: `${active._count} site(s) en ligne` },
    { icon: Inbox, label: "Commandes à traiter", value: String(toProcess), sub: "Nouvelles ou payées non publiées" },
    { icon: Target, label: "Prospects", value: String(prospects), sub: `${prospectsWon} gagné(s)${prospects ? ` · ${Math.round((prospectsWon / prospects) * 100)} %` : ""}` },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="page-title">Tableau de bord</h1>
          <p className="text-sm text-ink/60">Vos ventes, vos abonnements et les sites à livrer.</p>
        </div>
        <Link href="/admin/prospects" className="btn-primary">
          <Target className="h-4 w-4" /> Créer une démo prospect
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, label, value, sub }) => (
          <div key={label} className="card p-5">
            <div className="flex items-center gap-2 text-sm text-ink/60">
              <Icon className="h-4 w-4 text-brand" /> {label}
            </div>
            <p className="mt-2 text-2xl font-bold tracking-tight" data-testid={`stat-${label}`}>{value}</p>
            <p className="mt-1 text-xs text-ink/50">{sub}</p>
          </div>
        ))}
      </div>

      <section className="card p-0">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 px-5 py-4">
          <h2 className="font-bold">Commandes</h2>
          <div className="flex flex-wrap gap-1">
            {filters.map((f) => (
              <Link
                key={f}
                href={f === "TOUS" ? "/admin" : `/admin?statut=${f}`}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${filter === f ? "bg-ink text-white" : "text-ink/60 hover:bg-paper"}`}
              >
                {f === "TOUS" ? "Toutes" : orderStatusLabels[f]}
              </Link>
            ))}
          </div>
        </div>
        {orders.length === 0 ? (
          <p className="px-5 py-12 text-center text-sm text-ink/50">Aucune commande pour le moment. Lancez la prospection !</p>
        ) : (
          <ul className="divide-y divide-ink/10">
            {orders.map((order) => (
              <li key={order.id} className="flex flex-col gap-3 px-5 py-4 lg:flex-row lg:items-center">
                <Link href={`/admin/commandes/${order.id}`} className="min-w-0 flex-1 hover:opacity-80">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-ink/50">VT-{String(order.number).padStart(4, "0")}</span>
                    <span className="truncate font-semibold">{order.site.businessName}</span>
                    <StatusBadge status={order.status} />
                  </div>
                  <p className="mt-0.5 text-sm text-ink/55">
                    {order.customerName} · {order.site.city} · {getPlan(order.plan)?.name} {formatMoney(order.amount, order.currency)} · {formatDateTime(order.createdAt)}
                  </p>
                </Link>
                <div className="flex flex-wrap items-center gap-2">
                  <Link href={`/s/${order.site.slug}`} target="_blank" className="btn-secondary btn-sm">Voir le site</Link>
                  {order.status === "NOUVEAU" && (
                    <form action={markPaid}>
                      <input type="hidden" name="orderId" value={order.id} />
                      <input type="hidden" name="method" value="Espèces / virement" />
                      <button className="btn-secondary btn-sm">Marquer payé</button>
                    </form>
                  )}
                  {order.status === "PAYE" && (
                    <form action={setSitePublished}>
                      <input type="hidden" name="siteId" value={order.siteId} />
                      <input type="hidden" name="publish" value="1" />
                      <button className="btn-primary btn-sm">Publier</button>
                    </form>
                  )}
                  <Link href={`/admin/commandes/${order.id}`} className="btn-secondary btn-sm" aria-label="Détails">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
