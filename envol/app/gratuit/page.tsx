import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CheckCircle2, Gift } from "lucide-react";
import { LeadForm } from "@/components/forms";
import { PublicShell } from "@/components/PublicChrome";
import { currentStudent, hasLeadAccess } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Mini-formation gratuite · Votre premier client en 30 jours · Envol",
  description: "3 leçons offertes pour comprendre le marché des sites pour commerces, choisir votre niche et créer votre première démo avec l'IA.",
};

export default async function FreeCoursePage({ searchParams }: { searchParams: Promise<{ source?: string }> }) {
  const { source } = await searchParams;
  const channel = (source ?? "").replace(/[^\w-]/g, "").slice(0, 40);
  const lessons = await db.lesson.findMany({
    where: { freePreview: true, published: true },
    orderBy: [{ module: { position: "asc" } }, { position: "asc" }],
  });
  if (lessons[0] && ((await hasLeadAccess()) || (await currentStudent()))) redirect(`/gratuit/${lessons[0].slug}`);

  return (
    <PublicShell>
      <section className="bg-gradient-to-b from-brand-soft to-paper">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent-dark">
              <Gift className="h-3.5 w-3.5" /> Mini-formation offerte
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Votre premier client en 30 jours</h1>
            <p className="mt-4 text-lg text-ink/65">Trois leçons courtes et concrètes. Dès ce soir, vous aurez une niche, une offre et votre première démo de site.</p>
            <ul className="mt-6 space-y-3">
              {lessons.map((l, i) => (
                <li key={l.id} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>
                    <span className="font-semibold">Leçon {i + 1} :</span> {l.title} <span className="text-sm text-ink/45">({l.duration} min)</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card shadow-card sm:p-8">
            <h2 className="font-display text-xl font-bold">Recevez l&apos;accès immédiat</h2>
            <p className="mb-5 mt-1 text-sm text-ink/60">Les leçons s&apos;ouvrent directement après validation.</p>
            <LeadForm source={channel || "page-gratuit"} />
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
