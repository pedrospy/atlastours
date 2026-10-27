export type ItemLike = { quantity: number; unitPrice: number; vatRate: number };

export const currencies = ["MAD", "EUR", "USD", "XOF", "TND", "DZD", "CAD", "CHF"] as const;

export function formatMoney(cents: number, currency: string) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency }).format(cents / 100);
}

export function toCents(value: string | number) {
  const n = typeof value === "number" ? value : Number(String(value).replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? Math.round(n * 100) : 0;
}

export function computeTotals(items: ItemLike[]) {
  let subtotal = 0;
  let vat = 0;
  for (const item of items) {
    const line = Math.round(item.quantity * item.unitPrice);
    subtotal += line;
    vat += Math.round((line * item.vatRate) / 100);
  }
  return { subtotal, vat, total: subtotal + vat };
}

export function formatDate(date: Date | null | undefined) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" }).format(date);
}
