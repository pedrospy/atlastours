import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { DocumentEditor } from "@/components/DocumentEditor";
import { typeLabel } from "@/components/StatusBadge";

function isoDate(d: Date | null) {
  return d ? d.toISOString().slice(0, 10) : "";
}

export default async function EditDocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await params;
  const [doc, clients] = await Promise.all([
    db.document.findFirst({ where: { id, userId: user.id }, include: { items: { orderBy: { position: "asc" } } } }),
    db.client.findMany({ where: { userId: user.id }, orderBy: { name: "asc" }, select: { id: true, name: true } }),
  ]);
  if (!doc) notFound();

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="page-title mb-6">Modifier {typeLabel[doc.type].toLowerCase()} {doc.number}</h1>
      <DocumentEditor
        clients={clients}
        initial={{
          id: doc.id,
          type: doc.type,
          clientId: doc.clientId,
          issueDate: isoDate(doc.issueDate),
          dueDate: isoDate(doc.dueDate),
          currency: doc.currency,
          notes: doc.notes,
          items: doc.items.map((i) => ({
            description: i.description,
            quantity: String(i.quantity),
            unitPrice: (i.unitPrice / 100).toFixed(2),
            vatRate: String(i.vatRate),
          })),
        }}
      />
    </div>
  );
}
