import { NextResponse, type NextRequest } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  getAdminSessionToken,
  isAdminPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

function safeNext(value: FormDataEntryValue | null) {
  return typeof value === "string" && value.startsWith("/admin") && !value.startsWith("/admin/login")
    ? value
    : "/admin";
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const password = form.get("password");
  const next = safeNext(form.get("next"));

  const token = await getAdminSessionToken();
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login?error=config", request.url), 303);
  }
  if (typeof password !== "string" || !isAdminPassword(password)) {
    // Slow down password guessing.
    await new Promise((resolve) => setTimeout(resolve, 800));
    const url = new URL("/admin/login", request.url);
    url.searchParams.set("error", "password");
    url.searchParams.set("next", next);
    return NextResponse.redirect(url, 303);
  }

  const response = NextResponse.redirect(new URL(next, request.url), 303);
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE,
  });
  return response;
}
