import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import { Graphic } from "@assets/Icons/black/Graphic";
import i18n from "@configs/i18n";
import { Schedule } from "@assets/Icons/black/Schedule";

export const MAIN_MENU = [
  {
    title: "Dashboard",
    Icon: Graphic,
    link: privateRoutes.dashboard,
  },
  {
    title: i18n("Words.schedule"),
    Icon: Schedule,
    link: privateRoutes.schedule,
    permissions: ["dispatchers_view"],
  },
] as Array<MenuShape>;
