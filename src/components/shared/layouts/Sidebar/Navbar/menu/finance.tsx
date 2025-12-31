import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { SaleBI } from "@assets/Icons/black/SaleBI";
import { TimeBI } from "@assets/Icons/black/TimeBI";
import { WalletBI } from "@assets/Icons/black/WalletBI";
import { BarChartLineBI } from "@assets/Icons/black/BarChartLineBI";

export const FINANCE_MENU = [
  {
    title: i18n("Words.charges"),
    Icon: WalletBI,
    link: privateRoutes.finance,
    permissions: ["charges_view"],
  },
  {
    title: i18n("Words.sales"),
    Icon: SaleBI,
    link: privateRoutes.sales,
    permissions: ["sales_view"],
  },
  {
    title: i18n("Words.logs"),
    Icon: TimeBI,
    link: privateRoutes.operations,
    permissions: ["charges_view", "sales_view"],
  },
  {
    title: i18n("Words.statics"),
    Icon: BarChartLineBI,
    link: privateRoutes.statics,
    permissions: ["charges_view", "sales_view"],
  },
] as Array<MenuShape>;

