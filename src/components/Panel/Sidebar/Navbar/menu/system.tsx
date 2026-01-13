import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { GoOut } from "@assets/Icons/black/GoOut";

export const SYSTEM_MENU = [
  {
    title: i18n("Words.go_out"),
    Icon: GoOut,
    link: privateRoutes.panel.logout,
  },
] as Array<MenuShape>;

