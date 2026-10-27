import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/LoginForm";
import { Logo } from "@/components/Logo";
import { isAdmin } from "@/lib/auth";

export const metadata: Metadata = { title: "Connexion · Vitrina Admin", robots: { index: false, follow: false } };

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin");
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
      </div>
    </main>
  );
}
