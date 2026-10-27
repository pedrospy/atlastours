import { Trash2 } from "lucide-react";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { deleteClient } from "@/app/actions/clients";
import { ClientForm } from "@/components/ClientForm";

export default async function ClientsPage() {
  const user = await requireUser();
  const clients = await db.client.findMany({
    where: { userId: user.id },
    orderBy: { name: "asc" },
    include: { _count: { select: { documents: true } } },
  });

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="page-title">Clients</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {clients.length === 0 ? (
            <div className="card text-center text-sm text-ink/60">Ajoutez votre premier client avec le formulaire.</div>
          ) : (
            <ul className="card divide-y divide-ink/5 !p-0">
              {clients.map((c) => (
                <li key={c.id} className="flex items-start justify-between gap-4 px-6 py-4">
                  <div className="min-w-0">
                    <p className="font-semibold">{c.name}</p>
                    <p className="truncate text-sm text-ink/60">{[c.email, c.taxId].filter(Boolean).join(" · ") || "—"}</p>
                    {c.address && <p className="whitespace-pre-line text-xs text-ink/50">{c.address}</p>}
                  </div>
                  <div className="flex shrink-0 items-center gap-2 text-xs text-ink/50">
                    {c._count.documents} doc.
                    {c._count.documents === 0 && (
                      <form action={deleteClient}>
                        <input type="hidden" name="id" value={c.id} />
                        <button className="btn-danger !p-2" aria-label={`Supprimer ${c.name}`}>
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </form>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ClientForm />
      </div>
    </div>
  );
}
