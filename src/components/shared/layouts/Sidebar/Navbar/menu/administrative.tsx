import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { UsersManager } from "@assets/Icons/black/UsersManager";
import { Identify } from "@assets/Icons/black/Identify";
import { CalendarWeekBI } from "@assets/Icons/black/CalendarWeekBI";

export const ADMINISTRATIVE_MENU = [
  {
    title: i18n("Words.users"),
    Icon: UsersManager,
    link: privateRoutes.usersManager,
    permissions: ["users_view"],
  },
  {
    title: i18n("Words.groups"),
    Icon: Identify,
    link: privateRoutes.userGroups,
    permissions: ["users_view"],
  },
  {
    title: i18n("Words.schedule"),
    Icon: CalendarWeekBI,
    link: privateRoutes.schedule,
    permissions: ["dispatchers_view"],
  },
] as Array<MenuShape>;