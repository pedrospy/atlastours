import Link from "next/link";

export function Logo({ href = "/", light = false }: { href?: string; light?: boolean }) {
  return (
    <Link href={href} className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
      <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
        <rect width="64" height="64" rx="16" fill="#4f46e5" />
        <path d="M16 42 L32 18 L48 42 L32 35 Z" fill="#fff" />
        <circle cx="32" cy="47" r="3.5" fill="#f97316" />
      </svg>
      <span className={light ? "text-white" : "text-ink"}>
        Envol<span className="text-accent">.</span>
      </span>
    </Link>
  );
}
