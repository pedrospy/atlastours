import Link from "next/link";
import { ArrowDown, ArrowUp, Eye, EyeOff, Gift, Pencil, Plus, Video } from "lucide-react";
import { createLesson, createModule, deleteModule, move, updateModule } from "@/app/actions/admin";
import { ConfirmButton } from "@/components/ConfirmButton";
import { db } from "@/lib/db";
import { minutes } from "@/lib/format";
import { offers } from "@/lib/offers";

function MoveButtons({ kind, id }: { kind: "module" | "lesson"; id: string }) {
  return (
    <div className="flex">
      {(["up", "down"] as const).map((dir) => (
        <form key={dir} action={move}>
          <input type="hidden" name="kind" value={kind} />
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="dir" value={dir} />
          <button className="rounded-lg p-1.5 text-ink/40 hover:bg-paper hover:text-ink" aria-label={dir === "up" ? "Monter" : "Descendre"}>
            {dir === "up" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
          </button>
        </form>
      ))}
    </div>
  );
}

export default async function ContentPage() {
  const modules = await db.module.findMany({ orderBy: { position: "asc" }, include: { lessons: { orderBy: { position: "asc" } } } });
  const all = modules.flatMap((m) => m.lessons);
  const withVideo = all.filter((l) => l.videoUrl).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="page-title">Contenu de la formation</h1>
          <p className="text-sm text-ink/55">
            {modules.length} modules · {all.length} leçons · {minutes(all.reduce((s, l) => s + l.duration, 0))} ·{" "}
            <strong className={withVideo < all.length ? "text-accent-dark" : "text-emerald-600"}>{withVideo}/{all.length} vidéos tournées</strong>
          </p>
        </div>
        <form action={createModule}>
          <button className="btn-primary btn-sm"><Plus className="h-4 w-4" /> Ajouter un module</button>
        </form>
      </div>

      {modules.map((m, i) => (
        <section key={m.id} className="card p-0">
          <div className="flex items-start gap-3 border-b border-ink/5 p-5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-soft font-display font-bold text-brand">{i + 1}</span>
            <form action={updateModule} className="grid flex-1 gap-2 sm:grid-cols-[1fr_150px_auto]">
              <input type="hidden" name="moduleId" value={m.id} />
              <input name="title" defaultValue={m.title} className="field font-semibold" aria-label="Titre du module" />
              <select name="tier" defaultValue={m.tier} className="field" aria-label="Offre requise">
                {offers.map((o) => (
                  <option key={o.id} value={o.id}>Offre {o.name}</option>
                ))}
              </select>
              <button className="btn-secondary btn-sm">Enregistrer</button>
              <input name="summary" defaultValue={m.summary} placeholder="Résumé affiché sur la page de vente" className="field sm:col-span-3" aria-label="Résumé" />
            </form>
            <MoveButtons kind="module" id={m.id} />
          </div>
          <ul className="divide-y divide-ink/5">
            {m.lessons.map((l) => (
              <li key={l.id} className="flex items-center gap-3 px-5 py-2.5 text-sm">
                <span className="flex w-16 shrink-0 gap-1.5 text-ink/35">
                  {l.published ? <Eye className="h-4 w-4" aria-label="Publiée" /> : <EyeOff className="h-4 w-4 text-red-400" aria-label="Brouillon" />}
                  <Video className={`h-4 w-4 ${l.videoUrl ? "text-emerald-500" : ""}`} aria-label={l.videoUrl ? "Vidéo présente" : "Pas de vidéo"} />
                  {l.freePreview && <Gift className="h-4 w-4 text-accent" aria-label="Gratuite" />}
                </span>
                <Link href={`/admin/contenu/${l.id}`} className="flex-1 hover:text-brand">{l.title}</Link>
                <span className="text-xs text-ink/40">{l.duration} min</span>
                <MoveButtons kind="lesson" id={l.id} />
                <Link href={`/admin/contenu/${l.id}`} className="rounded-lg p-1.5 text-ink/40 hover:bg-paper hover:text-ink" aria-label="Modifier">
                  <Pencil className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-ink/5 px-5 py-3">
            <form action={createLesson}>
              <input type="hidden" name="moduleId" value={m.id} />
              <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"><Plus className="h-4 w-4" /> Ajouter une leçon</button>
            </form>
            <form action={deleteModule}>
              <input type="hidden" name="moduleId" value={m.id} />
              <ConfirmButton message={`Supprimer le module « ${m.title} » et ses ${m.lessons.length} leçon(s) ?`}>Supprimer le module</ConfirmButton>
            </form>
          </div>
        </section>
      ))}
    </div>
  );
}
