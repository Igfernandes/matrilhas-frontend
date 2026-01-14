import { ArrowNarrowLeft } from "@assets/Icons/black/ArrowNarrowLeft";
import { Bars } from "@assets/Icons/black/Bars";
import { Bell } from "@assets/Icons/black/Bell";
import { When } from "@components/utilities/When";
import { useUserNavigationContext } from "@contexts/Navigation/User";
import useWindow from "@hooks/useWindow";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Flags } from "../../shared/layouts/Flags";
import { Skeleton } from "@components/utilities/Skeleton";
import { useI18n } from "@contexts/I18n";

type Props = {
  title?: string;
  handleSidebar: () => void;
  handleNotification: (isShow: boolean) => void;
  notificationsAmount: string;
};

export function Header({
  handleSidebar,
  handleNotification,
  title,
  notificationsAmount,
}: Props) {
  const { t } = useI18n()
  const { screenType } = useWindow();
  const { userAuth } = useUserNavigationContext();
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
          }} isLoading={!userAuth || !userAuth?.name}>
            <h3>
              <When value={!!userAuth && !isShowBackRoute.current}>
                <strong>
                  {welcomeMessage.replace(
                    ", {name}",
                    screenType == "DESKTOP" ? `, ${userAuth?.name}` : ""
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
          <div className="pt-2 md:pt-1 mr-2 md:mr-0">
            <div
              className="relative bg-tertiary rounded-sm cursor-pointer"
              onClick={() => handleNotification(true)}
            >
              <When value={notificationsAmount > "0"}>
                <span className="bg-primary px-1 pt-[3px] w-5 h-[19px] text-center rounded-xl text-[10px] text-white absolute right-[-4px] top-[-13px]">
                  {notificationsAmount}
                </span>
              </When>
              <Bell className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
