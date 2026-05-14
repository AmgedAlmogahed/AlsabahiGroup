import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FadeIn from "@/app/components/FadeIn";
import PhotoPlate from "@/app/components/PhotoPlate";
import { SECTORS } from "@/app/lib/sectors";
import { BRANDS } from "@/app/lib/brands";

export const metadata: Metadata = {
  title: "Sectors | Pharmaceuticals & Confectionery in Yemen | Alsabahy",
  description:
    "Alsabahy Group operates in two sectors: pharmaceuticals and confectionery. Authorised distribution and Ministry of Health registration across Yemen since 1993.",
  keywords: [
    "Yemen pharmaceutical distributor",
    "Yemen confectionery distributor",
    "Yemen sector distribution",
    "وكيل قطاع الأدوية اليمن",
  ],
  alternates: {
    canonical: "/sectors",
    languages: { en: "/sectors", ar: "/ar/sectors" },
  },
};

export default function SectorsIndexPage() {
  const tones = ["navy", "bronze"] as const;

  return (
    <>
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
          <div className="editorial-wrap relative pt-44 pb-24 md:pt-52 md:pb-28">
            <p className="eyebrow !text-[var(--color-bronze)] mb-8">
              The Categories We Serve
            </p>
            <h1 className="font-[var(--font-display)] text-[2.75rem] sm:text-6xl md:text-[5.25rem] leading-[1.02] tracking-tight max-w-[18ch] !text-[var(--color-cream)]">
              Two sectors.{" "}
              <span className="italic text-[var(--color-bronze-soft)]">
                Deep expertise in each.
              </span>
            </h1>
            <p className="mt-10 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] opacity-85">
              We focus exclusively on categories where Yemen's regulatory and
              distribution environment rewards experienced agents.
              Pharmaceuticals and confectionery are different categories, but
              both reward the same things: regulatory discipline, distribution
              depth, and decades of operating presence.
            </p>
          </div>
        </section>

        {/* Section 2 — The two sectors (2-up split) */}
        <section className="bg-[var(--color-cream)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {SECTORS.map((s, i) => {
              const sectorBrands = BRANDS.filter((b) =>
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
                    <p className="eyebrow mb-6">Sector {s.number}</p>
                    <h2 className="font-[var(--font-display)] text-[3rem] md:text-[4.5rem] leading-[0.95] tracking-tight text-[var(--color-navy)] group-hover:text-[var(--color-bronze)] transition-colors">
                      {s.name}.
                    </h2>
                    <p className="mt-8 font-[var(--font-display)] italic text-[1.25rem] md:text-[1.5rem] text-[var(--color-charcoal)]/85 max-w-md">
                      {s.hero.tagline}
                    </p>
                    <p className="mt-8 text-[var(--text-body)] leading-[1.7] text-[var(--color-charcoal)]/80 max-w-md">
                      {i === 0
                        ? "Pharmaceutical and health products from European and international manufacturers, distributed under full Ministry of Health registration to Yemen's hospital networks, pharmacy chains, and independent dispensaries."
                        : "International confectionery and snack brands distributed across Yemen's supermarkets, hypermarkets, kiosks, traditional retail, and wholesale channels — managed end-to-end from import to merchandising."}
                    </p>

                    <p className="caption mt-8 mb-3">In this sector</p>
                    <p className="font-[var(--font-display)] text-[1.125rem] text-[var(--color-navy)]">
                      {sectorBrands.map((b) => b.name).join(" · ")}
                    </p>

                    <p className="mt-10 inline-flex items-center gap-2 link-inline">
                      Enter {s.name} <span className="arrow">→</span>
                    </p>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* Section 3 — Why two sectors, not more */}
        <section className="section bg-[var(--color-offwhite)]">
          <div className="editorial-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <FadeIn className="md:col-span-5">
                <p className="eyebrow mb-6">The Discipline</p>
                <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[18ch]">
                  Why we don't distribute everything.
                </h2>
              </FadeIn>

              <FadeIn className="md:col-span-6 md:col-start-7 space-y-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
                <p>
                  Distribution is a discipline that doesn't reward generalists.
                  Every category demands its own regulatory pathway, retail
                  channel mix, cold-chain protocol, and trade relationship. We
                  made an early choice to concentrate on two — and to build
                  deeper infrastructure in each rather than spread thin across
                  many.
                </p>
                <p>
                  That focus is what allows us to register pharmaceuticals with
                  the Ministry of Health on rigorous timelines, and to keep
                  confectionery on Yemeni shelves week after week without
                  supply gaps. Brands working with us inherit the depth of that
                  specialisation.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
