import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import { useI18n } from "@contexts/I18n";
import Image from "next/image";
import Link from "next/link";

export default function Form404() {
  const { t } = useI18n()
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
            {t("Screens.forms.not_stock")}&nbsp;
            <Link
              className="text-white font-semibold bg-primary py-2 px-4 block rounded-lg mt-4"
              href={`/`}
            >
              {t("Texts.home_page")}
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}


