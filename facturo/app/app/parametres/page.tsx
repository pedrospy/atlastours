import { requireUser } from "@/lib/auth";
import { SettingsForm } from "@/components/SettingsForm";

export default async function SettingsPage() {
  const user = await requireUser();
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="page-title">Paramètres</h1>
      <p className="mb-6 mt-1 text-sm text-ink/60">Ces informations apparaissent sur toutes vos factures et devis.</p>
      <SettingsForm
        values={{
          name: user.name,
          businessName: user.businessName,
          address: user.address,
          taxId: user.taxId,
          phone: user.phone,
          iban: user.iban,
          currency: user.currency,
          defaultVat: user.defaultVat,
        }}
      />
    </div>
  );
}
