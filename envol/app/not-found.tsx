import Link from "next/link";
import { PublicShell } from "@/components/PublicChrome";

export default function NotFound() {
  return (
    <PublicShell>
      <div className="container-x py-24 text-center">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="page-title mt-2 text-3xl">Cette page n&apos;existe pas</h1>
        <Link href="/" className="btn-primary mt-8">Retour à l&apos;accueil</Link>
      </div>
    </PublicShell>
  );
}
