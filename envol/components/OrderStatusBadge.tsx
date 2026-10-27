import type { OrderStatus } from "@prisma/client";

const styles: Record<OrderStatus, [string, string]> = {
  EN_ATTENTE: ["En attente", "bg-amber-100 text-amber-800"],
  PAYEE: ["Payée", "bg-emerald-100 text-emerald-800"],
  REMBOURSEE: ["Remboursée", "bg-slate-200 text-slate-700"],
  ANNULEE: ["Annulée", "bg-red-100 text-red-700"],
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const [label, cls] = styles[status];
  return <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${cls}`}>{label}</span>;
}
