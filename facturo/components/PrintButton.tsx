"use client";

import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn-primary">
      <Download className="h-4 w-4" /> Télécharger en PDF
    </button>
  );
}
