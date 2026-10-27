import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { deleteSite, setSitePublished } from "@/app/actions/admin";
import { ConfirmButton } from "@/components/ConfirmButton";
import { SiteEditForm } from "@/components/SiteEditForm";
import { StatusBadge } from "@/components/StatusBadge";
import { toSiteData } from "@/components/site/SiteRenderer";
import { db } from "@/lib/db";

export default async function AdminSitePage({ params }: { params: Promise<{ id: string }> }) {
  const site = await db.site.findUnique({ where: { id: (await params).id }, include: { order: true, prospect: true } });
  if (!site) notFound();
  const data = toSiteData(site);
  const back = site.order ? `/admin/commandes/${site.order.id}` : site.prospect ? `/admin/prospects/${site.prospect.id}` : "/admin";
  const published = site.status === "PUBLISHED";

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link href={back} className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> Retour
      </Link>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="page-title flex flex-wrap items-center gap-3">
          {site.businessName} <StatusBadge status={site.status} />
        </h1>
        <div className="flex flex-wrap gap-2">
          <Link href={`/s/${site.slug}`} target="_blank" className="btn-secondary">
            Voir <ExternalLink className="h-4 w-4" />
          </Link>
          <form action={setSitePublished}>
            <input type="hidden" name="siteId" value={site.id} />
            <input type="hidden" name="publish" value={published ? "0" : "1"} />
            <button className={published ? "btn-secondary" : "btn-primary"}>{published ? "Dépublier" : "Publier"}</button>
          </form>
        </div>
      </div>

      <SiteEditForm site={{ ...data, id: site.id }} />

      <form action={deleteSite} className="text-right">
        <input type="hidden" name="siteId" value={site.id} />
        <input type="hidden" name="back" value={site.prospect ? "/admin/prospects" : "/admin"} />
        <ConfirmButton message="Supprimer définitivement ce site (et la commande ou le prospect associé) ?" className="btn-danger">
          Supprimer ce site
        </ConfirmButton>
      </form>
    </div>
  );
}
