import { Download } from "lucide-react";
import { readResources, videoEmbed } from "@/lib/course";
import { Markdown } from "./Markdown";
import { VideoPlayer } from "./VideoPlayer";

export function LessonBody({
  lesson,
  moduleTitle,
}: {
  lesson: { title: string; videoUrl: string; content: string; resources: unknown; duration: number };
  moduleTitle: string;
}) {
  const resources = readResources(lesson.resources);
  return (
    <article>
      <p className="eyebrow">{moduleTitle}</p>
      <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight">{lesson.title}</h1>
      <p className="mt-1 text-sm text-ink/50">{lesson.duration} min</p>
      <div className="mt-6">
        <VideoPlayer video={videoEmbed(lesson.videoUrl)} title={lesson.title} />
      </div>
      {resources.length > 0 && (
        <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-5">
          <p className="text-sm font-semibold">Ressources de la leçon</p>
          <ul className="mt-3 space-y-2">
            {resources.map((r) => (
              <li key={r.url}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline">
                  <Download className="h-4 w-4" /> {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
        <Markdown source={lesson.content} />
      </div>
    </article>
  );
}
