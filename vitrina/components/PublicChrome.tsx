import Link from "next/link";
import { Logo } from "./Logo";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 md:flex">
          <Link href="/#comment" className="hover:text-ink">Comment ça marche</Link>
          <Link href="/#exemples" className="hover:text-ink">Exemples</Link>
          <Link href="/#offres" className="hover:text-ink">Tarifs</Link>
          <Link href="/#faq" className="hover:text-ink">FAQ</Link>
        </nav>
        <Link href="/commander" className="btn-primary px-4 py-2.5">
          Commander mon site
        </Link>
      </div>
    </header>
  );
}

export function PublicFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="container-x flex flex-col gap-6 py-10 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-2 max-w-sm">Des sites internet professionnels pour les commerces de proximité, livrés en 48 h.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/commander" className="hover:text-ink">Commander</Link>
          <Link href="/#offres" className="hover:text-ink">Tarifs</Link>
          <Link href="/mentions-legales" className="hover:text-ink">Mentions légales & CGV</Link>
        </div>
        <p>© {new Date().getFullYear()} Vitrina</p>
      </div>
    </footer>
  );
}
