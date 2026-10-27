import { PlayCircle } from "lucide-react";
import type { VideoEmbed } from "@/lib/course";

export function VideoPlayer({ video, title }: { video: VideoEmbed; title: string }) {
  if (!video) {
    return (
      <div className="grid aspect-video place-items-center rounded-2xl bg-gradient-to-br from-ink to-ink-soft p-6 text-center text-white">
        <div>
          <PlayCircle className="mx-auto h-12 w-12 text-brand-light" />
          <p className="mt-3 font-semibold">Vidéo en cours de tournage</p>
          <p className="mt-1 text-sm text-white/60">Tout le contenu de la leçon est disponible ci-dessous.</p>
        </div>
      </div>
    );
  }
  if (video.kind === "file") {
    return <video src={video.src} controls preload="metadata" className="aspect-video w-full rounded-2xl bg-black" />;
  }
  return (
    <div className="aspect-video overflow-hidden rounded-2xl bg-black">
      <iframe
        src={video.src}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
