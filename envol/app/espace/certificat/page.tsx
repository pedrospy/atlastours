import Link from "next/link";
import { redirect } from "next/navigation";
import { Logo } from "@/components/Logo";
import { PrintButton } from "@/components/PrintButton";
import { formatDate } from "@/lib/format";
import { owner } from "@/lib/owner";
import { studentContext } from "@/lib/student";

export default async function CertificatePage() {
  const { student, certified, completedAt } = await studentContext();
  if (!certified) redirect("/espace");
  const reference = `ENV-${student.id.slice(-8).toUpperCase()}`;

  return (
    <main className="container-x max-w-4xl py-10">
      <div className="no-print mb-6 flex justify-between">
        <Link href="/espace" className="btn-secondary">Retour</Link>
        <PrintButton />
      </div>
      <div className="relative overflow-hidden rounded-3xl border-[10px] border-brand-soft bg-white p-10 text-center shadow-card sm:p-16">
        <div className="flex justify-center"><Logo /></div>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-ink/45">Certificat de réussite</p>
        <p className="mt-6 text-ink/60">Ce certificat atteste que</p>
        <p className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{student.name}</p>
        <p className="mx-auto mt-6 max-w-xl text-ink/70">
          a suivi l&apos;intégralité de la formation <strong>« Freelance web avec l&apos;IA : du premier site au revenu récurrent »</strong> et réalisé
          l&apos;ensemble des exercices pratiques.
        </p>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 text-sm text-ink/60 sm:flex-row">
          <div>
            <p className="font-semibold text-ink">{formatDate(completedAt ?? new Date())}</p>
            <p>Date d&apos;obtention</p>
          </div>
          <div>
            <p className="font-display text-xl font-bold italic text-ink">{owner().name}</p>
            <p>Formateur, Envol Académie</p>
          </div>
          <div>
            <p className="font-mono font-semibold text-ink">{reference}</p>
            <p>Référence</p>
          </div>
        </div>
      </div>
    </main>
  );
}
