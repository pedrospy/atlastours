import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Oswald } from "next/font/google";
import { appUrl } from "@/lib/format";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", preload: false });
const display = Oswald({ subsets: ["latin"], variable: "--font-display", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(appUrl()),
  title: "Vitrina · Le site internet de votre commerce, prêt en 48 h",
  description:
    "Restaurants, cafés, coiffeurs, salons de beauté, artisans, garages, cabinets : un site professionnel avec boutons Appeler et WhatsApp, horaires, prix et carte. Livré en 48 h, à partir de 290 €.",
  keywords: ["création site internet Maroc", "site web restaurant", "site coiffeur", "site artisan", "site vitrine pas cher"],
};

export const viewport: Viewport = {
  themeColor: "#0f766e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
