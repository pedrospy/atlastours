import type { DocStatus, DocType } from "@prisma/client";

const styles: Record<DocStatus, string> = {
  DRAFT: "bg-slate-100 text-slate-700",
  SENT: "bg-amber-100 text-amber-800",
  PAID: "bg-emerald-100 text-emerald-800",
  CANCELLED: "bg-red-100 text-red-700",
};

export const statusLabel: Record<DocType, Record<DocStatus, string>> = {
  INVOICE: { DRAFT: "Brouillon", SENT: "Envoyée", PAID: "Payée", CANCELLED: "Annulée" },
  QUOTE: { DRAFT: "Brouillon", SENT: "Envoyé", PAID: "Accepté", CANCELLED: "Refusé" },
};

export const typeLabel: Record<DocType, string> = { INVOICE: "Facture", QUOTE: "Devis" };

export function StatusBadge({ status, type }: { status: DocStatus; type: DocType }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status]}`}>
      {statusLabel[type][status]}
    </span>
  );
}
