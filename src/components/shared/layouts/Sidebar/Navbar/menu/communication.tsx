import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { Spreadsheet } from "@assets/Icons/black/Spreadsheet";


export const COMMUNICATION_MENU = [
  {
    title: i18n("Texts.sending_management"),
    Icon: Spreadsheet,
    link: privateRoutes.dispatcher,
    permissions: ["dispatchers_view"],
  },

] as Array<MenuShape>;