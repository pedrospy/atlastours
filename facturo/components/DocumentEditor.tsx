"use client";

import { useActionState, useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { saveDocument } from "@/app/actions/documents";
import { computeTotals, currencies, formatMoney, toCents } from "@/lib/money";
import { FormMessage } from "./FormMessage";
import { SubmitButton } from "./SubmitButton";

type Item = { description: string; quantity: string; unitPrice: string; vatRate: string };

export type EditorInitial = {
  id?: string;
  type: "INVOICE" | "QUOTE";
  clientId: string;
  issueDate: string;
  dueDate: string;
  currency: string;
  notes: string;
  items: Item[];
};

export function DocumentEditor({
  initial,
  clients,
}: {
  initial: EditorInitial;
  clients: { id: string; name: string }[];
}) {
  const [state, action] = useActionState(saveDocument, undefined);
  const [items, setItems] = useState<Item[]>(initial.items);
  const [currency, setCurrency] = useState(initial.currency);
  const defaultVat = initial.items[0]?.vatRate ?? "20";

  const totals = useMemo(
    () =>
      computeTotals(
        items.map((i) => ({
          quantity: Number(i.quantity.replace(",", ".")) || 0,
          unitPrice: toCents(i.unitPrice),
          vatRate: Number(i.vatRate.replace(",", ".")) || 0,
        }))
      ),
    [items]
  );

  function update(index: number, key: keyof Item, value: string) {
    setItems((prev) => prev.map((it, i) => (i === index ? { ...it, [key]: value } : it)));
  }

  const isQuote = initial.type === "QUOTE";

  return (
    <form action={action} className="space-y-6">
      {initial.id && <input type="hidden" name="id" value={initial.id} />}
      <input type="hidden" name="type" value={initial.type} />
      <input type="hidden" name="items" value={JSON.stringify(items)} />

      <div className="card grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <label className="label" htmlFor="clientId">Client *</label>
          <select id="clientId" name="clientId" className="field" defaultValue={initial.clientId} required>
            <option value="" disabled>Choisir un client…</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="issueDate">Date</label>
          <input id="issueDate" name="issueDate" type="date" className="field" defaultValue={initial.issueDate} required />
        </div>
        <div>
          <label className="label" htmlFor="dueDate">{isQuote ? "Valable jusqu'au" : "Échéance"}</label>
          <input id="dueDate" name="dueDate" type="date" className="field" defaultValue={initial.dueDate} />
        </div>
        <div>
          <label className="label" htmlFor="currency">Devise</label>
          <select id="currency" name="currency" className="field" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {currencies.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="card !p-0">
        <div className="hidden grid-cols-12 gap-3 border-b border-ink/10 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-ink/50 md:grid">
          <span className="col-span-5">Description</span>
          <span className="col-span-2">Quantité</span>
          <span className="col-span-2">Prix unitaire HT</span>
          <span className="col-span-1">TVA %</span>
          <span className="col-span-2 text-right">Total HT</span>
        </div>
        <div className="divide-y divide-ink/5">
          {items.map((it, i) => {
            const line = Math.round((Number(it.quantity.replace(",", ".")) || 0) * toCents(it.unitPrice));
            return (
              <div key={i} className="grid grid-cols-2 gap-3 px-6 py-4 md:grid-cols-12 md:items-center">
                <input
                  aria-label="Description"
                  placeholder="Prestation ou produit"
                  className="field col-span-2 md:col-span-5"
                  value={it.description}
                  onChange={(e) => update(i, "description", e.target.value)}
                />
                <input aria-label="Quantité" inputMode="decimal" className="field md:col-span-2" value={it.quantity} onChange={(e) => update(i, "quantity", e.target.value)} />
                <input aria-label="Prix unitaire" inputMode="decimal" placeholder="0,00" className="field md:col-span-2" value={it.unitPrice} onChange={(e) => update(i, "unitPrice", e.target.value)} />
                <input aria-label="TVA" inputMode="decimal" className="field md:col-span-1" value={it.vatRate} onChange={(e) => update(i, "vatRate", e.target.value)} />
                <div className="flex items-center justify-end gap-2 md:col-span-2">
                  <span className="text-sm font-semibold">{formatMoney(line, currency)}</span>
                  <button
                    type="button"
                    onClick={() => setItems((prev) => prev.filter((_, j) => j !== i))}
                    disabled={items.length === 1}
                    className="btn-danger !p-2 disabled:opacity-30"
                    aria-label="Supprimer la ligne"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 border-t border-ink/10 px-6 py-4 sm:flex-row sm:items-start sm:justify-between">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setItems((prev) => [...prev, { description: "", quantity: "1", unitPrice: "", vatRate: defaultVat }])}
          >
            <Plus className="h-4 w-4" /> Ajouter une ligne
          </button>
          <dl className="w-full max-w-xs space-y-1 text-sm">
            <div className="flex justify-between"><dt className="text-ink/60">Total HT</dt><dd>{formatMoney(totals.subtotal, currency)}</dd></div>
            <div className="flex justify-between"><dt className="text-ink/60">TVA</dt><dd>{formatMoney(totals.vat, currency)}</dd></div>
            <div className="flex justify-between border-t border-ink/10 pt-2 text-base font-bold"><dt>Total TTC</dt><dd>{formatMoney(totals.total, currency)}</dd></div>
          </dl>
        </div>
      </div>

      <div className="card">
        <label className="label" htmlFor="notes">Notes et conditions (affichées sur le document)</label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="field"
          defaultValue={initial.notes}
          placeholder={isQuote ? "Ex : devis valable 30 jours, acompte de 30 % à la commande." : "Ex : paiement par virement sous 30 jours."}
        />
      </div>

      <FormMessage state={state} />
      <div className="flex justify-end">
        <SubmitButton>{initial.id ? "Enregistrer les modifications" : isQuote ? "Créer le devis" : "Créer la facture"}</SubmitButton>
      </div>
    </form>
  );
}
