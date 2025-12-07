import useGetCharges from "@services/Charges/Get/useGetCharges";
import { useEffect, useState } from "react";
import { CalendarEventShape } from "../type";
import moment from "moment";
import i18n from "@configs/i18n";
import { isEquals } from "@helpers/json";

type Props = {
  refData: string;
};

export function useChargesToExpire({ refData }: Props) {
  const { rows: charges, isPending: isLoading } = useGetCharges({
    started_at: refData,
  });
  const [chargesToExpired, setChargesToExpired] = useState<
    CalendarEventShape[]
  >([]);

  useEffect(() => {
    if (isEquals(chargesToExpired, charges)) return;

    const chargesWithExpiredDate = charges.filter(
      (charge) => charge.expired_days
    );

    const data = chargesWithExpiredDate.map((charge) => {
      const chargeDate = moment(charge.created_at).add(
        charge.expired_days,
        "days"
      );
      const thisYear = moment().year();
      const date = chargeDate.year(thisYear);

      return {
        title: i18n("Words.charge") + "🎉",
        start: date.toDate(),
        end: date.toDate(),
        allDay: true,
        resource: String(charge.expired_days) ?? "",
      };
    });

    setChargesToExpired(data);
  }, [refData, charges, chargesToExpired]);

  return {
    chargesToExpired,
    charges,
    isLoadingCharge: isLoading,
  };
}
