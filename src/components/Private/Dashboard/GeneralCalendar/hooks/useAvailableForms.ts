import useGetForms from "@services/Forms/Get/useGetForms";

import { useMemo } from "react";
import { CalendarEventShape } from "../type";
import moment from "moment";
import { useI18n } from "@contexts/I18n";

type Props = {
  refData: string;
};

export function useAvailableForms({ refData }: Props) {
  const { rows: forms, isPending: isLoading } = useGetForms({
    started_at: refData,
  });
  const { t } = useI18n();
  const formsAvailable = useMemo<CalendarEventShape[]>(() => {
    const chargesWithExpiredDate = forms.filter((form) => form.started_at);

    return chargesWithExpiredDate.map((form) => {
      const chargeDate = moment(form.started_at);
      const thisYear = moment().year();
      const date = chargeDate.year(thisYear);

      return {
        title: t("Words.form") + "🎉",
        start: date.toDate(),
        end: date.toDate(),
        allDay: true,
        resource: String(form.started_at) ?? "",
      };
    });
  }, [t, forms]);

  return {
    forms,
    formsAvailable,
    isLoadingForm: isLoading,
  };
}
