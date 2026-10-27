import Link from "next/link";
import { CreditCard, FileText, LayoutDashboard, LogOut, Settings, Users } from "lucide-react";
import { Logo } from "@/components/Logo";
import { requireUser } from "@/lib/auth";
import { logout } from "@/app/actions/auth";

export const dynamic = "force-dynamic";

const nav = [
  { href: "/app", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/app/documents", label: "Factures et devis", icon: FileText },
  { href: "/app/clients", label: "Clients", icon: Users },
  { href: "/app/parametres", label: "Paramètres", icon: Settings },
  { href: "/app/abonnement", label: "Abonnement", icon: CreditCard },
];

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();

  return (
    <div className="min-h-screen lg:flex">
      <aside className="border-b border-ink/10 bg-white print:hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-64 lg:flex-col lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between px-5 py-4">
          <Logo href="/app" />
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-bold ${
              user.plan === "PRO" ? "bg-brand text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {user.plan === "PRO" ? "PRO" : "GRATUIT"}
          </span>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-1 lg:flex-col lg:pb-0">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-ink/70 transition hover:bg-paper hover:text-ink"
            >
              <Icon className="h-4 w-4" /> {label}
            </Link>
          ))}
        </nav>
        <div className="hidden border-t border-ink/10 p-4 lg:block">
          <p className="truncate text-sm font-semibold">{user.businessName || user.name}</p>
          <p className="truncate text-xs text-ink/50">{user.email}</p>
          <form action={logout} className="mt-3">
            <button className="flex items-center gap-2 text-sm text-ink/60 hover:text-ink">
              <LogOut className="h-4 w-4" /> Déconnexion
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 px-5 py-8 sm:px-8 print:p-0">{children}</main>
    </div>
  );
}
