import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

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

const SITE_URL = "https://alsabahygroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Alsabahy Group | Authorized Distributor in Yemen Since 1993",
  description:
    "Yemen's trusted authorized agent (وكيل) for premium international brands in pharmaceuticals and confectionery. Operating since 1993. Partner with us.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Alsabahy Group | Authorized Distributor in Yemen Since 1993",
    description:
      "Yemen's trusted authorized agent (وكيل) for premium international brands in pharmaceuticals and confectionery. Operating since 1993. Partner with us.",
    siteName: "Alsabahy Group",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Pharmacy interior with branded products on shelves — Alsabahy Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alsabahy Group | Authorized Distributor in Yemen Since 1993",
    description:
      "Yemen's trusted authorized agent for premium international brands in pharmaceuticals and confectionery. Since 1993.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
