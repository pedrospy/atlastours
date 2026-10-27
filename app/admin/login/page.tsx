import type { Metadata } from "next";
import { Lock } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin – Connexion",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

const errors: Record<string, string> = {
  password: "Mot de passe incorrect.",
  config: "Aucun mot de passe n'est configuré : ajoutez ADMIN_PASSWORD dans Vercel puis redéployez.",
};

export default async function AdminLoginPage({ searchParams }: Props) {
  const params = await searchParams;
  const next = typeof params.next === "string" ? params.next : "/admin";
  const error = typeof params.error === "string" ? errors[params.error] : undefined;

  return (
    <main className="flex min-h-screen items-center justify-center bg-sand-50 px-4 text-midnight">
      <form
        action="/api/admin/login"
        method="post"
        className="w-full max-w-sm border border-gold/30 bg-white p-8 shadow-card"
      >
        <Lock className="h-8 w-8 text-gold" />
        <h1 className="mt-3 font-display text-2xl font-bold">Espace administrateur</h1>
        <p className="mt-1 text-sm text-midnight/60">Arganis Nomad – Réservations</p>

        <input type="hidden" name="next" value={next} />
        <label className="mt-6 block text-sm font-medium text-midnight/70">
          Mot de passe
          <input
            type="password"
            name="password"
            required
            autoFocus
            autoComplete="current-password"
            className="mt-1 w-full border border-sand-200 px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          />
        </label>

        {error && (
          <p className="mt-3 text-sm text-terracotta" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn-primary mt-6 w-full justify-center">
          Se connecter
        </button>
      </form>
    </main>
  );
}
