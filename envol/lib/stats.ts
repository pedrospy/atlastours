import "server-only";
import { db } from "./db";
import { offers } from "./offers";
import { owner } from "./owner";

function monthStart(offset = 0) {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + offset, 1);
}

export async function revenueStats() {
  const start = monthStart();
  const prevStart = monthStart(-1);
  const [paid, prevPaid, leads, prevLeads, pending, students] = await Promise.all([
    db.order.findMany({ where: { status: "PAYEE", paidAt: { gte: start } }, select: { amount: true, offer: true } }),
    db.order.aggregate({ where: { status: "PAYEE", paidAt: { gte: prevStart, lt: start } }, _sum: { amount: true } }),
    db.lead.count({ where: { createdAt: { gte: start } } }),
    db.lead.count({ where: { createdAt: { gte: prevStart, lt: start } } }),
    db.order.aggregate({ where: { status: "EN_ATTENTE" }, _sum: { amount: true }, _count: true }),
    db.student.count({ where: { orders: { some: { status: "PAYEE" } } } }),
  ]);

  const revenue = paid.reduce((sum, o) => sum + o.amount, 0);
  const { goal } = owner();
  const missing = Math.max(0, goal.min - revenue);
  const missingMax = Math.max(0, goal.max - revenue);

  const byOffer = offers.map((offer) => {
    const sales = paid.filter((o) => o.offer === offer.id);
    return { offer, count: sales.length, total: sales.reduce((s, o) => s + o.amount, 0) };
  });

  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const projection = now.getDate() > 0 ? Math.round((revenue / now.getDate()) * daysInMonth) : 0;

  return {
    revenue,
    previousRevenue: prevPaid._sum.amount ?? 0,
    sales: paid.length,
    averageBasket: paid.length ? Math.round(revenue / paid.length) : 0,
    leads,
    previousLeads: prevLeads,
    conversion: leads ? paid.length / leads : 0,
    pendingAmount: pending._sum.amount ?? 0,
    pendingCount: pending._count,
    students,
    goal,
    missing,
    missingMax,
    projection,
    byOffer,
    paths: missing > 0 ? offers.map((o) => ({ offer: o, needed: Math.ceil(missing / o.price) })) : [],
  };
}
