import { ArrowNarrowLeft } from "@assets/Icons/black/ArrowNarrowLeft";
import { Bars } from "@assets/Icons/black/Bars";
import { When } from "@components/utilities/When";
import useWindow from "@hooks/useWindow";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Flags } from "../../shared/layouts/Flags";
import { Skeleton } from "@components/utilities/Skeleton";
import { useI18n } from "@contexts/I18n";
import { useAgencyNavigationContext } from "@contexts/Navigation/Agency";

type Props = {
  title?: string;
  handleSidebar: () => void;
};

export function Header({
  handleSidebar,
  title,
}: Props) {
  const { t } = useI18n()
  const { screenType } = useWindow();
  const { agencyAuth } = useAgencyNavigationContext();
  const welcomeMessage = t("Texts.welcome_message") as string;
  const route = useRouter();
  const isShowBackRoute = useRef(route.asPath.split("/").length > 3);

  return (
    <header className="w-full border-b-2 border-zinc-200 p-4">
      <div className="flex justify-between items-center">
        <When value={["MOBILE", "TABLET"].includes(screenType)}>
          <Bars onClick={handleSidebar} className="rotate-180" />
        </When>
        <div className="md:min-w-[20rem]">
          <Skeleton settings={{
            type: "text",
            lines: 1
          }} isLoading={!agencyAuth || !agencyAuth?.name}>
            <h3>
              <When value={!!agencyAuth && !isShowBackRoute.current}>
                <strong>
                  {welcomeMessage.replace(
                    ", {name}",
                    screenType == "DESKTOP" ? `, ${agencyAuth?.name}` : ""
                  )}
                </strong>
              </When>
              <When value={isShowBackRoute.current && screenType !== "MOBILE"}>
                <strong className="flex w-full">
                  <ArrowNarrowLeft
                    className="mr-2 cursor-pointer"
                    onClick={() => route.back()}
                  />
                  <span> {title ?? t("Texts.back_before_page")}</span>
                </strong>
              </When>
            </h3>
          </Skeleton>
        </div>
        <div className="flex relative z-1">
          <Flags />
        </div>
      </div>
    </header>
  );
}
