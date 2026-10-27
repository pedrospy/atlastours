"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { createSession, destroySession } from "@/lib/auth";

export type FormState = { error?: string; ok?: string } | undefined;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function signup(_: FormState, formData: FormData): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!name) return { error: "Indiquez votre nom." };
  if (!EMAIL_RE.test(email)) return { error: "Adresse email invalide." };
  if (password.length < 8) return { error: "Le mot de passe doit contenir au moins 8 caractères." };
  if (await db.user.findUnique({ where: { email } })) return { error: "Un compte existe déjà avec cet email." };

  const user = await db.user.create({
    data: { name, email, passwordHash: await bcrypt.hash(password, 10), businessName: name },
  });
  await createSession(user.id);
  redirect("/app");
}

export async function login(_: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return { error: "Email ou mot de passe incorrect." };
  }
  await createSession(user.id);
  redirect("/app");
}

export async function logout() {
  await destroySession();
  redirect("/");
}
