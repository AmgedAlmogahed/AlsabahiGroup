import type { Metadata } from "next";
import { Fraunces, Inter, Cairo } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://alsabahygroup.com";

type Params = { locale: string };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "مجموعة الصباحي | الوكيل المعتمد في اليمن منذ 1993"
      : "Alsabahy Group | Authorized Distributor in Yemen Since 1993";

  const description =
    locale === "ar"
      ? "الوكيل المعتمد في اليمن للعلامات التجارية العالمية الراقية في قطاعَي الأدوية والحلويات. منذ 1993. كن شريكاً معنا."
      : "Yemen's trusted authorized agent (وكيل) for premium international brands in pharmaceuticals and confectionery. Operating since 1993. Partner with us.";

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: locale === "ar" ? "/ar" : "/",
      languages: {
        en: "/",
        ar: "/ar",
      },
    },
    openGraph: {
      type: "website",
      url: locale === "ar" ? `${SITE_URL}/ar` : SITE_URL,
      title,
      description,
      siteName: "Alsabahy Group",
      locale: locale === "ar" ? "ar_YE" : "en_US",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt:
            locale === "ar"
              ? "صيدلية تعرض منتجات لعلامات تجارية على الرفوف — مجموعة الصباحي"
              : "Pharmacy interior with branded products on shelves — Alsabahy Group",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alsabahy Group",
  alternateName: "مجموعة الصباحي",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Yemen's authorized agent for premium international brands in pharmaceuticals and confectionery. Operating since 1993.",
  foundingDate: "1993",
  address: {
    "@type": "PostalAddress",
    addressCountry: "YE",
  },
  areaServed: { "@type": "Country", name: "Yemen" },
  sameAs: ["https://www.linkedin.com/"],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontClass =
    locale === "ar"
      ? `${cairo.variable} ${fraunces.variable}`
      : `${fraunces.variable} ${inter.variable}`;

  return (
    <html
      lang={locale}
      dir={dir}
      className={fontClass}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
