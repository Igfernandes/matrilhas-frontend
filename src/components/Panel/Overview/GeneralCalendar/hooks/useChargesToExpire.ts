import { useMemo } from "react";
import { CalendarEventShape } from "../type";
import moment from "moment";
import { useI18n } from "@contexts/I18n";
import useGetChargesAgencies from "@services/Agencies/Charges/Get/useGetChargesAgencies";

type Props = {
  refData: string;
};

export function useChargesToExpire({ refData }: Props) {
  const { rows: charges, isPending: isLoading } = useGetChargesAgencies({
    started_at: refData,
  });
  const { t } = useI18n();
  const chargesToExpired = useMemo<CalendarEventShape[]>(() => {
    const chargesWithExpiredDate = charges.filter(
      (charge) => charge.expired_days
    );

    return chargesWithExpiredDate.map((charge) => {
      const chargeDate = moment(charge.started_at).add(
        charge.expired_days,
        "days"
      );
      const thisYear = moment().year();
      const date = chargeDate.year(thisYear);

      return {
        title: t("Words.charge") + "🎉",
        start: date.toDate(),
        end: date.toDate(),
        allDay: true,
        resource: String(chargeDate.format("YYYY-MM-DD HH:mm")) ?? "",
      };
    });
  }, [charges, t]);

  return {
    chargesToExpired,
    charges,
    isLoadingCharge: isLoading,
  };
}
