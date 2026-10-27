"use client";

import Link from "next/link";
import { useState } from "react";
import { addManualSale, adminLogin, resetStudentPassword, updateLesson } from "@/app/actions/admin";
import { joinFreeCourse, placeOrder, studentLogin } from "@/app/actions/public";
import { formatMoney } from "@/lib/format";
import type { Offer } from "@/lib/offers";
import { FormMessage } from "./FormMessage";
import { SubmitButton } from "./SubmitButton";
import { useFormAction } from "./useFormAction";

export function LeadForm({ source, dark = false }: { source: string; dark?: boolean }) {
  const { state, pending, onSubmit } = useFormAction(joinFreeCourse);
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input type="hidden" name="source" value={source} />
      <div className="grid gap-3 sm:grid-cols-[1fr_1.4fr]">
        <input name="name" required placeholder="Votre prénom" autoComplete="given-name" aria-label="Prénom" className="field py-3" />
        <input name="email" type="email" required placeholder="Votre meilleur e-mail" autoComplete="email" aria-label="E-mail" className="field py-3" />
      </div>
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel="Ouverture…" className="btn-accent w-full">
        Recevoir les 3 leçons gratuites
      </SubmitButton>
      <p className={`text-center text-xs ${dark ? "text-white/60" : "text-ink/50"}`}>Accès immédiat. Pas de spam, désinscription en un clic.</p>
    </form>
  );
}

