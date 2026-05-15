import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FadeIn from "@/app/components/FadeIn";
import BrandImage from "@/app/components/BrandImage";
import { BRANDS, getBrands } from "@/app/lib/brands";

const SITE_URL = "https://alsabahygroup.com";

type Params = { locale: string };
type SearchParams = { sector?: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "brandsIndex" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "ar" ? "/ar/brands" : "/brands",
      languages: { en: "/brands", ar: "/ar/brands" },
    },
  };
}

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Brands represented by Alsabahy Group",
  url: `${SITE_URL}/brands`,
  isPartOf: { "@type": "WebSite", name: "Alsabahy Group" },
  about: {
    "@type": "ItemList",
    itemListElement: BRANDS.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Brand",
        name: b.name,
        url: `${SITE_URL}/brands/${b.slug}`,
      },
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Brands",
      item: `${SITE_URL}/brands`,
    },
  ],
};

export default async function BrandsIndexPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { sector } = await searchParams;
  const t = await getTranslations({ locale, namespace: "brandsIndex" });
  const bb = await getTranslations({ locale, namespace: "brandsBlock" });
  const c = await getTranslations({ locale, namespace: "common" });

  const activeFilter =
    sector === "pharmaceuticals" || sector === "confectionery" ? sector : "all";

  const brands = getBrands(locale);
  const filtered =
    activeFilter === "all"
      ? brands
      : brands.filter((b) =>
          activeFilter === "pharmaceuticals"
            ? b.sector === "Pharmaceuticals"
            : b.sector === "Confectionery",
        );

  const filters = [
    { label: t("filterAll"), value: "all" },
    { label: t("filterPharma"), value: "pharmaceuticals" },
    { label: t("filterConfectionery"), value: "confectionery" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          <div className="editorial-wrap relative pt-44 pb-24 md:pt-52 md:pb-28">
            <p className="eyebrow !text-[var(--color-bronze)] mb-8">
              {t("heroEyebrow")}
            </p>
            <h1 className="font-[var(--font-display)] text-[2.75rem] sm:text-6xl md:text-[5.5rem] leading-[1.02] tracking-tight max-w-[18ch] !text-[var(--color-cream)]">
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

        <section className="bg-[var(--color-cream)] border-b border-[var(--color-divider)]">
          <div className="editorial-wrap py-10">
            <div className="flex flex-wrap items-center gap-3">
              <p className="caption mr-4">{t("filterLabel")}</p>
              {filters.map((f) => {
                const active = activeFilter === f.value;
                const href =
                  f.value === "all" ? "/brands" : `/brands?sector=${f.value}`;
                return (
                  <Link
                    key={f.value}
                    href={href}
                    scroll={false}
                    className={`px-4 py-2 text-[0.8125rem] tracking-wide uppercase border transition-colors rounded-sm ${
                      active
                        ? "bg-[var(--color-navy)] text-[var(--color-cream)] border-[var(--color-navy)]"
                        : "bg-transparent text-[var(--color-navy)] border-[var(--color-divider)] hover:border-[var(--color-navy)]"
                    }`}
                  >
                    {f.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)]">
          <ul>
            {filtered.map((b, i) => {
              const imageLeft = i % 2 === 0;
              return (
                <li
                  key={b.slug}
                  className={
                    i !== filtered.length - 1
                      ? "border-b border-[var(--color-divider)]"
                      : ""
                  }
                >
                  <FadeIn>
                    <article className="editorial-wrap section !py-20 md:!py-28">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                        <div
                          className={`md:col-span-5 ${
                            imageLeft ? "" : "md:order-2 md:col-start-8"
                          }`}
                        >
                          <BrandImage
                            src={b.images?.hero}
                            alt={b.hero.heroImageAlt}
                            tone={i % 2 === 0 ? "navy" : "cream"}
                            aspect="portrait"
                          />
                        </div>
                        <div
                          className={`md:col-span-6 ${
                            imageLeft
                              ? "md:col-start-7"
                              : "md:row-start-1 md:col-start-1"
                          }`}
                        >
                          <p className="caption mb-4">
                            0{brands.indexOf(b) + 1} ·{" "}
                            <span aria-hidden className="mx-1">
                              {b.countryFlag}
                            </span>
                            {b.country} · {b.sector}
                          </p>
                          <h2 className="font-[var(--font-display)] text-[2.5rem] md:text-[4rem] leading-[1] tracking-tight text-[var(--color-navy)]">
                            {b.name}
                          </h2>
                          <p className="caption mt-4">
                            {bb("authorisedAgentSince", {
                              year: b.partnershipYear,
                            })}
                          </p>
                          <p className="mt-8 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-xl">
                            {b.summary}
                          </p>
                          <Link
                            href={`/brands/${b.slug}`}
                            className="link-inline mt-10"
                          >
                            {bb("exploreChapter")}{" "}
                            <span className="arrow">→</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </FadeIn>
                </li>
              );
            })}
          </ul>

          {filtered.length === 0 ? (
            <div className="editorial-wrap py-20">
              <p className="text-[var(--color-charcoal)]/60">
                {t("noBrands")}
              </p>
            </div>
          ) : null}
        </section>

        <section className="section bg-[var(--color-navy)] text-[var(--color-cream)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-4xl">
              <p className="eyebrow !text-[var(--color-bronze)] mb-6">
                {t("closingEyebrow")}
              </p>
              <h2 className="text-[2.25rem] md:text-[3.5rem] leading-[1.05] tracking-tight !text-[var(--color-cream)] max-w-[18ch]">
                {t("closingTitle")}
              </h2>
              <p className="mt-8 text-[var(--text-body-lg)] leading-[1.65] opacity-85 max-w-2xl">
                {t("closingBody")}
              </p>
              <div className="mt-12">
                <Link
                  href="/partner-with-us"
                  className="btn-primary !bg-[var(--color-cream)] !text-[var(--color-navy)] hover:!bg-[var(--color-bronze)]"
                >
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
