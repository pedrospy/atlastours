"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { currencies } from "@/lib/money";
import type { FormState } from "./auth";

export async function saveSettings(_: FormState, formData: FormData): Promise<FormState> {
  const user = await requireUser();
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const currency = get("currency");
  const defaultVat = Number(get("defaultVat").replace(",", "."));
  if (!get("businessName")) return { error: "Le nom de l'entreprise est obligatoire." };
  if (!(currencies as readonly string[]).includes(currency)) return { error: "Devise invalide." };
  if (!Number.isFinite(defaultVat) || defaultVat < 0 || defaultVat > 100) return { error: "Taux de TVA invalide." };

  await db.user.update({
    where: { id: user.id },
    data: {
      name: get("name") || user.name,
      businessName: get("businessName"),
      address: get("address"),
      taxId: get("taxId"),
      phone: get("phone"),
      iban: get("iban"),
      currency,
      defaultVat,
    },
  });
  revalidatePath("/app", "layout");
  return { ok: "Paramètres enregistrés." };
}
