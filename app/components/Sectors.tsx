import Link from "next/link";
import FadeIn from "./FadeIn";
import BrandImage from "./BrandImage";
import { SITE_IMAGES } from "@/app/lib/site-images";

const SECTORS = [
  {
    eyebrow: "Pharmaceuticals",
    h3: "Regulated. Cold-chain ready. Pharmacy-connected.",
    body: "We distribute pharmaceutical and health products from European and international manufacturers across Yemen's hospital networks, pharmacy chains, and independent dispensaries — under full Ministry of Health registration and cold-chain protocols where required.",
    cta: { label: "Explore Pharmaceuticals", href: "/sectors/pharmaceuticals" },
    photoCaption:
      "Cold-chain pharmaceutical packaging — close-up of regulated product label and box detail.",
    photoTone: "navy" as const,
    imageKey: "homeSectorPharma" as const,
  },
  {
    eyebrow: "Confectionery",
    h3: "Premium taste. Trusted shelves.",
    body: "We bring international confectionery brands to Yemen's supermarkets, kiosks, and traditional retail channels — managing import, in-market branding, retail merchandising, and the day-to-day relationships that keep shelves stocked.",
    cta: { label: "Explore Confectionery", href: "/sectors/confectionery" },
    photoCaption:
      "Confectionery packaging arranged on a Yemeni supermarket shelf — warm tones, natural retail light.",
    photoTone: "bronze" as const,
    imageKey: "homeSectorConfectionery" as const,
  },
];

export default function Sectors() {
  return (
    <section className="section bg-[var(--color-offwhite)]">
      <div className="editorial-wrap">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow mb-6">Sectors</p>
          <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[18ch]">
            Two sectors. Deep expertise in each.
          </h2>
          <p className="mt-8 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-2xl">
            We focus exclusively on categories where Yemen's regulatory and
            distribution environment rewards experienced agents.
          </p>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
          {SECTORS.map((s, i) => (
            <FadeIn key={s.eyebrow} delay={i * 100}>
              <article className="group">
                <BrandImage
                  src={SITE_IMAGES[s.imageKey]}
                  alt={s.photoCaption}
                  tone={s.photoTone}
                  aspect="wide"
                />
                <div className="mt-8">
                  <p className="eyebrow mb-4">{s.eyebrow}</p>
                  <h3 className="font-[var(--font-display)] text-[1.625rem] md:text-[2rem] leading-[1.1] max-w-[20ch]">
                    {s.h3}
                  </h3>
                  <p className="mt-6 text-[var(--text-body)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-xl">
                    {s.body}
                  </p>
                  <Link href={s.cta.href} className="link-inline mt-8">
                    {s.cta.label} <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
