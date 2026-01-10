import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import i18n from "@configs/i18n";
import Link from "next/link";

export default function Cookies() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between min-h-[85vh] max-w-[1440px] mx-auto">
        <main className="w-full lg:w-[800px] mx-auto">
          <div className="bg-tertiary p-4 mx-auto mt-4">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">
                {i18n("Screens.cookies.title")}
              </h1>
            </div>
          </div>

          <div className="w-full mt-6 px-6 mx-auto mb-10">
            <p className="text-sm text-end">
              {i18n("Screens.cookies.last_update")}
            </p>

            <ol className="list-decimal text-2xl mt-4 pl-5">
              {/* 1. O QUE SÃO COOKIES */}
              <li>
                <h2 className="text-2xl">
                  <strong>{i18n("Screens.cookies.what_are.title")}</strong>
                </h2>
                <br />
                <p className="text-sm text-justify">
                  {i18n("Screens.cookies.what_are.text")}
                </p>
              </li>

              {/* 2. TIPOS DE COOKIES */}
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>{i18n("Screens.cookies.types.title")}</strong>
                </h2>
                <br />
                <p className="text-base">
                  {i18n("Screens.cookies.types.description")}
                </p>

                <ol className="list-item text-base mt-4">
                  <li>
                    <strong>
                      {i18n("Screens.cookies.types.necessary.title")}
                    </strong>
                    <p>{i18n("Screens.cookies.types.necessary.text")}</p>
                  </li>

                  <li>
                    <strong>
                      {i18n("Screens.cookies.types.performance.title")}
                    </strong>
                    <p>{i18n("Screens.cookies.types.performance.text")}</p>
                  </li>

                  <li>
                    <strong>
                      {i18n("Screens.cookies.types.functionality.title")}
                    </strong>
                    <p>{i18n("Screens.cookies.types.functionality.text")}</p>
                  </li>

                  <li>
                    <strong>
                      {i18n("Screens.cookies.types.marketing.title")}
                    </strong>
                    <p>{i18n("Screens.cookies.types.marketing.text")}</p>
                  </li>
                </ol>
              </li>

              {/* 3. COOKIES DE TERCEIROS */}
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>{i18n("Screens.cookies.third_party.title")}</strong>
                </h2>

                <p className="text-base mt-4">
                  {i18n("Screens.cookies.third_party.description")}
                </p>

                <ol className="text-sm pl-6">
                  <li>- {i18n("Screens.cookies.third_party.item_1")}</li>
                  <li>- {i18n("Screens.cookies.third_party.item_2")}</li>
                  <li>- {i18n("Screens.cookies.third_party.item_3")}</li>
                  <li>- {i18n("Screens.cookies.third_party.item_4")}</li>
                  <li>- {i18n("Screens.cookies.third_party.item_5")}</li>
                </ol>

                <p className="text-sm mt-2">
                  {i18n("Screens.cookies.third_party.footer")}
                </p>
              </li>

              {/* 4. CONSENTIMENTO */}
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>{i18n("Screens.cookies.consent.title")}</strong>
                </h2>

                <p className="text-base mt-4">
                  {i18n("Screens.cookies.consent.text_1")}
                </p>
                <p className="text-base mt-2">
                  {i18n("Screens.cookies.consent.text_2")}
                </p>
                <p className="text-base mt-2">
                  {i18n("Screens.cookies.consent.text_3")}
                </p>
                <p className="text-base mt-2">
                  {i18n("Screens.cookies.consent.text_4")}
                </p>
              </li>

              {/* 5. NAVEGADORES */}
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>{i18n("Screens.cookies.browser.title")}</strong>
                </h2>

                <p className="text-base mt-4">
                  {i18n("Screens.cookies.browser.description")}
                </p>

                <ol className="text-sm pl-6">
                  <li>- {i18n("Screens.cookies.browser.chrome")}</li>
                  <li>- {i18n("Screens.cookies.browser.firefox")}</li>
                  <li>- {i18n("Screens.cookies.browser.edge")}</li>
                  <li>- {i18n("Screens.cookies.browser.safari")}</li>
                </ol>
              </li>

              {/* 6. ALTERAÇÕES */}
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>{i18n("Screens.cookies.changes.title")}</strong>
                </h2>

                <p className="text-base mt-4">
                  {i18n("Screens.cookies.changes.text")}
                </p>
              </li>

              {/* 7. CONTATO */}
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>{i18n("Screens.cookies.contact.title")}</strong>
                </h2>

                <p className="text-base mt-4">
                  {i18n("Screens.cookies.contact.text")}
                </p>

                <ol className="text-sm pl-6">
                  <li>
                    E-mail:{" "}
                    <Link
                      href={`mailto:${i18n("Screens.cookies.contact.email")}`}
                      className="text-red underline"
                    >
                      {i18n("Screens.cookies.contact.email")}
                    </Link>
                  </li>
                  <li>
                    {i18n("Screens.cookies.contact.address")}
                  </li>
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
