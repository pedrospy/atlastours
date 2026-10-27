import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <Logo />
        <h1 className="mt-8 text-3xl font-bold">Page introuvable</h1>
        <p className="mt-2 text-ink/60">Ce site n&apos;existe pas ou n&apos;est plus en ligne.</p>
        <Link href="/" className="btn-primary mt-6">Retour à l&apos;accueil</Link>
      </div>
    </main>
  );
}
