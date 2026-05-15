import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("header");
  const nav = [
    { key: "about", href: "/about" as const },
    { key: "sectors", href: "/sectors" as const },
    { key: "brands", href: "/brands" as const },
    { key: "partner", href: "/partner-with-us" as const },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="editorial-wrap flex items-center justify-between py-7">
        <Link
          href="/"
          aria-label={t("homeAriaLabel")}
          className="font-[var(--font-display)] text-xl tracking-tight text-[var(--color-cream)]"
        >
          Alsabahy<span className="text-[var(--color-bronze)]">.</span>
        </Link>

        <nav
          aria-label={t("primaryNavAriaLabel")}
          className="hidden md:flex items-center gap-9 text-[0.875rem] text-[var(--color-cream)] tracking-wide"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="opacity-90 hover:opacity-100 hover:text-[var(--color-bronze)] transition-colors"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
