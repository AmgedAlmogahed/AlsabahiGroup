import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FadeIn from "./FadeIn";
import BrandImage from "./BrandImage";
import { SITE_IMAGES } from "@/app/lib/site-images";

export default function Sectors() {
  const t = useTranslations("sectorsBlock");

  const sectors = [
    {
      key: "pharma" as const,
      href: "/sectors/pharmaceuticals" as const,
      photoTone: "navy" as const,
      imageKey: "homeSectorPharma" as const,
    },
    {
      key: "confectionery" as const,
      href: "/sectors/confectionery" as const,
      photoTone: "bronze" as const,
      imageKey: "homeSectorConfectionery" as const,
    },
  ];

  return (
    <section className="section bg-[var(--color-offwhite)]">
      <div className="editorial-wrap">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow mb-6">{t("eyebrow")}</p>
          <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[18ch]">
            {t("title")}
          </h2>
          <p className="mt-8 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-2xl">
            {t("body")}
          </p>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
          {sectors.map((s, i) => (
            <FadeIn key={s.key} delay={i * 100}>
              <article className="group">
                <BrandImage
                  src={SITE_IMAGES[s.imageKey]}
                  alt={t(`${s.key}.photoCaption`)}
                  tone={s.photoTone}
                  aspect="wide"
                />
                <div className="mt-8">
                  <p className="eyebrow mb-4">{t(`${s.key}.eyebrow`)}</p>
                  <h3 className="font-[var(--font-display)] text-[1.625rem] md:text-[2rem] leading-[1.1] max-w-[20ch]">
                    {t(`${s.key}.h3`)}
                  </h3>
                  <p className="mt-6 text-[var(--text-body)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-xl">
                    {t(`${s.key}.body`)}
                  </p>
                  <Link href={s.href} className="link-inline mt-8">
                    {t(`${s.key}.ctaLabel`)} <span className="arrow">→</span>
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
