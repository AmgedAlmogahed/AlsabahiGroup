"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === "ar" ? "en" : "ar";
  const label = locale === "ar" ? "EN" : "ع";

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className="opacity-60 hover:opacity-100 transition-opacity"
      aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
    >
      {label}
    </Link>
  );
}
