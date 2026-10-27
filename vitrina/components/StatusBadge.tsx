import type { OrderStatus, ProspectStatus, SiteStatus } from "@prisma/client";

const styles: Record<OrderStatus | ProspectStatus | SiteStatus, [string, string]> = {
  NOUVEAU: ["Nouveau", "bg-sky-50 text-sky-700 ring-sky-600/20"],
  PAYE: ["Payé", "bg-emerald-50 text-emerald-700 ring-emerald-600/20"],
  PUBLIE: ["Publié", "bg-brand-soft text-brand-dark ring-brand/30"],
  ANNULE: ["Annulé", "bg-zinc-100 text-zinc-600 ring-zinc-500/20"],
  CONTACTE: ["Contacté", "bg-sky-50 text-sky-700 ring-sky-600/20"],
  INTERESSE: ["Intéressé", "bg-amber-50 text-amber-700 ring-amber-600/20"],
  GAGNE: ["Gagné", "bg-emerald-50 text-emerald-700 ring-emerald-600/20"],
  PERDU: ["Perdu", "bg-zinc-100 text-zinc-600 ring-zinc-500/20"],
  DRAFT: ["Brouillon", "bg-amber-50 text-amber-700 ring-amber-600/20"],
  PUBLISHED: ["En ligne", "bg-emerald-50 text-emerald-700 ring-emerald-600/20"],
};

export function StatusBadge({ status }: { status: OrderStatus | ProspectStatus | SiteStatus }) {
  const [label, cls] = styles[status];
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${cls}`}>{label}</span>;
}

export const prospectStatusLabels: Record<ProspectStatus, string> = {
  CONTACTE: "Contacté",
  INTERESSE: "Intéressé",
  GAGNE: "Gagné",
  PERDU: "Perdu",
};

export const orderStatusLabels: Record<OrderStatus, string> = {
  NOUVEAU: "Nouveau",
  PAYE: "Payé",
  PUBLIE: "Publié",
  ANNULE: "Annulé",
};
