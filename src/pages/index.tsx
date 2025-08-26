import { Header } from "@components/Public/Header";
import { AboutUs } from "@components/Public/Home/AboutUs";
import { Events } from "@components/Public/Home/Events";
import { Main } from "@components/Public/Home/Main";
import { SlideActivity } from "@components/Public/Home/SlideActivity";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <AboutUs />
      <SlideActivity />
      <Events />
    </>
  );
}
