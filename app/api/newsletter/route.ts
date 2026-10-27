import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getPromoCode, PROMO_PERCENT } from "@/lib/booking/service";
import { addToAudience, sendNewsletterWelcome } from "@/lib/email";
import { locales } from "@/lib/i18n/config";

export const runtime = "nodejs";

const schema = z.object({
  email: z.email().max(200),
  locale: z.enum(locales),
  company: z.string().max(200).optional(),
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid_request" }, { status: 400 });

  const { email, locale, company } = parsed.data;
  const code = getPromoCode();
  if (company) return NextResponse.json({ promoCode: code, percent: PROMO_PERCENT });

  const normalized = email.toLowerCase();
  try {
    const existing = await prisma.newsletterSubscriber.findUnique({ where: { email: normalized } });
    if (!existing) {
      await prisma.newsletterSubscriber.create({ data: { email: normalized, locale } });
      await Promise.all([addToAudience(normalized), sendNewsletterWelcome(normalized, locale, code, PROMO_PERCENT)]);
    }
  } catch (error) {
    console.error("[newsletter] subscribe failed", error);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }

  return NextResponse.json({ promoCode: code, percent: PROMO_PERCENT });
}
