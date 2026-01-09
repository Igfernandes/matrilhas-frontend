import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import { useI18n } from "@contexts/I18n";
import Image from "next/image";

export default function Page404() {
  const { t } = useI18n()
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header />
      <div className="container max-w-[1100px] mx-auto my-10">
        <div className="not-found-dog mb-8">
          <Image
            src={"/imgs/404.png"}
            width={250}
            height={200}
            alt="Dog da AGM"
            className="mx-auto"
          />
        </div>
        <div className="text text-center max-w-[428px] mx-auto mb-6">
          <p className="text-xl font-bold">
            {t("Words.page_not_available")}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
