"use client";

import { useId } from "react";
import Image from "next/image";
import { useDictionary } from "@/lib/i18n/locale-context";

type LogoVariant = "mark" | "image";

type LogoProps = {
  size?: number;
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
};

function starPath(
  cx: number,
  cy: number,
  outer: number,
  inner: number,
  points = 8
) {
  const step = Math.PI / points;
  let d = "";
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = -Math.PI / 2 + i * step;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }
  return `${d}Z`;
}

export function Logo({
  size = 44,
  variant = "mark",
  className = "",
  priority = false,
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const gold = `rn-gold-${uid}`;
  const bg = `rn-bg-${uid}`;
  const duneFar = `rn-dune-far-${uid}`;
  const duneNear = `rn-dune-near-${uid}`;

  if (variant === "image") {
    return (
      <Image
        src="/arganis-nomad-logo.png"
        alt="Arganis Nomad"
        width={size}
        height={size}
        unoptimized
        className={`shrink-0 object-contain ${className}`}
        priority={priority}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Arganis Nomad — tourism and transport"
      className={`logo-svg shrink-0 ${className}`}
    >
      <defs>
        <radialGradient id={bg} cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#452828" />
          <stop offset="55%" stopColor="#2d1212" />
          <stop offset="100%" stopColor="#120808" />
        </radialGradient>
        <linearGradient id={gold} x1="12" y1="10" x2="52" y2="54">
          <stop offset="0%" stopColor="#f4d875" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#9a7618" />
        </linearGradient>
        <linearGradient id={duneFar} x1="0" y1="42" x2="64" y2="64">
          <stop offset="0%" stopColor="#6b3830" />
          <stop offset="100%" stopColor="#3d2018" />
        </linearGradient>
        <linearGradient id={duneNear} x1="0" y1="48" x2="64" y2="64">
          <stop offset="0%" stopColor="#d4784a" />
          <stop offset="100%" stopColor="#8f4528" />
        </linearGradient>
        <clipPath id={`rn-clip-${uid}`}>
          <circle cx="32" cy="32" r="31" />
        </clipPath>
      </defs>

      <circle cx="32" cy="32" r="31" fill={`url(#${bg})`} />
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke={`url(#${gold})`}
        strokeWidth="1.15"
        fill="none"
      />
      <circle
        cx="32"
        cy="32"
        r="26.5"
        stroke="#c9a227"
        strokeWidth="0.45"
        fill="none"
        opacity="0.25"
      />

      <g clipPath={`url(#rn-clip-${uid})`}>
        {/* Tourism — dunes & Moroccan star */}
        <path
          d="M0 44C11 38 21 40 32 42C43 44 53 42 64 39V64H0V44Z"
          fill={`url(#${duneFar})`}
          opacity="0.6"
        />
        <path
          d="M0 49C13 45 23 47 32 48C41 49 51 47 64 44V64H0V49Z"
          fill={`url(#${duneNear})`}
        />

        <path
          d={starPath(32, 15, 5.5, 2.4)}
          fill="none"
          stroke={`url(#${gold})`}
          strokeWidth="0.9"
          strokeLinejoin="round"
        />

        {/* Transport — thin tourist van on the road */}
        <path
          d="M8 50 Q32 46 56 50"
          stroke="#e0bc4a"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeDasharray="2.5 2"
          opacity="0.4"
        />

        <g
          stroke={`url(#${gold})`}
          strokeWidth="1.05"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M11 38h40c1.4 0 2.5-1.1 2.5-2.5v-3.2c0-.7-.3-1.4-.9-1.8l-4.8-4.4H18.2l-5 4.4c-.6.4-.9 1.1-.9 1.8v2.9c0 1.4 1.1 2.5 2.5 2.5Z" />
          <path d="M17.5 25.5h15l3.2 3.8H16.8l.7-3.8Z" opacity="0.85" />
          <path d="M35.5 25.5h12l2.8 3.8H34l1.5-3.8Z" opacity="0.85" />
          <path d="M17.5 25.5V38M49.5 25.5V38" opacity="0.35" />
          <circle cx="18.5" cy="38" r="2.6" />
          <circle cx="45.5" cy="38" r="2.6" />
        </g>

        {/* Journey arc — tourism route */}
        <path
          d="M14 34C22 28 28 22 32 18"
          stroke="#f0d060"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.45"
        />
        <circle cx="32" cy="18" r="1.4" fill="#f4d875" opacity="0.85" />
      </g>
    </svg>
  );
}

export function BrandWordmark({ className = "" }: { className?: string }) {
  const dict = useDictionary();

  return (
    <span className={`inline-flex flex-col ${className}`}>
      <span className="font-display text-lg font-semibold leading-none tracking-[0.04em] sm:text-xl">
        <span className="text-white">Arganis</span>{" "}
        <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
          Nomad
        </span>
      </span>
      <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.24em] text-gold-light/65 sm:text-[10px]">
        {dict.site.logoSubtitle}
      </span>
    </span>
  );
}
