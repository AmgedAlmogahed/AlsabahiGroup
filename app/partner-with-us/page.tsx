import type { Metadata } from "next";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FadeIn from "@/app/components/FadeIn";
import PartnerForm from "@/app/components/PartnerForm";
import { OPERATIONS, CONTACT } from "@/app/lib/operations";

const SITE_URL = "https://alsabahygroup.com";

export const metadata: Metadata = {
  title: "Partner With Us | Yemen Brand Distribution | Alsabahy Group",
  description:
    "Bring your brand to Yemen with Alsabahy Group — authorized agent expertise, nationwide distribution, MOH registration since 1993. Start the partnership conversation.",
  keywords: [
    "Yemen brand partner",
    "Yemen distributor partnership",
    "authorized agent Yemen",
    "وكيل اليمن",
    "Yemen market entry",
    "Yemen export partner",
    "Yemen distribution agreement",
  ],
  alternates: {
    canonical: "/partner-with-us",
    languages: { en: "/partner-with-us", ar: "/ar/partner-with-us" },
  },
};

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

const PILLARS = [
  {
    title: "Three decades of unbroken operation",
    body: "30+ years in Yemen means our retail and pharmacy networks, our regulatory channels, and our trade relationships are continuous. We've operated through every market condition the country has seen. Brands working with us inherit those relationships from day one.",
  },
  {
    title: "Single point of accountability",
    body: "One agent. One contract. One regional team. International brand owners work with a single counterpart who owns every aspect of their performance in Yemen — import, registration, warehousing, distribution, retail merchandising, and after-market support.",
  },
  {
    title: "Sector specialisation",
    body: "We focus deliberately on pharmaceuticals and confectionery. Two sectors. Deep infrastructure in each. We don't dilute our operation by distributing categories where we can't lead.",
  },
];

const CAPABILITIES = [
  {
    title: "Import & customs",
    body: "Full handling of import licensing, customs clearance, and shipping documentation. Our team manages every shipment from port of origin to bonded warehouse without disruption — including for cold-chain and controlled substances.",
  },
  {
    title: "Ministry of Health registration",
    body: "Pharmaceutical product registration with Yemen's Ministry of Health, including dossier preparation, regulatory submissions, renewals, and ongoing compliance reporting on behalf of our brand partners.",
  },
  {
    title: "Cold-chain logistics",
    body: "Temperature-controlled warehousing and last-mile delivery for pharmaceutical and sensitive food products. Every link audited. Every batch traceable. Documentation maintained to international audit standards.",
  },
  {
    title: "Nationwide distribution",
    body: `Direct, named relationships with pharmacy chains, hospital networks, supermarkets, hypermarkets, wholesalers, and traditional retail across ${OPERATIONS.governorates} governorates — built and maintained over more than three decades.`,
  },
];

const COMPLIANCE = [
  "Ministry of Health (Yemen) — pharmaceutical product registration capability",
  "Customs and import licensing for pharmaceuticals and consumer goods",
  "Standards-compliant warehousing across multiple regional locations",
  "Cold-chain operating procedures aligned to international pharmaceutical and food-grade standards",
  "Documented audit trail for every shipment, lot, and registration renewal",
];

const STEPS = [
  {
    n: "01",
    title: "Inquiry",
    body: "You submit the form below. Within 2 business days, our partnerships team reviews your brand, category, and current Yemen presence (if any), and responds with initial fit assessment and next steps.",
  },
  {
    n: "02",
    title: "Discovery & NDA",
    body: "We sign a mutual NDA. We share Yemen-specific commercial, regulatory, and competitive context for your category. You share your brand strategy, target product range, and any existing market presence in the region.",
  },
  {
    n: "03",
    title: "Commercial proposal",
    body: "We propose a distribution structure tailored to your brand: exclusivity terms, commercial pricing, marketing and trade support, regulatory timeline, and a phased launch plan with clear milestones.",
  },
  {
    n: "04",
    title: "Agreement and launch",
    body: "We sign a formal distribution agreement. Import licensing, Ministry of Health registration (where applicable), and first-shipment planning begin. Typical first-product-to-shelf timeline: 4–8 months, depending on category and regulatory pathway.",
  },
];

const OPS_STATS = [
  { value: OPERATIONS.governorates, label: "Governorates served" },
  { value: OPERATIONS.retailAndPharmacyPoints, label: "Retail & pharmacy points" },
  { value: OPERATIONS.warehouses, label: "Regional warehouses" },
  { value: OPERATIONS.fleet, label: "Vehicles in fleet" },
  { value: OPERATIONS.yearsInOperation, label: "Years of unbroken operation" },
];

