
import { useMemo } from "react";
import { CalendarEventShape } from "../type";
import moment from "moment";
import { useI18n } from "@contexts/I18n";
import useGetToursPreview from "@services/Tours/GetPreview/useGet";
import { useAgencyNavigationContext } from "@contexts/AgencyNavigation";

type Props = {
  refData: string;
};

export function useTours({ refData }: Props) {
  const { agencyAuth } = useAgencyNavigationContext();
  const { rows: tours, isPending: isLoading } = useGetToursPreview({
    agency_id: agencyAuth.id,
    available_at: refData,
  });
  const { t } = useI18n();
  const toursAvailable = useMemo<CalendarEventShape[]>(() => {
    const toursWithAvailableDate = tours.filter((form) => !!form.available_at);

    return toursWithAvailableDate.map((form) => {
      const tourDate = moment(form.available_at);
      const thisYear = moment().year();
      const date = tourDate.year(thisYear);

      return {
        title: t("Words.tour") + "🎉",
        start: date.toDate(),
        end: date.toDate(),
        allDay: true,
        resource: String(form.available_at) ?? "",
      };
    });
  }, [t, tours]);

  return {
    tours,
    toursAvailable,
    isLoadingTours: isLoading,
  };
}
