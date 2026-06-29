import { decorativePhrases, type DecorativePhraseKey } from "@/lib/arabic";

type Variant = "hero-watermark" | "hero-accent" | "nav" | "section" | "footer";

const variantStyles: Record<Variant, string> = {
  "hero-watermark":
    "font-display pointer-events-none select-none text-[clamp(4rem,14vw,11rem)] font-bold italic leading-none text-gold/[0.12]",
  "hero-accent":
    "font-display text-xl font-semibold italic text-gold-light sm:text-2xl",
  nav: "font-display text-sm italic text-gold-light/70",
  section:
    "font-display block text-lg font-medium italic leading-snug text-gold-dark/55 sm:text-xl",
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
  centered?: boolean;
  className?: string;
}

export function SectionArabic({
  phrase,
  centered = false,
  className = "",
}: SectionArabicProps) {
  return (
    <div
      className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 ${
        centered ? "items-center" : "items-start"
      }`}
    >
      <ArabicCalligraphy
        phrase={phrase}
        variant="section"
        className={className}
      />
      <span className="hidden h-px w-12 bg-gold/40 sm:block" aria-hidden />
    </div>
  );
}
