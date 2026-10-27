import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/LoginForm";
import { Logo } from "@/components/Logo";
import { setupStatus } from "@/components/SetupChecklist";
import { isAdmin } from "@/lib/auth";

export const metadata: Metadata = { title: "Connexion · Vitrina Admin", robots: { index: false, follow: false } };

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin");
  const missing = setupStatus().filter((i) => i.required && !i.ok);
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-brand-soft to-paper px-5">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <Logo />
        </div>
        <div className="card shadow-card">
          <h1 className="text-xl font-bold">Espace administrateur</h1>
          <p className="mb-6 mt-1 text-sm text-ink/60">Commandes, sites clients et prospection.</p>
          <LoginForm />
        </div>
        {missing.length > 0 && (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
            <p className="font-bold">Le site n&apos;est pas encore configuré</p>
            <p className="mt-1">
              Dans Vercel → <strong>Settings</strong> → <strong>Environment Variables</strong>, ajoutez{" "}
              {missing.map((i, n) => (
                <span key={i.key}>
                  {n > 0 && " et "}
                  <code className="font-semibold">{i.key}</code>
                </span>
              ))}
              , puis <strong>Deployments</strong> → « … » → <strong>Redeploy</strong>.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
