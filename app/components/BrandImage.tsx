import Image from "next/image";
import PhotoPlate from "./PhotoPlate";

type Props = {
  /** Path under /public, e.g. "/brands/lysi/hero.jpg". If omitted, renders PhotoPlate fallback. */
  src?: string;
  /** Alt text — required for both real images and placeholder captions. */
  alt: string;
  aspect?: "wide" | "portrait" | "square" | "hero";
  tone?: "navy" | "cream" | "bronze";
  className?: string;
  /** When true, prioritises loading (use for above-the-fold hero images). */
  priority?: boolean;
};

const aspectClasses = {
  wide: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  hero: "aspect-[16/9] md:aspect-[16/8]",
};

/**
 * Renders a real product image when src is provided, falling back to the
 * PhotoPlate placeholder when it's not. Real images use next/image for
 * automatic optimization (AVIF/WebP, responsive srcset, lazy-loading).
 *
 * To replace a placeholder with a real image, just set `src` in app/lib/brands.ts.
 * To remove a brand's images entirely (e.g. permission revoked), drop the src
 * fields back to undefined and the page falls back gracefully.
 */
export default function BrandImage({
  src,
  alt,
  aspect = "wide",
  tone = "navy",
  className = "",
  priority = false,
}: Props) {
  if (!src) {
    return (
      <PhotoPlate
        caption={alt}
        aspect={aspect}
        tone={tone}
        className={className}
      />
    );
  }

  return (
    <figure
      className={`relative w-full overflow-hidden ${aspectClasses[aspect]} bg-[var(--color-divider)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
        className="object-cover"
        priority={priority}
      />
    </figure>
  );
}
