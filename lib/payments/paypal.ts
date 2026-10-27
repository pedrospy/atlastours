import { getSiteUrl } from "./config";
import type { PaymentProvider } from "./provider";

function apiBase() {
  return process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
}

async function getAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_SECRET;
  if (!clientId || !secret) throw new Error("PAYPAL_CLIENT_ID / PAYPAL_SECRET are not configured");

  const response = await fetch(`${apiBase()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`PayPal auth failed (${response.status})`);
  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

async function paypalFetch<T>(path: string, init: RequestInit & { idempotencyKey?: string } = {}) {
  const token = await getAccessToken();
  const response = await fetch(`${apiBase()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.idempotencyKey ? { "PayPal-Request-Id": init.idempotencyKey } : {}),
    },
    cache: "no-store",
  });
  const data = (await response.json().catch(() => ({}))) as T;
  return { ok: response.ok, status: response.status, data };
}

type PayPalOrder = {
  id: string;
  status: string;
  links?: { href: string; rel: string }[];
  details?: { issue: string }[];
};

export const paypalProvider: PaymentProvider = {
  name: "paypal",

  async createCheckout(request) {
    const value = (request.depositCents / 100).toFixed(2);
    const { ok, status, data } = await paypalFetch<PayPalOrder>("/v2/checkout/orders", {
      method: "POST",
      idempotencyKey: `create-${request.bookingId}-${Date.now()}`,
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: request.reference,
            custom_id: request.bookingId,
            description: `${request.title} – ${request.reference}`.slice(0, 127),
            amount: { currency_code: request.currency, value },
          },
        ],
        payment_source: {
          paypal: {
            experience_context: {
              brand_name: "Arganis Nomad",
              user_action: "PAY_NOW",
              shipping_preference: "NO_SHIPPING",
              return_url: `${getSiteUrl()}/api/payments/return?provider=paypal`,
              cancel_url: request.cancelUrl,
            },
          },
        },
      }),
    });
    const approveUrl = data.links?.find((link) => link.rel === "payer-action" || link.rel === "approve")?.href;
    if (!ok || !approveUrl) throw new Error(`PayPal order creation failed (${status})`);
    return { url: approveUrl, providerRef: data.id };
  },

  async confirm(orderId) {
    const capture = await paypalFetch<PayPalOrder>(`/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`, {
      method: "POST",
      idempotencyKey: `capture-${orderId}`,
    });
    if (capture.ok) return capture.data.status === "COMPLETED";

    const order = await paypalFetch<PayPalOrder>(`/v2/checkout/orders/${encodeURIComponent(orderId)}`);
    return order.ok && order.data.status === "COMPLETED";
  },
};
