import type { Metadata } from "next";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { studentLogout } from "@/app/actions/public";
import { Logo } from "@/components/Logo";
import { requireStudent } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Ma formation · Envol", robots: { index: false, follow: false } };

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const student = await requireStudent();
  return (
    <div className="min-h-screen bg-paper">
      <header className="no-print sticky top-0 z-30 border-b border-ink/10 bg-white/90 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <Logo href="/espace" />
            <Link href="/espace" className="hidden text-sm font-medium text-ink/70 hover:text-ink sm:block">Ma formation</Link>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-ink/55 sm:inline">{student.name}</span>
            <form action={studentLogout}>
              <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-ink/60 hover:bg-paper hover:text-ink" aria-label="Déconnexion">
                <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </form>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
