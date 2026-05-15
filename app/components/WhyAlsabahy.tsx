import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

export default function WhyAlsabahy() {
  const t = useTranslations("why");
  const pillars = ["pillar1", "pillar2", "pillar3"] as const;

  return (
    <section className="section bg-[var(--color-offwhite)]">
      <div className="editorial-wrap">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow mb-6">{t("eyebrow")}</p>
          <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch]">
            {t("title")}
          </h2>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
          {pillars.map((key, i) => (
            <FadeIn key={key} delay={i * 100}>
              <article className="border-t border-[var(--color-bronze)]/60 pt-8 h-full">
                <p className="caption mb-6">{t(`${key}.eyebrow`)}</p>
                <h3 className="font-[var(--font-display)] text-[1.5rem] md:text-[1.875rem] leading-[1.15] tracking-tight">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-6 text-[var(--text-body)] leading-[1.7] text-[var(--color-charcoal)]/85">
                  {t(`${key}.body`)}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
