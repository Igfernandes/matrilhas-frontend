import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { Peoples } from "@assets/Icons/black/Peoples";
import { Form } from "@assets/Icons/black/Form";

export const MANAGEMENT_MENU = [
  {
    title: i18n("Words.clients"),
    Icon: Peoples,
    link: privateRoutes.clients,
    permissions: ["clients_view"],
  },
  {
    title: i18n("Words.forms"),
    Icon: Form,
    link: privateRoutes.forms,
    permissions: ["forms_view"],
  },
] as Array<MenuShape>;
