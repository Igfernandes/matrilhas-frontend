import { ChartPie } from "@assets/Icons/black/ChartPie";
import { UserDollar } from "@assets/Icons/black/UserDollar";
import { UserCode } from "@assets/Icons/black/UserCode";
import { CardItemShape } from "@components/shared/layouts/CardBoard/types";
import i18n from "@configs/i18n";
import { UserCancel } from "@assets/Icons/black/UserCancel";

export const financeCardsBoard = [
  {
    key: "clients_total",
    icon: <ChartPie />,
    title: i18n("Texts.clients_total"),
  },
  {
    key: "agencies_total",
    icon: <ChartPie />,
    title: i18n("Texts.agencies_total"),
  },
  {
    key: "payments_opened",
    icon: <UserCode />,
    prefix: "R$: ",
    title: i18n("Words.pendent"),
  },
  {
    key: "payments_received",
    icon: <UserDollar />,
    prefix: "R$: ",
    title: i18n("Words.received"),
  },
  {
    key: "payments_not_received",
    icon: <UserCancel />,
    prefix: "R$: ",
    title: i18n("Words.canceled"),
  },
] as Array<CardItemShape>;
