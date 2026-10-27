import type { Order } from "@prisma/client";
import { markOrderPaid, setOrderStatus } from "@/app/actions/admin";

export function OrderActions({ order }: { order: Pick<Order, "id" | "status"> }) {
  if (order.status === "EN_ATTENTE" || order.status === "ANNULEE") {
    return (
      <div className="flex flex-wrap items-center justify-end gap-1.5">
        <form action={markOrderPaid} className="flex items-center gap-1.5">
          <input type="hidden" name="orderId" value={order.id} />
          <select name="method" className="field w-auto py-1.5 text-xs" aria-label="Moyen de paiement" defaultValue="Virement">
            {["Virement", "PayPal", "Carte", "Espèces", "Wafacash / Cash Plus"].map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <button className="btn-primary btn-sm">Marquer payée</button>
        </form>
        <form action={setOrderStatus}>
          <input type="hidden" name="orderId" value={order.id} />
          <input type="hidden" name="status" value={order.status === "ANNULEE" ? "EN_ATTENTE" : "ANNULEE"} />
          <button className="btn-danger btn-sm">{order.status === "ANNULEE" ? "Rouvrir" : "Annuler"}</button>
        </form>
      </div>
    );
  }
  if (order.status === "PAYEE") {
    return (
      <form action={setOrderStatus} className="flex justify-end">
        <input type="hidden" name="orderId" value={order.id} />
        <input type="hidden" name="status" value="REMBOURSEE" />
        <button className="btn-danger btn-sm">Rembourser (retire l&apos;accès)</button>
      </form>
    );
  }
  return null;
}
