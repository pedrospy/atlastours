import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightLeft, Pencil, Trash2 } from "lucide-react";
import type { DocStatus } from "@prisma/client";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { computeTotals, formatDate, formatMoney } from "@/lib/money";
import { convertQuoteToInvoice, deleteDocument, setDocumentStatus } from "@/app/actions/documents";
import { PrintButton } from "@/components/PrintButton";
import { StatusBadge, statusLabel, typeLabel } from "@/components/StatusBadge";

const statusOrder: DocStatus[] = ["DRAFT", "SENT", "PAID", "CANCELLED"];

export default async function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await params;
  const doc = await db.document.findFirst({
    where: { id, userId: user.id },
    include: { client: true, items: { orderBy: { position: "asc" } } },
  });
  if (!doc) notFound();

  const totals = computeTotals(doc.items);
  const vatByRate = new Map<number, number>();
  for (const it of doc.items) {
    const line = Math.round(it.quantity * it.unitPrice);
    vatByRate.set(it.vatRate, (vatByRate.get(it.vatRate) ?? 0) + Math.round((line * it.vatRate) / 100));
  }
  const isQuote = doc.type === "QUOTE";

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div className="flex items-center gap-3">
          <Link href="/app/documents" className="text-sm font-semibold text-brand">← Retour</Link>
          <StatusBadge status={doc.status} type={doc.type} />
        </div>
        <div className="flex flex-wrap gap-2">
          {isQuote && (
            <form action={convertQuoteToInvoice}>
              <input type="hidden" name="id" value={doc.id} />
              <button className="btn-secondary"><ArrowRightLeft className="h-4 w-4" /> Transformer en facture</button>
            </form>
          )}
          <Link href={`/app/documents/${doc.id}/modifier`} className="btn-secondary"><Pencil className="h-4 w-4" /> Modifier</Link>
          <PrintButton />
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2 print:hidden">
        <span className="text-sm text-ink/60">Statut :</span>
        {statusOrder.map((s) => (
          <form key={s} action={setDocumentStatus}>
            <input type="hidden" name="id" value={doc.id} />
            <input type="hidden" name="status" value={s} />
            <button
              className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 transition ${
                doc.status === s ? "bg-ink text-white ring-ink" : "bg-white text-ink/70 ring-ink/15 hover:ring-ink/40"
              }`}
            >
              {statusLabel[doc.type][s]}
            </button>
          </form>
        ))}
      </div>

      <article className="rounded-2xl border border-ink/10 bg-white p-8 shadow-card sm:p-12 print:border-0 print:p-0 print:shadow-none">
        <header className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <p className="text-xl font-extrabold">{user.businessName || user.name}</p>
            <p className="mt-2 whitespace-pre-line text-sm text-ink/70">{user.address}</p>
            <p className="text-sm text-ink/70">{[user.phone, user.email].filter(Boolean).join(" · ")}</p>
            {user.taxId && <p className="text-sm text-ink/70">{user.taxId}</p>}
          </div>
          <div className="sm:text-right">
            <p className="text-3xl font-extrabold uppercase tracking-tight text-brand">{typeLabel[doc.type]}</p>
            <p className="mt-1 font-semibold">N° {doc.number}</p>
            <p className="mt-2 text-sm text-ink/70">Date : {formatDate(doc.issueDate)}</p>
            {doc.dueDate && (
              <p className="text-sm text-ink/70">{isQuote ? "Valable jusqu'au" : "Échéance"} : {formatDate(doc.dueDate)}</p>
            )}
          </div>
        </header>

        <section className="mt-10 rounded-xl bg-paper p-5 print:bg-transparent print:p-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/50">{isQuote ? "Destinataire" : "Facturé à"}</p>
          <p className="mt-1 font-semibold">{doc.client.name}</p>
          {doc.client.address && <p className="whitespace-pre-line text-sm text-ink/70">{doc.client.address}</p>}
          {doc.client.email && <p className="text-sm text-ink/70">{doc.client.email}</p>}
          {doc.client.taxId && <p className="text-sm text-ink/70">{doc.client.taxId}</p>}
        </section>

        <table className="mt-10 w-full text-sm">
          <thead className="border-b-2 border-ink text-left text-xs uppercase tracking-wide">
            <tr>
              <th className="py-2 font-semibold">Description</th>
              <th className="py-2 text-right font-semibold">Qté</th>
              <th className="py-2 text-right font-semibold">Prix unit. HT</th>
              <th className="py-2 text-right font-semibold">TVA</th>
              <th className="py-2 text-right font-semibold">Total HT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {doc.items.map((it) => (
              <tr key={it.id}>
                <td className="py-3 pr-4">{it.description}</td>
                <td className="py-3 text-right">{it.quantity.toLocaleString("fr-FR")}</td>
                <td className="py-3 text-right">{formatMoney(it.unitPrice, doc.currency)}</td>
                <td className="py-3 text-right">{it.vatRate.toLocaleString("fr-FR")} %</td>
                <td className="py-3 text-right font-medium">{formatMoney(Math.round(it.quantity * it.unitPrice), doc.currency)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 flex justify-end">
          <dl className="w-full max-w-xs space-y-1 text-sm">
            <div className="flex justify-between"><dt className="text-ink/60">Total HT</dt><dd>{formatMoney(totals.subtotal, doc.currency)}</dd></div>
            {[...vatByRate.entries()].map(([rate, amount]) => (
              <div key={rate} className="flex justify-between">
                <dt className="text-ink/60">TVA {rate.toLocaleString("fr-FR")} %</dt>
                <dd>{formatMoney(amount, doc.currency)}</dd>
              </div>
            ))}
            <div className="flex justify-between border-t-2 border-ink pt-2 text-lg font-extrabold">
              <dt>Total TTC</dt>
              <dd>{formatMoney(totals.total, doc.currency)}</dd>
            </div>
          </dl>
        </div>

        {(doc.notes || user.iban) && (
          <footer className="mt-12 space-y-3 border-t border-ink/10 pt-6 text-sm text-ink/70">
            {doc.notes && <p className="whitespace-pre-line">{doc.notes}</p>}
            {user.iban && !isQuote && <p><span className="font-semibold text-ink">Coordonnées bancaires :</span> {user.iban}</p>}
          </footer>
        )}
        {isQuote && (
          <p className="mt-12 text-sm text-ink/60">Bon pour accord — date et signature du client :</p>
        )}
        {user.plan === "FREE" && (
          <p className="mt-10 text-center text-xs text-ink/40">Créé avec Facturo · facture et devis en ligne gratuits</p>
        )}
      </article>

      <form action={deleteDocument} className="mt-6 flex justify-end print:hidden">
        <input type="hidden" name="id" value={doc.id} />
        <button className="btn-danger"><Trash2 className="h-4 w-4" /> Supprimer ce document</button>
      </form>
    </div>
  );
}
