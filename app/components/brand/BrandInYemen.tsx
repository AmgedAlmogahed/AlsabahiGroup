import { useTranslations } from "next-intl";
import type { Brand } from "@/app/lib/brands";
import FadeIn from "../FadeIn";
import BrandImage from "../BrandImage";

export default function BrandInYemen({ brand }: { brand: Brand }) {
  const t = useTranslations("brand.inYemen");

  return (
    <section className="section bg-[var(--color-navy)] text-[var(--color-cream)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(241,236,226,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(241,236,226,0.4) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="editorial-wrap relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <FadeIn className="md:col-span-6">
            <BrandImage
              src={brand.images?.context}
              alt={t("contextImageAlt", { brand: brand.name })}
              tone="navy"
              aspect="portrait"
            />
          </FadeIn>

          <FadeIn className="md:col-span-6 md:pt-6">
            <p className="eyebrow !text-[var(--color-bronze)] mb-6">
              {brand.inYemen.eyebrow}
            </p>
            <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight !text-[var(--color-cream)] max-w-[20ch]">
              {brand.inYemen.h2}
            </h2>
            <p className="mt-8 text-[var(--text-body-lg)] leading-[1.7] opacity-85 max-w-2xl">
              {brand.inYemen.body}
            </p>
          </FadeIn>
        </div>

        <FadeIn className="mt-20 border-t border-[var(--color-cream)]/15">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {brand.inYemen.stats.map((s, i, arr) => (
              <li
                key={i}
                className={`py-10 pr-4 ${
                  i !== arr.length - 1
                    ? "md:border-r border-[var(--color-cream)]/15"
                    : ""
                } ${i % 2 === 0 ? "border-r md:border-r" : ""} ${
                  i < 2 ? "border-b md:border-b-0" : ""
                } border-[var(--color-cream)]/15`}
              >
                <p className="font-[var(--font-display)] text-[1.875rem] md:text-[2.5rem] leading-none !text-[var(--color-cream)]">
                  {s.value}
                </p>
                <p className="caption mt-3 !text-[var(--color-cream)] !opacity-60">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
