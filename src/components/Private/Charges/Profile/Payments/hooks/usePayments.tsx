import i18n from "@configs/i18n";
import { PaymentShape } from "@type/Payments";
import { useCallback, useMemo, useRef } from "react";
import { PaymentActions } from "../PaymentActions";
import { formatMoney } from "@helpers/currencies";
import { ChargeShape } from "@type/Charges";

type Props = {
  charge: ChargeShape
}

export function usePayments({ charge }: Props) {
  const tHeadsPayment = useRef<Array<string>>([
    "ID",
    i18n("Words.name"),
    i18n("Words.paid_amount"),
    i18n("Words.status"),
    i18n("Words.bank"),
    i18n("Words.actions"),
  ]);
  const chargeQuery = useMemo(() => {
    return { id: charge.id }
  }, [charge])
  const builderPaymentRows = useCallback((data: unknown) => {
    const { id, client, paid_amount, status, bank } = data as PaymentShape;

    return {
      ID: id,
      name: client.name,
      paid_amount: formatMoney(paid_amount),
      status: i18n(`Words.${status.toLocaleLowerCase()}`),
      bank: bank?.name,
      action: <PaymentActions chargeId={id} paymentId={id} />
    };
  }, []);

  return {
    tHeadsPayment,
    builderPaymentRows,
    chargeQuery
  };
}
