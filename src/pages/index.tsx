import { Header } from "@components/Public/Header";
import { AboutUs } from "@components/Public/Home/AboutUs";
import { FAQ } from "@components/Public/Home/FAQ";
import { Gallery } from "@components/Public/Home/Gallery";
import { Partners } from "@components/Public/Home/Partners";
import { Main } from "@components/Public/Home/Main";
import { Footer } from "@components/Public/Footer";
import { Subscribe } from "@components/Public/Home/Subscribe";
import { Agencies } from "@components/Public/Home/Agencies";
import { Tours } from "@components/Public/Home/Tours";
import { Filter } from "@components/Public/Home/Filter";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Filter />
      <AboutUs />
      <Tours />
      <Gallery />
      <Agencies />
      <Partners />
      <FAQ />
      <Subscribe />
      <Footer type="DEFAULT" />
    </>
  );
}
