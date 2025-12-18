import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { UsersManager } from "@assets/Icons/black/UsersManager";

export const ADMINISTRATIVE_MENU = [
  {
    title: i18n("Texts.users_manager"),
    Icon: UsersManager,
    link: privateRoutes.usersManager,
    permissions: ["users_view"],
  },

] as Array<MenuShape>;