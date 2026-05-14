import FadeIn from "./FadeIn";

const PILLARS = [
  {
    eyebrow: "Pillar 01",
    title: "Three decades of operating",
    body: "Yemen is a market built on trust and long-standing relationships. We've spent more than 30 years building both. Our retail and pharmacy networks know us, our regulators know us, and our brand partners stay with us.",
  },
  {
    eyebrow: "Pillar 02",
    title: "Regulatory rigor",
    body: "Every product we represent passes through formal customs and Ministry of Health workflows, with documented compliance for each shipment. We protect our partners' regulatory standing before, during, and after launch.",
  },
  {
    eyebrow: "Pillar 03",
    title: "Single point of accountability",
    body: "One agent. One contract. One regional team. Brands work with a single counterpart who owns every aspect of their performance in Yemen — from import to shelf to consumer feedback.",
  },
];

export default function WhyAlsabahy() {
  return (
    <section className="section bg-[var(--color-offwhite)]">
      <div className="editorial-wrap">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow mb-6">Why Alsabahy</p>
          <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch]">
            Why international brands choose Alsabahy.
          </h2>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
          {PILLARS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100}>
              <article className="border-t border-[var(--color-bronze)]/60 pt-8 h-full">
                <p className="caption mb-6">{p.eyebrow}</p>
                <h3 className="font-[var(--font-display)] text-[1.5rem] md:text-[1.875rem] leading-[1.15] tracking-tight">
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
  );
}
