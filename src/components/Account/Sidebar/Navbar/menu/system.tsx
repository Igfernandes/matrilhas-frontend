import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { GoOut } from "@assets/Icons/black/GoOut";
import { Gear } from "@assets/Icons/black/Gear";

export const SYSTEM_MENU = [
  {
    title: i18n("Words.settings"),
    Icon: Gear,
    link: privateRoutes.account.settings,
  },
  {
    title: i18n("Words.go_out"),
    Icon: GoOut,
    link: privateRoutes.account.logout,
  },
] as Array<MenuShape>;

