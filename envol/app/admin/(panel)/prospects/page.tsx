import { Download } from "lucide-react";
import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format";

export default async function LeadsPage() {
  const [leads, buyers] = await Promise.all([
    db.lead.findMany({ orderBy: { createdAt: "desc" }, take: 500 }),
    db.student.findMany({ where: { orders: { some: { status: "PAYEE" } } }, select: { email: true } }),
  ]);
  const customers = new Set(buyers.map((b) => b.email));
  const converted = leads.filter((l) => customers.has(l.email)).length;
  const sources = Object.entries(
    leads.reduce<Record<string, number>>((acc, l) => ({ ...acc, [l.source || "inconnue"]: (acc[l.source || "inconnue"] ?? 0) + 1 }), {}),
  ).sort((a, b) => b[1] - a[1]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="page-title">Prospects (mini-formation gratuite)</h1>
          <p className="text-sm text-ink/55">
            {leads.length} inscrit(s) · {converted} devenu(s) client(s) ({leads.length ? ((converted / leads.length) * 100).toFixed(1) : "0"} %)
          </p>
        </div>
        <a href="/admin/prospects/export" className="btn-secondary btn-sm"><Download className="h-4 w-4" /> Exporter en CSV</a>
      </div>
      <p className="rounded-xl bg-brand-soft px-4 py-3 text-sm text-ink/75">
        Importez le CSV dans votre outil d&apos;e-mailing (Brevo, MailerLite, Systeme.io) et branchez la séquence de 7 e-mails décrite dans le README. La
        source indique le formulaire utilisé ; ajoutez <code>?source=tiktok</code> (ou autre) au lien <code>/gratuit</code> pour suivre vos canaux.
      </p>
      {sources.length > 0 && (
        <div className="flex flex-wrap gap-2 text-sm">
          {sources.map(([source, count]) => (
            <span key={source} className="rounded-full bg-white px-3 py-1 ring-1 ring-ink/10">{source} : <strong>{count}</strong></span>
          ))}
        </div>
      )}
      <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="border-b border-ink/10 text-left text-xs uppercase tracking-wide text-ink/45">
            <tr>
              <th className="px-4 py-3">Prénom</th>
              <th className="px-4 py-3">E-mail</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Inscrit le</th>
              <th className="px-4 py-3">Client</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/5">
            {leads.map((l) => (
              <tr key={l.id}>
                <td className="px-4 py-3 font-medium">{l.name}</td>
                <td className="px-4 py-3"><a href={`mailto:${l.email}`} className="hover:text-brand">{l.email}</a></td>
                <td className="px-4 py-3 text-ink/60">{l.source}</td>
                <td className="px-4 py-3 text-ink/60">{formatDateTime(l.createdAt)}</td>
                <td className="px-4 py-3">{customers.has(l.email) ? <span className="font-semibold text-emerald-600">Oui</span> : "—"}</td>
              </tr>
            ))}
            {leads.length === 0 && <tr><td colSpan={5} className="px-4 py-10 text-center text-ink/45">Aucun prospect pour l&apos;instant.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
