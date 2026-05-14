import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Closer() {
  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="editorial-wrap">
        <FadeIn className="max-w-4xl">
          <p className="eyebrow mb-6">The invitation</p>
          <h2 className="text-[2.5rem] md:text-[4.25rem] leading-[1.02] tracking-tight max-w-[14ch]">
            Bring your brand to{" "}
            <span className="italic text-[var(--color-bronze)]">Yemen.</span>
          </h2>

          <p className="mt-10 text-[var(--text-body-lg)] leading-[1.65] text-[var(--color-charcoal)]/85 max-w-2xl">
            If you're an international brand owner considering Yemen as your
            next market, let's start the conversation. We respond within 2
            business days.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/partner-with-us" className="btn-primary">
              Become a Partner <span aria-hidden>→</span>
            </Link>
            <a
              href="mailto:partnerships@alsabahygroup.com"
              className="btn-secondary"
            >
              partnerships@alsabahygroup.com
            </a>
          </div>

          <div className="mt-20 max-w-2xl">
            <div className="rule mb-8" />
            <blockquote className="font-[var(--font-display)] italic text-[1.5rem] md:text-[2rem] leading-[1.3] text-[var(--color-navy)]/90">
              "A market is only as accessible as the partner who opens it for
              you."
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
