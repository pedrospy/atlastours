import Link from "next/link";
import { notFound } from "next/navigation";
import QRCode from "qrcode";
import { ArrowLeft, ExternalLink, MessageCircle, Pencil } from "lucide-react";
import { convertProspect, deleteSite, updateProspect } from "@/app/actions/admin";
import { ConfirmButton } from "@/components/ConfirmButton";
import { CopyButton } from "@/components/CopyButton";
import { ProspectStatusSelect } from "@/components/ProspectStatusSelect";
import { StatusBadge } from "@/components/StatusBadge";
import { db } from "@/lib/db";
import { getCategory } from "@/lib/categories";
import { appUrl, formatMoney, waLink } from "@/lib/format";
import { owner } from "@/lib/owner";
import { pitchMessage } from "@/lib/pitch";
import { plans } from "@/lib/plans";

export default async function ProspectPage({ params }: { params: Promise<{ id: string }> }) {
  const prospect = await db.prospect.findUnique({ where: { id: (await params).id }, include: { site: { include: { order: true } } } });
  if (!prospect) notFound();

  const link = `${appUrl()}/s/${prospect.site.slug}`;
  const message = pitchMessage({ ...prospect, link, ownerName: owner().name });
  const qr = await QRCode.toString(link, { type: "svg", margin: 1, errorCorrectionLevel: "M", color: { dark: "#0c1222", light: "#ffffff" } });
  const order = prospect.site.order;

  return (
    <div className="space-y-6">
      <Link href="/admin/prospects" className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> Prospection
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="page-title flex flex-wrap items-center gap-3">
            {prospect.businessName} <StatusBadge status={prospect.status} />
          </h1>
          <p className="text-sm text-ink/60">
            {getCategory(prospect.category).label} · {prospect.city}
            {prospect.phone && ` · ${prospect.phone}`}
          </p>
        </div>
        <ProspectStatusSelect id={prospect.id} status={prospect.status} className="field w-auto" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[22rem_1fr]">
        <section className="card text-center shadow-card">
          <p className="eyebrow">Démo prête</p>
          <p className="mt-1 text-sm text-ink/60">Faites scanner ce QR code au commerçant</p>
          <div className="mx-auto mt-5 w-full max-w-[16rem] rounded-2xl border border-ink/10 p-3 [&_svg]:h-auto [&_svg]:w-full" data-testid="prospect-qr" dangerouslySetInnerHTML={{ __html: qr }} />
          <p className="mt-4 break-all font-mono text-xs text-ink/60" data-testid="demo-link">{link}</p>
          <div className="mt-5 grid gap-2">
            <Link href={`/s/${prospect.site.slug}`} target="_blank" className="btn-primary">
              Ouvrir la démo <ExternalLink className="h-4 w-4" />
            </Link>
            <CopyButton text={link} label="Copier le lien" />
            <Link href={`/admin/sites/${prospect.siteId}`} className="btn-secondary">
              <Pencil className="h-4 w-4" /> Personnaliser la démo
            </Link>
          </div>
        </section>

        <div className="space-y-6">
          <section className="card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-bold">Message WhatsApp</h2>
              <CopyButton text={message} label="Copier le message" className="btn-secondary btn-sm" />
            </div>
            <pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-[#e7fbe9] p-4 font-sans text-sm leading-relaxed text-ink/85" data-testid="pitch-message">
              {message}
            </pre>
            {prospect.phone ? (
              <a href={waLink(prospect.phone, message)} target="_blank" rel="noopener" className="btn-whatsapp mt-4 w-full py-3.5 text-base" data-testid="whatsapp-link">
                <MessageCircle className="h-5 w-5" /> Envoyer sur WhatsApp à {prospect.phone}
              </a>
            ) : (
              <a href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener" className="btn-whatsapp mt-4 w-full py-3.5 text-base" data-testid="whatsapp-link">
                <MessageCircle className="h-5 w-5" /> Partager sur WhatsApp
              </a>
            )}
          </section>

          <section className="card">
            <h2 className="font-bold">Le commerçant accepte ?</h2>
            {order ? (
              <p className="mt-2 text-sm text-ink/60">
                Commande créée.{" "}
                <Link href={`/admin/commandes/${order.id}`} className="font-semibold text-brand hover:underline">
                  Voir la commande VT-{String(order.number).padStart(4, "0")}
                </Link>
              </p>
            ) : (
              <form action={convertProspect} className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input type="hidden" name="prospectId" value={prospect.id} />
                <select name="plan" defaultValue="essentiel" className="field" aria-label="Offre">
                  {plans.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} · {formatMoney(p.price)} ({formatMoney(p.priceMad, "MAD")})
                    </option>
                  ))}
                </select>
                <button className="btn-primary whitespace-nowrap">Créer la commande</button>
              </form>
            )}
          </section>

          <section className="card">
            <h2 className="font-bold">Notes</h2>
            <form action={updateProspect} className="mt-3 space-y-3">
              <input type="hidden" name="prospectId" value={prospect.id} />
              <textarea name="notes" defaultValue={prospect.notes} rows={3} className="field" placeholder="Rappeler samedi, veut des photos…" />
              <button className="btn-secondary btn-sm">Enregistrer la note</button>
            </form>
          </section>

          <form action={deleteSite} className="text-right">
            <input type="hidden" name="siteId" value={prospect.siteId} />
            <input type="hidden" name="back" value="/admin/prospects" />
            <ConfirmButton message="Supprimer ce prospect et sa démo ?" className="btn-danger">
              Supprimer le prospect
            </ConfirmButton>
          </form>
        </div>
      </div>
    </div>
  );
}
