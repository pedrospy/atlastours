import Link from "next/link";
import { ArrowRight, Award, CalendarDays, CheckCircle2, Circle, Clock, Lock, MessagesSquare, Rocket, Sparkles } from "lucide-react";
import { db } from "@/lib/db";
import { formatMoney } from "@/lib/format";
import { getOffer, offers } from "@/lib/offers";
import { owner } from "@/lib/owner";
import { studentContext } from "@/lib/student";
import { tierLabel } from "@/lib/course";

export default async function StudentHome() {
  const { student, offer, course, lessons, progress, nextLesson, certified } = await studentContext();
  await db.student.update({ where: { id: student.id }, data: { lastSeenAt: new Date() } });
  const pending = student.orders.find((o) => o.status === "EN_ATTENTE");
  const o = owner();
  const upgrade = offers.find((x) => x.rank === (offer?.rank ?? 0) + 1);
  const perks = [
    { show: (offer?.rank ?? 0) >= 2 && o.links.coaching, icon: CalendarDays, title: "Coachings de groupe", text: "Planning, lien de connexion et replays.", href: o.links.coaching },
    { show: (offer?.rank ?? 0) >= 2 && o.links.community, icon: MessagesSquare, title: "Communauté des élèves", text: "Posez vos questions, partagez vos victoires.", href: o.links.community },
    { show: (offer?.rank ?? 0) >= 3 && o.links.vipBooking, icon: Sparkles, title: "Réserver une séance individuelle", text: "Vos 4 séances VIP de 60 minutes.", href: o.links.vipBooking },
  ].filter((p) => p.show);

  return (
    <main className="container-x py-10">
      {pending && (
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-accent/30 bg-accent-soft p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            <strong>Paiement en attente</strong> pour l&apos;offre {getOffer(pending.offer)?.name} ({formatMoney(pending.amount)}). Les leçons s&apos;ouvrent dès
            sa confirmation ; les leçons gratuites sont déjà accessibles.
          </p>
          <Link href={`/commande/${pending.id}`} className="btn-primary btn-sm shrink-0">Finaliser le paiement</Link>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="rounded-3xl bg-ink p-7 text-white sm:p-9">
          <p className="text-sm text-white/60">Bonjour {student.name.split(" ")[0]},</p>
          <h1 className="mt-1 font-display text-3xl font-extrabold tracking-tight">
            {progress === 0 ? "Prêt à décoller ?" : progress === 100 ? "Formation terminée, bravo !" : "On continue sur votre lancée."}
          </h1>
          <div className="mt-6">
            <div className="flex justify-between text-sm text-white/70">
              <span>Progression</span>
              <span className="font-semibold text-white">{progress} %</span>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-brand-light to-accent" style={{ width: `${progress}%` }} />
            </div>
          </div>
          {nextLesson && (
            <Link href={`/espace/lecon/${nextLesson.slug}`} className="btn-accent mt-7">
              {progress === 0 ? "Commencer" : "Reprendre"} : {nextLesson.title} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </section>

        <aside className="space-y-4">
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">Votre offre</p>
            <p className="mt-1 font-display text-2xl font-bold">{offer ? offer.name : "Mini-formation gratuite"}</p>
            {upgrade && (
              <Link href={`/commander?offre=${upgrade.id}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
                <Rocket className="h-4 w-4" /> Passer à {upgrade.name} ({formatMoney(upgrade.price - (offer?.price ?? 0))})
              </Link>
            )}
          </div>
          {certified && (
            <Link href="/espace/certificat" className="card flex items-center gap-3 border-emerald-200 bg-emerald-50 p-5 hover:border-emerald-400">
              <Award className="h-8 w-8 text-emerald-600" />
              <span>
                <span className="block font-semibold">Votre certificat est prêt</span>
                <span className="text-sm text-ink/60">Téléchargez-le et ajoutez-le à votre profil.</span>
              </span>
            </Link>
          )}
          {perks.map(({ icon: Icon, title, text, href }) => (
            <a key={title} href={href || "#"} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-3 p-5 hover:border-brand/40">
              <Icon className="h-7 w-7 shrink-0 text-brand" />
              <span>
                <span className="block font-semibold">{title}</span>
                <span className="text-sm text-ink/60">{text}</span>
              </span>
            </a>
          ))}
        </aside>
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold">Le programme</h2>
      <div className="mt-5 space-y-4">
        {course.map((m, i) => {
          const items = lessons.filter((l) => l.moduleId === m.id);
          const doneCount = items.filter((l) => l.done).length;
          return (
            <section key={m.id} className="card p-0">
              <header className="flex items-start justify-between gap-4 border-b border-ink/5 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">
                    Module {i + 1}
                    {m.tier !== "essentiel" && <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-accent-dark">Bonus {tierLabel(m.tier)}</span>}
                  </p>
                  <h3 className="mt-1 font-semibold">{m.title}</h3>
                </div>
                <span className="shrink-0 text-sm text-ink/45">{doneCount}/{items.length}</span>
              </header>
              <ul className="divide-y divide-ink/5">
                {items.map((l) => (
                  <li key={l.id}>
                    {l.unlocked ? (
                      <Link href={`/espace/lecon/${l.slug}`} className="flex items-center gap-3 px-5 py-3.5 text-sm hover:bg-paper">
                        {l.done ? <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> : <Circle className="h-5 w-5 shrink-0 text-ink/20" />}
                        <span className="flex-1">{l.title}</span>
                        <span className="flex items-center gap-1 text-ink/40"><Clock className="h-3.5 w-3.5" />{l.duration} min</span>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-3 px-5 py-3.5 text-sm text-ink/45">
                        <Lock className="h-5 w-5 shrink-0" />
                        <span className="flex-1">{l.title}</span>
                        <span className="text-xs">Offre {tierLabel(l.module.tier)}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
