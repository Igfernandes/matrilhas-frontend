import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import { FullScreenBI } from "@assets/Icons/black/FullScreenBI";

export const MAIN_MENU = [
  {
    title: "Dashboard",
    Icon: FullScreenBI,
    link: privateRoutes.account.overview,
  },
] as Array<MenuShape>;