export default function PartnerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />
      <main>
        {/* 1 — Hero */}
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
              For International Brand Owners
            </p>
            <h1 className="font-[var(--font-display)] text-[3rem] sm:text-7xl md:text-[7rem] leading-[0.95] tracking-tight max-w-[14ch] !text-[var(--color-cream)]">
              Bring your brand to{" "}
              <span className="italic text-[var(--color-bronze-soft)]">Yemen.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] opacity-85">
              Alsabahy Group works with international brand owners looking for
              an authorized agent (وكيل) in Yemen. If that's you, this is where
              the conversation begins.
            </p>
            <div className="mt-12">
              <a href="#form" className="btn-primary !bg-[var(--color-cream)] !text-[var(--color-navy)] hover:!bg-[var(--color-bronze)]">
                Start the conversation <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2 — Why Yemen */}
        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <FadeIn className="md:col-span-4">
                <p className="eyebrow mb-6">The Market</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[16ch]">
                  A market larger than most realise.
                </h2>
              </FadeIn>
              <FadeIn className="md:col-span-7 md:col-start-6 space-y-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
                <p>
                  Yemen is one of the Arab world's most populous countries,
                  with a consumer base exceeding 30 million people across more
                  than 20 governorates. Despite the headlines, demand for
                  international pharmaceutical and consumer-goods brands has
                  remained constant — and in many categories, has grown.
                </p>
                <p>
                  What changes is the type of partner international brands need
                  to reach this market: one with the regulatory experience,
                  distribution depth, and on-ground continuity to operate where
                  many cannot. That is the role Alsabahy Group has played since
                  1993.
                </p>
                <p className="font-[var(--font-display)] italic text-[1.25rem] md:text-[1.5rem] text-[var(--color-navy)]/90 max-w-md">
                  We don't promise the easiest market. We promise the most
                  reliable partner inside it.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 3 — Why us (3 pillars) */}
        <section className="section bg-[var(--color-offwhite)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow mb-6">The Partner</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[24ch]">
                Three reasons international brands choose Alsabahy.
              </h2>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
              {PILLARS.map((p, i) => (
                <FadeIn key={p.title} delay={i * 100}>
                  <article className="border-t border-[var(--color-bronze)]/60 pt-8 h-full">
                    <p className="caption mb-5">Pillar 0{i + 1}</p>
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

        {/* 4 — Distribution capabilities */}
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
              <p className="eyebrow !text-[var(--color-bronze)] mb-6">The Infrastructure</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight !text-[var(--color-cream)] max-w-[20ch]">
                From port to pharmacy — we control every link.
              </h2>
              <p className="mt-8 text-[var(--text-body-lg)] leading-[1.7] opacity-85 max-w-2xl">
                A distribution agreement is only as good as the operational
                chain behind it. We've built ours over three decades, link by
                link.
              </p>
            </FadeIn>

            {/* Operational stats */}
            <FadeIn className="mt-16 border-t border-[var(--color-cream)]/15">
              <ul className="grid grid-cols-2 md:grid-cols-5">
                {OPS_STATS.map((s, i, arr) => (
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

            {/* Capability blocks */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
              {CAPABILITIES.map((c, i) => (
                <FadeIn key={c.title} delay={i * 80}>
                  <article>
                    <p className="caption !text-[var(--color-bronze)] !opacity-100 mb-4">
                      0{i + 1}
                    </p>
                    <h3 className="font-[var(--font-display)] text-[1.5rem] md:text-[1.875rem] !text-[var(--color-cream)] tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-5 text-[var(--text-body)] leading-[1.7] opacity-80 max-w-md">
                      {c.body}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — Compliance */}
        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <FadeIn className="md:col-span-4">
                <p className="eyebrow mb-6">The Compliance</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[14ch]">
                  Compliance is non-negotiable.
                </h2>
              </FadeIn>
              <FadeIn className="md:col-span-7 md:col-start-6">
                <p className="text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
                  Every product we represent passes through formal customs and
                  Ministry of Health workflows, with documented compliance for
                  each shipment. We maintain active Marketing Authorisation
                  Holder (MAH) relationships for pharmaceutical products and
                  full customs and import documentation for consumer goods. Our
                  compliance posture protects our partners' regulatory standing
                  before, during, and after launch.
                </p>

                <p className="caption mt-12 mb-5">What we hold</p>
                <ul className="space-y-3 max-w-xl">
                  {COMPLIANCE.map((c) => (
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

        {/* 6 — How partnership works */}
        <section className="section bg-[var(--color-offwhite)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow mb-6">The Process</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[16ch]">
                How partnership works.
              </h2>
            </FadeIn>

            <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {STEPS.map((s, i) => (
                <FadeIn key={s.n} delay={i * 80}>
                  <li className="border-t border-[var(--color-bronze)]/60 pt-6">
                    <p className="font-[var(--font-display)] text-[3rem] md:text-[3.5rem] leading-none text-[var(--color-bronze)]">
                      {s.n}
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

        {/* 7 — The form */}
        <section id="form" className="section bg-[var(--color-cream)] scroll-mt-20">
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
              <FadeIn className="md:col-span-4">
                <p className="eyebrow mb-6">Begin Here</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[16ch]">
                  Begin the conversation.
                </h2>
                <p className="mt-8 text-[var(--text-body)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-md">
                  We respond within 2 business days. Conversations stay
                  confidential whether or not a partnership results.
                </p>

                {/* 8 — Direct contact */}
                <div className="mt-16">
                  <p className="caption mb-5">Or contact us directly</p>
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
                      Phone: <a href="tel:+967" className="text-[var(--color-navy)]">{CONTACT.phone}</a>
                    </li>
                    <li className="text-[var(--color-charcoal)]/80">
                      WhatsApp Business: {CONTACT.whatsapp}
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
