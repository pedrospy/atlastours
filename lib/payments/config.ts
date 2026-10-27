export type PaymentProviderName = "stripe" | "paypal" | "none";

export function getPaymentProviderName(): PaymentProviderName {
  const value = process.env.PAYMENT_PROVIDER?.toLowerCase();
  return value === "stripe" || value === "paypal" ? value : "none";
}

export function isOnlinePaymentEnabled() {
  return getPaymentProviderName() !== "none";
}

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3003").replace(/\/$/, "");
}
