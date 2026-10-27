"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import type { ServiceItem } from "@/lib/categories";

type Row = { name: string; price: string; description: string };

function toRow(item: ServiceItem): Row {
  return { name: item.name, price: item.price === null ? "" : String(item.price / 100), description: item.description };
}

function toCents(value: string) {
  const n = Number(value.replace(/\s/g, "").replace(",", "."));
  return value.trim() === "" || !Number.isFinite(n) ? null : Math.round(n * 100);
}

export function ServicesEditor({ initial, currency, name = "services" }: { initial: ServiceItem[]; currency: string; name?: string }) {
  const [rows, setRows] = useState<Row[]>(() => (initial.length ? initial.map(toRow) : [{ name: "", price: "", description: "" }]));

  const update = (index: number, patch: Partial<Row>) => setRows((prev) => prev.map((r, i) => (i === index ? { ...r, ...patch } : r)));
  const serialized = JSON.stringify(
    rows.filter((r) => r.name.trim()).map((r) => ({ name: r.name.trim(), price: toCents(r.price), description: r.description.trim() })),
  );

  return (
    <div className="space-y-3">
      <input type="hidden" name={name} value={serialized} />
      {rows.map((row, i) => (
        <div key={i} className="grid gap-2 rounded-xl border border-ink/10 bg-paper/60 p-3 sm:grid-cols-[1fr_8rem_auto]">
          <input
            className="field"
            placeholder="Prestation ou produit"
            aria-label={`Service ${i + 1}`}
            value={row.name}
            onChange={(e) => update(i, { name: e.target.value })}
          />
          <div className="relative">
            <input
              className="field pr-12"
              inputMode="decimal"
              placeholder="Prix"
              aria-label={`Prix ${i + 1}`}
              value={row.price}
              onChange={(e) => update(i, { price: e.target.value })}
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink/40">{currency}</span>
          </div>
          <button
            type="button"
            onClick={() => setRows((prev) => (prev.length > 1 ? prev.filter((_, j) => j !== i) : [{ name: "", price: "", description: "" }]))}
            className="btn-danger justify-self-end"
            aria-label="Supprimer"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <input
            className="field sm:col-span-3"
            placeholder="Détail (facultatif)"
            value={row.description}
            onChange={(e) => update(i, { description: e.target.value })}
          />
        </div>
      ))}
      <button type="button" className="btn-secondary btn-sm" onClick={() => setRows((prev) => [...prev, { name: "", price: "", description: "" }])}>
        <Plus className="h-4 w-4" /> Ajouter une ligne
      </button>
      <p className="hint">Laissez le prix vide pour « Sur devis », 0 pour « Offert ».</p>
    </div>
  );
}
