import "server-only";
import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";
import { db } from "./db";

const ADMIN_COOKIE = "envol_admin";
const STUDENT_COOKIE = "envol_eleve";
const LEAD_COOKIE = "envol_lead";
const MAX_AGE = 60 * 60 * 24 * 30;

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 32) throw new Error("AUTH_SECRET doit contenir au moins 32 caractères");
  return new TextEncoder().encode(value);
}

async function setToken(name: string, sub: string, role: string) {
  const token = await new SignJWT({ sub, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(secret());
  (await cookies()).set(name, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" && (process.env.NEXT_PUBLIC_APP_URL ?? "").startsWith("https"),
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

async function readToken(name: string, role: string) {
  const token = (await cookies()).get(name)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    return payload.role === role && typeof payload.sub === "string" ? payload.sub : null;
  } catch {
    return null;
  }
}

export function checkAdminPassword(candidate: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = createHash("sha256").update(candidate).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

export const createAdminSession = () => setToken(ADMIN_COOKIE, "admin", "admin");
export const destroyAdminSession = async () => (await cookies()).delete(ADMIN_COOKIE);
export const isAdmin = async () => (await readToken(ADMIN_COOKIE, "admin")) === "admin";

export async function requireAdmin() {
  if (!(await isAdmin())) redirect("/admin/connexion");
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  return `${salt}:${scryptSync(password, salt, 64).toString("hex")}`;
}

export function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const candidate = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

export const createStudentSession = (studentId: string) => setToken(STUDENT_COOKIE, studentId, "student");
export const destroyStudentSession = async () => (await cookies()).delete(STUDENT_COOKIE);

export async function currentStudent() {
  const id = await readToken(STUDENT_COOKIE, "student");
  if (!id) return null;
  return db.student.findUnique({ where: { id }, include: { orders: { orderBy: { createdAt: "desc" } } } });
}

export async function requireStudent() {
  const student = await currentStudent();
  if (!student) redirect("/connexion");
  return student;
}

export const createLeadSession = (leadId: string) => setToken(LEAD_COOKIE, leadId, "lead");
export const hasLeadAccess = async () => Boolean(await readToken(LEAD_COOKIE, "lead"));
