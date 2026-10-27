import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · Sites de réservation directe pour riads au Maroc`,
  description:
    "Arrêtez de payer 17 % de commission à Booking. DirectRiad crée des sites avec réservation et paiement en ligne pour riads, maisons d'hôtes et agences de voyage au Maroc.",
  keywords: [
    "site web riad",
    "site réservation maison d'hôtes Maroc",
    "création site internet Marrakech",
    "réservation directe sans commission",
    "agence web tourisme Maroc",
  ],
  openGraph: {
    title: `${site.name} · Plus de réservations directes, moins de commissions`,
    description: site.tagline,
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
