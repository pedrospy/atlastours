import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, LayoutDashboard, LogOut, Target } from "lucide-react";
import { logout } from "@/app/actions/admin";
import { Logo } from "@/components/Logo";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin · Vitrina", robots: { index: false, follow: false } };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/90 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <Logo href="/admin" />
            <nav className="flex items-center gap-1 text-sm font-medium">
              <Link href="/admin" className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-ink/70 hover:bg-paper hover:text-ink">
                <LayoutDashboard className="h-4 w-4" /> <span className="hidden sm:inline">Tableau de bord</span>
              </Link>
              <Link href="/admin/prospects" className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-ink/70 hover:bg-paper hover:text-ink">
                <Target className="h-4 w-4" /> <span className="hidden sm:inline">Prospection</span>
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-1">
            <Link href="/" target="_blank" className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-ink/60 hover:bg-paper md:flex">
              Site public <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <form action={logout}>
              <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-ink/60 hover:bg-paper hover:text-ink" aria-label="Déconnexion">
                <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="container-x py-8">{children}</main>
    </div>
  );
}
