"use client";

import { useId } from "react";

export type TransportIconType =
  | "sedan"
  | "van"
  | "suv"
  | "minibus"
  | "plane";

type Props = {
  type: TransportIconType;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export function TransportLineIcon({
  type,
  size = 120,
  className = "",
  strokeWidth = 1.15,
}: Props) {
  const uid = useId().replace(/:/g, "");
  const stroke = `url(#tl-gold-${uid})`;

  return (
    <svg
      width={size}
      height={Math.round(size * 0.42)}
      viewBox="0 0 120 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient id={`tl-gold-${uid}`} x1="0" y1="0" x2="120" y2="50">
          <stop offset="0%" stopColor="#f0d060" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
      </defs>

      {type === "sedan" && (
        <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 32h74c2 0 3.5-1.5 3.5-3.5V24c0-1.2-.5-2.3-1.3-3.1l-5.2-5.2c-.8-.8-1.9-1.3-3.1-1.3H28.4c-1.2 0-2.3.5-3.1 1.3L20.1 20.9A4.4 4.4 0 0 0 18.8 24v4.5c0 2 1.5 3.5 3.5 3.5Z" />
          <path d="M30 14.5h22l6 6.5H27.5L30 14.5Z" opacity="0.85" />
          <path d="M56 14.5h18l4.5 6.5H62L56 14.5Z" opacity="0.85" />
          <circle cx="32" cy="32" r="4.5" />
          <circle cx="78" cy="32" r="4.5" />
          <path d="M36.5 32h39" opacity="0.35" />
        </g>
      )}

      {type === "van" && (
        <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 32h88c2.2 0 4-1.8 4-4V22.5c0-1.4-.6-2.7-1.6-3.6L96 12.5H24.5L16.6 18.9c-1 .9-1.6 2.2-1.6 3.6V28c0 2.2 1.8 4 4 4Z" />
          <path d="M24 12.5V32M96 12.5V32M40 12.5V32M56 12.5V32M72 12.5V32" opacity="0.45" />
          <path d="M24 12.5h72l-4-5.5H28L24 12.5Z" opacity="0.75" />
          <circle cx="30" cy="32" r="4.5" />
          <circle cx="90" cy="32" r="4.5" />
        </g>
      )}

      {type === "suv" && (
        <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 32h78c2.5 0 4.5-2 4.5-4.5V23.5c0-1.3-.5-2.5-1.4-3.4l-6-6A4.5 4.5 0 0 0 87.6 13H30.4c-1.2 0-2.4.5-3.3 1.3l-6 6c-.9.9-1.4 2.1-1.4 3.4V27.5c0 2.5 2 4.5 4.5 4.5Z" />
          <path d="M28 13h10l4 7H27l1-7Z" opacity="0.85" />
          <path d="M44 13h26l5 7H49l-5-7Z" opacity="0.85" />
          <path d="M26 10h68" opacity="0.5" />
          <path d="M30 10v3M42 10v3M54 10v3M66 10v3M78 10v3" opacity="0.35" />
          <circle cx="32" cy="32" r="5" />
          <circle cx="82" cy="32" r="5" />
        </g>
      )}

      {type === "minibus" && (
        <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 32h96c2.8 0 5-2.2 5-5V21.5c0-1.6-.7-3.1-1.9-4.1L98 10.5H22L11.9 17.4c-1.2 1-1.9 2.5-1.9 4.1V27c0 2.8 2.2 5 5 5Z" />
          <path d="M22 10.5V32M38 10.5V32M54 10.5V32M70 10.5V32M86 10.5V32M98 10.5V32" opacity="0.4" />
          <path d="M22 10.5h76l-5-6H27l-5 6Z" opacity="0.75" />
          <path d="M104 18v9" opacity="0.55" />
          <circle cx="26" cy="32" r="4.5" />
          <circle cx="94" cy="32" r="4.5" />
        </g>
      )}

      {type === "plane" && (
        <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 8 48 22h-8l-4 8 8-2 4 14 4-14 8 2-4-8h-8L60 8Z" />
          <path d="M38 28h44" opacity="0.45" />
          <path d="M22 38h76" opacity="0.25" />
          <path d="M28 38v4M92 38v4" opacity="0.35" />
          <path d="M24 42h72" strokeDasharray="3 3" opacity="0.3" />
        </g>
      )}
    </svg>
  );
}

const transferIconMap = {
  airport: "plane",
  city: "sedan",
  intercity: "suv",
  group: "minibus",
} as const satisfies Record<string, TransportIconType>;

export function getTransferIcon(id: string): TransportIconType {
  return transferIconMap[id as keyof typeof transferIconMap] ?? "van";
}
