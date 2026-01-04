import { textColors } from "@assets/colors/colors";
import { TimeLineChartDataShape } from "@components/shared/others/Graphics/TimeLineChart/type";
import i18n from "@configs/i18n";
import useGetPayments from "@services/Charges/Payments/Get/useGet";
import { useCallback, useMemo, useRef } from "react";

type Props = {
  chargeId: number;
};

export function usePayments({ chargeId }: Props) {
  const { rows: paymentsData } = useGetPayments({
    charge_id: chargeId,
  });
  const payments = useMemo(() => {
    return paymentsData ?? [];
  }, [paymentsData]);

  const statusColorsRef = useRef<{ [key: string]: string }>({
    PAID: textColors.green,
    CANCELED: textColors.red,
    PENDENT: textColors.yellow,
  });
  
  const getPaymentsByMonth = useCallback((): Array<TimeLineChartDataShape> => {
    const paymentsByMonth = [];
    for (let month = 0; month < 12; month++) {
      const currentDate = new Date();
      currentDate.setMonth(month);
      const date = currentDate.toISOString().split("T")[0];

      paymentsByMonth.push({
        color: "",
        label: i18n("Words.pendent") as string,
        value: 0,
        date: date,
      });
    }

    payments.forEach((payment) => {
      paymentsByMonth.push({
        date: payment.created_at.split(" ")[0],
        label: i18n(`Words.${payment.status.toLocaleLowerCase()}`) as string,
        value: payment.paid_amount,
        color: statusColorsRef.current[payment.status],
      });
    });

    return paymentsByMonth;
  }, [payments]);

  return {
    payments,
    getPaymentsByMonth,
  };
}
