import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, MessageCircle, Pencil } from "lucide-react";
import { deleteSite, markPaid, setOrderStatus, setSitePublished } from "@/app/actions/admin";
import { ConfirmButton } from "@/components/ConfirmButton";
import { StatusBadge, orderStatusLabels } from "@/components/StatusBadge";
import { db } from "@/lib/db";
import { appUrl, formatDateTime, formatMoney, waLink } from "@/lib/format";
import { getPlan } from "@/lib/plans";
import { getCategory } from "@/lib/categories";

export default async function AdminOrderPage({ params }: { params: Promise<{ id: string }> }) {
  const order = await db.order.findUnique({ where: { id: (await params).id }, include: { site: true } });
  if (!order) notFound();
  const plan = getPlan(order.plan);
  const reference = `VT-${String(order.number).padStart(4, "0")}`;
  const siteUrl = `${appUrl()}/s/${order.site.slug}`;
  const published = order.site.status === "PUBLISHED";
  const deliveredMessage = `Bonjour ${order.customerName}, votre site ${order.site.businessName} est en ligne : ${siteUrl}\nPartagez-le sur WhatsApp, Instagram et Google. Merci pour votre confiance !`;

  return (
    <div className="space-y-6">
      <Link href="/admin" className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> Commandes
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-ink/50">{reference}</p>
          <h1 className="page-title flex flex-wrap items-center gap-3">
            {order.site.businessName} <StatusBadge status={order.status} />
          </h1>
          <p className="text-sm text-ink/60">
            {getCategory(order.site.category).label} · {order.site.city} · commandé le {formatDateTime(order.createdAt)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href={`/s/${order.site.slug}`} target="_blank" className="btn-secondary">
            Voir le site <ExternalLink className="h-4 w-4" />
          </Link>
          <Link href={`/admin/sites/${order.siteId}`} className="btn-secondary">
            <Pencil className="h-4 w-4" /> Modifier le contenu
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
        <div className="space-y-6">
          <section className="card">
            <h2 className="font-bold">Client</h2>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-[10rem_1fr]">
              <dt className="text-ink/50">Nom</dt>
              <dd className="font-medium">{order.customerName}</dd>
              <dt className="text-ink/50">Téléphone</dt>
              <dd className="font-medium">{order.customerPhone}</dd>
              <dt className="text-ink/50">Email</dt>
              <dd className="font-medium">{order.customerEmail || "—"}</dd>
              <dt className="text-ink/50">Offre</dt>
              <dd className="font-medium">
                {plan?.name} · {formatMoney(order.amount, order.currency)} + {formatMoney(order.monthly, order.currency)}/mois
              </dd>
              <dt className="text-ink/50">Paiement</dt>
              <dd className="font-medium">{order.paidAt ? `${order.paymentMethod || "—"} · ${formatDateTime(order.paidAt)}` : "Non payé"}</dd>
              <dt className="text-ink/50">Adresse du site</dt>
              <dd className="break-all font-medium">{siteUrl}</dd>
              {order.note && (
                <>
                  <dt className="text-ink/50">Message</dt>
                  <dd className="whitespace-pre-line">{order.note}</dd>
                </>
              )}
            </dl>
            {order.customerPhone && (
              <a href={waLink(order.customerPhone, published ? deliveredMessage : `Bonjour ${order.customerName}, merci pour votre commande ${reference} !`)} target="_blank" rel="noopener" className="btn-whatsapp mt-6">
                <MessageCircle className="h-4 w-4" /> {published ? "Envoyer le lien du site" : "Écrire au client"}
              </a>
            )}
          </section>
        </div>

        <aside className="space-y-4">
          <section className="card space-y-3">
            <h2 className="font-bold">Actions</h2>
            {(order.status === "NOUVEAU" || order.status === "ANNULE") && (
              <form action={markPaid} className="space-y-2">
                <input type="hidden" name="orderId" value={order.id} />
                <select name="method" className="field" aria-label="Moyen de paiement" defaultValue="Espèces">
                  <option>Espèces</option>
                  <option>Virement</option>
                  <option>Carte (Stripe)</option>
                  <option>Autre</option>
                </select>
                <button className="btn-primary w-full">Marquer comme payé</button>
              </form>
            )}
            <form action={setSitePublished}>
              <input type="hidden" name="siteId" value={order.siteId} />
              <input type="hidden" name="publish" value={published ? "0" : "1"} />
              <button className={published ? "btn-secondary w-full" : "btn-primary w-full"}>{published ? "Dépublier le site" : "Publier le site"}</button>
            </form>
            <form action={setOrderStatus} className="flex gap-2">
              <input type="hidden" name="orderId" value={order.id} />
              <select name="status" defaultValue={order.status} className="field" aria-label="Statut">
                {Object.entries(orderStatusLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
              <button className="btn-secondary">OK</button>
            </form>
          </section>
          <section className="card">
            <form action={deleteSite}>
              <input type="hidden" name="siteId" value={order.siteId} />
              <input type="hidden" name="back" value="/admin" />
              <ConfirmButton message="Supprimer définitivement cette commande et son site ?" className="btn-danger w-full">
                Supprimer la commande et le site
              </ConfirmButton>
            </form>
          </section>
        </aside>
      </div>
    </div>
  );
}
