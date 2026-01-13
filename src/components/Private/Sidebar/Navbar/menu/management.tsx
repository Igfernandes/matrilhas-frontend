import { privateRoutes } from "@configs/routes/Web/navigation";
import { MenuShape } from "./type";
import i18n from "@configs/i18n";
import { Company } from "@assets/Icons/black/Company";
import { Bag } from "@assets/Icons/black/Bag";
import { PeopleBI } from "@assets/Icons/black/PeopleBI";
import { CardListBI } from "@assets/Icons/black/CardListBI";

export const MANAGEMENT_MENU = [
  {
    title: i18n("Words.clients"),
    Icon: PeopleBI,
    link: privateRoutes.clients,
    permissions: ["clients_view"],
  },
  {
    title: i18n("Words.agencies"),
    Icon: Company,
    link: privateRoutes.agencies,
    permissions: ["agencies_view"],
  },
  {
    title: i18n("Words.tours"),
    Icon: Bag,
    link: privateRoutes.tours,
    permissions: ["tours_view"],
  },
  {
    title: i18n("Words.forms"),
    Icon: CardListBI,
    link: privateRoutes.forms,
    permissions: ["forms_view"],
  },
] as Array<MenuShape>;
