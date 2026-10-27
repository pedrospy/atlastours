import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { StudentLoginForm } from "@/components/forms";
import { Logo } from "@/components/Logo";
import { currentStudent } from "@/lib/auth";
import { owner } from "@/lib/owner";
import { waLink } from "@/lib/format";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Connexion · Espace élève Envol", robots: { index: false, follow: false } };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next = "/espace" } = await searchParams;
  if (await currentStudent()) redirect(next.startsWith("/") && !next.startsWith("//") ? next : "/espace");
  const o = owner();
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-brand-soft to-paper px-5">
      <div className="w-full max-w-sm">
        <div className="mb-6 flex justify-center"><Logo /></div>
        <div className="card shadow-card">
          <h1 className="text-xl font-bold">Espace élève</h1>
          <p className="mb-6 mt-1 text-sm text-ink/60">Connectez-vous pour reprendre votre formation.</p>
          <StudentLoginForm next={next} />
        </div>
        <p className="mt-6 text-center text-sm text-ink/55">
          Pas encore inscrit ? <Link href="/#offres" className="text-brand underline">Voir les offres</Link>
          {o.whatsapp && (
            <>
              <br />
              Mot de passe oublié ?{" "}
              <a href={waLink(o.whatsapp, "Bonjour, j'ai oublié mon mot de passe de l'espace élève Envol. Mon e-mail : ")} className="text-brand underline">
                Écrivez-nous
              </a>
            </>
          )}
        </p>
      </div>
    </main>
  );
}
