import { Check } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { documentsThisMonth, FREE_DOCS_PER_MONTH, PRO_PRICE_LABEL, proFeatures } from "@/lib/plans";
import { stripeConfigured } from "@/lib/stripe";
import { openBillingPortal, startCheckout } from "@/app/actions/billing";
import { SubmitButton } from "@/components/SubmitButton";

export default async function BillingPage({
  searchParams,
}: {
  searchParams: Promise<{ succes?: string; erreur?: string; limite?: string }>;
}) {
  const user = await requireUser();
  const params = await searchParams;
  const used = await documentsThisMonth(user.id);
  const isPro = user.plan === "PRO";

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="page-title">Abonnement</h1>

      {params.succes && !isPro && (
        <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Paiement reçu ! Votre compte passe en Pro dans quelques secondes. Rechargez la page si besoin.
        </p>
      )}
      {params.erreur === "stripe" && (
        <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Le paiement en ligne n&apos;est pas encore activé sur ce site.
        </p>
      )}
      {params.limite && !isPro && (
        <p className="mt-4 rounded-lg bg-brand-soft px-4 py-3 text-sm">
          Vous avez atteint la limite de {FREE_DOCS_PER_MONTH} documents gratuits ce mois-ci.
        </p>
      )}

      <div className="card mt-6">
        <p className="text-sm text-ink/60">Plan actuel</p>
        <p className="mt-1 text-2xl font-bold">{isPro ? "Pro" : "Gratuit"}</p>
        {!isPro && (
          <p className="mt-1 text-sm text-ink/60">{used} / {FREE_DOCS_PER_MONTH} documents utilisés ce mois-ci</p>
        )}
        {isPro && user.stripeCustomerId && (
          <form action={openBillingPortal} className="mt-4">
            <SubmitButton className="btn-secondary" pendingLabel="Ouverture…">Gérer mon abonnement et mes factures</SubmitButton>
          </form>
        )}
      </div>

      {!isPro && (
        <div className="card mt-6 border-brand">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-lg font-bold">Facturo Pro</p>
              <p className="text-3xl font-extrabold">{PRO_PRICE_LABEL}</p>
              <p className="text-sm text-ink/60">Sans engagement, résiliable en 1 clic.</p>
            </div>
            <form action={startCheckout}>
              <SubmitButton pendingLabel="Redirection…" className="btn-primary !px-6 !py-3">
                {stripeConfigured() ? "Passer à Pro" : "Passer à Pro (bientôt)"}
              </SubmitButton>
            </form>
          </div>
          <ul className="mt-6 space-y-2 text-sm">
            {proFeatures.map((f) => (
              <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-brand" /> {f}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
