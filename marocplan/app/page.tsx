import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.fr.meta.title,
  description: content.fr.meta.description,
  alternates: { canonical: "/", languages: { fr: "/", en: "/en" } },
};

export default function HomePage() {
  return <Landing lang="fr" />;
}
