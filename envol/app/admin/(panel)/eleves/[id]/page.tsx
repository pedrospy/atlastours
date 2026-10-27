import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";
import { ResetPasswordButton } from "@/components/forms";
import { OrderActions } from "@/components/OrderActions";
import { OrderStatusBadge } from "@/components/OrderStatusBadge";
import { accessOffer, flatLessons, getCourse } from "@/lib/course";
import { db } from "@/lib/db";
import { formatDate, formatDateTime, formatMoney, waLink } from "@/lib/format";
import { offerName } from "@/lib/offers";

export default async function StudentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [student, course] = await Promise.all([
    db.student.findUnique({ where: { id }, include: { orders: { orderBy: { createdAt: "desc" } }, progress: true } }),
    getCourse(),
  ]);
  if (!student) notFound();
  const offer = accessOffer(student.orders);
  const done = new Map(student.progress.map((p) => [p.lessonId, p.completedAt]));
  const firstName = student.name.split(" ")[0];

  return (
    <div className="space-y-6">
      <Link href="/admin/eleves" className="inline-flex items-center gap-1.5 text-sm text-ink/55 hover:text-ink"><ArrowLeft className="h-4 w-4" /> Élèves</Link>
      <div className="card flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="page-title">{student.name}</h1>
          <p className="text-sm text-ink/60">{student.email}{student.phone && ` · ${student.phone}`}</p>
          <p className="mt-2 text-sm">
            Offre : <strong>{offer?.name ?? "aucune (non payé)"}</strong> · inscrit le {formatDate(student.createdAt)} · dernière visite {formatDate(student.lastSeenAt)}
          </p>
          {student.phone && (
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={waLink(student.phone, `Bonjour ${firstName}, c'est ${process.env.OWNER_NAME ?? "l'équipe Envol"} de la formation Envol. Comment se passe ta formation ? Tu bloques sur quelque chose ?`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-sm">
                Relance progression
              </a>
              {!offer && (
                <a href={waLink(student.phone, `Bonjour ${firstName}, j'ai vu que ton inscription à la formation Envol n'est pas finalisée. As-tu une question sur le paiement ? Un paiement en plusieurs fois est possible.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-sm">
                  Relance paiement
                </a>
              )}
            </div>
          )}
        </div>
        <ResetPasswordButton studentId={student.id} />
      </div>

      <section className="card p-0">
        <h2 className="border-b border-ink/5 px-5 py-4 font-semibold">Commandes</h2>
        <ul className="divide-y divide-ink/5">
          {student.orders.map((o) => (
            <li key={o.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-sm">
              <span>
                <span className="font-mono text-xs text-ink/50">ENVOL-{o.number}</span> · {offerName(o.offer)} · <strong>{formatMoney(o.amount)}</strong> ·{" "}
                {formatDateTime(o.createdAt)} <OrderStatusBadge status={o.status} />
              </span>
              <OrderActions order={o} />
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-0">
        <h2 className="border-b border-ink/5 px-5 py-4 font-semibold">Progression ({student.progress.length} leçon(s) terminée(s))</h2>
        <ul className="divide-y divide-ink/5">
          {flatLessons(course).map((l) => (
            <li key={l.id} className="flex items-center gap-3 px-5 py-2.5 text-sm">
              {done.has(l.id) ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Circle className="h-4 w-4 text-ink/20" />}
              <span className="flex-1">{l.title}</span>
              <span className="text-xs text-ink/45">{done.has(l.id) ? formatDate(done.get(l.id)) : l.module.title}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
