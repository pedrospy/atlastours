import Link from "next/link";
import type { ProspectStatus } from "@prisma/client";
import { ExternalLink, MessageCircle, QrCode } from "lucide-react";
import { ProspectForm } from "@/components/ProspectForm";
import { ProspectStatusSelect } from "@/components/ProspectStatusSelect";
import { prospectStatusLabels } from "@/components/StatusBadge";
import { db } from "@/lib/db";
import { getCategory } from "@/lib/categories";
import { appUrl, formatDateTime, waLink } from "@/lib/format";
import { owner } from "@/lib/owner";
import { pitchMessage } from "@/lib/pitch";

const statuses = Object.keys(prospectStatusLabels) as ProspectStatus[];

export default async function ProspectsPage({ searchParams }: { searchParams: Promise<{ statut?: string }> }) {
  const { statut } = await searchParams;
  const filter = statuses.includes(statut as ProspectStatus) ? (statut as ProspectStatus) : null;
  const [prospects, counts] = await Promise.all([
    db.prospect.findMany({ where: filter ? { status: filter } : {}, include: { site: true }, orderBy: { createdAt: "desc" }, take: 200 }),
    db.prospect.groupBy({ by: ["status"], _count: true }),
  ]);
  const countOf = (s: ProspectStatus) => counts.find((c) => c.status === s)?._count ?? 0;
  const total = counts.reduce((sum, c) => sum + c._count, 0);
  const me = owner();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="page-title">Prospection</h1>
        <p className="text-sm text-ink/60">Créez la démo d&apos;un commerce en 1 minute, montrez-la sur votre téléphone, envoyez-la sur WhatsApp.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[24rem_1fr]">
        <section className="card h-fit shadow-card lg:sticky lg:top-24">
          <h2 className="font-bold">Nouvelle démo</h2>
          <p className="mb-5 mt-1 text-sm text-ink/60">Textes, prix indicatifs et horaires sont pré-remplis selon l&apos;activité.</p>
          <ProspectForm />
        </section>

        <section className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {statuses.map((s) => (
              <Link
                key={s}
                href={filter === s ? "/admin/prospects" : `/admin/prospects?statut=${s}`}
                className={`rounded-2xl border p-4 transition ${filter === s ? "border-brand bg-brand-soft" : "border-ink/10 bg-white hover:border-ink/25"}`}
              >
                <p className="text-2xl font-bold">{countOf(s)}</p>
                <p className="text-xs text-ink/60">{prospectStatusLabels[s]}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-ink/50">
            {total} prospect(s) au total{total > 0 && ` · taux de transformation ${Math.round((countOf("GAGNE") / total) * 100)} %`}
          </p>

          {prospects.length === 0 ? (
            <div className="card text-center text-sm text-ink/50">Aucun prospect {filter ? "dans ce statut" : "pour le moment"}.</div>
          ) : (
            <ul className="space-y-3">
              {prospects.map((p) => {
                const link = `${appUrl()}/s/${p.site.slug}`;
                return (
                  <li key={p.id} className="card flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                    <span className="hidden h-11 w-11 shrink-0 rounded-xl sm:block" style={{ backgroundColor: p.site.color }} />
                    <Link href={`/admin/prospects/${p.id}`} className="min-w-0 flex-1 hover:opacity-80">
                      <p className="truncate font-semibold">{p.businessName}</p>
                      <p className="truncate text-sm text-ink/55">
                        {getCategory(p.category).label.split(" (")[0]} · {p.city}
                        {p.phone && ` · ${p.phone}`} · {formatDateTime(p.createdAt)}
                      </p>
                    </Link>
                    <div className="flex flex-wrap items-center gap-2">
                      <ProspectStatusSelect id={p.id} status={p.status} />
                      <Link href={`/admin/prospects/${p.id}`} className="btn-secondary btn-sm" aria-label="QR code et message">
                        <QrCode className="h-4 w-4" />
                      </Link>
                      <Link href={`/s/${p.site.slug}`} target="_blank" className="btn-secondary btn-sm" aria-label="Voir la démo">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      {p.phone && (
                        <a
                          href={waLink(p.phone, pitchMessage({ ...p, link, ownerName: me.name }))}
                          target="_blank"
                          rel="noopener"
                          className="btn-whatsapp btn-sm"
                          aria-label="Envoyer sur WhatsApp"
                        >
                          <MessageCircle className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
