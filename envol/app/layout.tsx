import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { appUrl } from "@/lib/format";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(appUrl()),
  title: "Envol · Devenez freelance web avec l'IA et signez vos premiers clients",
  description:
    "Formation en ligne : créez des sites professionnels pour les commerces avec l'IA, sans savoir coder, et construisez une activité indépendante rentable. Mini-formation gratuite.",
  keywords: ["formation freelance", "créer des sites avec l'IA", "devenir freelance web", "formation en ligne", "trouver des clients freelance"],
  openGraph: { type: "website", locale: "fr_FR", siteName: "Envol Académie" },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
