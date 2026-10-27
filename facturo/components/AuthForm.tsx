"use client";

import Link from "next/link";
import { login, signup } from "@/app/actions/auth";
import { FormMessage } from "./FormMessage";
import { SubmitButton } from "./SubmitButton";
import { Logo } from "./Logo";
import { useFormAction } from "./useFormAction";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const { state, pending, onSubmit } = useFormAction(mode === "login" ? login : signup);
  const isSignup = mode === "signup";

  return (
    <main className="grid min-h-screen place-items-center px-5 py-12">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="card mt-8 shadow-card">
          <h1 className="text-xl font-bold">{isSignup ? "Créer votre compte gratuit" : "Connexion"}</h1>
          <p className="mt-1 text-sm text-ink/60">
            {isSignup ? "Votre première facture dans 1 minute." : "Content de vous revoir."}
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            {isSignup && (
              <div>
                <label className="label" htmlFor="name">Nom ou nom de l&apos;entreprise</label>
                <input id="name" name="name" className="field" autoComplete="organization" required />
              </div>
            )}
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="field" autoComplete="email" required />
            </div>
            <div>
              <label className="label" htmlFor="password">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                className="field"
                autoComplete={isSignup ? "new-password" : "current-password"}
                minLength={isSignup ? 8 : undefined}
                required
              />
            </div>
            <FormMessage state={state} />
            <SubmitButton pending={pending} className="btn-primary w-full" pendingLabel="Un instant…">
              {isSignup ? "Créer mon compte" : "Se connecter"}
            </SubmitButton>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-ink/60">
          {isSignup ? (
            <>Déjà inscrit ? <Link href="/connexion" className="font-semibold text-brand">Se connecter</Link></>
          ) : (
            <>Pas encore de compte ? <Link href="/inscription" className="font-semibold text-brand">Inscription gratuite</Link></>
          )}
        </p>
      </div>
    </main>
  );
}
