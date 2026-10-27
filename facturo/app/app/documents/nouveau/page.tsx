import Link from "next/link";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { canCreateDocument, FREE_DOCS_PER_MONTH } from "@/lib/plans";
import { DocumentEditor } from "@/components/DocumentEditor";

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default async function NewDocumentPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const user = await requireUser();
  const type = (await searchParams).type === "QUOTE" ? "QUOTE" : "INVOICE";
  const [clients, allowed] = await Promise.all([
    db.client.findMany({ where: { userId: user.id }, orderBy: { name: "asc" }, select: { id: true, name: true } }),
    canCreateDocument(user.id, user.plan),
  ]);

  const title = type === "QUOTE" ? "Nouveau devis" : "Nouvelle facture";

  if (!allowed) {
    return (
      <div className="mx-auto max-w-xl">
        <h1 className="page-title">{title}</h1>
        <div className="card mt-6 text-center">
          <p className="font-semibold">Vous avez utilisé vos {FREE_DOCS_PER_MONTH} documents gratuits ce mois-ci.</p>
          <p className="mt-2 text-sm text-ink/60">Passez à Pro pour créer des factures et devis illimités.</p>
          <Link href="/app/abonnement" className="btn-primary mt-6">Passer à Pro</Link>
        </div>
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className="mx-auto max-w-xl">
        <h1 className="page-title">{title}</h1>
        <div className="card mt-6 text-center">
          <p className="font-semibold">Ajoutez d&apos;abord un client.</p>
          <Link href="/app/clients" className="btn-primary mt-6">Ajouter un client</Link>
        </div>
      </div>
    );
  }

  const due = new Date();
  due.setDate(due.getDate() + 30);

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="page-title mb-6">{title}</h1>
      <DocumentEditor
        clients={clients}
        initial={{
          type,
          clientId: "",
          issueDate: isoDate(new Date()),
          dueDate: isoDate(due),
          currency: user.currency,
          notes: "",
          items: [{ description: "", quantity: "1", unitPrice: "", vatRate: String(user.defaultVat) }],
        }}
      />
    </div>
  );
}
