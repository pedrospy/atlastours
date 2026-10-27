import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/forms";
import { Logo } from "@/components/Logo";
import { isAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Connexion · Envol Admin", robots: { index: false, follow: false } };

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin");
  const missing = ["ADMIN_PASSWORD", "DATABASE_URL"].filter((key) => !process.env[key]);
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-brand-soft to-paper px-5">
      <div className="w-full max-w-sm">
        <div className="mb-6 flex justify-center"><Logo /></div>
        <div className="card shadow-card">
          <h1 className="text-xl font-bold">Espace administrateur</h1>
          <p className="mb-6 mt-1 text-sm text-ink/60">Ventes, élèves, prospects et contenu de la formation.</p>
          <AdminLoginForm />
        </div>
        {missing.length > 0 && (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
            <p className="font-bold">Le site n&apos;est pas encore configuré</p>
            <p className="mt-1">
              Dans Vercel → <strong>Settings</strong> → <strong>Environment Variables</strong>, ajoutez <code className="font-semibold">{missing.join(" et ")}</code>,
              puis <strong>Deployments</strong> → « … » → <strong>Redeploy</strong>.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
