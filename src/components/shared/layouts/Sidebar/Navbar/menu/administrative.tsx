import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { UsersManager } from "@assets/Icons/black/UsersManager";
import { Schedule } from "@assets/Icons/black/Schedule";
import { Identify } from "@assets/Icons/black/Identify";

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
    Icon: Schedule,
    link: privateRoutes.schedule,
    permissions: ["dispatchers_view"],
  },
] as Array<MenuShape>;