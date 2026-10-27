"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { createOrder } from "@/app/actions/orders";
import { brandColors, categories, getCategory } from "@/lib/categories";
import { formatMoney } from "@/lib/format";
import { plans, type PlanId } from "@/lib/plans";
import { FormMessage } from "./FormMessage";
import { ServicesEditor } from "./ServicesEditor";
import { SubmitButton } from "./SubmitButton";
import { useFormAction } from "./useFormAction";

const steps = ["Votre activité", "Coordonnées", "Services & style", "Offre"];

export function OrderForm({ initialPlan }: { initialPlan: PlanId }) {
  const { state, pending, onSubmit } = useFormAction(createOrder);
  const [step, setStep] = useState(0);
  const [categoryId, setCategoryId] = useState(categories[0].id);
  const [plan, setPlan] = useState<PlanId>(initialPlan);
  const [color, setColor] = useState(categories[0].color);
  const [currency, setCurrency] = useState("MAD");
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const category = getCategory(categoryId);

  function next() {
    if (!stepValid(step)) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function stepValid(index: number) {
    const container = stepRefs.current[index];
    const fields = container ? Array.from(container.querySelectorAll<HTMLInputElement>("input, select, textarea")) : [];
    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }
    return true;
  }

  function onCategoryChange(id: string) {
    setCategoryId(id);
    setColor(getCategory(id).color);
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        if (step < steps.length - 1) {
          e.preventDefault();
          next();
          return;
        }
        onSubmit(e);
      }}
      className="space-y-6"
    >
      <ol className="grid grid-cols-4 gap-2">
        {steps.map((label, i) => (
          <li key={label} className="text-center">
            <div className={`h-1.5 rounded-full ${i <= step ? "bg-brand" : "bg-ink/10"}`} />
            <span className={`mt-2 hidden text-xs font-medium sm:block ${i === step ? "text-brand" : "text-ink/50"}`}>{label}</span>
          </li>
        ))}
      </ol>
      <p className="text-sm font-semibold text-ink/60 sm:hidden">
        Étape {step + 1}/{steps.length} · {steps[step]}
      </p>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div ref={(el) => { stepRefs.current[0] = el; }} className={step === 0 ? "space-y-5" : "hidden"}>
        <div>
          <label className="label" htmlFor="businessName">Nom de l&apos;établissement *</label>
          <input id="businessName" name="businessName" required minLength={2} className="field" placeholder="Ex. Café Nour" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="category">Activité *</label>
            <select id="category" name="category" className="field" value={categoryId} onChange={(e) => onCategoryChange(e.target.value)}>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="city">Ville *</label>
            <input id="city" name="city" required className="field" placeholder="Ex. Marrakech" />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="tagline">Slogan</label>
          <input id="tagline" name="tagline" maxLength={140} className="field" placeholder={category.tagline("votre ville")} />
          <p className="hint">Facultatif — nous en proposons un si vous laissez vide.</p>
        </div>
        <div>
          <label className="label" htmlFor="description">Présentation courte</label>
          <textarea id="description" name="description" rows={4} maxLength={1200} className="field" placeholder="Qui êtes-vous, depuis quand, ce qui vous rend unique…" />
        </div>
      </div>

      <div ref={(el) => { stepRefs.current[1] = el; }} className={step === 1 ? "space-y-5" : "hidden"}>
        <div>
          <label className="label" htmlFor="customerName">Votre nom *</label>
          <input id="customerName" name="customerName" required minLength={2} className="field" placeholder="Prénom et nom" autoComplete="name" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="phone">Téléphone *</label>
            <input id="phone" name="phone" type="tel" required minLength={8} className="field" placeholder="06 12 34 56 78" autoComplete="tel" />
          </div>
          <div>
            <label className="label" htmlFor="whatsapp">WhatsApp</label>
            <input id="whatsapp" name="whatsapp" type="tel" className="field" placeholder="Si différent du téléphone" />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="field" placeholder="vous@exemple.com" autoComplete="email" />
        </div>
        <div>
          <label className="label" htmlFor="address">Adresse *</label>
          <input id="address" name="address" required className="field" placeholder="N°, rue, quartier" autoComplete="street-address" />
          <p className="hint">Elle sert à afficher la carte Google Maps sur votre site.</p>
        </div>
        <div>
          <label className="label" htmlFor="hours">Horaires d&apos;ouverture</label>
          <textarea key={categoryId} id="hours" name="hours" rows={3} className="field font-mono text-xs" defaultValue={category.hours} />
          <p className="hint">Une ligne par période, ex. « Lundi – Samedi : 9h00 – 19h00 ».</p>
        </div>
      </div>

      <div ref={(el) => { stepRefs.current[2] = el; }} className={step === 2 ? "space-y-6" : "hidden"}>
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="label mb-0">{category.servicesTitle} (avec prix)</span>
            <select name="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} className="field w-auto py-1.5 text-xs" aria-label="Devise">
              <option value="MAD">MAD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <ServicesEditor key={categoryId} initial={category.services} currency={currency} />
        </div>
        <div>
          <label className="label" htmlFor="photos">Photos (liens, facultatif)</label>
          <textarea id="photos" name="photos" rows={3} className="field font-mono text-xs" placeholder={"https://…/photo1.jpg\nhttps://…/photo2.jpg"} />
          <p className="hint">Un lien par ligne (Instagram, Google Drive public…). Sinon, envoyez-les sur WhatsApp après la commande.</p>
        </div>
        <fieldset>
          <legend className="label">Couleur principale</legend>
          <input type="hidden" name="color" value={color} />
          <div className="flex flex-wrap gap-2">
            {brandColors.map((c) => (
              <button
                key={c.value}
                type="button"
                title={c.name}
                aria-label={c.name}
                aria-pressed={color === c.value}
                onClick={() => setColor(c.value)}
                className={`grid h-10 w-10 place-items-center rounded-full ring-offset-2 transition ${color === c.value ? "ring-2 ring-ink" : "hover:scale-105"}`}
                style={{ backgroundColor: c.value }}
              >
                {color === c.value && <Check className="h-4 w-4 text-white" />}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div ref={(el) => { stepRefs.current[3] = el; }} className={step === 3 ? "space-y-5" : "hidden"}>
        <input type="hidden" name="plan" value={plan} />
        <div className="grid gap-3">
          {plans.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPlan(p.id)}
              aria-pressed={plan === p.id}
              className={`flex items-start gap-4 rounded-2xl border-2 p-4 text-left transition ${plan === p.id ? "border-brand bg-brand-soft" : "border-ink/10 bg-white hover:border-ink/25"}`}
            >
              <span className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${plan === p.id ? "border-brand bg-brand" : "border-ink/25"}`}>
                {plan === p.id && <Check className="h-3 w-3 text-white" />}
              </span>
              <span className="flex-1">
                <span className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-bold">{p.name}</span>
                  <span className="font-bold">{formatMoney(p.price)}</span>
                </span>
                <span className="mt-0.5 block text-sm text-ink/60">{p.pitch}</span>
                <span className="mt-1 block text-xs text-ink/50">
                  puis {formatMoney(p.monthly)}/mois (hébergement et maintenance) · ≈ {formatMoney(p.priceMad, "MAD")}
                </span>
              </span>
            </button>
          ))}
        </div>
        <div>
          <label className="label" htmlFor="note">Un message pour nous ?</label>
          <textarea id="note" name="note" rows={3} className="field" placeholder="Nom de domaine souhaité, informations à ajouter…" />
        </div>
        <FormMessage state={state} />
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-ink/10 pt-5">
        {step > 0 ? (
          <button type="button" className="btn-secondary" onClick={() => setStep((s) => s - 1)}>
            <ArrowLeft className="h-4 w-4" /> Retour
          </button>
        ) : (
          <span />
        )}
        {step < steps.length - 1 ? (
          <button type="button" className="btn-primary" onClick={next}>
            Continuer <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <SubmitButton pending={pending} pendingLabel="Création de votre site…">
            Valider et voir mon site <ArrowRight className="h-4 w-4" />
          </SubmitButton>
        )}
      </div>
    </form>
  );
}
