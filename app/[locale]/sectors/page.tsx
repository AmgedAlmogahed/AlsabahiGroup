import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FadeIn from "@/app/components/FadeIn";
import { getSectors } from "@/app/lib/sectors";
import { getBrands } from "@/app/lib/brands";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sectorsIndex" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "ar" ? "/ar/sectors" : "/sectors",
      languages: { en: "/sectors", ar: "/ar/sectors" },
    },
  };
}

export default async function SectorsIndexPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "sectorsIndex" });

  const sectors = getSectors(locale);
  const brands = getBrands(locale);

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-[var(--color-navy)] text-[var(--color-cream)] overflow-hidden">
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
            <p className="eyebrow !text-[var(--color-bronze)] mb-8">
              {t("heroEyebrow")}
            </p>
            <h1 className="font-[var(--font-display)] text-[2.75rem] sm:text-6xl md:text-[5.25rem] leading-[1.02] tracking-tight max-w-[18ch] !text-[var(--color-cream)]">
              {t("heroTitle")}{" "}
              <span className="italic text-[var(--color-bronze-soft)]">
                {t("heroTitleItalic")}
              </span>
            </h1>
            <p className="mt-10 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] opacity-85">
              {t("heroBody")}
            </p>
          </div>
        </section>

        <section className="bg-[var(--color-cream)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {sectors.map((s, i) => {
              const sectorBrands = brands.filter((b) =>
                s.brands.brandSlugs.includes(b.slug),
              );
              return (
                <FadeIn
                  key={s.slug}
                  className={
                    i === 0
                      ? "border-b md:border-b-0 md:border-r border-[var(--color-divider)]"
                      : ""
                  }
                >
                  <Link
                    href={`/sectors/${s.slug}`}
                    className="group block h-full p-10 md:p-16 hover:bg-[var(--color-offwhite)] transition-colors"
                  >
                    <p className="eyebrow mb-6">
                      {t("sectorLabel")} {s.number}
                    </p>
                    <h2 className="font-[var(--font-display)] text-[3rem] md:text-[4.5rem] leading-[0.95] tracking-tight text-[var(--color-navy)] group-hover:text-[var(--color-bronze)] transition-colors">
                      {s.hero.h1}
                    </h2>
                    <p className="mt-8 font-[var(--font-display)] italic text-[1.25rem] md:text-[1.5rem] text-[var(--color-charcoal)]/85 max-w-md">
                      {s.hero.tagline}
                    </p>
                    <p className="mt-8 text-[var(--text-body)] leading-[1.7] text-[var(--color-charcoal)]/80 max-w-md">
                      {i === 0
                        ? t("pharmaContext")
                        : t("confectioneryContext")}
                    </p>

                    <p className="caption mt-8 mb-3">
                      {t("brandsInSector")}
                    </p>
                    <p className="font-[var(--font-display)] text-[1.125rem] text-[var(--color-navy)]">
                      {sectorBrands.map((b) => b.name).join(" · ")}
                    </p>

                    <p className="mt-10 inline-flex items-center gap-2 link-inline">
                      {t("enterSector", { name: s.hero.h1.replace(".", "") })}{" "}
                      <span className="arrow">→</span>
                    </p>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section className="section bg-[var(--color-offwhite)]">
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <FadeIn className="md:col-span-5">
                <p className="eyebrow mb-6">{t("disciplineEyebrow")}</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[18ch]">
                  {t("disciplineTitle")}
                </h2>
              </FadeIn>

              <FadeIn className="md:col-span-6 md:col-start-7 space-y-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
                <p>{t("disciplineBody1")}</p>
                <p>{t("disciplineBody2")}</p>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
