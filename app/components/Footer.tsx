import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/app/lib/operations";

export default function Footer() {
  const t = useTranslations("footer");
  const h = useTranslations("header");

  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-cream)]">
      <div className="editorial-wrap pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Column 1 — Brand mark + tagline */}
          <div className="md:col-span-4">
            <p className="font-[var(--font-display)] text-3xl tracking-tight">
              Alsabahy<span className="text-[var(--color-bronze)]">.</span>
            </p>
            <p className="mt-4 max-w-sm text-[0.95rem] opacity-75 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Column 2 — Navigate */}
          <div className="md:col-span-2">
            <h4 className="caption !text-[var(--color-cream)] !opacity-50 mb-5">
              {t("navigate")}
            </h4>
            <ul className="space-y-3 text-[0.95rem]">
              <li>
                <Link href="/about" className="hover:text-[var(--color-bronze)]">
                  {h("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors"
                  className="hover:text-[var(--color-bronze)]"
                >
                  {h("nav.sectors")}
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="hover:text-[var(--color-bronze)]"
                >
                  {h("nav.brands")}
                </Link>
              </li>
              <li>
                <Link
                  href="/partner-with-us"
                  className="hover:text-[var(--color-bronze)]"
                >
                  {h("nav.partner")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[var(--color-bronze)]"
                >
                  {h("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="md:col-span-3">
            <h4 className="caption !text-[var(--color-cream)] !opacity-50 mb-5">
              {t("contact")}
            </h4>
            <ul className="space-y-3 text-[0.95rem]">
              <li>
                <a
                  href={`mailto:${CONTACT.partnershipsEmail}`}
                  className="hover:text-[var(--color-bronze)]"
                >
                  {CONTACT.partnershipsEmail}
                </a>
              </li>
              <li className="opacity-75">{CONTACT.phone}</li>
              <li className="opacity-75 leading-relaxed">
                {CONTACT.hqStreet},
                <br />
                {CONTACT.hqCity}, {CONTACT.hqCountry}
              </li>
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div className="md:col-span-3">
            <h4 className="caption !text-[var(--color-cream)] !opacity-50 mb-5">
              {t("connect")}
            </h4>
            <ul className="space-y-3 text-[0.95rem]">
              <li>
                <a
                  href={CONTACT.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-bronze)]"
                >
                  {t("linkedin")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--color-cream)]/15 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[0.8125rem] opacity-60">
          <p>{t("copyright")}</p>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/privacy"
                className="hover:text-[var(--color-bronze)]"
              >
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[var(--color-bronze)]">
                {t("terms")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
