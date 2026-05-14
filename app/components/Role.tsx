import Link from "next/link";
import FadeIn from "./FadeIn";
import BrandImage from "./BrandImage";
import { SITE_IMAGES } from "@/app/lib/site-images";

export default function Role() {
  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="editorial-wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Asymmetric editorial grid — text offset right, image left */}
          <FadeIn className="md:col-span-5 md:col-start-1">
            <BrandImage
              src={SITE_IMAGES.homeRole}
              alt="Pharmacist arranging branded products on a shelf in a Sana'a pharmacy. Natural light, hands in frame, packaging detail."
              tone="cream"
              aspect="portrait"
            />
          </FadeIn>

          <FadeIn className="md:col-span-6 md:col-start-7 md:pt-8">
            <p className="eyebrow mb-6">The role we play</p>
            <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch]">
              We are the bridge between global brands and the Yemeni market.
            </h2>

            <div className="mt-10 space-y-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
              <p>
                Being an authorized agent (وكيل) is more than logistics. It is
                the responsibility of safeguarding a brand's reputation,
                regulatory standing, and consumer trust in a market where
                Alsabahy has spent more than 30 years building infrastructure
                and relationships.
              </p>
              <p>
                We handle every step in the chain — import licensing, customs
                clearance, Ministry of Health registration, cold-chain
                handling, warehousing, nationwide distribution, retailer
                education, and after-market support. Brand owners send us
                their products. We make sure those products reach the right
                shelves, in the right condition, in front of the right
                consumers.
              </p>
            </div>

            <Link href="/about" className="link-inline mt-10">
              Learn how we work <span className="arrow">→</span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
