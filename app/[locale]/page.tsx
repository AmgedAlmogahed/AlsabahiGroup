import { setRequestLocale } from "next-intl/server";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Role from "@/app/components/Role";
import Sectors from "@/app/components/Sectors";
import Brands from "@/app/components/Brands";
import Operations from "@/app/components/Operations";
import WhyAlsabahy from "@/app/components/WhyAlsabahy";
import Closer from "@/app/components/Closer";
import Footer from "@/app/components/Footer";

type Params = { locale: string };

export default async function HomePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Role />
        <Sectors />
        <Brands />
        <Operations />
        <WhyAlsabahy />
        <Closer />
      </main>
      <Footer />
    </>
  );
}
