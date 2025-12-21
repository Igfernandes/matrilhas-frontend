import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import { Graphic } from "@assets/Icons/black/Graphic";
import { Photo } from "@assets/Icons/black/Photo";

export const MAIN_MENU = [
  {
    title: "Dashboard",
    Icon: Graphic,
    link: privateRoutes.dashboard,
  },
  {
    title: "Galleries",
    Icon: Photo,
    link: privateRoutes.galleries,
  },
] as Array<MenuShape>;
