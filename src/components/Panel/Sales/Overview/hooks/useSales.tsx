import { useCallback, useMemo, useState } from "react";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { AgencyActions } from "../SaleActions";
import dayjs from "dayjs";
import { Status } from "@components/utilities/Status";
import { SaleShape } from "@type/Sales";
import { formatMoney } from "@helpers/currencies";
import { useI18n } from "@contexts/I18n";

export function useSales() {
  const { t } = useI18n()
  /** Esse sim precisa ser state */
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);

  /** tHeads NÃO depende de estado → useRef é perfeito aqui */
  const tHeads = useMemo<Array<string>>(() => [
    t("Words.tour"),
    t("Words.name"),
    t("Words.status"),
    t("Words.total"),
    t("Words.price"),
    "Uni.",
    t("Words.sold_at"),
    t("Words.actions"),
  ], [t]);

  /** 🔥 useCallback para estável */
  const updateForTable = useCallback(
    (data: unknown) => {
      const { id, tour, client, status, price, amount, discount, currency, created_at } = data as SaleShape;
      const debit = (price * amount) - discount;

      return {
        tour: tour?.name ?? t("Texts.tour_removed"),
        name: client?.name ?? t("Texts.client_removed"),
        status: <Status is={status} />,
        debit: debit ? formatMoney(debit, currency) : '--',
        price: price ? formatMoney(price, currency) : '--',
        amount,
        created_at: created_at ? dayjs(created_at).format("DD/MM/YYYY HH:mm") : '--',
        actions: <AgencyActions id={id} />,
      };
    },
    [t]
  );


  return {
    tHeads,
    selectors, setSelectors,
    updateForTable,
  };
}
