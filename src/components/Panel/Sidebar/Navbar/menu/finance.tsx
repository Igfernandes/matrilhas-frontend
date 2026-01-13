import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { SaleBI } from "@assets/Icons/black/SaleBI";
import { WalletBI } from "@assets/Icons/black/WalletBI";
import { BarChartLineBI } from "@assets/Icons/black/BarChartLineBI";

export const FINANCE_MENU = [
  {
    title: i18n("Words.charges"),
    Icon: WalletBI,
    link: privateRoutes.panel.charges,
  },
  {
    title: i18n("Words.sales"),
    Icon: SaleBI,
    link: privateRoutes.panel.sales,
  },
  {
    title: i18n("Words.statics"),
    Icon: BarChartLineBI,
    link: privateRoutes.panel.statics,
  },
] as Array<MenuShape>;

