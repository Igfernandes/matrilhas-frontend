import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { UsersManager } from "@assets/Icons/black/UsersManager";
import { Gear } from "@assets/Icons/black/Gear";
import { Config } from "@assets/Icons/black/Config";

export const ADMINISTRATIVE_MENU = [
  {
    title: i18n("Texts.users_manager"),
    Icon: UsersManager,
    link: privateRoutes.usersManager,
    permissions: ["users_view"],
  },
  {
    title: i18n("Texts.apis_manager"),
    Icon: Config,
    link: privateRoutes.apisManager,
    permissions: ["integrations_view"],
  },
  {
    title: i18n("Words.settings"),
    Icon: Gear,
    link: privateRoutes.settings,
  },
] as Array<MenuShape>;