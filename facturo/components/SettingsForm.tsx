"use client";

import { useActionState } from "react";
import { saveSettings } from "@/app/actions/settings";
import { currencies } from "@/lib/money";
import { FormMessage } from "./FormMessage";
import { SubmitButton } from "./SubmitButton";

type Values = {
  name: string;
  businessName: string;
  address: string;
  taxId: string;
  phone: string;
  iban: string;
  currency: string;
  defaultVat: number;
};

export function SettingsForm({ values }: { values: Values }) {
  const [state, action] = useActionState(saveSettings, undefined);

  return (
    <form action={action} className="card space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">Votre nom</label>
          <input id="name" name="name" className="field" defaultValue={values.name} />
        </div>
        <div>
          <label className="label" htmlFor="businessName">Nom de l&apos;entreprise *</label>
          <input id="businessName" name="businessName" className="field" defaultValue={values.businessName} required />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="address">Adresse</label>
        <textarea id="address" name="address" rows={2} className="field" defaultValue={values.address} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="taxId">Identifiants fiscaux</label>
          <input id="taxId" name="taxId" className="field" defaultValue={values.taxId} placeholder="ICE 000000000000000 · IF 00000000" />
        </div>
        <div>
          <label className="label" htmlFor="phone">Téléphone</label>
          <input id="phone" name="phone" className="field" defaultValue={values.phone} />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="iban">Coordonnées bancaires (RIB / IBAN)</label>
        <input id="iban" name="iban" className="field" defaultValue={values.iban} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="currency">Devise par défaut</label>
          <select id="currency" name="currency" className="field" defaultValue={values.currency}>
            {currencies.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="defaultVat">TVA par défaut (%)</label>
          <input id="defaultVat" name="defaultVat" inputMode="decimal" className="field" defaultValue={values.defaultVat} />
          <p className="mt-1 text-xs text-ink/50">Mettez 0 si vous n&apos;êtes pas assujetti à la TVA.</p>
        </div>
      </div>
      <FormMessage state={state} />
      <div className="flex justify-end">
        <SubmitButton>Enregistrer</SubmitButton>
      </div>
    </form>
  );
}
