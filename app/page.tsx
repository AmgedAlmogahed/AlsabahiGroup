import Header from "./components/Header";
import Hero from "./components/Hero";
import Role from "./components/Role";
import Sectors from "./components/Sectors";
import Brands from "./components/Brands";
import Operations from "./components/Operations";
import WhyAlsabahy from "./components/WhyAlsabahy";
import Closer from "./components/Closer";
import Footer from "./components/Footer";

export default function HomePage() {
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
