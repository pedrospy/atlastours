import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { OrderForm } from "@/components/forms";
import { PublicShell } from "@/components/PublicChrome";
import { currentStudent } from "@/lib/auth";
import { accessOffer } from "@/lib/course";
import { offers } from "@/lib/offers";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Inscription · Formation Envol", robots: { index: false, follow: true } };

export default async function OrderPage({ searchParams }: { searchParams: Promise<{ offre?: string }> }) {
  const { offre } = await searchParams;
  const student = await currentStudent();
  const current = student ? accessOffer(student.orders) : null;
  const available = offers.filter((o) => o.rank > (current?.rank ?? 0));

  return (
    <PublicShell>
      <div className="container-x max-w-2xl py-12">
        <h1 className="page-title text-3xl">{current ? "Passer à l'offre supérieure" : "Rejoindre la formation"}</h1>
        <p className="mt-2 text-ink/60">Votre accès s&apos;ouvre dès la confirmation du paiement.</p>
        <div className="card mt-8 shadow-card">
          {available.length ? (
            <OrderForm offers={available} selected={offre ?? "pro"} loggedInAs={student ? `${student.name} (${student.email})` : null} credit={current?.price ?? 0} />
          ) : (
            <p>
              Vous avez déjà l&apos;offre la plus complète. <Link href="/espace" className="text-brand underline">Retour à votre espace</Link>
            </p>
          )}
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-ink/55">
          <ShieldCheck className="h-4 w-4 text-emerald-600" /> Satisfait ou remboursé pendant 14 jours
        </p>
      </div>
    </PublicShell>
  );
}
