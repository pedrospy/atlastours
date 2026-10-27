"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({
  children,
  pending: pendingProp,
  pendingLabel = "Enregistrement…",
  className = "btn-primary",
}: {
  children: React.ReactNode;
  pending?: boolean;
  pendingLabel?: string;
  className?: string;
}) {
  const status = useFormStatus();
  const pending = pendingProp ?? status.pending;
  return (
    <button type="submit" disabled={pending} className={className}>
      {pending ? pendingLabel : children}
    </button>
  );
}
