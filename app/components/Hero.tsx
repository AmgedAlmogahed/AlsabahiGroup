import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { OPERATIONS } from "@/app/lib/operations";

export default function Hero() {
  const t = useTranslations("hero");
  const c = useTranslations("common");

  const stats = [
    { value: OPERATIONS.foundingYear, label: t("stats.established") },
    {
      value: String(OPERATIONS.internationalBrands),
      label: t("stats.internationalBrands"),
    },
    { value: OPERATIONS.governorates, label: t("stats.governorates") },
    {
      value: OPERATIONS.retailAndPharmacyPoints,
      label: t("stats.retailPoints"),
    },
  ];

  return (
    <section className="relative bg-[var(--color-navy)] text-[var(--color-cream)] overflow-hidden">
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
          {t("eyebrow")}
        </p>

        <h1 className="font-[var(--font-display)] text-[2.75rem] sm:text-6xl md:text-[5.25rem] leading-[1.02] tracking-tight max-w-[18ch] text-[var(--color-cream)]">
          {t("title")}{" "}
          <span className="italic text-[var(--color-bronze-soft)]">
            {t("titleItalic")}
          </span>
        </h1>

        <p className="mt-10 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] opacity-85">
          {t("body")}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/brands"
            className="btn-primary !bg-[var(--color-cream)] !text-[var(--color-navy)] hover:!bg-[var(--color-bronze)] hover:!text-[var(--color-navy)]"
          >
            {c("viewPortfolio")}
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/partner-with-us"
            className="btn-secondary !text-[var(--color-cream)] !border-[var(--color-cream)]/60 hover:!bg-[var(--color-cream)] hover:!text-[var(--color-navy)]"
          >
            {c("becomePartner")}
          </Link>
        </div>
      </div>

      <div className="editorial-wrap relative border-t border-[var(--color-cream)]/15">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={`py-8 md:py-10 ${
                i !== stats.length - 1
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
