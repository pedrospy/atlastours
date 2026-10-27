import type { Metadata } from "next";
import HtmlLang from "@/components/HtmlLang";
import Landing from "@/components/Landing";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.en.meta.title,
  description: content.en.meta.description,
  alternates: { canonical: "/en", languages: { fr: "/", en: "/en" } },
  openGraph: { title: content.en.meta.title, description: content.en.meta.description, locale: "en_US" },
};

export default function EnglishPage() {
  return (
    <>
      <HtmlLang lang="en" />
      <Landing lang="en" />
    </>
  );
}
