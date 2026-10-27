"use client";

import { useEffect, useState } from "react";
import { CreditCard, Mail, MessageCircle, Pencil, ShieldCheck } from "lucide-react";
import { PLAN_EVENT } from "@/components/ChoosePlanButton";
import { content, type Lang } from "@/lib/content";
import { paymentLink, prices, site, whatsappLink, type PlanId } from "@/lib/site";

const planIds: PlanId[] = ["essentiel", "complet", "premium"];

type Answers = {
  plan: PlanId;
  name: string;
  email: string;
  dates: string;
  travellers: string;
  budget: string;
  interests: string[];
  notes: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function OrderForm({ lang }: { lang: Lang }) {
  const t = content[lang];
  const f = t.form;
  const [answers, setAnswers] = useState<Answers>({
    plan: "complet",
    name: "",
    email: "",
    dates: "",
    travellers: "",
    budget: f.budgets[1],
    interests: [],
    notes: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onPlan = (event: Event) => {
      const plan = (event as CustomEvent<PlanId>).detail;
      if (planIds.includes(plan)) {
        setAnswers((current) => ({ ...current, plan }));
        setSubmitted(false);
      }
    };
    window.addEventListener(PLAN_EVENT, onPlan);
    return () => window.removeEventListener(PLAN_EVENT, onPlan);
  }, []);

  const update = <K extends keyof Answers>(key: K, value: Answers[K]) => setAnswers((current) => ({ ...current, [key]: value }));

  const toggleInterest = (interest: string) =>
    update(
      "interests",
      answers.interests.includes(interest) ? answers.interests.filter((item) => item !== interest) : [...answers.interests, interest],
    );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!answers.name.trim() || !emailPattern.test(answers.email.trim()) || !answers.dates.trim()) {
      setError(f.required);
      return;
    }
    setError("");
    setSubmitted(true);
    document.getElementById("commander")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const planName = t.plans.items[answers.plan].name;
  const price = prices[answers.plan];
  const payUrl = paymentLink(answers.plan);

  const message = [
    f.messageIntro,
    "",
    `${f.plan} : ${planName} (${price} €)`,
    `${f.name.replace(" *", "")} : ${answers.name}`,
    `${f.email.replace(" *", "")} : ${answers.email}`,
    `${f.dates.replace(" *", "")} : ${answers.dates}`,
    answers.travellers && `${f.travellers} : ${answers.travellers}`,
    `${f.budget} : ${answers.budget}`,
    answers.interests.length > 0 && `${f.interests} : ${answers.interests.join(", ")}`,
    answers.notes && `${f.notes} : ${answers.notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`${site.name} · ${planName} · ${answers.name}`)}&body=${encodeURIComponent(message)}`;

  if (submitted) {
    return (
      <div className="space-y-5">
        <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl font-bold">{f.step2Title}</h3>
            <span className="rounded-full bg-mint-light px-3 py-1 text-sm font-semibold text-mint">
              {planName} · {price} €
            </span>
          </div>
          {payUrl ? (
            <>
              <p className="mt-2 text-ink/70">{f.step2Text}</p>
              <a href={payUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 w-full sm:w-auto">
                <CreditCard className="h-5 w-5" />
                {f.pay} {price} €
              </a>
              <p className="mt-3 flex items-center gap-2 text-sm text-ink/60">
                <ShieldCheck className="h-4 w-4 text-mint" />
                PayPal · Visa · Mastercard
              </p>
            </>
          ) : (
            <p className="mt-3 rounded-xl bg-saffron-light/60 p-4 text-ink/80">{f.payUnavailable}</p>
          )}
        </div>

        <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold">{f.step3Title}</h3>
          <p className="mt-2 text-ink/70">{f.step3Text}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-primary bg-mint hover:bg-mint/90">
              <MessageCircle className="h-5 w-5" />
              {f.sendWhatsapp}
            </a>
            <a href={mailto} className="btn-ghost bg-white">
              <Mail className="h-5 w-5" />
              {f.sendEmail}
            </a>
          </div>
        </div>

        <button type="button" onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-clay">
          <Pencil className="h-4 w-4" />
          {f.edit}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6 rounded-2xl border border-ink/10 bg-white p-6 shadow-card sm:p-8">
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-ink/80">{f.plan}</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {planIds.map((id) => {
            const active = answers.plan === id;
            return (
              <label
                key={id}
                className={`flex cursor-pointer flex-col rounded-xl border-2 px-4 py-3 transition ${
                  active ? "border-clay bg-clay/5" : "border-ink/10 hover:border-ink/30"
                }`}
              >
                <input type="radio" name="plan" value={id} checked={active} onChange={() => update("plan", id)} className="sr-only" />
                <span className="font-semibold">{t.plans.items[id].name}</span>
                <span className={`text-sm ${active ? "text-clay" : "text-ink/60"}`}>{prices[id]} €</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink/80">{f.name}</span>
          <input className="field" value={answers.name} onChange={(e) => update("name", e.target.value)} autoComplete="given-name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink/80">{f.email}</span>
          <input type="email" className="field" value={answers.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink/80">{f.dates}</span>
          <input className="field" value={answers.dates} onChange={(e) => update("dates", e.target.value)} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink/80">{f.travellers}</span>
          <input className="field" value={answers.travellers} onChange={(e) => update("travellers", e.target.value)} />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink/80">{f.budget}</span>
        <select className="field" value={answers.budget} onChange={(e) => update("budget", e.target.value)}>
          {f.budgets.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </select>
      </label>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-ink/80">{f.interests}</legend>
        <div className="flex flex-wrap gap-2">
          {f.interestOptions.map((interest) => {
            const active = answers.interests.includes(interest);
            return (
              <button
                key={interest}
                type="button"
                aria-pressed={active}
                onClick={() => toggleInterest(interest)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active ? "border-clay bg-clay text-white" : "border-ink/15 bg-white text-ink/80 hover:border-ink/40"
                }`}
              >
                {interest}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink/80">{f.notes}</span>
        <textarea className="field min-h-28" value={answers.notes} onChange={(e) => update("notes", e.target.value)} />
      </label>

      {error && (
        <p role="alert" className="rounded-xl bg-clay/10 px-4 py-3 text-sm font-medium text-clay-dark">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary w-full py-4 text-lg">
        {f.submit} · {price} €
      </button>
    </form>
  );
}
