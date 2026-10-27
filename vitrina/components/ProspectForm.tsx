"use client";

import { Zap } from "lucide-react";
import { createProspect } from "@/app/actions/admin";
import { categories } from "@/lib/categories";
import { FormMessage } from "./FormMessage";
import { SubmitButton } from "./SubmitButton";
import { useFormAction } from "./useFormAction";

export function ProspectForm() {
  const { state, pending, onSubmit } = useFormAction(createProspect);
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="label" htmlFor="businessName">Nom du commerce *</label>
          <input id="businessName" name="businessName" required minLength={2} className="field" placeholder="Ex. Salon Yasmine" />
        </div>
        <div>
          <label className="label" htmlFor="category">Activité *</label>
          <select id="category" name="category" className="field" defaultValue="restaurant">
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="city">Ville *</label>
          <input id="city" name="city" required className="field" placeholder="Ex. Casablanca" />
        </div>
        <div>
          <label className="label" htmlFor="phone">Téléphone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" className="field" placeholder="06 12 34 56 78" />
        </div>
        <div>
          <label className="label" htmlFor="notes">Note</label>
          <input id="notes" name="notes" className="field" placeholder="Vu sur Google Maps, gérant : Karim…" />
        </div>
      </div>
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel="Génération de la démo…" className="btn-primary w-full py-3.5 text-base">
        <Zap className="h-5 w-5" /> Générer la démo
      </SubmitButton>
    </form>
  );
}
