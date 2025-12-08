import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { Wallet } from "@assets/Icons/black/Wallet";

export const FINANCE_MENU = [
  {
    title: i18n("Words.finance"),
    Icon: Wallet,
    link: privateRoutes.finance,
    permissions: ["charges_view"],
  },
] as Array<MenuShape>;

