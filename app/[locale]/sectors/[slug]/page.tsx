import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FadeIn from "@/app/components/FadeIn";
import BrandImage from "@/app/components/BrandImage";
import { SECTORS, getSector } from "@/app/lib/sectors";
import { getBrand } from "@/app/lib/brands";
import { SITE_IMAGES } from "@/app/lib/site-images";

const SITE_URL = "https://alsabahygroup.com";

type Params = { slug: string; locale: string };

export function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const sector = getSector(slug, locale);
  if (!sector) return {};
  const url = `${SITE_URL}${locale === "ar" ? "/ar" : ""}/sectors/${slug}`;
  return {
    title: sector.seo.title,
    description: sector.seo.description,
    keywords: sector.seo.keywords,
    alternates: {
      canonical: `${locale === "ar" ? "/ar" : ""}/sectors/${slug}`,
      languages: { en: `/sectors/${slug}`, ar: `/ar/sectors/${slug}` },
    },
    openGraph: {
      type: "website",
      url,
      title: sector.seo.title,
      description: sector.seo.description,
      siteName: "Alsabahy Group",
      locale: locale === "ar" ? "ar_YE" : "en_US",
    },
  };
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const sector = getSector(slug, locale);
  if (!sector) notFound();

  const c = await getTranslations({ locale, namespace: "common" });
  const bb = await getTranslations({ locale, namespace: "brandsBlock" });

  const sectorBrands = sector.brands.brandSlugs
    .map((s) => getBrand(s, locale))
    .filter((b): b is NonNullable<ReturnType<typeof getBrand>> => Boolean(b));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${sector.name} distribution in Yemen`,
    serviceType: `${sector.name} distribution`,
    provider: {
      "@type": "Organization",
      name: "Alsabahy Group",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "Yemen" },
    description: sector.seo.description,
    url: `${SITE_URL}/sectors/${sector.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-end">
              <div className="md:col-span-8">
                <p className="eyebrow !text-[var(--color-bronze)] mb-8">
                  {sector.hero.eyebrow}
                </p>
                <h1 className="font-[var(--font-display)] text-[3.5rem] sm:text-7xl md:text-[5rem] lg:text-[6rem] leading-[0.95] tracking-tight !text-[var(--color-cream)] break-words">
                  {sector.hero.h1}
                </h1>
                <p className="mt-10 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] opacity-85">
                  {sector.hero.tagline}
                </p>
              </div>
              <div className="md:col-span-4">
                <BrandImage
                  src={
                    sector.slug === "pharmaceuticals"
                      ? SITE_IMAGES.sectorPharmaHero
                      : SITE_IMAGES.sectorConfectioneryHero
                  }
                  alt={sector.hero.heroImageAlt}
                  tone="navy"
                  aspect="portrait"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <FadeIn className="md:col-span-4">
                <p className="eyebrow mb-6">{sector.context.eyebrow}</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[16ch]">
                  {sector.context.h2}
                </h2>
              </FadeIn>

              <FadeIn className="md:col-span-7 md:col-start-6 space-y-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
                {sector.context.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="section bg-[var(--color-offwhite)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow mb-6">{sector.capabilities.eyebrow}</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch]">
                {sector.capabilities.h2}
              </h2>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
              {sector.capabilities.blocks.map((b, i) => (
                <FadeIn key={b.number} delay={i * 60}>
                  <article className="border-t border-[var(--color-bronze)]/50 pt-6">
                    <p className="caption !text-[var(--color-bronze)] !opacity-100 mb-4">
                      {b.number}
                    </p>
                    <h3 className="font-[var(--font-display)] text-[1.375rem] md:text-[1.625rem] leading-[1.2] tracking-tight">
                      {b.title}
                    </h3>
                    <p className="mt-5 text-[0.95rem] leading-[1.7] text-[var(--color-charcoal)]/80">
                      {b.body}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow mb-6">{sector.brands.eyebrow}</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[24ch]">
                {sector.brands.h2}
              </h2>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
              {sectorBrands.map((b, i) => (
                <FadeIn key={b.slug} delay={i * 80}>
                  <Link
                    href={`/brands/${b.slug}`}
                    className="group block p-10 border border-[var(--color-divider)] hover:border-[var(--color-navy)] transition-colors h-full"
                  >
                    <p className="caption mb-4">
                      <span aria-hidden className="mr-2">
                        {b.countryFlag}
                      </span>
                      {b.country}
                    </p>
                    <h3 className="font-[var(--font-display)] text-[2rem] md:text-[2.5rem] leading-[1.05] tracking-tight text-[var(--color-navy)] group-hover:text-[var(--color-bronze)] transition-colors">
                      {b.name}
                    </h3>
                    <p className="mt-6 text-[var(--text-body)] leading-[1.65] text-[var(--color-charcoal)]/80">
                      {b.summary}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 link-inline">
                      {bb("exploreChapter")} <span className="arrow">→</span>
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-[var(--color-navy)] text-[var(--color-cream)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow !text-[var(--color-bronze)] mb-6">
                {c("byTheNumbers")}
              </p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight !text-[var(--color-cream)] max-w-[20ch]">
                {sector.stats.h2}
              </h2>
            </FadeIn>

            <FadeIn className="mt-16 border-t border-[var(--color-cream)]/15">
              <ul className="grid grid-cols-2 md:grid-cols-3">
                {sector.stats.items.map((s, i, arr) => (
                  <li
                    key={i}
                    className={`py-10 pr-4 ${
                      (i + 1) % 3 !== 0 && i !== arr.length - 1
                        ? "md:border-r border-[var(--color-cream)]/15"
                        : ""
                    } ${i % 2 === 0 ? "border-r md:border-r" : ""} ${
                      i < arr.length - 2 ? "border-b" : ""
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

        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-4xl">
              <p className="eyebrow mb-6">{sector.cta.eyebrow}</p>
              <h2 className="text-[2.25rem] md:text-[3.5rem] leading-[1.05] tracking-tight max-w-[20ch]">
                {sector.cta.h2}
              </h2>
              <p className="mt-8 text-[var(--text-body-lg)] leading-[1.65] text-[var(--color-charcoal)]/85 max-w-2xl">
                {sector.cta.body}
              </p>
              <div className="mt-12">
                <Link href="/partner-with-us" className="btn-primary">
                  {c("becomePartner")} <span aria-hidden>→</span>
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
