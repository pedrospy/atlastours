import { randomBytes } from "node:crypto";

const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/** Unguessable public booking reference, e.g. AN-7KQ2M9XC4P. */
export function generateBookingReference() {
  const bytes = randomBytes(10);
  let code = "";
  for (const byte of bytes) code += alphabet[byte % alphabet.length];
  return `AN-${code}`;
}
