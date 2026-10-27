"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { updateSite } from "@/app/actions/admin";
import { brandColors, categories, type ServiceItem } from "@/lib/categories";
import type { FormState } from "@/lib/forms";
import { FormMessage } from "./FormMessage";
import { ServicesEditor } from "./ServicesEditor";
import { SubmitButton } from "./SubmitButton";
import { useFormAction } from "./useFormAction";

type Review = { author: string; text: string; rating: number };

export type EditableSite = {
  id: string;
  slug: string;
  businessName: string;
  category: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  facebook: string;
  tagline: string;
  description: string;
  hours: string;
  services: ServiceItem[];
  reviews: Review[];
  photos: string[];
  color: string;
  currency: string;
};

function ReviewsEditor({ initial }: { initial: Review[] }) {
  const [rows, setRows] = useState<Review[]>(initial);
  const update = (i: number, patch: Partial<Review>) => setRows((prev) => prev.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  return (
    <div className="space-y-3">
      <input type="hidden" name="reviews" value={JSON.stringify(rows)} />
      {rows.map((r, i) => (
        <div key={i} className="grid gap-2 rounded-xl border border-ink/10 bg-paper/60 p-3 sm:grid-cols-[1fr_6rem_auto]">
          <input className="field" placeholder="Nom du client" value={r.author} onChange={(e) => update(i, { author: e.target.value })} />
          <select className="field" value={r.rating} onChange={(e) => update(i, { rating: Number(e.target.value) })} aria-label="Note">
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>{n} ★</option>
            ))}
          </select>
          <button type="button" className="btn-danger" onClick={() => setRows((prev) => prev.filter((_, j) => j !== i))} aria-label="Supprimer l'avis">
            <Trash2 className="h-4 w-4" />
          </button>
          <textarea className="field sm:col-span-3" rows={2} placeholder="Avis (copié depuis Google, avec accord)" value={r.text} onChange={(e) => update(i, { text: e.target.value })} />
        </div>
      ))}
      <button type="button" className="btn-secondary btn-sm" onClick={() => setRows((prev) => [...prev, { author: "", text: "", rating: 5 }])}>
        <Plus className="h-4 w-4" /> Ajouter un avis
      </button>
      <p className="hint">N&apos;utilisez que de vrais avis clients. La section est masquée s&apos;il n&apos;y en a aucun.</p>
    </div>
  );
}

export function SiteEditForm({ site }: { site: EditableSite }) {
  const action = updateSite.bind(null, site.id) as (state: FormState, formData: FormData) => Promise<FormState>;
  const { state, pending, onSubmit } = useFormAction(action);
  const [color, setColor] = useState(site.color);
  const [currency, setCurrency] = useState(site.currency);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <section className="card space-y-5">
        <h2 className="font-bold">Identité</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="businessName">Nom</label>
            <input id="businessName" name="businessName" defaultValue={site.businessName} required className="field" />
          </div>
          <div>
            <label className="label" htmlFor="category">Activité (modèle)</label>
            <select id="category" name="category" defaultValue={site.category} className="field">
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="city">Ville</label>
            <input id="city" name="city" defaultValue={site.city} required className="field" />
          </div>
          <div>
            <label className="label" htmlFor="slug">Adresse web (/s/…)</label>
            <input id="slug" name="slug" defaultValue={site.slug} className="field font-mono text-xs" />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="tagline">Slogan</label>
          <input id="tagline" name="tagline" defaultValue={site.tagline} className="field" />
        </div>
        <div>
          <label className="label" htmlFor="description">Présentation</label>
          <textarea id="description" name="description" defaultValue={site.description} rows={4} className="field" />
        </div>
        <fieldset>
          <legend className="label">Couleur</legend>
          <input type="hidden" name="color" value={color} />
          <div className="flex flex-wrap items-center gap-2">
            {brandColors.map((c) => (
              <button
                key={c.value}
                type="button"
                title={c.name}
                aria-label={c.name}
                onClick={() => setColor(c.value)}
                className={`h-8 w-8 rounded-full ring-offset-2 ${color === c.value ? "ring-2 ring-ink" : ""}`}
                style={{ backgroundColor: c.value }}
              />
            ))}
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-8 w-10 cursor-pointer rounded border border-ink/15" aria-label="Couleur personnalisée" />
          </div>
        </fieldset>
      </section>

      <section className="card space-y-5">
        <h2 className="font-bold">Contact</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="phone">Téléphone</label>
            <input id="phone" name="phone" defaultValue={site.phone} required className="field" />
          </div>
          <div>
            <label className="label" htmlFor="whatsapp">WhatsApp</label>
            <input id="whatsapp" name="whatsapp" defaultValue={site.whatsapp} className="field" />
          </div>
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" defaultValue={site.email} className="field" />
          </div>
          <div>
            <label className="label" htmlFor="address">Adresse</label>
            <input id="address" name="address" defaultValue={site.address} className="field" />
          </div>
          <div>
            <label className="label" htmlFor="instagram">Instagram</label>
            <input id="instagram" name="instagram" defaultValue={site.instagram} placeholder="@moncommerce" className="field" />
          </div>
          <div>
            <label className="label" htmlFor="facebook">Facebook</label>
            <input id="facebook" name="facebook" defaultValue={site.facebook} placeholder="moncommerce" className="field" />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="hours">Horaires (une ligne par période)</label>
          <textarea id="hours" name="hours" defaultValue={site.hours} rows={3} className="field font-mono text-xs" />
        </div>
      </section>

      <section className="card space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-bold">Services & prix</h2>
          <select name="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} className="field w-auto py-1.5 text-xs" aria-label="Devise">
            <option value="MAD">MAD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <ServicesEditor initial={site.services} currency={currency} />
      </section>

      <section className="card space-y-4">
        <h2 className="font-bold">Photos</h2>
        <textarea name="photos" defaultValue={site.photos.join("\n")} rows={4} className="field font-mono text-xs" placeholder="https://… (un lien par ligne, la première sert d'image principale)" />
      </section>

      <section className="card space-y-4">
        <h2 className="font-bold">Avis clients</h2>
        <ReviewsEditor initial={site.reviews} />
      </section>

      <div className="sticky bottom-4 z-10 flex items-center justify-end gap-3 rounded-2xl border border-ink/10 bg-white/95 p-3 shadow-card backdrop-blur">
        <div className="flex-1">
          <FormMessage state={state} />
        </div>
        <SubmitButton pending={pending}>Enregistrer</SubmitButton>
      </div>
    </form>
  );
}
