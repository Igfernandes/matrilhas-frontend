import { PaymentShape } from "@type/Payments";
import { useCallback, useMemo } from "react";
import { formatMoney } from "@helpers/currencies";
import { ChargeShape } from "@type/Charges";
import { useI18n } from "@contexts/I18n";

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
  ], [t]);
  const chargeQuery = useMemo(() => {
    return { id: charge.id }
  }, [charge])
  const builderPaymentRows = useCallback((data: unknown) => {
    const { id, client, paid_amount, status, bank } = data as PaymentShape;

    return {
      ID: id,
      name: client.name,
      paid_amount: formatMoney(paid_amount),
      status: t(`Words.${status.toLocaleLowerCase()}`),
      bank: bank?.name,
    };
  }, [t]);

  return {
    tHeadsPayment,
    builderPaymentRows,
    chargeQuery
  };
}
