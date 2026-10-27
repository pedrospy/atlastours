"use client";

import type { ProspectStatus } from "@prisma/client";
import { updateProspect } from "@/app/actions/admin";
import { prospectStatusLabels } from "./StatusBadge";

export function ProspectStatusSelect({ id, status, className = "field py-1.5 text-xs" }: { id: string; status: ProspectStatus; className?: string }) {
  return (
    <form action={updateProspect}>
      <input type="hidden" name="prospectId" value={id} />
      <select
        name="status"
        defaultValue={status}
        aria-label="Statut du prospect"
        className={className}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
      >
        {Object.entries(prospectStatusLabels).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </form>
  );
}
