import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import { Graphic } from "@assets/Icons/black/Graphic";

export const MAIN_MENU = [
  {
    title: "Dashboard",
    Icon: Graphic,
    link: privateRoutes.dashboard,
  },
] as Array<MenuShape>;
