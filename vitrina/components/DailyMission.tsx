import Link from "next/link";
import { CalendarCheck, MessageCircle, Rocket } from "lucide-react";
import { markFollowedUp } from "@/app/actions/admin";
import { getCategory } from "@/lib/categories";
import { db } from "@/lib/db";
import { appUrl, formatMoney, waLink } from "@/lib/format";
import { owner } from "@/lib/owner";
import { followUpMessage } from "@/lib/pitch";
import { plans } from "@/lib/plans";

const DAILY_DEMOS = 20;
const FOLLOW_UP_AFTER_DAYS = 2;

export async function DailyMission() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const followUpBefore = new Date(now.getTime() - FOLLOW_UP_AFTER_DAYS * 24 * 3600 * 1000);
  const goal = Number(process.env.MONTHLY_GOAL || 3000) * 100;

  const [demosToday, month, toFollowUp, followUpCount] = await Promise.all([
    db.prospect.count({ where: { createdAt: { gte: today } } }),
    db.order.aggregate({ where: { status: { in: ["PAYE", "PUBLIE"] }, paidAt: { gte: monthStart } }, _sum: { amount: true } }),
    db.prospect.findMany({
      where: { status: { in: ["CONTACTE", "INTERESSE"] }, updatedAt: { lt: followUpBefore } },
      include: { site: true },
      orderBy: [{ status: "desc" }, { updatedAt: "asc" }],
      take: 8,
    }),
    db.prospect.count({ where: { status: { in: ["CONTACTE", "INTERESSE"] }, updatedAt: { lt: followUpBefore } } }),
  ]);

  const revenue = month._sum.amount ?? 0;
  const missing = Math.max(0, goal - revenue);
  const me = owner();

  return (
    <section className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
      <div className="card space-y-5">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-ink/60"><Rocket className="h-4 w-4 text-brand" /> Objectif du mois</p>
          <p className="mt-1 text-3xl font-bold tracking-tight">
            {formatMoney(revenue)} <span className="text-base font-medium text-ink/45">/ {formatMoney(goal)}</span>
          </p>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-paper ring-1 ring-ink/10">
            <div className="h-full rounded-full bg-brand" style={{ width: `${Math.min(100, (revenue / goal) * 100)}%` }} />
          </div>
          <p className="mt-2 text-sm text-ink/70">
            {missing > 0 ? (
              <>
                Il manque <strong>{formatMoney(missing)}</strong> : environ <strong>{Math.ceil(missing / plans[0].price)} sites Essentiel</strong> ou{" "}
                <strong>{Math.ceil(missing / plans[1].price)} sites Pro</strong>.
              </>
            ) : (
              <>Objectif atteint ce mois-ci, bravo !</>
            )}
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-ink/60"><CalendarCheck className="h-4 w-4 text-brand" /> Aujourd&apos;hui</p>
          <p className="mt-1 text-sm">
            <strong className="text-2xl">{demosToday}</strong> / {DAILY_DEMOS} démos créées et envoyées
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper ring-1 ring-ink/10">
            <div className="h-full rounded-full bg-accent" style={{ width: `${Math.min(100, (demosToday / DAILY_DEMOS) * 100)}%` }} />
          </div>
          <p className="mt-2 text-xs text-ink/50">Repère : 50 contacts ≈ 10 intéressés ≈ 2 à 3 ventes. Les ventes suivent le volume.</p>
          <Link href="/admin/prospects" className="btn-primary btn-sm mt-3">Créer une démo maintenant</Link>
        </div>
      </div>

      <div className="card p-0">
        <div className="border-b border-ink/10 px-5 py-4">
          <h2 className="font-bold">À relancer aujourd&apos;hui ({followUpCount})</h2>
          <p className="text-xs text-ink/55">Sans nouvelles depuis {FOLLOW_UP_AFTER_DAYS} jours ou plus. La plupart des ventes se font après une relance.</p>
        </div>
        {toFollowUp.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-ink/50">Personne à relancer. Créez de nouvelles démos !</p>
        ) : (
          <ul className="divide-y divide-ink/5">
            {toFollowUp.map((p) => {
              const message = followUpMessage({ businessName: p.businessName, category: p.category, link: `${appUrl()}/s/${p.site.slug}`, ownerName: me.name });
              return (
                <li key={p.id} className="flex flex-wrap items-center gap-3 px-5 py-3 text-sm">
                  <div className="min-w-0 flex-1">
                    <Link href={`/admin/prospects/${p.id}`} className="font-semibold hover:text-brand">{p.businessName}</Link>
                    <p className="text-xs text-ink/50">
                      {getCategory(p.category).label} · {p.city} · {p.status === "INTERESSE" ? "Intéressé" : "Contacté"}
                    </p>
                  </div>
                  {p.phone && (
                    <a href={waLink(p.phone, message)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-sm">
                      <MessageCircle className="h-4 w-4" /> Relancer
                    </a>
                  )}
                  <form action={markFollowedUp}>
                    <input type="hidden" name="prospectId" value={p.id} />
                    <button className="btn-secondary btn-sm">Fait</button>
                  </form>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
