import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { Wallet } from "@assets/Icons/black/Wallet";
import { Graphic } from "@assets/Icons/black/Graphic";

export const FINANCE_MENU = [
  {
    title: i18n("Words.charges"),
    Icon: Wallet,
    link: privateRoutes.finance,
    permissions: ["charges_view"],
  },
    {
    title: i18n("Words.sales"),
    Icon: Graphic,
    link: privateRoutes.sales,
    permissions: ["charges_view"],
  },
] as Array<MenuShape>;