export function OrderForm({
  offers,
  selected,
  loggedInAs,
  credit,
}: {
  offers: Offer[];
  selected: string;
  loggedInAs: string | null;
  credit: number;
}) {
  const { state, pending, onSubmit } = useFormAction(placeOrder);
  const [offerId, setOfferId] = useState(offers.some((o) => o.id === selected) ? selected : offers[0]?.id);
  const offer = offers.find((o) => o.id === offerId);
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <fieldset>
        <legend className="label">1. Votre offre</legend>
        <div className="grid gap-3">
          {offers.map((o) => (
            <label
              key={o.id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${offerId === o.id ? "border-brand bg-brand-soft ring-2 ring-brand/20" : "border-ink/15 bg-white hover:border-ink/30"}`}
            >
              <input type="radio" name="offer" value={o.id} checked={offerId === o.id} onChange={() => setOfferId(o.id)} className="mt-1 accent-brand" />
              <span className="flex-1">
                <span className="flex items-baseline justify-between gap-2">
                  <span className="font-semibold">
                    {o.name} {o.highlight && <span className="ml-1 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-white">Le plus choisi</span>}
                  </span>
                  <span className="font-display text-lg font-bold">{formatMoney(o.price - credit)}</span>
                </span>
                <span className="block text-sm text-ink/60">{o.tagline}</span>
              </span>
            </label>
          ))}
        </div>
        {credit > 0 && <p className="hint">Votre achat précédent ({formatMoney(credit)}) est déduit du prix.</p>}
      </fieldset>

      {loggedInAs ? (
        <p className="rounded-xl bg-paper px-4 py-3 text-sm">
          Connecté en tant que <strong>{loggedInAs}</strong>.
        </p>
      ) : (
        <fieldset className="space-y-4">
          <legend className="label">
            2. Votre compte élève{" "}
            <span className="font-normal text-ink/50">
              (déjà inscrit ? <Link href="/connexion?next=/commander" className="text-brand underline">connectez-vous</Link>)
            </span>
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="name">Nom complet</label>
              <input id="name" name="name" required autoComplete="name" className="field" />
            </div>
            <div>
              <label className="label" htmlFor="phone">WhatsApp <span className="text-ink/40">(conseillé)</span></label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+33 6… / +212 6…" className="field" />
            </div>
            <div>
              <label className="label" htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" required autoComplete="email" className="field" />
            </div>
            <div>
              <label className="label" htmlFor="password">Mot de passe</label>
              <input id="password" name="password" type="password" required minLength={8} autoComplete="new-password" className="field" />
              <p className="hint">8 caractères minimum.</p>
            </div>
          </div>
        </fieldset>
      )}

      <label className="flex items-start gap-3 text-sm text-ink/70">
        <input type="checkbox" name="consent" required className="mt-1 accent-brand" />
        <span>
          J&apos;accepte les <Link href="/mentions-legales#cgv" target="_blank" className="text-brand underline">conditions de vente</Link> et je demande
          l&apos;accès immédiat au contenu. Je bénéficie de la garantie « satisfait ou remboursé » de 14 jours.
        </span>
      </label>

      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel="Création de la commande…" className="btn-accent w-full">
        Valider ma commande{offer ? ` · ${formatMoney(offer.price - credit)}` : ""}
      </SubmitButton>
    </form>
  );
}

export function StudentLoginForm({ next }: { next: string }) {
  const { state, pending, onSubmit } = useFormAction(studentLogin);
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="hidden" name="next" value={next} />
      <div>
        <label className="label" htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" required autoFocus autoComplete="email" className="field" />
      </div>
      <div>
        <label className="label" htmlFor="password">Mot de passe</label>
        <input id="password" name="password" type="password" required autoComplete="current-password" className="field" />
      </div>
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel="Connexion…" className="btn-primary w-full">
        Accéder à ma formation
      </SubmitButton>
    </form>
  );
}

export function AdminLoginForm() {
  const { state, pending, onSubmit } = useFormAction(adminLogin);
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

export function ManualSaleForm({ offers }: { offers: Offer[] }) {
  const { state, pending, onSubmit } = useFormAction(addManualSale);
  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <input name="name" placeholder="Nom de l'élève" className="field" aria-label="Nom" />
      <input name="email" type="email" required placeholder="E-mail" className="field" aria-label="E-mail" />
      <input name="phone" placeholder="WhatsApp (facultatif)" className="field" aria-label="WhatsApp" />
      <select name="offer" className="field" aria-label="Offre" defaultValue="pro">
        {offers.map((o) => (
          <option key={o.id} value={o.id}>{o.name} — {formatMoney(o.price)}</option>
        ))}
      </select>
      <input name="amount" inputMode="decimal" placeholder="Montant encaissé en € (défaut : prix)" className="field" aria-label="Montant" />
      <select name="method" className="field" aria-label="Moyen de paiement" defaultValue="Virement">
        {["Virement", "PayPal", "Carte", "Espèces", "Wafacash / Cash Plus", "Paiement en plusieurs fois"].map((m) => (
          <option key={m}>{m}</option>
        ))}
      </select>
      <div className="sm:col-span-2 lg:col-span-3">
        <FormMessage state={state} />
      </div>
      <SubmitButton pending={pending} className="btn-primary sm:col-span-2 lg:col-span-3">
        Enregistrer la vente et ouvrir l&apos;accès
      </SubmitButton>
    </form>
  );
}

export function ResetPasswordButton({ studentId }: { studentId: string }) {
  const { state, pending, onSubmit } = useFormAction(resetStudentPassword.bind(null, studentId));
  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <SubmitButton pending={pending} pendingLabel="…" className="btn-secondary btn-sm">
        Générer un nouveau mot de passe
      </SubmitButton>
      <FormMessage state={state} />
    </form>
  );
}

export function LessonEditForm({
  lesson,
}: {
  lesson: { id: string; title: string; slug: string; duration: number; videoUrl: string; content: string; resources: string; freePreview: boolean; published: boolean };
}) {
  const { state, pending, onSubmit } = useFormAction(updateLesson.bind(null, lesson.id));
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-[1fr_200px_110px]">
        <div>
          <label className="label" htmlFor="title">Titre</label>
          <input id="title" name="title" defaultValue={lesson.title} required className="field" />
        </div>
        <div>
          <label className="label" htmlFor="slug">Adresse (slug)</label>
          <input id="slug" name="slug" defaultValue={lesson.slug} className="field" />
        </div>
        <div>
          <label className="label" htmlFor="duration">Durée (min)</label>
          <input id="duration" name="duration" type="number" min={1} defaultValue={lesson.duration} className="field" />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="videoUrl">Lien de la vidéo</label>
        <input id="videoUrl" name="videoUrl" defaultValue={lesson.videoUrl} placeholder="https://youtu.be/… · https://vimeo.com/… · lien .mp4 · iframe Bunny" className="field" />
        <p className="hint">YouTube en « non répertoriée », Vimeo ou Bunny Stream. Laissez vide tant que la vidéo n&apos;est pas tournée.</p>
      </div>
      <div>
        <label className="label" htmlFor="content">Support écrit</label>
        <textarea id="content" name="content" defaultValue={lesson.content} rows={18} className="field font-mono text-[13px] leading-6" />
        <p className="hint">Mise en forme : <code>## Titre</code>, <code>### Sous-titre</code>, <code>- liste</code>, <code>1. étape</code>, <code>&gt; encadré</code>, <code>**gras**</code>, <code>[lien](https://…)</code>.</p>
      </div>
      <div>
        <label className="label" htmlFor="resources">Ressources à télécharger</label>
        <textarea id="resources" name="resources" defaultValue={lesson.resources} rows={4} placeholder="Modèle de devis | https://docs.google.com/…" className="field font-mono text-[13px]" />
        <p className="hint">Une ressource par ligne : <code>Libellé | https://lien</code> (Google Drive, Notion, Canva…).</p>
      </div>
      <div className="flex flex-wrap gap-6 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="published" defaultChecked={lesson.published} className="accent-brand" /> Publiée
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="freePreview" defaultChecked={lesson.freePreview} className="accent-brand" /> Leçon gratuite (mini-formation)
        </label>
      </div>
      <FormMessage state={state} />
      <SubmitButton pending={pending} className="btn-primary">Enregistrer la leçon</SubmitButton>
    </form>
  );
}
