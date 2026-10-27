import { CheckCircle2, CircleAlert } from "lucide-react";

export function setupStatus() {
  return [
    { key: "ADMIN_PASSWORD", ok: Boolean(process.env.ADMIN_PASSWORD), required: true, help: "Votre mot de passe pour /admin (choisissez-le vous-même)." },
    { key: "DATABASE_URL", ok: Boolean(process.env.DATABASE_URL), required: true, help: "Ajouté automatiquement par Vercel → Storage → Neon." },
    { key: "OWNER_WHATSAPP", ok: Boolean(process.env.OWNER_WHATSAPP), required: false, help: "Votre WhatsApp, ex. 212612345678 : les clients vous écrivent ici." },
    { key: "OWNER_NAME", ok: Boolean(process.env.OWNER_NAME), required: false, help: "Votre prénom, signé dans les messages aux commerçants." },
    { key: "BANK_RIB", ok: Boolean(process.env.BANK_RIB), required: false, help: "Votre RIB, affiché pour le paiement par virement (avec BANK_NAME et BANK_HOLDER)." },
  ];
}

export function SetupChecklist({ onlyMissing = false }: { onlyMissing?: boolean }) {
  const items = setupStatus().filter((i) => !onlyMissing || !i.ok);
  if (!items.length) return null;
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm">
      <p className="font-bold text-amber-900">Réglages à compléter dans Vercel</p>
      <p className="mt-1 text-amber-900/80">
        Vercel → votre projet Vitrina → <strong>Settings</strong> → <strong>Environment Variables</strong>, ajoutez la variable, puis{" "}
        <strong>Deployments</strong> → « … » → <strong>Redeploy</strong>.
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i.key} className="flex gap-2">
            {i.ok ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> : <CircleAlert className={`mt-0.5 h-4 w-4 shrink-0 ${i.required ? "text-red-600" : "text-amber-600"}`} />}
            <span>
              <code className="font-semibold">{i.key}</code>
              {!i.ok && i.required && <span className="ml-1 text-xs font-bold text-red-600">obligatoire</span>} — <span className="text-ink/70">{i.help}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
