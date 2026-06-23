import { decorativePhrases, type DecorativePhraseKey } from "@/lib/arabic";

type Variant = "hero-watermark" | "hero-accent" | "nav" | "section" | "footer";

const variantStyles: Record<Variant, string> = {
  "hero-watermark":
    "font-display pointer-events-none select-none text-[clamp(4rem,14vw,11rem)] font-bold italic leading-none text-gold/[0.12]",
  "hero-accent":
    "font-display text-xl font-semibold italic text-gold-light sm:text-2xl",
  nav: "font-display text-sm italic text-gold-light/70",
  section:
    "font-display text-xl font-semibold italic text-gold-dark/80 sm:text-2xl",
  footer: "font-display text-3xl font-bold italic text-gold/40 sm:text-4xl",
};

interface ArabicCalligraphyProps {
  phrase: DecorativePhraseKey;
  variant?: Variant;
  className?: string;
}

export function ArabicCalligraphy({
  phrase,
  variant = "section",
  className = "",
}: ArabicCalligraphyProps) {
  const { text } = decorativePhrases[phrase];

  return (
    <span
      lang="en"
      className={`${variantStyles[variant]} ${className}`}
      aria-hidden={variant === "hero-watermark"}
    >
      {text}
    </span>
  );
}

interface SectionArabicProps {
  phrase: DecorativePhraseKey;
}

export function SectionArabic({ phrase }: SectionArabicProps) {
  return (
    <div className="mb-3 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-4">
      <ArabicCalligraphy phrase={phrase} variant="section" />
      <span className="hidden h-px w-12 bg-gold/40 sm:block" aria-hidden />
    </div>
  );
}
