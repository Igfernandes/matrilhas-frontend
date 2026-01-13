import { useMemo, useState } from "react";

import { ChargeShape } from "@type/Charges";
import dayjs from "dayjs";
import { useModalContext } from "@contexts/Modal";
import { TDataCharges } from "../type";
import { Period } from "@type/status";
import { ChargesActions } from "../ChargesActions";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useI18n } from "@contexts/I18n";
import { formatMoney } from "@helpers/currencies";

export function useCharges() {
  const { t } = useI18n()
  const [selectors, setSelectors] = useState<Array<SelectorShape>>([])
  const { handleToggleModal, modal } = useModalContext();

  const tHeadsFinance = useMemo<Array<string>>(() => [
    t("Words.name"),
    t("Words.price"),
    t("Words.type"),
    t("Words.started_at"),
    t("Words.expired_at"),
    t("Words.actions"),
  ], [t]);

  const updateChargeForTable = (data: unknown): TDataCharges => {
    const { id, title, type, price, promotional_price, reference, started_at, expired_days }: ChargeShape = data as ChargeShape;
    const currentPrice = promotional_price && promotional_price > 0 ? promotional_price : price;

    return {
      title,
      price: String(formatMoney(currentPrice, "REAL")),
      type: t(`Words.${type?.toLowerCase()
        }`) as Period,
      started_at: dayjs(started_at).format(t("Configs.format.datetime")),
      expired_at: dayjs(started_at).add(expired_days ?? 0, "day").format(t("Configs.format.datetime")),
      actions: <ChargesActions reference={reference} id={id} />,
    };
  };

  return {
    tHeadsFinance,
    modal,
    handleToggleModal,
    updateChargeForTable,
    setSelectors, selectors
  };
}
