export const ADMIN_SESSION_COOKIE = "an_admin";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 30;

export function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function isAdminPassword(value: string) {
  const password = process.env.ADMIN_PASSWORD;
  return Boolean(password) && safeEqual(value, password!);
}

/** Validates an HTTP Basic `Authorization` header against ADMIN_PASSWORD (any username). Edge-safe. */
export function isAdminAuthorization(header: string | null) {
  if (!header?.startsWith("Basic ")) return false;
  try {
    const decoded = atob(header.slice(6));
    return isAdminPassword(decoded.slice(decoded.indexOf(":") + 1));
  } catch {
    return false;
  }
}

/**
 * Session cookie value derived from ADMIN_PASSWORD, so changing the password logs every session out.
 * Uses Web Crypto to stay compatible with the Edge middleware.
 */
export async function getAdminSessionToken() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode("arganis-admin-session-v1"));
  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function isAdminSession(cookieValue: string | undefined) {
  const token = await getAdminSessionToken();
  return Boolean(token && cookieValue) && safeEqual(cookieValue!, token!);
}
