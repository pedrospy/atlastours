import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ExternalLink, GraduationCap, LayoutDashboard, LogOut, Magnet } from "lucide-react";
import { adminLogout } from "@/app/actions/admin";
import { Logo } from "@/components/Logo";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin · Envol", robots: { index: false, follow: false } };

const nav = [
  { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/admin/eleves", label: "Élèves", icon: GraduationCap },
  { href: "/admin/prospects", label: "Prospects", icon: Magnet },
  { href: "/admin/contenu", label: "Contenu", icon: BookOpen },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/90 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <Logo href="/admin" />
            <nav className="flex items-center gap-0.5 text-sm font-medium">
              {nav.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-ink/70 hover:bg-paper hover:text-ink" title={label}>
                  <Icon className="h-4 w-4" /> <span className="hidden md:inline">{label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-1">
            <Link href="/" target="_blank" className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-ink/60 hover:bg-paper lg:flex">
              Site public <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <form action={adminLogout}>
              <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-ink/60 hover:bg-paper hover:text-ink" aria-label="Déconnexion">
                <LogOut className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="container-x py-8">{children}</main>
    </div>
  );
}
