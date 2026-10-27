"use client";

import { Logo } from "@/components/Logo";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-brand-soft to-paper px-5">
      <div className="w-full max-w-md text-center">
        <div className="flex justify-center"><Logo /></div>
        <h1 className="page-title mt-8 text-3xl">Le site est momentanément indisponible</h1>
        <p className="mt-3 text-ink/60">Réessayez dans quelques instants.</p>
        <p className="mt-1 text-sm text-ink/50">
          Vous êtes le propriétaire du site ? Ouvrez <a href="/admin/connexion" className="font-semibold underline">/admin/connexion</a> pour vérifier sa configuration.
        </p>
        <button type="button" onClick={reset} className="btn-primary mt-8">Réessayer</button>
      </div>
    </main>
  );
}
