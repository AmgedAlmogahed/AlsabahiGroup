import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FadeIn from "./FadeIn";
import { CONTACT } from "@/app/lib/operations";

export default function Closer() {
  const t = useTranslations("closer");
  const c = useTranslations("common");

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="editorial-wrap">
        <FadeIn className="max-w-4xl">
          <p className="eyebrow mb-6">{t("eyebrow")}</p>
          <h2 className="text-[2.5rem] md:text-[4.25rem] leading-[1.02] tracking-tight max-w-[14ch]">
            {t("title")}{" "}
            <span className="italic text-[var(--color-bronze)]">
              {t("titleItalic")}
            </span>
          </h2>

          <p className="mt-10 text-[var(--text-body-lg)] leading-[1.65] text-[var(--color-charcoal)]/85 max-w-2xl">
            {t("body")}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/partner-with-us" className="btn-primary">
              {c("becomePartner")} <span aria-hidden>→</span>
            </Link>
            <a
              href={`mailto:${CONTACT.partnershipsEmail}`}
              className="btn-secondary"
            >
              {CONTACT.partnershipsEmail}
            </a>
          </div>

          <div className="mt-20 max-w-2xl">
            <div className="rule mb-8" />
            <blockquote className="font-[var(--font-display)] italic text-[1.5rem] md:text-[2rem] leading-[1.3] text-[var(--color-navy)]/90">
              &ldquo;{t("quote")}&rdquo;
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
