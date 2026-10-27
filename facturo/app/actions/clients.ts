"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import type { FormState } from "./auth";

export async function createClient(_: FormState, formData: FormData): Promise<FormState> {
  const user = await requireUser();
  const name = String(formData.get("name") ?? "").trim();
  if (!name) return { error: "Le nom du client est obligatoire." };
  await db.client.create({
    data: {
      userId: user.id,
      name,
      email: String(formData.get("email") ?? "").trim(),
      address: String(formData.get("address") ?? "").trim(),
      taxId: String(formData.get("taxId") ?? "").trim(),
    },
  });
  revalidatePath("/app/clients");
  return { ok: "Client ajouté." };
}

export async function deleteClient(formData: FormData) {
  const user = await requireUser();
  const id = String(formData.get("id"));
  const used = await db.document.count({ where: { clientId: id, userId: user.id } });
  if (used > 0) return;
  await db.client.deleteMany({ where: { id, userId: user.id } });
  revalidatePath("/app/clients");
}
