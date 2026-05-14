import Link from "next/link";
import FadeIn from "./FadeIn";

const STATS = [
  { value: "[X]", label: "Governorates served" },
  { value: "[X]", label: "Retail & pharmacy points" },
  { value: "[X]", label: "Regional warehouses" },
  { value: "[X]", label: "Vehicles in fleet" },
  { value: "30+", label: "Years of operation" },
];

const CAPABILITIES = [
  {
    eyebrow: "01 — Import & customs",
    title: "Import & customs",
    body: "Full handling of import licensing, customs clearance, and regulatory documentation. Our team manages every shipment from port of origin to bonded warehouse without disruption.",
  },
  {
    eyebrow: "02 — MOH registration",
    title: "MOH registration",
    body: "Pharmaceutical product registration with Yemen's Ministry of Health, including dossier preparation, renewals, and ongoing compliance reporting on behalf of our brand partners.",
  },
  {
    eyebrow: "03 — Cold-chain logistics",
    title: "Cold-chain logistics",
    body: "Temperature-controlled warehousing and last-mile delivery for sensitive pharmaceutical and food products. Every link audited. Every batch traceable.",
  },
  {
    eyebrow: "04 — Nationwide distribution",
    title: "Nationwide distribution",
    body: "Direct relationships with pharmacy chains, hospital networks, supermarkets, and traditional retail across [X] governorates — built over three decades.",
  },
];

export default function Operations() {
  return (
    <section className="section bg-[var(--color-navy)] text-[var(--color-cream)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(241,236,226,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(241,236,226,0.4) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="editorial-wrap relative">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow mb-6">How we operate</p>
          <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch] !text-[var(--color-cream)]">
            From port to pharmacy — we control every link.
          </h2>
          <p className="mt-8 text-[var(--text-body-lg)] leading-[1.7] opacity-85 max-w-2xl">
            Distribution is only as strong as its weakest point. We've built
            infrastructure across Yemen to make sure no shipment, no shelf,
            and no compliance step is left to chance.
          </p>
        </FadeIn>

        {/* Editorial stat strip */}
        <FadeIn className="mt-20 border-t border-[var(--color-cream)]/15">
          <ul className="grid grid-cols-2 md:grid-cols-5">
            {STATS.map((s, i) => (
              <li
                key={s.label}
                className={`py-10 ${
                  i !== STATS.length - 1
                    ? "md:border-r border-[var(--color-cream)]/15"
                    : ""
                } ${i % 2 === 0 ? "border-r md:border-r" : ""} ${
                  i < STATS.length - 1 ? "border-b md:border-b-0" : ""
                } border-[var(--color-cream)]/15 pr-4`}
              >
                <p className="font-[var(--font-display)] text-[2.25rem] md:text-[3rem] leading-none !text-[var(--color-cream)]">
                  {s.value}
                </p>
                <p className="caption mt-3 !text-[var(--color-cream)] !opacity-60">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Capabilities — 4 mini-blocks */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {CAPABILITIES.map((c, i) => (
            <FadeIn key={c.title} delay={i * 80}>
              <article>
                <p className="caption !text-[var(--color-bronze)] !opacity-100 mb-4">
                  {c.eyebrow}
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

        <div className="mt-20">
          <Link
            href="/partner-with-us"
            className="link-inline !text-[var(--color-cream)] !border-[var(--color-bronze)]"
          >
            See our full distribution capabilities{" "}
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
