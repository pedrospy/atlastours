"use client";

import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function Logo({ size = 44, className = "", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Atlas Routes & Transfer"
      width={size}
      height={size}
      className={`shrink-0 rounded-sm ${className}`}
      priority={priority}
    />
  );
}
