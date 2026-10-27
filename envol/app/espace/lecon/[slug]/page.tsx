import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Lock } from "lucide-react";
import { toggleLessonDone } from "@/app/actions/public";
import { LessonBody } from "@/components/LessonBody";
import { SubmitButton } from "@/components/SubmitButton";
import { tierLabel } from "@/lib/course";
import { offers } from "@/lib/offers";
import { studentContext } from "@/lib/student";

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { lessons, offer } = await studentContext();
  const index = lessons.findIndex((l) => l.slug === slug);
  if (index < 0) notFound();
  const lesson = lessons[index];
  const prev = lessons.slice(0, index).reverse().find((l) => l.unlocked);
  const next = lessons.slice(index + 1).find((l) => l.unlocked);
  const moduleLessons = lessons.filter((l) => l.moduleId === lesson.moduleId);

  if (!lesson.unlocked) {
    const needed = offers.find((o) => o.id === lesson.module.tier) ?? offers[0];
    return (
      <main className="container-x max-w-xl py-16 text-center">
        <Lock className="mx-auto h-12 w-12 text-ink/25" />
        <h1 className="page-title mt-4">{lesson.title}</h1>
        <p className="mt-2 text-ink/60">
          Cette leçon fait partie de l&apos;offre {needed.name}.{" "}
          {offer ? "Passez à l'offre supérieure en payant seulement la différence." : "Inscrivez-vous pour débloquer toute la formation."}
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/espace" className="btn-secondary">Retour</Link>
          <Link href={`/commander?offre=${needed.id}`} className="btn-primary">Débloquer</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container-x grid gap-8 py-8 lg:grid-cols-[1fr_300px]">
      <div>
        <Link href="/espace" className="mb-4 inline-flex items-center gap-1.5 text-sm text-ink/55 hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> Ma formation
        </Link>
        <LessonBody lesson={lesson} moduleTitle={lesson.module.title} />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link href={`/espace/lecon/${prev.slug}`} className="btn-secondary">
              <ArrowLeft className="h-4 w-4" /> Précédente
            </Link>
          ) : (
            <span />
          )}
          <form action={toggleLessonDone} className="flex flex-col gap-2 sm:flex-row">
            <input type="hidden" name="lessonId" value={lesson.id} />
            {lesson.done ? (
              <>
                <input type="hidden" name="done" value="0" />
                <SubmitButton pendingLabel="…" className="btn-secondary">Marquer comme non terminée</SubmitButton>
                {next && (
                  <Link href={`/espace/lecon/${next.slug}`} className="btn-primary">
                    Leçon suivante <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </>
            ) : (
              <>
                <input type="hidden" name="done" value="1" />
                <input type="hidden" name="next" value={next ? `/espace/lecon/${next.slug}` : "/espace"} />
                <SubmitButton pendingLabel="Enregistrement…" className="btn-accent">
                  <CheckCircle2 className="h-5 w-5" /> Terminer {next ? "et continuer" : "la formation"}
                </SubmitButton>
              </>
            )}
          </form>
        </div>
      </div>
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="card p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">
            Ce module{lesson.module.tier !== "essentiel" ? ` · Bonus ${tierLabel(lesson.module.tier)}` : ""}
          </p>
          <p className="mt-1 font-semibold">{lesson.module.title}</p>
          <ol className="mt-3 space-y-1">
            {moduleLessons.map((l) => (
              <li key={l.id}>
                {l.unlocked ? (
                  <Link
                    href={`/espace/lecon/${l.slug}`}
                    className={`flex items-start gap-2 rounded-lg px-2 py-2 text-sm ${l.id === lesson.id ? "bg-brand-soft font-semibold text-brand" : "text-ink/70 hover:bg-paper"}`}
                  >
                    {l.done ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> : <Circle className="mt-0.5 h-4 w-4 shrink-0 text-ink/25" />}
                    {l.title}
                  </Link>
                ) : (
                  <span className="flex items-start gap-2 px-2 py-2 text-sm text-ink/40">
                    <Lock className="mt-0.5 h-4 w-4 shrink-0" /> {l.title}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </main>
  );
}
