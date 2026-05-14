import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FadeIn from "@/app/components/FadeIn";
import PhotoPlate from "@/app/components/PhotoPlate";
import { OPERATIONS } from "@/app/lib/operations";

const SITE_URL = "https://alsabahygroup.com";

export const metadata: Metadata = {
  title: "About Alsabahy Group | Yemen's Authorised Agent Since 1993",
  description:
    "Alsabahy Group has served as Yemen's authorised agent (وكيل) for premium international brands since 1993. Three decades of unbroken pharmaceutical and confectionery distribution.",
  keywords: [
    "Alsabahy Group history",
    "Yemen distributor 1993",
    "وكيل اليمن",
    "Yemen pharmaceutical distribution history",
    "Yemen confectionery distribution history",
  ],
  alternates: {
    canonical: "/about",
    languages: { en: "/about", ar: "/ar/about" },
  },
};

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

const TIMELINE = [
  { year: "1993", text: "Founded. Authorised distribution begins in Yemen." },
  { year: "[year]", text: "First international pharmaceutical brand partnership." },
  { year: "[year]", text: "First international confectionery brand partnership." },
  { year: "[year]", text: "Regional warehouse network expands beyond [city]." },
  { year: "[year]", text: "Cold-chain logistics capacity established." },
  { year: "[year]", text: "Ministry of Health registration capability formalised." },
  { year: "[year]", text: "Partnership with Lýsi (Iceland) begins.", brandSlug: "lysi" },
  { year: "[year]", text: "Partnership with Esseti Farmaceutici (Italy) begins.", brandSlug: "esseti-farmaceutici" },
  { year: "[year]", text: "Confectionery portfolio expands to multi-brand coverage." },
  {
    year: "Today",
    text: `5 international brands, 2 sectors, distribution across ${OPERATIONS.governorates} governorates.`,
  },
];

