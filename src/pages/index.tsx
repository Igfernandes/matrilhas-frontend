import { Header } from "@components/Public/Header";
import { AboutUs } from "@components/Public/Home/AboutUs";
import { FAQ } from "@components/Public/Home/FAQ";
import { Gallery } from "@components/Public/Home/Gallery";
import { Partners } from "@components/Public/Home/Partners";
import { Main } from "@components/Public/Home/Main";
import { Footer } from "@components/Public/Footer";
import { Agencies } from "@components/Public/Home/Agencies";
import { Tours } from "@components/Public/Home/Tours";
import { Filter } from "@components/Public/Home/Filter";
import { SalesProvider } from "@components/Public/Sales/context";
import { Subscribe } from "@components/Public/Subscribe";

export default function Home() {
  return (
    <SalesProvider>
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
    </SalesProvider>
  );
}
