import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { content } from "@/lib/content";
import { site } from "@/lib/site";
import "./globals.css";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: content.fr.meta.title,
  description: content.fr.meta.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    title: content.fr.meta.title,
    description: content.fr.meta.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
