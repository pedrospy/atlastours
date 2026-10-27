"use client";

import { useMemo, useState } from "react";
import { CreditCard, Loader2, MessageCircle, Send, Shield } from "lucide-react";
import type { AddonDefinition, AddonId } from "@/lib/booking/addons";
import { computeQuote, DEPOSIT_PERCENT, MAX_TRAVELERS } from "@/lib/booking/pricing";
import type { ExperienceKind } from "@/lib/booking/experiences";
import type { ExperienceGroupPrice } from "@/lib/experiences/types";
import { fill, formatMoney } from "@/lib/i18n/format";
import { useDictionary, useLocale } from "@/lib/i18n/locale-context";

export type BookingFormConfig = {
  kind: ExperienceKind;
  slug: string;
  addons: AddonDefinition[];
  paymentsEnabled: boolean;
};

type Props = BookingFormConfig & {
  basePrice: number;
  flatPrice: boolean;
  tiers: readonly ExperienceGroupPrice[];
  whatsappUrl: string;
};

const inputClass =
  "w-full border border-sand-200 bg-white px-3 py-2.5 text-sm text-midnight placeholder:text-midnight/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

function tomorrowIso() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}

export function BookingForm({
  kind,
  slug,
  addons,
  paymentsEnabled,
  basePrice,
  flatPrice,
  tiers,
  whatsappUrl,
}: Props) {
  const { locale } = useLocale();
  const t = useDictionary().booking;
  const minDate = useMemo(tomorrowIso, []);

  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [selected, setSelected] = useState<AddonId[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const quote = computeQuote({
    basePrice,
    flatPrice,
    tiers,
    travelers,
    addons: addons.filter((addon) => selected.includes(addon.id)),
  });

  const toggleAddon = (id: AddonId) =>
    setSelected((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id],
    );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          slug,
          locale,
          travelDate,
          travelers,
          addons: selected,
          customerName,
          email,
          phone,
          notes: notes || undefined,
          promoCode: promoCode || undefined,
          company,
        }),
      });
      const data = (await response.json().catch(() => null)) as { redirectUrl?: string } | null;
      if (!response.ok || !data?.redirectUrl) throw new Error("booking_failed");
      window.location.href = data.redirectUrl;
    } catch {
      setError(t.errorGeneric);
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4 border-t border-sand-200 pt-6" id="booking">
      <div>
        <h3 className="font-display text-xl font-bold text-midnight">{t.title}</h3>
        <p className="text-xs text-midnight/55">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-[1fr_96px] gap-3">
        <label className="block text-xs font-medium text-midnight/70">
          {t.date}
          <input
            type="date"
            required
            min={minDate}
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className={`${inputClass} mt-1`}
          />
        </label>
        <label className="block text-xs font-medium text-midnight/70">
          {t.travelers}
          <input
            type="number"
            required
            min={1}
            max={MAX_TRAVELERS}
            value={travelers}
            onChange={(e) => setTravelers(Math.min(MAX_TRAVELERS, Math.max(1, Number(e.target.value) || 1)))}
            className={`${inputClass} mt-1`}
          />
        </label>
      </div>

      {addons.length > 0 && (
        <fieldset>
          <legend className="text-xs font-medium text-midnight/70">{t.addonsTitle}</legend>
          <div className="mt-2 space-y-2">
            {addons.map((addon) => (
              <label
                key={addon.id}
                className="flex cursor-pointer items-center justify-between gap-3 border border-sand-200 px-3 py-2 text-sm text-midnight/80 has-[:checked]:border-gold has-[:checked]:bg-gold/5"
              >
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(addon.id)}
                    onChange={() => toggleAddon(addon.id)}
                    className="accent-burgundy"
                  />
                  {t.addons[addon.id]}
                </span>
                <span className="shrink-0 text-xs text-midnight/60">
                  +{formatMoney(addon.price, locale)}
                  {addon.per === "person" ? t.perPerson : t.perGroup}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="space-y-3">
        <input
          type="text"
          required
          autoComplete="name"
          placeholder={t.name}
          aria-label={t.name}
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className={inputClass}
        />
        <input
          type="email"
          required
          autoComplete="email"
          placeholder={t.email}
          aria-label={t.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
        <input
          type="tel"
          required
          autoComplete="tel"
          placeholder={t.phone}
          aria-label={t.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
        />
        <textarea
          rows={2}
          placeholder={t.notesPlaceholder}
          aria-label={t.notes}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={`${inputClass} resize-none`}
        />
        <div>
          <input
            type="text"
            placeholder={t.promoPlaceholder}
            aria-label={t.promo}
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
            className={inputClass}
          />
          {promoCode && <p className="mt-1 text-xs text-midnight/50">{t.promoNote}</p>}
        </div>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="hidden"
          aria-hidden
        />
      </div>

      <dl className="space-y-1.5 border-t border-sand-200 pt-4 text-sm">
        <div className="flex justify-between text-midnight/70">
          <dt>{t.summaryBase}</dt>
          <dd>{formatMoney(quote.baseTotal, locale)}</dd>
        </div>
        {quote.addonsTotal > 0 && (
          <div className="flex justify-between text-midnight/70">
            <dt>{t.summaryAddons}</dt>
            <dd>{formatMoney(quote.addonsTotal, locale)}</dd>
          </div>
        )}
        <div className="flex justify-between font-semibold text-midnight">
          <dt>{t.total}</dt>
          <dd>{formatMoney(quote.total, locale)}</dd>
        </div>
        {paymentsEnabled && (
          <>
            <div className="flex justify-between font-semibold text-burgundy">
              <dt>{fill(t.deposit, { percent: DEPOSIT_PERCENT })}</dt>
              <dd>{formatMoney(quote.deposit, locale)}</dd>
            </div>
            <div className="flex justify-between text-xs text-midnight/55">
              <dt>{t.balance}</dt>
              <dd>{formatMoney(quote.balance, locale)}</dd>
            </div>
          </>
        )}
      </dl>

      {error && <p className="text-sm text-terracotta" role="alert">{error}</p>}

      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            {t.submitting}
          </>
        ) : paymentsEnabled ? (
          <>
            <CreditCard className="h-5 w-5" />
            {t.submitPay}
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            {t.submitRequest}
          </>
        )}
      </button>

      <p className="flex items-center gap-2 text-xs text-midnight/55">
        <Shield className="h-3.5 w-3.5 text-oasis" />
        {paymentsEnabled ? t.secureNote : t.requestNote}
      </p>

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
        <MessageCircle className="h-5 w-5" />
        {t.orWhatsapp}
      </a>
    </form>
  );
}
