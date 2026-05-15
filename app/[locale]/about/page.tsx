import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FadeIn from "@/app/components/FadeIn";
import { OPERATIONS } from "@/app/lib/operations";

const SITE_URL = "https://alsabahygroup.com";

type Params = { locale: string };
type TimelineEntry = { year: string; text: string; brandSlug?: string };
type ValueEntry = {
  number: string;
  name: string;
  heading: string;
  body: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "ar" ? "/ar/about" : "/about",
      languages: { en: "/about", ar: "/ar/about" },
    },
  };
}

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Alsabahy Group",
  url: `${SITE_URL}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "Alsabahy Group",
    foundingDate: "1993",
    description:
      "Yemen's authorised agent for international brands in pharmaceuticals and confectionery, founded 1993.",
    areaServed: "YE",
  },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  const c = await getTranslations({ locale, namespace: "common" });

  const timeline = t.raw("timeline") as TimelineEntry[];
  const values = t.raw("values") as ValueEntry[];
  const todayText = t("timeline.9.text", { count: OPERATIONS.governorates });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
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
          <div className="editorial-wrap relative pt-44 pb-24 md:pt-56 md:pb-32">
            <p className="eyebrow !text-[var(--color-bronze)] mb-8">
              {t("heroEyebrow")}
            </p>
            <h1 className="font-[var(--font-display)] text-[3rem] sm:text-7xl md:text-[7rem] leading-[0.95] tracking-tight max-w-[14ch] !text-[var(--color-cream)]">
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

        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <FadeIn className="md:col-span-4">
                <p className="eyebrow mb-6">{t("chapter1Eyebrow")}</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[16ch]">
                  {t("chapter1Title")}
                </h2>
              </FadeIn>

              <FadeIn className="md:col-span-7 md:col-start-6 space-y-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
                <p>{t("chapter1Body1")}</p>
                <p>{t("chapter1Body2")}</p>
                <p>{t("chapter1Body3")}</p>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="section bg-[var(--color-offwhite)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow mb-6">{t("chapter2Eyebrow")}</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch]">
                {t("chapter2Title")}
              </h2>
            </FadeIn>

            <FadeIn className="mt-16">
              <ol className="border-t border-[var(--color-divider)]">
                {timeline.map((m, i) => {
                  const text = i === timeline.length - 1 ? todayText : m.text;
                  return (
                    <li
                      key={i}
                      className="border-b border-[var(--color-divider)]"
                    >
                      {m.brandSlug ? (
                        <Link
                          href={`/brands/${m.brandSlug}`}
                          className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-7 md:py-9 hover:bg-[var(--color-cream)] transition-colors px-2 md:px-4 -mx-2 md:-mx-4 items-baseline"
                        >
                          <p className="md:col-span-3 font-[var(--font-display)] text-[1.5rem] md:text-[2rem] leading-none text-[var(--color-navy)] group-hover:text-[var(--color-bronze)] transition-colors">
                            {m.year}
                          </p>
                          <p className="md:col-span-8 text-[var(--text-body)] leading-[1.65] text-[var(--color-charcoal)]/85">
                            {text}
                          </p>
                          <span
                            aria-hidden
                            className="md:col-span-1 text-right text-[var(--color-bronze)] group-hover:translate-x-1 transition-transform"
                          >
                            →
                          </span>
                        </Link>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-7 md:py-9 px-2 md:px-4 -mx-2 md:-mx-4 items-baseline">
                          <p className="md:col-span-3 font-[var(--font-display)] text-[1.5rem] md:text-[2rem] leading-none text-[var(--color-navy)]">
                            {m.year}
                          </p>
                          <p className="md:col-span-9 text-[var(--text-body)] leading-[1.65] text-[var(--color-charcoal)]/85">
                            {text}
                          </p>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
              <p className="mt-8 text-[0.875rem] italic text-[var(--color-charcoal)]/55 max-w-2xl">
                {t("timelineNote")}
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow mb-6">{t("chapter3Eyebrow")}</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[18ch]">
                {t("chapter3Title")}
              </h2>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <FadeIn>
                <p className="caption mb-5">{t("visionLabel")}</p>
                <h3 className="font-[var(--font-display)] text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-tight max-w-[16ch]">
                  {t("visionTitle")}
                </h3>
                <p className="mt-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-md">
                  {t("visionBody")}
                </p>
              </FadeIn>

              <FadeIn delay={100}>
                <p className="caption mb-5">{t("missionLabel")}</p>
                <h3 className="font-[var(--font-display)] text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-tight max-w-[16ch]">
                  {t("missionTitle")}
                </h3>
                <p className="mt-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-md">
                  {t("missionBody")}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

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
            <FadeIn className="max-w-3xl">
              <p className="eyebrow !text-[var(--color-bronze)] mb-6">
                {t("chapter4Eyebrow")}
              </p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch] !text-[var(--color-cream)]">
                {t("chapter4Title")}
              </h2>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {values.map((v, i) => (
                <FadeIn key={v.number} delay={i * 80}>
                  <article className="border-t border-[var(--color-bronze)]/60 pt-6 h-full">
                    <p className="caption !text-[var(--color-bronze)] !opacity-100 mb-4">
                      {v.number} — {v.name}
                    </p>
                    <h3 className="font-[var(--font-display)] text-[1.375rem] md:text-[1.625rem] leading-[1.2] !text-[var(--color-cream)]">
                      {v.heading}
                    </h3>
                    <p className="mt-5 text-[0.95rem] leading-[1.7] opacity-80">
                      {v.body}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-4xl">
              <p className="eyebrow mb-6">{t("closingEyebrow")}</p>
              <h2 className="text-[2.25rem] md:text-[3.5rem] leading-[1.05] tracking-tight max-w-[18ch]">
                {t("closingTitle")}
              </h2>
              <p className="mt-8 text-[var(--text-body-lg)] leading-[1.65] text-[var(--color-charcoal)]/85 max-w-2xl">
                {t("closingBody")}
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/partner-with-us" className="btn-primary">
                  {c("becomePartner")} <span aria-hidden>→</span>
                </Link>
                <Link href="/brands" className="btn-secondary">
                  {c("explorePortfolio")}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
