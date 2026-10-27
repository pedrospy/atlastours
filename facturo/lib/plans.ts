import type { Plan } from "@prisma/client";
import { db } from "./db";

export const FREE_DOCS_PER_MONTH = 5;
export const PRO_PRICE_LABEL = "9 € / mois";

export const proFeatures = [
  "Factures et devis illimités",
  "Sans la mention « Créé avec Facturo » sur vos documents",
  "Support prioritaire par email",
];

export async function documentsThisMonth(userId: string) {
  const start = new Date();
  start.setDate(1);
  start.setHours(0, 0, 0, 0);
  return db.document.count({ where: { userId, createdAt: { gte: start } } });
}

export async function canCreateDocument(userId: string, plan: Plan) {
  if (plan === "PRO") return true;
  return (await documentsThisMonth(userId)) < FREE_DOCS_PER_MONTH;
}
