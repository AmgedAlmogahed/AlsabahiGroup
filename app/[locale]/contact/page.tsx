import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FadeIn from "@/app/components/FadeIn";
import ContactForm from "@/app/components/ContactForm";
import { CONTACT } from "@/app/lib/operations";

const SITE_URL = "https://alsabahygroup.com";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "ar" ? "/ar/contact" : "/contact",
      languages: { en: "/contact", ar: "/ar/contact" },
    },
  };
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Alsabahy Group",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "Alsabahy Group",
    email: CONTACT.generalEmail,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.hqStreet,
      addressLocality: CONTACT.hqCity,
      addressCountry: "YE",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Brand Partnerships",
        email: CONTACT.partnershipsEmail,
        areaServed: "YE",
        availableLanguage: ["en", "ar"],
      },
      {
        "@type": "ContactPoint",
        contactType: "General Enquiries",
        email: CONTACT.generalEmail,
        areaServed: "YE",
        availableLanguage: ["en", "ar"],
      },
    ],
  },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contactPage" });

  const blocks = [
    {
      title: t("blocks.partnerships.title"),
      primary: CONTACT.partnershipsEmail,
      isEmail: true,
      body: t("blocks.partnerships.body"),
    },
    {
      title: t("blocks.general.title"),
      primary: CONTACT.generalEmail,
      isEmail: true,
      body: t("blocks.general.body"),
    },
    {
      title: t("blocks.phone.title"),
      primary: CONTACT.phone,
      isEmail: false,
      body: CONTACT.hours,
    },
    {
      title: t("blocks.whatsapp.title"),
      primary: CONTACT.whatsapp,
      isEmail: false,
      body: t("blocks.whatsapp.body"),
    },
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
          <div className="editorial-wrap relative pt-44 pb-24 md:pt-52 md:pb-28">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <FadeIn className="lg:col-span-7">
                <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.1] tracking-tight max-w-[16ch]">
                  {t("formTitle")}
                </h2>
                <div className="mt-10">
                  <ContactForm />
                </div>
              </FadeIn>

              <FadeIn className="lg:col-span-5" delay={100}>
                <h2 className="text-[1.875rem] md:text-[2.5rem] leading-[1.1] tracking-tight max-w-[14ch]">
                  {t("directTitle")}
                </h2>
                <ul className="mt-10 space-y-10">
                  {blocks.map((b) => (
                    <li
                      key={b.title}
                      className="border-t border-[var(--color-divider)] pt-6"
                    >
                      <p className="caption mb-3">{b.title}</p>
                      {b.isEmail ? (
                        <a
                          href={`mailto:${b.primary}`}
                          className="font-[var(--font-display)] text-[1.25rem] md:text-[1.5rem] text-[var(--color-navy)] hover:text-[var(--color-bronze)] transition-colors"
                        >
                          {b.primary}
                        </a>
                      ) : (
                        <p className="font-[var(--font-display)] text-[1.25rem] md:text-[1.5rem] text-[var(--color-navy)]">
                          {b.primary}
                        </p>
                      )}
                      <p className="mt-3 text-[0.95rem] leading-[1.6] text-[var(--color-charcoal)]/75">
                        {b.body}
                      </p>
                    </li>
                  ))}

                  <li className="border-t border-[var(--color-divider)] pt-6">
                    <p className="caption mb-3">{t("blocks.hq.title")}</p>
                    <address className="not-italic font-[var(--font-display)] text-[1.25rem] md:text-[1.5rem] text-[var(--color-navy)] leading-[1.4]">
                      Alsabahy Group
                      <br />
                      {CONTACT.hqStreet}
                      <br />
                      {CONTACT.hqCity}, {CONTACT.hqCountry}
                      <br />
                      {CONTACT.hqPostalCode}
                    </address>
                  </li>

                  <li className="border-t border-[var(--color-divider)] pt-6">
                    <p className="caption mb-3">
                      {t("blocks.linkedin.title")}
                    </p>
                    <a
                      href={CONTACT.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[var(--font-display)] text-[1.25rem] md:text-[1.5rem] text-[var(--color-navy)] hover:text-[var(--color-bronze)] transition-colors"
                    >
                      {t("blocks.linkedin.label")}
                    </a>
                  </li>
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-offwhite)]">
          <div className="editorial-wrap py-14">
            <FadeIn>
              <p className="font-[var(--font-display)] italic text-[1.125rem] md:text-[1.375rem] leading-[1.4] text-[var(--color-charcoal)]/75 max-w-3xl">
                {t("ndaNote")}
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
