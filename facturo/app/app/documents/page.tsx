import Link from "next/link";
import { Plus } from "lucide-react";
import type { DocType } from "@prisma/client";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { computeTotals, formatDate, formatMoney } from "@/lib/money";
import { StatusBadge, typeLabel } from "@/components/StatusBadge";

const tabs: { label: string; type?: DocType }[] = [
  { label: "Tous" },
  { label: "Factures", type: "INVOICE" },
  { label: "Devis", type: "QUOTE" },
];

export default async function DocumentsPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const user = await requireUser();
  const { type: rawType } = await searchParams;
  const type = rawType === "INVOICE" || rawType === "QUOTE" ? rawType : undefined;

  const docs = await db.document.findMany({
    where: { userId: user.id, ...(type ? { type } : {}) },
    orderBy: [{ issueDate: "desc" }, { number: "desc" }],
    include: { client: { select: { name: true } }, items: true },
  });

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="page-title">Factures et devis</h1>
        <div className="flex gap-2">
          <Link href="/app/documents/nouveau?type=QUOTE" className="btn-secondary"><Plus className="h-4 w-4" /> Devis</Link>
          <Link href="/app/documents/nouveau" className="btn-primary"><Plus className="h-4 w-4" /> Facture</Link>
        </div>
      </div>

      <div className="mt-6 flex gap-1 rounded-lg bg-white p-1 text-sm font-medium shadow-sm ring-1 ring-ink/10 sm:inline-flex">
        {tabs.map((t) => (
          <Link
            key={t.label}
            href={t.type ? `/app/documents?type=${t.type}` : "/app/documents"}
            className={`rounded-md px-4 py-1.5 ${t.type === type ? "bg-brand text-white" : "text-ink/70 hover:bg-paper"}`}
          >
            {t.label}
          </Link>
        ))}
      </div>

      <div className="card mt-4 overflow-x-auto !p-0">
        {docs.length === 0 ? (
          <p className="px-6 py-12 text-center text-sm text-ink/60">Aucun document.</p>
        ) : (
          <table className="w-full min-w-[640px] text-sm">
            <thead className="border-b border-ink/10 text-left text-xs uppercase tracking-wide text-ink/50">
              <tr>
                <th className="px-6 py-3 font-semibold">Numéro</th>
                <th className="px-3 py-3 font-semibold">Client</th>
                <th className="px-3 py-3 font-semibold">Date</th>
                <th className="px-3 py-3 font-semibold">Statut</th>
                <th className="px-6 py-3 text-right font-semibold">Total TTC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {docs.map((d) => (
                <tr key={d.id} className="hover:bg-paper">
                  <td className="px-6 py-3">
                    <Link href={`/app/documents/${d.id}`} className="font-semibold text-brand">
                      {typeLabel[d.type]} {d.number}
                    </Link>
                  </td>
                  <td className="px-3 py-3">{d.client.name}</td>
                  <td className="px-3 py-3 text-ink/60">{formatDate(d.issueDate)}</td>
                  <td className="px-3 py-3"><StatusBadge status={d.status} type={d.type} /></td>
                  <td className="px-6 py-3 text-right font-semibold">{formatMoney(computeTotals(d.items).total, d.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
