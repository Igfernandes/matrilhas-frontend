import useGetForms from "@services/CustomForms/Get/useGetForms";

import { useEffect, useState } from "react";
import { CalendarEventShape } from "../type";
import moment from "moment";
import i18n from "@configs/i18n";
import { isEquals } from "@helpers/json";

type Props = {
  refData: string;
};

export function useAvailableForms({ refData }: Props) {
  const { rows: forms, isPending: isLoading } = useGetForms({
    started_at: refData,
  });
  const [formsAvailable, setFormsAvailable] = useState<CalendarEventShape[]>(
    []
  );

  useEffect(() => {
    const chargesWithExpiredDate = forms.filter((form) => form.started_at);

    const formsAvailableNew = chargesWithExpiredDate.map((form) => {
      const chargeDate = moment(form.started_at);
      const thisYear = moment().year();
      const date = chargeDate.year(thisYear);

      return {
        title: i18n("Words.form") + "🎉",
        start: date.toDate(),
        end: date.toDate(),
        allDay: true,
        resource: String(form.started_at) ?? "",
      };
    });

    if (isEquals(formsAvailableNew, formsAvailable)) return;

    setFormsAvailable(formsAvailableNew);
  }, [forms, refData, formsAvailable]);

  return {
    forms,
    formsAvailable,
    isLoadingForm: isLoading,
  };
}
