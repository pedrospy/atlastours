"use client";

import { login } from "@/app/actions/admin";
import { FormMessage } from "./FormMessage";
import { SubmitButton } from "./SubmitButton";
import { useFormAction } from "./useFormAction";

export function LoginForm() {
  const { state, pending, onSubmit } = useFormAction(login);
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="label" htmlFor="password">Mot de passe administrateur</label>
        <input id="password" name="password" type="password" required autoFocus autoComplete="current-password" className="field" />
      </div>
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel="Connexion…" className="btn-primary w-full">
        Se connecter
      </SubmitButton>
    </form>
  );
}
