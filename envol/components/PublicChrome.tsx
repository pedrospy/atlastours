import Link from "next/link";
import { owner } from "@/lib/owner";
import { waLink } from "@/lib/format";
import { Logo } from "./Logo";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="flex items-center gap-1 text-sm font-medium text-ink/70">
          <Link href="/#programme" className="hidden rounded-lg px-3 py-2 hover:text-ink md:block">Programme</Link>
          <Link href="/#offres" className="hidden rounded-lg px-3 py-2 hover:text-ink md:block">Offres</Link>
          <Link href="/#faq" className="hidden rounded-lg px-3 py-2 hover:text-ink md:block">FAQ</Link>
          <Link href="/connexion" className="rounded-lg px-3 py-2 hover:text-ink">Espace élève</Link>
          <Link href="/gratuit" className="btn-primary btn-sm hidden sm:inline-flex">Leçons gratuites</Link>
        </nav>
      </div>
    </header>
  );
}

export function PublicFooter() {
  const o = owner();
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="container-x flex flex-col gap-6 py-10 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo />
          <p className="mt-2 max-w-sm">Formation en ligne pour lancer une activité indépendante de création de sites avec l&apos;IA.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/gratuit" className="hover:text-ink">Mini-formation gratuite</Link>
          <Link href="/commander" className="hover:text-ink">S&apos;inscrire</Link>
          <Link href="/connexion" className="hover:text-ink">Espace élève</Link>
          <Link href="/mentions-legales" className="hover:text-ink">Mentions légales &amp; CGV</Link>
          {o.whatsapp && <a href={waLink(o.whatsapp, "Bonjour, j'ai une question sur la formation Envol.")} className="hover:text-ink">WhatsApp</a>}
          {o.email && <a href={`mailto:${o.email}`} className="hover:text-ink">{o.email}</a>}
        </div>
      </div>
    </footer>
  );
}

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main>{children}</main>
      <PublicFooter />
    </>
  );
}
