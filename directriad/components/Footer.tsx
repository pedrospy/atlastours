import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10 text-sm text-ink/60">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.tagline}
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
          <a href="/mentions-legales" className="hover:text-ink">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
