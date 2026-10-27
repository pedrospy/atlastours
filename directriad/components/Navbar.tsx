import { site } from "@/lib/site";

const links = [
  { href: "#calculateur", label: "Calculateur" },
  { href: "#offres", label: "Offres" },
  { href: "#methode", label: "Méthode" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/85 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-extrabold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">D</span>
          {site.name}
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-primary !px-5 !py-2 text-sm">
          Audit gratuit
        </a>
      </nav>
    </header>
  );
}
