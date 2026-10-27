import { getPaymentProviderName, type PaymentProviderName } from "./config";
import { stripeProvider } from "./stripe";
import { paypalProvider } from "./paypal";

export type CheckoutRequest = {
  bookingId: string;
  reference: string;
  title: string;
  depositCents: number;
  currency: string;
  email: string;
  locale: string;
  cancelUrl: string;
};

export type CheckoutSession = {
  url: string;
  providerRef: string;
};

export interface PaymentProvider {
  name: Exclude<PaymentProviderName, "none">;
  createCheckout(request: CheckoutRequest): Promise<CheckoutSession>;
  /** Returns true once the deposit has actually been captured. */
  confirm(providerRef: string): Promise<boolean>;
}

export function getPaymentProvider(name = getPaymentProviderName()): PaymentProvider | null {
  if (name === "stripe") return stripeProvider;
  if (name === "paypal") return paypalProvider;
  return null;
}
