"use client";

import { useEffect, useRef } from "react";
import { createClient } from "@/app/actions/clients";
import { FormMessage } from "./FormMessage";
import { SubmitButton } from "./SubmitButton";
import { useFormAction } from "./useFormAction";

export function ClientForm() {
  const { state, pending, onSubmit } = useFormAction(createClient);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.ok) ref.current?.reset();
  }, [state]);

  return (
    <form ref={ref} onSubmit={onSubmit} className="card space-y-4">
      <h2 className="font-semibold">Nouveau client</h2>
      <div>
        <label className="label" htmlFor="name">Nom / Raison sociale *</label>
        <input id="name" name="name" className="field" required />
      </div>
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="field" />
      </div>
      <div>
        <label className="label" htmlFor="address">Adresse</label>
        <textarea id="address" name="address" rows={2} className="field" />
      </div>
      <div>
        <label className="label" htmlFor="taxId">ICE / SIRET / N° TVA</label>
        <input id="taxId" name="taxId" className="field" />
      </div>
      <FormMessage state={state} />
      <SubmitButton pending={pending} className="btn-primary w-full">Ajouter le client</SubmitButton>
    </form>
  );
}
