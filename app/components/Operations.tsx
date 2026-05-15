import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FadeIn from "./FadeIn";
import { OPERATIONS } from "@/app/lib/operations";

export default function Operations() {
  const t = useTranslations("operations");
  const c = useTranslations("common");

  const stats = [
    { value: OPERATIONS.governorates, label: t("stats.governorates") },
    {
      value: OPERATIONS.retailAndPharmacyPoints,
      label: t("stats.retailPoints"),
    },
    { value: OPERATIONS.warehouses, label: t("stats.warehouses") },
    { value: OPERATIONS.fleet, label: t("stats.fleet") },
    { value: OPERATIONS.yearsInOperation, label: t("stats.years") },
  ];

  const capabilities = [
    "importCustoms",
    "mohRegistration",
    "coldChain",
    "distribution",
  ] as const;

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
          <p className="eyebrow mb-6">{t("eyebrow")}</p>
          <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch] !text-[var(--color-cream)]">
            {t("title")}
          </h2>
          <p className="mt-8 text-[var(--text-body-lg)] leading-[1.7] opacity-85 max-w-2xl">
            {t("body")}
          </p>
        </FadeIn>

        <FadeIn className="mt-20 border-t border-[var(--color-cream)]/15">
          <ul className="grid grid-cols-2 md:grid-cols-5">
            {stats.map((s, i) => (
              <li
                key={s.label}
                className={`py-10 ${
                  i !== stats.length - 1
                    ? "md:border-r border-[var(--color-cream)]/15"
                    : ""
                } ${i % 2 === 0 ? "border-r md:border-r" : ""} ${
                  i < stats.length - 1 ? "border-b md:border-b-0" : ""
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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {capabilities.map((key, i) => (
            <FadeIn key={key} delay={i * 80}>
              <article>
                <p className="caption !text-[var(--color-bronze)] !opacity-100 mb-4">
                  {t(`capabilities.${key}.eyebrow`)}
                </p>
                <h3 className="font-[var(--font-display)] text-[1.5rem] md:text-[1.875rem] !text-[var(--color-cream)] tracking-tight">
                  {t(`capabilities.${key}.title`)}
                </h3>
                <p className="mt-5 text-[var(--text-body)] leading-[1.7] opacity-80 max-w-md">
                  {key === "distribution"
                    ? t("capabilities.distribution.body", {
                        count: OPERATIONS.governorates,
                      })
                    : t(`capabilities.${key}.body`)}
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
            {c("fullDistributionCapabilities")}{" "}
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
