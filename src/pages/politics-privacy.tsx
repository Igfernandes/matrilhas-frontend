import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import { useI18n } from "@contexts/I18n";
import Link from "next/link";

export default function PoliticsPrivacy() {
  const { t } = useI18n();

  return (
    <>
      <Header />
      <div className="flex flex-col justify-between min-h-[85vh] max-w-[1440px] mx-auto">
        <main className="w-full lg:w-[800px] mx-auto">
          <div className="bg-tertiary p-4 mx-auto mt-4">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">
                {t("Screens.politics.title")}
              </h1>
              <div className="text-sm mt-2 ">
                <p>{t("Screens.politics.company.corporate_name")}</p>
                <p>
                  {t("Screens.politics.company.trade_name")} —{" "}
                  {t("Screens.politics.company.cnpj")}
                </p>
                <p>{t("Screens.politics.company.activity")}</p>
                <p>{t("Screens.politics.company.address")}</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 px-6 mx-auto mb-10">
            <p className="text-sm text-end">
              {t("Screens.politics.last_update")}
            </p>

            <ol className="list-decimal text-2xl mt-4 pl-5">
              {/* INTRODUÇÃO */}
              <li>
                <h2 className="text-2xl">
                  <strong>{t("Screens.politics.introduction.title")}</strong>
                </h2>
                <br />
                <p className="text-sm text-justify">
                  {t("Screens.politics.introduction.text_1")}
                </p>
                <p className="text-sm text-justify mt-2">
                  {t("Screens.politics.introduction.text_2")}
                </p>
              </li>

              {/* DADOS COLETADOS */}
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>{t("Screens.politics.collected_data.title")}</strong>
                </h2>
                <br />
                <p className="text-base">
                  {t("Screens.politics.collected_data.description")}
                </p>

                <ol className="list-item text-base mt-4">
                  <li>
                    <span>
                      {t("Screens.politics.collected_data.user_data.title")}
                    </span>
                    <ul className="pl-5 mt-2">
                      <li>- {t("Screens.politics.collected_data.user_data.item_1")}</li>
                      <li>- {t("Screens.politics.collected_data.user_data.item_2")}</li>
                      <li>- {t("Screens.politics.collected_data.user_data.item_3")}</li>
                      <li>- {t("Screens.politics.collected_data.user_data.item_4")}</li>
                      <li>- {t("Screens.politics.collected_data.user_data.item_5")}</li>
                      <li>- {t("Screens.politics.collected_data.user_data.item_6")}</li>
                      <li>- {t("Screens.politics.collected_data.user_data.item_7")}</li>
                    </ul>
                  </li>
                </ol>

                <ol className="list-item text-base mt-6">
                  <li>
                    <span>
                      {t("Screens.politics.collected_data.auto_data.title")}
                    </span>
                    <ul className="pl-5 mt-2">
                      <li>- {t("Screens.politics.collected_data.auto_data.item_1")}</li>
                      <li>- {t("Screens.politics.collected_data.auto_data.item_2")}</li>
                      <li>- {t("Screens.politics.collected_data.auto_data.item_3")}</li>
                      <li>- {t("Screens.politics.collected_data.auto_data.item_4")}</li>
                      <li>- {t("Screens.politics.collected_data.auto_data.item_5")}</li>
                      <li>- {t("Screens.politics.collected_data.auto_data.item_6")}</li>
                      <li>- {t("Screens.politics.collected_data.auto_data.item_7")}</li>
                    </ul>
                  </li>
                </ol>
              </li>

              {/* FINALIDADE */}
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>{t("Screens.politics.purpose.title")}</strong>
                </h2>
                <p className="text-base mt-4">
                  {t("Screens.politics.purpose.description")}
                </p>
                <ol className="text-sm pl-6">
                  <li>- {t("Screens.politics.purpose.item_1")}</li>
                  <li>- {t("Screens.politics.purpose.item_2")}</li>
                  <li>- {t("Screens.politics.purpose.item_3")}</li>
                  <li>- {t("Screens.politics.purpose.item_4")}</li>
                  <li>- {t("Screens.politics.purpose.item_5")}</li>
                  <li>- {t("Screens.politics.purpose.item_6")}</li>
                  <li>- {t("Screens.politics.purpose.item_7")}</li>
                  <li>- {t("Screens.politics.purpose.item_8")}</li>
                </ol>
              </li>

              {/* COOKIES */}
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>{t("Screens.politics.cookies.title")}</strong>
                </h2>
                <p className="text-base mt-4">
                  {t("Screens.politics.cookies.description")}{" "}
                  <Link href="/cookies" className="text-red underline">
                    {t("Screens.politics.cookies.link")}
                  </Link>
                  .
                </p>
              </li>

              {/* CONTATO */}
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>{t("Screens.politics.contact.title")}</strong>
                </h2>
                <p className="text-base mt-4">
                  {t("Screens.politics.contact.description")}
                </p>
                <ol className="text-sm pl-6">
                  <li>{t("Screens.politics.contact.item_1")}</li>
                  <li>{t("Screens.politics.contact.item_2")}</li>
                  <li>{t("Screens.politics.contact.item_3")}</li>
                </ol>
              </li>
            </ol>
          </div>
        </main>
        <Footer hasPoliticsCookies={false} />
      </div>
    </>
  );
}
