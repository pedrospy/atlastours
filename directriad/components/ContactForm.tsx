"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { offers, site, whatsappLink } from "@/lib/site";

export function ContactForm() {
  const [error, setError] = useState<string | null>(null);

  function buildMessage(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const offer = String(data.get("offer") ?? "");
    const message = String(data.get("message") ?? "").trim();
    if (!name || !business) return null;
    return [
      `Bonjour DirectRiad, je souhaite un audit gratuit.`,
      `Nom : ${name}`,
      `Établissement : ${business}${city ? ` (${city})` : ""}`,
      `Offre envisagée : ${offer}`,
      message && `Message : ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = buildMessage(e.currentTarget);
    if (!text) {
      setError("Merci d'indiquer votre nom et le nom de votre établissement.");
      return;
    }
    setError(null);
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  function sendEmail(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const text = buildMessage(form);
    if (!text) {
      setError("Merci d'indiquer votre nom et le nom de votre établissement.");
      return;
    }
    setError(null);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Audit gratuit DirectRiad")}&body=${encodeURIComponent(text)}`;
  }

  return (
    <section id="contact" className="py-20">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Audit gratuit</p>
          <h2 className="section-title mt-3">Découvrez combien vous pouvez récupérer</h2>
          <p className="mt-4 text-ink/70">
            Répondez en 30 secondes. Nous revenons vers vous sous 24 h avec une estimation chiffrée et
            une proposition de maquette.
          </p>
          <ul className="mt-8 space-y-3 text-ink/80">
            <li>✓ Sans engagement</li>
            <li>✓ Réponse en français, arabe ou anglais</li>
            <li>✓ {site.city}</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-card sm:p-8" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" placeholder="Votre nom *" className="field" autoComplete="name" />
            <input name="business" placeholder="Nom du riad / agence *" className="field" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="city" placeholder="Ville" className="field" />
            <select name="offer" className="field" defaultValue="Réservation directe">
              {offers.map((o) => (
                <option key={o.id}>{o.name}</option>
              ))}
              <option>Je ne sais pas encore</option>
            </select>
          </div>
          <textarea name="message" rows={4} placeholder="Nombre de chambres, site actuel, questions…" className="field" />
          {error && <p className="text-sm font-medium text-red-600">{error}</p>}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="btn-primary flex-1">
              <MessageCircle className="h-5 w-5" /> Envoyer sur WhatsApp
            </button>
            <button type="button" onClick={sendEmail} className="btn-ghost flex-1">
              <Mail className="h-5 w-5" /> Par email
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
