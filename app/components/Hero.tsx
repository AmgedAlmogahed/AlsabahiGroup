import Link from "next/link";

const STATS = [
  { value: "1993", label: "Established" },
  { value: "5", label: "International brands" },
  { value: "[X]", label: "Governorates served" },
  { value: "[X]", label: "Retail & pharmacy points" },
];

export default function Hero() {
  return (
    <section className="relative bg-[var(--color-navy)] text-[var(--color-cream)] overflow-hidden">
      {/* Editorial still — single image, no video, no parallax per spec §What changes */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-screen"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 30%, rgba(185,139,58,0.55), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(241,236,226,0.18), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(241,236,226,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(241,236,226,0.4) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="editorial-wrap relative pt-44 pb-24 md:pt-56 md:pb-32">
        <p className="eyebrow !text-[var(--color-bronze)] mb-8">
          Authorized Agent in Yemen · Since 1993
        </p>

        <h1 className="font-[var(--font-display)] text-[2.75rem] sm:text-6xl md:text-[5.25rem] leading-[1.02] tracking-tight max-w-[18ch] text-[var(--color-cream)]">
          Bringing the world's most trusted brands to{" "}
          <span className="italic text-[var(--color-bronze-soft)]">Yemen.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] opacity-85">
          For over three decades, Alsabahy Group has served as the authorized
          agent (وكيل) for premium international names in pharmaceuticals and
          confectionery — bridging global manufacturers with Yemen's
          pharmacies, retailers, and consumers.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/brands"
            className="btn-primary !bg-[var(--color-cream)] !text-[var(--color-navy)] hover:!bg-[var(--color-bronze)] hover:!text-[var(--color-navy)]"
          >
            View Our Brand Portfolio
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/partner-with-us"
            className="btn-secondary !text-[var(--color-cream)] !border-[var(--color-cream)]/60 hover:!bg-[var(--color-cream)] hover:!text-[var(--color-navy)]"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      {/* Trust strip — 4 inline stats per spec §Hero */}
      <div className="editorial-wrap relative border-t border-[var(--color-cream)]/15">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className={`py-8 md:py-10 ${
                i !== STATS.length - 1
                  ? "md:border-r border-[var(--color-cream)]/15"
                  : ""
              } ${i % 2 === 0 ? "border-r md:border-r" : ""} ${
                i < 2 ? "border-b md:border-b-0" : ""
              } border-[var(--color-cream)]/15 pr-6`}
            >
              <p className="font-[var(--font-display)] text-3xl md:text-[2.25rem] text-[var(--color-cream)]">
                {s.value}
              </p>
              <p className="caption mt-2 !text-[var(--color-cream)] !opacity-60">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
