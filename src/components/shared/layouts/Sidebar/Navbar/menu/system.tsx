import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { GoOut } from "@assets/Icons/black/GoOut";
import { Config } from "@assets/Icons/black/Config";

export const SYSTEM_MENU = [
  {
    title: i18n("Texts.apis_manager"),
    Icon: Config,
    link: privateRoutes.apisManager,
    permissions: ["integrations_view"],
  },
  {
    title: i18n("Words.go_out"),
    Icon: GoOut,
    link: privateRoutes.logout,
  },
] as Array<MenuShape>;

