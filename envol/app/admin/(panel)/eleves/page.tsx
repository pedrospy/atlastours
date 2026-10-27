import Link from "next/link";
import { accessOffer, canAccess, flatLessons, getCourse } from "@/lib/course";
import { db } from "@/lib/db";
import { formatDate, waLink } from "@/lib/format";

export default async function StudentsPage() {
  const [students, course] = await Promise.all([
    db.student.findMany({ include: { orders: true, progress: { select: { lessonId: true } } }, orderBy: { createdAt: "desc" } }),
    getCourse(),
  ]);
  const lessons = flatLessons(course);

  return (
    <div>
      <h1 className="page-title">Élèves</h1>
      <p className="text-sm text-ink/55">
        {students.length} compte(s). Relancez sur WhatsApp les élèves inactifs ou bloqués : un élève qui progresse demande moins de remboursements et
        recommande davantage la formation.
      </p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="border-b border-ink/10 text-left text-xs uppercase tracking-wide text-ink/45">
            <tr>
              <th className="px-4 py-3">Élève</th>
              <th className="px-4 py-3">Offre</th>
              <th className="px-4 py-3">Progression</th>
              <th className="px-4 py-3">Dernière visite</th>
              <th className="px-4 py-3">Inscrit le</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/5">
            {students.map((s) => {
              const offer = accessOffer(s.orders);
              const unlocked = lessons.filter((l) => l.freePreview || canAccess(offer, l.module.tier));
              const done = new Set(s.progress.map((p) => p.lessonId));
              const pct = unlocked.length ? Math.round((unlocked.filter((l) => done.has(l.id)).length / unlocked.length) * 100) : 0;
              return (
                <tr key={s.id}>
                  <td className="px-4 py-3">
                    <Link href={`/admin/eleves/${s.id}`} className="font-medium hover:text-brand">{s.name}</Link>
                    <br />
                    <span className="text-xs text-ink/50">{s.email}</span>
                    {s.phone && <a href={waLink(s.phone)} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs font-semibold text-[#1ebe5b]">WhatsApp</a>}
                  </td>
                  <td className="px-4 py-3">{offer?.name ?? <span className="text-ink/45">Non payé</span>}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-paper ring-1 ring-ink/10">
                        <div className="h-full bg-brand" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-ink/60">{pct} %</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-ink/60">{formatDate(s.lastSeenAt)}</td>
                  <td className="px-4 py-3 text-ink/60">{formatDate(s.createdAt)}</td>
                </tr>
              );
            })}
            {students.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-10 text-center text-ink/45">Aucun élève pour l&apos;instant.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
