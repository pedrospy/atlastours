import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Banknote, CheckCircle2, CreditCard, ExternalLink, MessageCircle } from "lucide-react";
import { startCheckout } from "@/app/actions/orders";
import { PublicFooter, PublicHeader } from "@/components/PublicChrome";
import { db } from "@/lib/db";
import { formatMoney, waLink } from "@/lib/format";
import { owner } from "@/lib/owner";
import { getPlan } from "@/lib/plans";
import { stripeReady } from "@/lib/stripe";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Votre commande · Vitrina", robots: { index: false } };

type Props = { params: Promise<{ id: string }>; searchParams: Promise<{ paiement?: string }> };

export default async function OrderPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { paiement } = await searchParams;
  const order = await db.order.findUnique({ where: { id }, include: { site: true } });
  if (!order) notFound();

  const plan = getPlan(order.plan);
  const me = owner();
  const reference = `VT-${String(order.number).padStart(4, "0")}`;
  const paid = order.status === "PAYE" || order.status === "PUBLIE";
  const canStripe = plan && order.status === "NOUVEAU" && stripeReady(plan.id);
  const whatsappText = `Bonjour, je viens de commander le site « ${order.site.businessName} » (commande ${reference}, offre ${plan?.name}). Je souhaite finaliser le paiement.`;

  return (
    <>
      <PublicHeader />
      <main className="container-x max-w-3xl py-10 sm:py-16">
        <div className="card p-6 shadow-card sm:p-10">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-10 w-10 shrink-0 text-brand" />
            <div>
              <p className="eyebrow">Commande {reference}</p>
              <h1 className="page-title mt-1 text-3xl">
                {paid ? "Paiement reçu, merci !" : "Votre site est prêt à être vu !"}
              </h1>
              <p className="mt-2 text-ink/60">
                {paid
                  ? "Nous finalisons votre site et le publions sous 48 h. Vous recevrez un message dès qu'il est en ligne."
                  : "Nous avons généré une première version de votre site. Ouvrez l'aperçu, puis réglez votre commande pour que nous le publiions sous 48 h."}
              </p>
            </div>
          </div>

          {paiement === "ok" && !paid && (
            <p className="mt-6 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Paiement en cours de confirmation. Cette page se met à jour dès sa réception.
            </p>
          )}
          {paiement === "annule" && (
            <p className="mt-6 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">Paiement annulé. Vous pouvez réessayer ou choisir un autre moyen ci-dessous.</p>
          )}

          <div className="mt-8 grid gap-4 rounded-2xl bg-paper p-5 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-wider text-ink/50">Établissement</p>
              <p className="font-semibold">{order.site.businessName}</p>
              <p className="text-sm text-ink/60">{order.site.city}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ink/50">Offre {plan?.name}</p>
              <p className="text-2xl font-bold">{formatMoney(order.amount, order.currency)}</p>
              <p className="text-sm text-ink/60">puis {formatMoney(order.monthly, order.currency)}/mois</p>
            </div>
          </div>

          <Link href={`/s/${order.site.slug}`} target="_blank" className="btn-secondary mt-4 w-full">
            Voir l&apos;aperçu de mon site <ExternalLink className="h-4 w-4" />
          </Link>

          {!paid && order.status !== "ANNULE" && (
            <section className="mt-10">
              <h2 className="text-xl font-bold">Régler ma commande</h2>
              {canStripe && (
                <form action={startCheckout} className="mt-4">
                  <input type="hidden" name="orderId" value={order.id} />
                  <button type="submit" className="btn-primary w-full py-4 text-base">
                    <CreditCard className="h-5 w-5" /> Payer {formatMoney(order.amount, order.currency)} par carte
                  </button>
                </form>
              )}
              <div className="mt-4 space-y-4" data-testid="manual-payment">
                {canStripe && <p className="text-center text-sm text-ink/50">ou</p>}
                <div className="rounded-2xl border border-ink/10 p-5">
                  <p className="flex items-center gap-2 font-semibold">
                    <Banknote className="h-5 w-5 text-brand" /> Paiement par virement, espèces ou sur WhatsApp
                  </p>
                  {me.bank.rib ? (
                    <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-[9rem_1fr]">
                      <dt className="text-ink/50">Banque</dt>
                      <dd className="font-medium">{me.bank.name}</dd>
                      <dt className="text-ink/50">Titulaire</dt>
                      <dd className="font-medium">{me.bank.holder}</dd>
                      <dt className="text-ink/50">RIB</dt>
                      <dd className="font-mono font-medium">{me.bank.rib}</dd>
                      <dt className="text-ink/50">Montant</dt>
                      <dd className="font-medium">
                        {formatMoney(order.amount, order.currency)}
                        {plan && <span className="text-ink/50"> (≈ {formatMoney(plan.priceMad, "MAD")})</span>}
                      </dd>
                      <dt className="text-ink/50">Référence</dt>
                      <dd className="font-mono font-medium">{reference}</dd>
                    </dl>
                  ) : (
                    <p className="mt-3 text-sm text-ink/60">Contactez-nous sur WhatsApp pour recevoir les coordonnées de paiement.</p>
                  )}
                  <p className="mt-4 text-sm text-ink/60">
                    Vous préférez payer en espèces ? Nous passons vous voir. Un acompte de 50 % suffit pour lancer la mise en ligne.
                  </p>
                  {me.whatsapp && (
                    <a href={waLink(me.whatsapp, whatsappText)} target="_blank" rel="noopener" className="btn-whatsapp mt-5 w-full">
                      <MessageCircle className="h-5 w-5" /> Finaliser sur WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
