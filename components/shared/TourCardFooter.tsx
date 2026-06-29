import { Star } from "lucide-react";

type Props = {
  rating: number;
  reviews: number;
  fromLabel: string;
  priceLabel: string;
  perPersonLabel?: string;
  compact?: boolean;
};

export function TourCardFooter({
  rating,
  reviews,
  fromLabel,
  priceLabel,
  perPersonLabel,
  compact = false,
}: Props) {
  return (
    <div className="flex items-center justify-between gap-2 border-t border-sand-200 pt-3">
      <div className="flex min-w-0 items-center gap-1 text-sm text-midnight/85">
        <Star className={`shrink-0 fill-gold text-gold ${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
        <span className="font-semibold text-midnight">{rating}</span>
        <span className="hidden text-midnight/85 sm:inline">({reviews})</span>
      </div>
      <p
        className={`shrink-0 text-right font-display font-bold leading-none text-midnight ${
          compact ? "text-base" : "text-lg sm:text-xl"
        }`}
      >
        {fromLabel} {priceLabel}
        {perPersonLabel ? (
          <span className="ml-0.5 text-xs font-normal text-midnight/85">{perPersonLabel}</span>
        ) : null}
      </p>
    </div>
  );
}
