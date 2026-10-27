import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowRight, Gift, PlayCircle } from "lucide-react";
import { LessonBody } from "@/components/LessonBody";
import { PublicHeader } from "@/components/PublicChrome";
import { currentStudent, hasLeadAccess } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Mini-formation gratuite · Envol", robots: { index: false, follow: false } };

export default async function FreeLessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(await hasLeadAccess()) && !(await currentStudent())) redirect("/gratuit");

  const lessons = await db.lesson.findMany({
    where: { freePreview: true, published: true },
    orderBy: [{ module: { position: "asc" } }, { position: "asc" }],
    include: { module: true },
  });
  const index = lessons.findIndex((l) => l.slug === slug);
  if (index < 0) notFound();
  const lesson = lessons[index];
  const next = lessons[index + 1];

  return (
    <>
      <PublicHeader />
      <div className="container-x grid gap-8 py-10 lg:grid-cols-[1fr_300px]">
        <div>
          <LessonBody lesson={lesson} moduleTitle={`Mini-formation · Leçon ${index + 1} sur ${lessons.length}`} />
          <div className="mt-8">
            {next ? (
              <Link href={`/gratuit/${next.slug}`} className="btn-primary w-full py-4 text-base sm:w-auto">
                Leçon suivante : {next.title} <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div className="rounded-3xl bg-ink p-8 text-white">
                <h2 className="font-display text-2xl font-bold">Bravo, vous avez terminé la mini-formation</h2>
                <p className="mt-3 text-white/75">
                  Vous avez une niche, une offre et une première démo. La formation complète vous emmène jusqu&apos;à la signature, la livraison et un
                  revenu récurrent. Garantie 14 jours : vous ne prenez aucun risque.
                </p>
                <Link href="/#offres" className="btn-accent mt-6">
                  Voir les offres <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-5">
            <p className="flex items-center gap-2 text-sm font-semibold"><Gift className="h-4 w-4 text-accent" /> Mini-formation</p>
            <ol className="mt-3 space-y-1">
              {lessons.map((l, i) => (
                <li key={l.id}>
                  <Link
                    href={`/gratuit/${l.slug}`}
                    className={`flex items-start gap-2 rounded-lg px-2 py-2 text-sm ${i === index ? "bg-brand-soft font-semibold text-brand" : "text-ink/70 hover:bg-paper"}`}
                  >
                    <PlayCircle className="mt-0.5 h-4 w-4 shrink-0" /> {l.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
          <div className="card border-brand/30 bg-brand-soft p-5">
            <p className="font-semibold">La formation complète</p>
            <p className="mt-1 text-sm text-ink/65">6 modules, modèles, scripts et accompagnement pour signer vos premiers clients.</p>
            <Link href="/#offres" className="btn-primary btn-sm mt-4 w-full">Découvrir les offres</Link>
          </div>
        </aside>
      </div>
    </>
  );
}
