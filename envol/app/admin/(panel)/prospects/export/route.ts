import { isAdmin } from "@/lib/auth";
import { db } from "@/lib/db";

const cell = (value: string) => `"${value.replace(/"/g, '""').replace(/^([=+\-@])/, "'$1")}"`;

export async function GET() {
  if (!(await isAdmin())) return new Response("Non autorisé", { status: 401 });
  const leads = await db.lead.findMany({ orderBy: { createdAt: "desc" } });
  const rows = [["prenom", "email", "source", "date"], ...leads.map((l) => [l.name, l.email, l.source, l.createdAt.toISOString()])];
  return new Response(`\uFEFF${rows.map((r) => r.map(cell).join(",")).join("\n")}`, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="prospects-envol.csv"`,
    },
  });
}
