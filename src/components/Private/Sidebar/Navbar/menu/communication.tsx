import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { ClipboardHeartBI } from "@assets/Icons/black/ClipboardHeartBI";
import { SendExclamationBI } from "@assets/Icons/black/SendExclamationBI";


export const COMMUNICATION_MENU = [
  {
    title: i18n("Texts.sending_management"),
    Icon: SendExclamationBI,
    link: privateRoutes.dispatcher,
    permissions: ["dispatchers_view"],
  },
  {
    title: i18n("Words.subscribers"),
    Icon: ClipboardHeartBI,
    link: privateRoutes.subscribers,
    permissions: ["dispatchers_view"],
  },
] as Array<MenuShape>;