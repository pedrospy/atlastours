import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { deleteLesson } from "@/app/actions/admin";
import { ConfirmButton } from "@/components/ConfirmButton";
import { LessonEditForm } from "@/components/forms";
import { readResources } from "@/lib/course";
import { db } from "@/lib/db";

export default async function LessonEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = await db.lesson.findUnique({ where: { id }, include: { module: true } });
  if (!lesson) notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link href="/admin/contenu" className="inline-flex items-center gap-1.5 text-sm text-ink/55 hover:text-ink"><ArrowLeft className="h-4 w-4" /> Contenu</Link>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">{lesson.module.title}</p>
          <h1 className="page-title mt-1">{lesson.title}</h1>
        </div>
        {lesson.published && (
          <Link href={lesson.freePreview ? `/gratuit/${lesson.slug}` : `/espace/lecon/${lesson.slug}`} target="_blank" className="btn-secondary btn-sm">
            Voir côté élève
          </Link>
        )}
      </div>
      <div className="card">
        <LessonEditForm
          lesson={{
            id: lesson.id,
            title: lesson.title,
            slug: lesson.slug,
            duration: lesson.duration,
            videoUrl: lesson.videoUrl,
            content: lesson.content,
            resources: readResources(lesson.resources).map((r) => `${r.label} | ${r.url}`).join("\n"),
            freePreview: lesson.freePreview,
            published: lesson.published,
          }}
        />
      </div>
      <form action={deleteLesson} className="flex justify-end">
        <input type="hidden" name="lessonId" value={lesson.id} />
        <ConfirmButton message={`Supprimer définitivement « ${lesson.title} » ?`}>Supprimer la leçon</ConfirmButton>
      </form>
    </div>
  );
}