const VALUES = [
  {
    number: "01",
    name: "Quality",
    heading: "Quality is the contract.",
    body: "Every product we represent meets the manufacturing and regulatory standards of its home market — and every shipment we handle reflects that standard from port to pharmacy. Quality isn't a marketing claim. It's the contract we sign with our partners and consumers.",
  },
  {
    number: "02",
    name: "Trust",
    heading: "Trust is the only currency that compounds.",
    body: "Trust between us and our brand partners. Trust between us and our retailers. Trust between our products and the Yemeni consumers who rely on them. Trust is slow to earn, fast to lose, and the only foundation on which decades of operation can be built.",
  },
  {
    number: "03",
    name: "Innovation",
    heading: "Continuous adaptation, not constant change.",
    body: "Distribution disciplines evolve. Regulatory pathways evolve. Retail channels evolve. We adapt to all of it — without abandoning the operating principles that have served us for thirty years.",
  },
  {
    number: "04",
    name: "Responsibility",
    heading: "Accountable to consumers, partners, and regulators.",
    body: "The products we distribute reach pharmacies, hospitals, and families. That responsibility informs every operational decision — from cold-chain protocols to retail merchandising to compliance documentation.",
  },
  {
    number: "05",
    name: "Customer Satisfaction",
    heading: "Every retailer, every consumer, every brand.",
    body: "Our customers include the pharmacies and supermarkets we supply, the international brand owners we represent, and the Yemeni consumers who choose our products. We earn the relationship with each of them, every day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Header />
      <main>
        {/* Section 1 — Hero */}
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
              Alsabahy Group · Since 1993
            </p>
            <h1 className="font-[var(--font-display)] text-[3rem] sm:text-7xl md:text-[7rem] leading-[0.95] tracking-tight max-w-[14ch] !text-[var(--color-cream)]">
              A promise made in{" "}
              <span className="italic text-[var(--color-bronze-soft)]">1993.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] opacity-85">
              Three decades of operating as Yemen's authorised agent (وكيل) for
              premium international brands in pharmaceuticals and confectionery —
              built one partnership at a time.
            </p>
          </div>
        </section>

        {/* Section 2 — The founding */}
        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <FadeIn className="md:col-span-4">
                <p className="eyebrow mb-6">Chapter 01</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[16ch]">
                  Beginning in Yemen, in 1993.
                </h2>
              </FadeIn>

              <FadeIn className="md:col-span-7 md:col-start-6 space-y-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
                <p>
                  Alsabahy Group was founded in 1993 with one ambition: to
                  bring trusted international brands to Yemen, and to represent
                  those brands in-country with the same standard of care their
                  home markets expected. The model was simple — and it remains
                  the model today. We are an authorised agent (وكيل). We don't
                  manufacture. We don't private-label. We represent.
                </p>
                <p>
                  Yemen in 1993 was a market in flux, with formal import and
                  pharmaceutical distribution still maturing. The founders saw
                  what most overlooked: a young, fast-growing consumer base of
                  more than 15 million people, regulated channels stabilising,
                  and an opening for a distributor who could combine
                  European-grade compliance with locally-rooted retail
                  relationships. We started with a small portfolio, a single
                  warehouse, and a long view.
                </p>
                <p>
                  Thirty-plus years later, we represent international brands
                  across two regulated sectors, operate regional warehouses
                  with cold-chain capacity, and reach pharmacies and retailers
                  across most of Yemen's governorates. The portfolio grew. The
                  discipline didn't change.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section 3 — The growth (timeline) */}
        <section className="section bg-[var(--color-offwhite)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow mb-6">Chapter 02</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch]">
                From a single warehouse to a national network.
              </h2>
            </FadeIn>

            <FadeIn className="mt-16">
              <ol className="border-t border-[var(--color-divider)]">
                {TIMELINE.map((m, i) => (
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
                          {m.text}
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
                          {m.text}
                        </p>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-[0.875rem] italic text-[var(--color-charcoal)]/55 max-w-2xl">
                Note: final dates and milestones to be confirmed with Alsabahy.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 4 — Vision & Mission */}
        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-3xl">
              <p className="eyebrow mb-6">Chapter 03</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[18ch]">
                Where we're going.
              </h2>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <FadeIn>
                <p className="caption mb-5">Vision</p>
                <h3 className="font-[var(--font-display)] text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-tight max-w-[16ch]">
                  A leading regional partner.
                </h3>
                <p className="mt-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-md">
                  To become the most trusted authorised agent in the region for
                  international pharmaceutical and confectionery brands seeking
                  entry to Yemen and surrounding markets — built on unbroken
                  operating continuity, regulatory rigour, and partnership
                  longevity.
                </p>
              </FadeIn>

              <FadeIn delay={100}>
                <p className="caption mb-5">Mission</p>
                <h3 className="font-[var(--font-display)] text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-tight max-w-[16ch]">
                  What we do, every day.
                </h3>
                <p className="mt-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-md">
                  To deliver high-quality international products to Yemeni
                  consumers while adhering to the highest health, safety, and
                  regulatory standards — and to protect the brand integrity of
                  every partner we represent, at every step from import to
                  shelf.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section 5 — Values */}
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
              <p className="eyebrow !text-[var(--color-bronze)] mb-6">Chapter 04</p>
              <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch] !text-[var(--color-cream)]">
                The five things we don't compromise on.
              </h2>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {VALUES.map((v, i) => (
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

        {/* Section 7 — Closing CTA */}
        <section className="section bg-[var(--color-cream)]">
          <div className="editorial-wrap">
            <FadeIn className="max-w-4xl">
              <p className="eyebrow mb-6">For International Brands</p>
              <h2 className="text-[2.25rem] md:text-[3.5rem] leading-[1.05] tracking-tight max-w-[18ch]">
                Ready to be the next chapter?
              </h2>
              <p className="mt-8 text-[var(--text-body-lg)] leading-[1.65] text-[var(--color-charcoal)]/85 max-w-2xl">
                If you're an international brand evaluating Yemen as a market,
                let's start the conversation.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/partner-with-us" className="btn-primary">
                  Become a Partner <span aria-hidden>→</span>
                </Link>
                <Link href="/brands" className="btn-secondary">
                  Explore Our Portfolio
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
