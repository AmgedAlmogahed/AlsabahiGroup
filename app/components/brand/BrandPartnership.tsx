import type { Brand } from "@/app/lib/brands";
import FadeIn from "../FadeIn";

export default function BrandPartnership({ brand }: { brand: Brand }) {
  return (
    <section className="section bg-[var(--color-offwhite)]">
      <div className="editorial-wrap">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow mb-6">{brand.partnership.eyebrow}</p>
          <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[22ch]">
            {brand.partnership.h2}
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
          {brand.partnership.body.map((p, i) => (
            <FadeIn
              key={i}
              delay={i * 60}
              className={`text-[var(--text-body)] leading-[1.7] text-[var(--color-charcoal)]/85 ${
                i === brand.partnership.body.length - 1 && brand.partnership.body.length % 2 === 1
                  ? "md:col-span-2 md:max-w-[calc(50%-1.5rem)]"
                  : ""
              }`}
            >
              <p>{p}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-24 max-w-3xl">
          <div className="rule mb-10" />
          <blockquote className="font-[var(--font-display)] italic text-[1.5rem] md:text-[2.125rem] leading-[1.3] text-[var(--color-navy)]/90">
            "{brand.partnership.pullQuote}"
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
