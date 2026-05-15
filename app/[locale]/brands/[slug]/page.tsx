import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BrandHero from "@/app/components/brand/BrandHero";
import BrandHeritage from "@/app/components/brand/BrandHeritage";
import BrandPartnership from "@/app/components/brand/BrandPartnership";
import BrandGallery from "@/app/components/brand/BrandGallery";
import BrandInYemen from "@/app/components/brand/BrandInYemen";
import BrandContinue from "@/app/components/brand/BrandContinue";

import { BRANDS, getBrand } from "@/app/lib/brands";

const SITE_URL = "https://alsabahygroup.com";

type Params = { slug: string; locale: string };

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const brand = getBrand(slug, locale);
  if (!brand) return {};

  const url = `${SITE_URL}${locale === "ar" ? "/ar" : ""}/brands/${slug}`;
  return {
    title: brand.seo.title,
    description: brand.seo.description,
    keywords: brand.seo.keywords,
    alternates: {
      canonical: `${locale === "ar" ? "/ar" : ""}/brands/${slug}`,
      languages: {
        en: `/brands/${slug}`,
        ar: `/ar/brands/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: brand.seo.title,
      description: brand.seo.description,
      siteName: "Alsabahy Group",
      locale: locale === "ar" ? "ar_YE" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: brand.seo.title,
      description: brand.seo.description,
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const brand = getBrand(slug, locale);
  if (!brand) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brand.schema) }}
      />
      <Header />
      <main>
        <BrandHero brand={brand} />
        <BrandHeritage brand={brand} />
        <BrandPartnership brand={brand} />
        <BrandGallery brand={brand} />
        <BrandInYemen brand={brand} />
        <BrandContinue brand={brand} />
      </main>
      <Footer />
    </>
  );
}
