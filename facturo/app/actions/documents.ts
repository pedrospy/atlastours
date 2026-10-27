"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { DocStatus, DocType } from "@prisma/client";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { canCreateDocument, FREE_DOCS_PER_MONTH } from "@/lib/plans";
import { nextDocumentNumber } from "@/lib/numbering";
import { toCents } from "@/lib/money";
import type { FormState } from "./auth";

type RawItem = { description: string; quantity: string | number; unitPrice: string | number; vatRate: string | number };

function parseItems(raw: FormDataEntryValue | null) {
  let parsed: RawItem[];
  try {
    parsed = JSON.parse(String(raw ?? "[]"));
  } catch {
    return null;
  }
  const items = parsed
    .map((it, position) => ({
      position,
      description: String(it.description ?? "").trim(),
      quantity: Number(String(it.quantity).replace(",", ".")),
      unitPrice: toCents(it.unitPrice),
      vatRate: Number(String(it.vatRate).replace(",", ".")),
    }))
    .filter((it) => it.description);
  const valid = items.every(
    (it) => Number.isFinite(it.quantity) && it.quantity > 0 && it.unitPrice >= 0 && Number.isFinite(it.vatRate) && it.vatRate >= 0
  );
  return valid && items.length > 0 ? items : null;
}

function parseCommon(formData: FormData) {
  const issue = String(formData.get("issueDate") ?? "");
  const due = String(formData.get("dueDate") ?? "");
  return {
    clientId: String(formData.get("clientId") ?? ""),
    issueDate: issue ? new Date(issue) : new Date(),
    dueDate: due ? new Date(due) : null,
    currency: String(formData.get("currency") ?? "MAD"),
    notes: String(formData.get("notes") ?? "").trim(),
    items: parseItems(formData.get("items")),
  };
}

export async function saveDocument(_: FormState, formData: FormData): Promise<FormState> {
  const user = await requireUser();
  const id = String(formData.get("id") ?? "");
  const type = (String(formData.get("type")) === "QUOTE" ? "QUOTE" : "INVOICE") as DocType;
  const data = parseCommon(formData);

  if (!data.items) return { error: "Ajoutez au moins une ligne avec une description, une quantité et un prix valides." };
  const client = await db.client.findFirst({ where: { id: data.clientId, userId: user.id } });
  if (!client) return { error: "Choisissez un client." };

  const { items, ...fields } = data;

  if (id) {
    const existing = await db.document.findFirst({ where: { id, userId: user.id } });
    if (!existing) return { error: "Document introuvable." };
    await db.$transaction([
      db.lineItem.deleteMany({ where: { documentId: id } }),
      db.document.update({ where: { id }, data: { ...fields, items: { create: items } } }),
    ]);
    revalidatePath("/app", "layout");
    redirect(`/app/documents/${id}`);
  }

  if (!(await canCreateDocument(user.id, user.plan))) {
    return {
      error: `Limite gratuite atteinte (${FREE_DOCS_PER_MONTH} documents ce mois-ci). Passez à Pro pour des documents illimités.`,
    };
  }

  const doc = await db.document.create({
    data: {
      ...fields,
      userId: user.id,
      type,
      number: await nextDocumentNumber(user.id, type),
      items: { create: items },
    },
  });
  revalidatePath("/app", "layout");
  redirect(`/app/documents/${doc.id}`);
}

const statuses: DocStatus[] = ["DRAFT", "SENT", "PAID", "CANCELLED"];

export async function setDocumentStatus(formData: FormData) {
  const user = await requireUser();
  const id = String(formData.get("id"));
  const status = String(formData.get("status")) as DocStatus;
  if (!statuses.includes(status)) return;
  await db.document.updateMany({ where: { id, userId: user.id }, data: { status } });
  revalidatePath("/app", "layout");
}

export async function convertQuoteToInvoice(formData: FormData) {
  const user = await requireUser();
  const quote = await db.document.findFirst({
    where: { id: String(formData.get("id")), userId: user.id, type: "QUOTE" },
    include: { items: true },
  });
  if (!quote) return;
  if (!(await canCreateDocument(user.id, user.plan))) redirect("/app/abonnement?limite=1");
  const invoice = await db.document.create({
    data: {
      userId: user.id,
      clientId: quote.clientId,
      type: "INVOICE",
      number: await nextDocumentNumber(user.id, "INVOICE"),
      issueDate: new Date(),
      currency: quote.currency,
      notes: quote.notes,
      items: {
        create: quote.items.map(({ position, description, quantity, unitPrice, vatRate }) => ({
          position,
          description,
          quantity,
          unitPrice,
          vatRate,
        })),
      },
    },
  });
  revalidatePath("/app", "layout");
  redirect(`/app/documents/${invoice.id}`);
}

export async function deleteDocument(formData: FormData) {
  const user = await requireUser();
  await db.document.deleteMany({ where: { id: String(formData.get("id")), userId: user.id } });
  revalidatePath("/app", "layout");
  redirect("/app/documents");
}
