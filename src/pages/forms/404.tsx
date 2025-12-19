import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import i18n from "@configs/i18n";
import Image from "next/image";
import Link from "next/link";

export default function Form404() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header />
      <div className="container max-w-[1100px] mx-auto my-5">
        <div className="not-found-dog mb-2">
          <Image
            src={"/imgs/404.png"}
            width={250}
            height={200}
            alt="Dog da AGM"
            className="mx-auto"
          />
        </div>
        <div className="text text-center max-w-[428px] mx-auto mb-6">

          <p className="text-md ">
            {i18n("Screens.forms.not_stock")}&nbsp;
            <Link
              className="text-white font-semibold bg-primary py-2 px-4 block rounded-lg mt-4"
              href={`/`}
            >
              {i18n("Texts.home_page")}
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}


