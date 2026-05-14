import type { Brand } from "@/app/lib/brands";
import FadeIn from "../FadeIn";

export default function BrandHeritage({ brand }: { brand: Brand }) {
  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="editorial-wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <FadeIn className="md:col-span-4">
            <p className="eyebrow mb-6">{brand.heritage.eyebrow}</p>
            <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[18ch]">
              {brand.heritage.h2}
            </h2>
          </FadeIn>

          <FadeIn className="md:col-span-7 md:col-start-6 space-y-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
            {brand.heritage.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </FadeIn>
        </div>

        {/* Heritage timeline strip — 4 milestones */}
        <FadeIn className="mt-24 border-t border-[var(--color-bronze)]/50">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {brand.heritage.timeline.map((t, i, arr) => (
              <li
                key={i}
                className={`py-8 md:py-10 pr-6 ${
                  i !== arr.length - 1 ? "md:border-r border-[var(--color-divider)]" : ""
                } ${i % 2 === 0 ? "border-r md:border-r" : ""} ${
                  i < 2 ? "border-b md:border-b-0" : ""
                } border-[var(--color-divider)]`}
              >
                <p className="font-[var(--font-display)] text-[1.5rem] md:text-[2rem] leading-none">
                  {t.label}
                </p>
                <p className="mt-4 text-[0.9375rem] leading-[1.55] text-[var(--color-charcoal)]/75 max-w-xs">
                  {t.description}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
