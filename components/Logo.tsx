"use client";

import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function Logo({ size = 56, className = "", priority = false }: LogoProps) {
  return (
    <Image
      src="/red-nomad-logo.png"
      alt="Red Nomad"
      width={size}
      height={size}
      unoptimized
      className={`shrink-0 rounded-lg object-contain shadow-gold ${className}`}
      priority={priority}
    />
  );
}
