import Link from "next/link";
import type { Brand } from "@/app/lib/brands";
import { getRelatedBrands } from "@/app/lib/brands";
import FadeIn from "../FadeIn";

export default function BrandContinue({ brand }: { brand: Brand }) {
  const related = getRelatedBrands(brand.slug);

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="editorial-wrap">
        <FadeIn>
          <p className="eyebrow mb-6">Continue the journey</p>
          <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch]">
            Continue the journey.
          </h2>
        </FadeIn>

        {/* CTA strip */}
        <FadeIn className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-y border-[var(--color-bronze)]/40 py-10 md:py-12">
            <h3 className="md:col-span-7 font-[var(--font-display)] text-[1.75rem] md:text-[2.25rem] leading-[1.1] tracking-tight max-w-[22ch]">
              Want to discuss a similar partnership?
            </h3>
            <div className="md:col-span-5 md:text-right">
              <Link href="/partner-with-us" className="btn-primary">
                Become a Partner <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Related brands */}
        <FadeIn className="mt-20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/brands/${r.slug}`}
                  className="group block p-8 border border-[var(--color-divider)] hover:border-[var(--color-navy)] transition-colors h-full"
                >
                  <p className="caption mb-3">
                    <span aria-hidden className="mr-2">{r.countryFlag}</span>
                    {r.country} · {r.sector}
                  </p>
                  <h4 className="font-[var(--font-display)] text-[1.75rem] leading-[1.1] tracking-tight text-[var(--color-navy)] group-hover:text-[var(--color-bronze)] transition-colors">
                    {r.name}
                  </h4>
                  <span
                    aria-hidden
                    className="mt-6 inline-block text-[var(--color-bronze)] group-hover:translate-x-1 transition-transform"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/brands"
                className="group block p-8 border border-[var(--color-divider)] hover:border-[var(--color-navy)] transition-colors h-full"
              >
                <p className="caption mb-3">All brands</p>
                <h4 className="font-[var(--font-display)] text-[1.75rem] leading-[1.1] tracking-tight text-[var(--color-navy)] group-hover:text-[var(--color-bronze)] transition-colors">
                  See all brands
                </h4>
                <span
                  aria-hidden
                  className="mt-6 inline-block text-[var(--color-bronze)] group-hover:translate-x-1 transition-transform"
                >
                  →
                </span>
              </Link>
            </li>
          </ul>
        </FadeIn>

        {/* External link */}
        <FadeIn className="mt-16">
          <a
            href={brand.continue.externalLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-inline"
          >
            {brand.continue.externalLinkLabel}{" "}
            <span className="arrow">↗</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
