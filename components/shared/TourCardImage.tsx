import type { ReactNode } from "react";
import Image from "next/image";

type Props = {
  image: string;
  images?: readonly string[];
  alt: string;
  wide?: boolean;
  children?: ReactNode;
};

export function TourCardImage({ image, images, alt, wide = false, children }: Props) {
  const aspect = wide ? "aspect-[5/3]" : "aspect-[4/3]";
  const collage = images && images.length >= 4 ? images.slice(0, 4) : null;

  return (
    <div className={`tour-card-media ${aspect}`}>
      <div className="absolute inset-0 overflow-hidden">
        {collage ? (
          <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-px bg-sand-200">
            {collage.map((src, idx) => (
              <div key={`${src}-${idx}`} className="relative min-h-0 min-w-0 overflow-hidden">
                <img
                  src={src}
                  alt={idx === 0 ? alt : ""}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  aria-hidden={idx > 0}
                />
              </div>
            ))}
          </div>
        ) : (
          <Image
            src={image}
            alt={alt}
            fill
            unoptimized
            className="object-cover object-center"
            sizes={wide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
          />
        )}
      </div>
      {children}
    </div>
  );
}
