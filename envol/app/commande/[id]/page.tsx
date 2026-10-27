import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowRight, CheckCircle2, CreditCard, Landmark, MessageCircle, Wallet } from "lucide-react";
import { startCheckout } from "@/app/actions/public";
import { PublicShell } from "@/components/PublicChrome";
import { SubmitButton } from "@/components/SubmitButton";
import { currentStudent } from "@/lib/auth";
import { db } from "@/lib/db";
import { formatMoney, waLink } from "@/lib/format";
import { offerName } from "@/lib/offers";
import { owner } from "@/lib/owner";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Votre commande · Envol", robots: { index: false, follow: false } };

async function confirmStripeSession(orderId: string, sessionId: string) {
  const stripe = getStripe();
  if (!stripe) return;
  const session = await stripe.checkout.sessions.retrieve(sessionId).catch(() => null);
  if (session?.payment_status === "paid" && (session.metadata?.orderId ?? session.client_reference_id) === orderId) {
    await db.order.updateMany({
      where: { id: orderId, status: "EN_ATTENTE" },
      data: { status: "PAYEE", paidAt: new Date(), paymentMethod: "Carte (Stripe)", stripeSessionId: session.id },
    });
  }
}

export default async function OrderStatusPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { id } = await params;
  const { session_id } = await searchParams;
  const student = await currentStudent();
  if (!student) redirect(`/connexion?next=/commande/${id}`);
  if (session_id) await confirmStripeSession(id, session_id);

  const order = await db.order.findUnique({ where: { id } });
  if (!order || order.studentId !== student.id) notFound();

  const o = owner();
  const reference = `ENVOL-${order.number}`;
  const amount = formatMoney(order.amount);
  const whatsappText = `Bonjour, je viens de m'inscrire à la formation Envol (commande ${reference}, offre ${offerName(order.offer)}, ${amount}). Voici ma preuve de paiement.`;
  const paypalUrl = o.paypal ? `https://paypal.me/${o.paypal.replace(/^.*paypal\.me\//, "")}/${order.amount / 100}EUR` : "";

  return (
    <PublicShell>
      <div className="container-x max-w-2xl py-12">
        {order.status === "PAYEE" ? (
          <div className="card text-center shadow-card sm:p-10">
            <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
            <h1 className="page-title mt-4 text-3xl">Bienvenue dans la formation, {student.name.split(" ")[0]} !</h1>
            <p className="mt-2 text-ink/60">Paiement confirmé. Votre accès {offerName(order.offer)} est ouvert.</p>
            <Link href="/espace" className="btn-accent mt-8">
              Commencer la formation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : order.status === "EN_ATTENTE" ? (
          <>
            <p className="eyebrow">Commande {reference}</p>
            <h1 className="page-title mt-2 text-3xl">Dernière étape : le paiement</h1>
            <div className="card mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Formation Envol · offre {offerName(order.offer)}</p>
                {order.note && <p className="text-sm text-ink/55">{order.note}</p>}
              </div>
              <p className="font-display text-3xl font-extrabold">{amount}</p>
            </div>

            <div className="mt-6 space-y-4">
              {getStripe() && (
                <form action={startCheckout} className="card">
                  <input type="hidden" name="orderId" value={order.id} />
                  <p className="flex items-center gap-2 font-semibold"><CreditCard className="h-5 w-5 text-brand" /> Carte bancaire</p>
                  <p className="mb-4 mt-1 text-sm text-ink/60">Paiement sécurisé par Stripe. Accès ouvert automatiquement.</p>
                  <SubmitButton pendingLabel="Redirection…" className="btn-accent w-full">Payer {amount} par carte</SubmitButton>
                </form>
              )}

              {paypalUrl && (
                <div className="card">
                  <p className="flex items-center gap-2 font-semibold"><Wallet className="h-5 w-5 text-brand" /> PayPal</p>
                  <p className="mb-4 mt-1 text-sm text-ink/60">Indiquez la référence <strong>{reference}</strong> dans le message du paiement.</p>
                  <a href={paypalUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Payer {amount} avec PayPal</a>
                </div>
              )}

              {o.bank.rib && (
                <div className="card">
                  <p className="flex items-center gap-2 font-semibold"><Landmark className="h-5 w-5 text-brand" /> Virement bancaire</p>
                  <dl className="mt-3 grid grid-cols-[110px_1fr] gap-y-2 text-sm">
                    <dt className="text-ink/50">Banque</dt><dd>{o.bank.name}</dd>
                    <dt className="text-ink/50">Titulaire</dt><dd>{o.bank.holder}</dd>
                    <dt className="text-ink/50">RIB / IBAN</dt><dd className="font-mono">{o.bank.rib}</dd>
                    <dt className="text-ink/50">Montant</dt><dd className="font-semibold">{amount}</dd>
                    <dt className="text-ink/50">Référence</dt><dd className="font-mono font-semibold">{reference}</dd>
                  </dl>
                </div>
              )}

              {o.whatsapp && (
                <div className="card bg-paper">
                  <p className="flex items-center gap-2 font-semibold"><MessageCircle className="h-5 w-5 text-[#25d366]" /> Après votre paiement</p>
                  <p className="mb-4 mt-1 text-sm text-ink/60">
                    Envoyez la preuve de paiement sur WhatsApp : votre accès est ouvert dans la journée. Paiement en plusieurs fois possible sur demande.
                  </p>
                  <a href={waLink(o.whatsapp, whatsappText)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                    Envoyer ma preuve de paiement
                  </a>
                </div>
              )}
            </div>
            <p className="mt-6 text-center text-sm text-ink/55">
              En attendant, les leçons gratuites sont accessibles depuis <Link href="/espace" className="text-brand underline">votre espace</Link>.
            </p>
          </>
        ) : (
          <div className="card text-center">
            <h1 className="page-title">Commande {reference} {order.status === "REMBOURSEE" ? "remboursée" : "annulée"}</h1>
            <Link href="/commander" className="btn-primary mt-6">Nouvelle inscription</Link>
          </div>
        )}
      </div>
    </PublicShell>
  );
}
