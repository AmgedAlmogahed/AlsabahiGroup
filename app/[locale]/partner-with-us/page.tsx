import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FadeIn from "@/app/components/FadeIn";
import PartnerForm from "@/app/components/PartnerForm";
import { OPERATIONS, CONTACT } from "@/app/lib/operations";

const SITE_URL = "https://alsabahygroup.com";

type Params = { locale: string };
type Pillar = { title: string; body: string };
type Capability = { title: string; body: string };
type Step = { title: string; body: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partner" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "ar" ? "/ar/partner-with-us" : "/partner-with-us",
      languages: {
        en: "/partner-with-us",
        ar: "/ar/partner-with-us",
      },
    },
  };
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Partner With Alsabahy Group",
  url: `${SITE_URL}/partner-with-us`,
  mainEntity: {
    "@type": "Organization",
    name: "Alsabahy Group",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Brand Partnerships",
      email: CONTACT.partnershipsEmail,
      areaServed: "YE",
      availableLanguage: ["en", "ar"],
    },
  },
};

export default async function PartnerPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "partner" });

  const pillars = t.raw("pillars") as Pillar[];
  const capabilities = t.raw("capabilities") as Capability[];
  const complianceItems = t.raw("complianceItems") as string[];
  const steps = t.raw("steps") as Step[];
  const distributionBody = t("capabilities.3.body", {
    count: OPERATIONS.governorates,
  });

  const opsStats = [
    { value: OPERATIONS.governorates, label: t("opsStats.governorates") },
    {
      value: OPERATIONS.retailAndPharmacyPoints,
      label: t("opsStats.retailPoints"),
    },
    { value: OPERATIONS.warehouses, label: t("opsStats.warehouses") },
    { value: OPERATIONS.fleet, label: t("opsStats.fleet") },
    { value: OPERATIONS.yearsInOperation, label: t("opsStats.years") },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
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
            <div className="mt-12">
              <a
                href="#form"
                className="btn-primary !bg-[var(--color-cream)] !text-[var(--color-navy)] hover:!bg-[var(--color-bronze)]"
              >
                {t("heroCta")} <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <FadeIn className="md:col-span-4">
                <p className="eyebrow mb-6">{t("marketEyebrow")}</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[16ch]">
                  {t("marketTitle")}
                </h2>
              </FadeIn>
              <FadeIn className="md:col-span-7 md:col-start-6 space-y-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
                <p>{t("marketBody1")}</p>
                <p>{t("marketBody2")}</p>
                <p className="font-[var(--font-display)] italic text-[1.25rem] md:text-[1.5rem] text-[var(--color-navy)]/90 max-w-md">
                  {t("marketPullQuote")}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="section bg-[var(--color-offwhite)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow mb-6">{t("partnerEyebrow")}</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[24ch]">
                {t("partnerTitle")}
              </h2>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
              {pillars.map((p, i) => (
                <FadeIn key={p.title} delay={i * 100}>
                  <article className="border-t border-[var(--color-bronze)]/60 pt-8 h-full">
                    <p className="caption mb-5">
                      {t("pillarLabel")} 0{i + 1}
                    </p>
                    <h3 className="font-[var(--font-display)] text-[1.5rem] md:text-[1.875rem] leading-[1.2] tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-6 text-[var(--text-body)] leading-[1.7] text-[var(--color-charcoal)]/85">
                      {p.body}
                    </p>
                  </article>
                </FadeIn>
              ))}
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
                {t("infrastructureEyebrow")}
              </p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight !text-[var(--color-cream)] max-w-[20ch]">
                {t("infrastructureTitle")}
              </h2>
              <p className="mt-8 text-[var(--text-body-lg)] leading-[1.7] opacity-85 max-w-2xl">
                {t("infrastructureBody")}
              </p>
            </FadeIn>

            <FadeIn className="mt-16 border-t border-[var(--color-cream)]/15">
              <ul className="grid grid-cols-2 md:grid-cols-5">
                {opsStats.map((s, i, arr) => (
                  <li
                    key={s.label}
                    className={`py-10 pr-4 ${
                      i !== arr.length - 1
                        ? "md:border-r border-[var(--color-cream)]/15"
                        : ""
                    } ${i % 2 === 0 ? "border-r md:border-r" : ""} ${
                      i < arr.length - 1 ? "border-b md:border-b-0" : ""
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

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
              {capabilities.map((c, i) => (
                <FadeIn key={c.title} delay={i * 80}>
                  <article>
                    <p className="caption !text-[var(--color-bronze)] !opacity-100 mb-4">
                      0{i + 1}
                    </p>
                    <h3 className="font-[var(--font-display)] text-[1.5rem] md:text-[1.875rem] !text-[var(--color-cream)] tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-5 text-[var(--text-body)] leading-[1.7] opacity-80 max-w-md">
                      {i === 3 ? distributionBody : c.body}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <FadeIn className="md:col-span-4">
                <p className="eyebrow mb-6">{t("complianceEyebrow")}</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[14ch]">
                  {t("complianceTitle")}
                </h2>
              </FadeIn>
              <FadeIn className="md:col-span-7 md:col-start-6">
                <p className="text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
                  {t("complianceBody")}
                </p>

                <p className="caption mt-12 mb-5">
                  {t("complianceListLabel")}
                </p>
                <ul className="space-y-3 max-w-xl">
                  {complianceItems.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-[var(--text-body)] leading-[1.65] text-[var(--color-charcoal)]/85"
                    >
                      <span
                        aria-hidden
                        className="text-[var(--color-bronze)] mt-1.5 inline-block w-2 h-px bg-[var(--color-bronze)] shrink-0 translate-y-2"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="section bg-[var(--color-offwhite)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow mb-6">{t("processEyebrow")}</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[16ch]">
                {t("processTitle")}
              </h2>
            </FadeIn>

            <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {steps.map((s, i) => (
                <FadeIn key={s.title} delay={i * 80}>
                  <li className="border-t border-[var(--color-bronze)]/60 pt-6">
                    <p className="font-[var(--font-display)] text-[3rem] md:text-[3.5rem] leading-none text-[var(--color-bronze)]">
                      0{i + 1}
                    </p>
                    <h3 className="mt-6 font-[var(--font-display)] text-[1.375rem] md:text-[1.625rem] leading-[1.2] tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-5 text-[0.95rem] leading-[1.7] text-[var(--color-charcoal)]/80">
                      {s.body}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="form"
          className="section bg-[var(--color-cream)] scroll-mt-20"
        >
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
              <FadeIn className="md:col-span-4">
                <p className="eyebrow mb-6">{t("formEyebrow")}</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[16ch]">
                  {t("formTitle")}
                </h2>
                <p className="mt-8 text-[var(--text-body)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-md">
                  {t("formBody")}
                </p>

                <div className="mt-16">
                  <p className="caption mb-5">{t("directContactLabel")}</p>
                  <ul className="space-y-3 text-[var(--text-body)]">
                    <li>
                      <a
                        href={`mailto:${CONTACT.partnershipsEmail}`}
                        className="link-inline !inline"
                      >
                        {CONTACT.partnershipsEmail}
                      </a>
                    </li>
                    <li className="text-[var(--color-charcoal)]/80">
                      {t("phoneLabel")}:{" "}
                      <a
                        href="tel:+967"
                        className="text-[var(--color-navy)]"
                      >
                        {CONTACT.phone}
                      </a>
                    </li>
                    <li className="text-[var(--color-charcoal)]/80">
                      {t("whatsappLabel")}: {CONTACT.whatsapp}
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn className="md:col-span-7 md:col-start-6">
                <PartnerForm />
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
