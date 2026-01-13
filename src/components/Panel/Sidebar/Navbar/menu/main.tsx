import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import { FullScreenBI } from "@assets/Icons/black/FullScreenBI";
import i18n from "@configs/i18n";
import { Bag } from "@assets/Icons/black/Bag";

export const MAIN_MENU = [
  {
    title: "Dashboard",
    Icon: FullScreenBI,
    link: privateRoutes.panel.overview,
  },
  {
    title: i18n("Words.tours"),
    Icon: Bag,
    link: privateRoutes.panel.tours,
  },
] as Array<MenuShape>;
