import type { DocType } from "@prisma/client";
import { db } from "./db";

const prefix: Record<DocType, string> = { INVOICE: "F", QUOTE: "D" };

export async function nextDocumentNumber(userId: string, type: DocType) {
  const year = new Date().getFullYear();
  const base = `${prefix[type]}-${year}-`;
  const last = await db.document.findFirst({
    where: { userId, number: { startsWith: base } },
    orderBy: { number: "desc" },
    select: { number: true },
  });
  const next = last ? Number(last.number.slice(base.length)) + 1 : 1;
  return `${base}${String(next).padStart(4, "0")}`;
}
