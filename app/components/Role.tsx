import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FadeIn from "./FadeIn";
import BrandImage from "./BrandImage";
import { SITE_IMAGES } from "@/app/lib/site-images";

export default function Role() {
  const t = useTranslations("role");
  const c = useTranslations("common");

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="editorial-wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <FadeIn className="md:col-span-5 md:col-start-1">
            <BrandImage
              src={SITE_IMAGES.homeRole}
              alt={t("imageAlt")}
              tone="cream"
              aspect="portrait"
            />
          </FadeIn>

          <FadeIn className="md:col-span-6 md:col-start-7 md:pt-8">
            <p className="eyebrow mb-6">{t("eyebrow")}</p>
            <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[20ch]">
              {t("title")}
            </h2>

            <div className="mt-10 space-y-6 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/90 max-w-2xl">
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
            </div>

            <Link href="/about" className="link-inline mt-10">
              {c("learnMore")} <span className="arrow">→</span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
