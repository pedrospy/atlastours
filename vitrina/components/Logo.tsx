import Link from "next/link";

export function Logo({ href = "/", light = false }: { href?: string; light?: boolean }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 font-bold tracking-tight">
      <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
        <rect width="64" height="64" rx="14" fill="#0f766e" />
        <path d="M14 20h8l10 22 10-22h8L36 50h-8z" fill="#fff" />
        <circle cx="48" cy="16" r="5" fill="#f59e0b" />
      </svg>
      <span className={`text-lg ${light ? "text-white" : "text-ink"}`}>Vitrina</span>
    </Link>
  );
}
