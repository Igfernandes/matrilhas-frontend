import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { GalleriesBI } from "@assets/Icons/black/GalleriesBI";
import { FullScreenBI } from "@assets/Icons/black/FullScreenBI";

export const MAIN_MENU = [
  {
    title: "Dashboard",
    Icon: FullScreenBI,
    link: privateRoutes.dashboard,
  },
  {
    title: i18n("Words.galleries"),
    Icon: GalleriesBI,
    link: privateRoutes.galleries,
  },
] as Array<MenuShape>;
