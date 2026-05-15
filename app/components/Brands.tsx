import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FadeIn from "./FadeIn";
import { getBrands } from "@/app/lib/brands";

export default function Brands() {
  const t = useTranslations("brandsBlock");
  const c = useTranslations("common");
  const locale = useLocale();
  const brands = getBrands(locale);

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="editorial-wrap">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow mb-6">{t("eyebrow")}</p>
          <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[18ch]">
            {t("title")}
          </h2>
          <p className="mt-8 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-2xl">
            {t("body")}
          </p>
        </FadeIn>

        <div className="mt-20">
          <ul className="border-t border-[var(--color-divider)]">
            {brands.map((b, i) => (
              <li
                key={b.slug}
                className="border-b border-[var(--color-divider)]"
              >
                <FadeIn delay={i * 60}>
                  <Link
                    href={`/brands/${b.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline py-10 md:py-12 hover:bg-[var(--color-offwhite)] transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
                  >
                    <div className="md:col-span-1 caption">0{i + 1}</div>

                    <div className="md:col-span-4">
                      <h3 className="font-[var(--font-display)] text-[2rem] md:text-[2.75rem] leading-[1] tracking-tight text-[var(--color-navy)] group-hover:text-[var(--color-bronze)] transition-colors">
                        {b.name}
                      </h3>
                      <p className="caption mt-3">
                        <span aria-hidden className="mr-2">
                          {b.countryFlag}
                        </span>
                        {b.country} · {b.sector}
                      </p>
                    </div>

                    <p className="md:col-span-5 text-[var(--text-body)] leading-[1.65] text-[var(--color-charcoal)]/80">
                      {b.summary}
                    </p>

                    <div className="md:col-span-2 flex md:flex-col md:items-end gap-3 md:gap-2 text-right">
                      <p className="caption">
                        {t("since")} {b.partnershipYear}
                      </p>
                      <span
                        aria-hidden
                        className="text-[var(--color-bronze)] text-xl translate-y-px group-hover:translate-x-1 transition-transform"
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <Link href="/brands" className="link-inline">
              {c("seeFullPortfolio")} <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
