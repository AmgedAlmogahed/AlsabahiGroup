import type { Brand } from "@/app/lib/brands";
import BrandImage from "../BrandImage";

export default function BrandHero({ brand }: { brand: Brand }) {
  // Per-brand tint applied only to the hero band — chrome stays consistent
  // per 03_Design_Theme_Decision.md §Color
  const tintStyle = {
    backgroundImage: `linear-gradient(135deg, ${brand.tint}26 0%, transparent 60%), linear-gradient(180deg, transparent 0%, rgba(14,27,44,0.85) 100%)`,
  } as const;

  return (
    <section className="relative bg-[var(--color-navy)] text-[var(--color-cream)] overflow-hidden">
      <div className="absolute inset-0" aria-hidden style={tintStyle} />
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(241,236,226,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(241,236,226,0.4) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="editorial-wrap relative pt-44 pb-24 md:pt-52 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow !text-[var(--color-bronze)] mb-8">
              {brand.hero.eyebrow}
            </p>
            <h1 className="font-[var(--font-display)] text-[3.5rem] sm:text-7xl md:text-[8rem] leading-[0.95] tracking-tight !text-[var(--color-cream)]">
              {brand.displayName ?? brand.name}
            </h1>
            <p className="mt-10 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] opacity-85">
              {brand.hero.tagline}
            </p>
          </div>

          <div className="md:col-span-5">
            <BrandImage
              src={brand.images?.hero}
              alt={brand.hero.heroImageAlt}
              tone="navy"
              aspect="portrait"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
