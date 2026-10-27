import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3030"),
  title: "Facturo · Factures et devis en ligne pour indépendants",
  description:
    "Créez des factures et devis professionnels en 1 minute. Pour auto-entrepreneurs, freelances et petites entreprises au Maroc, en France et en Afrique francophone. Gratuit pour commencer.",
  keywords: ["logiciel facturation", "facture auto-entrepreneur", "devis en ligne", "facture Maroc ICE", "facture gratuite"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={sans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
