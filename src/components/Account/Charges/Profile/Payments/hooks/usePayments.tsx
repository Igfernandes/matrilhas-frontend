import { PaymentShape } from "@type/Payments";
import { useCallback, useMemo } from "react";
import { formatMoney } from "@helpers/currencies";
import { ChargeShape } from "@type/Charges";
import { useI18n } from "@contexts/I18n";
import dayjs from "dayjs";

type Props = {
  charge: ChargeShape
}

export function usePayments({ charge }: Props) {
  const { t } = useI18n()
  const tHeadsPayment = useMemo<Array<string>>(() => [
    "ID",
    t("Words.name"),
    t("Texts.paid_amount"),
    t("Words.status"),
    t("Words.bank"),
    t("Words.payed_at"),
  ], [t]);
  const chargeQuery = useMemo(() => {
    return { id: charge.id }
  }, [charge])
  const builderPaymentRows = useCallback((data: unknown) => {
    const { id, paid_amount, status, bank, created_at } = data as PaymentShape;

    return {
      ID: id,
      paid_amount: formatMoney(paid_amount),
      status: t(`Words.${status.toLocaleLowerCase()}`),
      bank: bank?.name,
      created_at: dayjs(created_at).format(t("Configs.format.datetime")),
    };
  }, [t]);

  return {
    tHeadsPayment,
    builderPaymentRows,
    chargeQuery
  };
}
