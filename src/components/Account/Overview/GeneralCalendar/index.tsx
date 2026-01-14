import { Calendar } from "@components/shared/others/Calendar";
import { useModalContext } from "@contexts/Modal";
import { useGeneralCalendar } from "./hooks/useGeneralCalendar";
import { ModalScheduled } from "./Modal";
import { helperRemoveDuplicatesInArrayOfObjects } from "@helpers/array";
import { Skeleton } from "@components/utilities/Skeleton";
import { useChargesToExpire } from "./hooks/useChargesToExpire";
import { useTours } from "./hooks/useTours";
import { useMemo } from "react";
import { useI18n } from "@contexts/I18n";

export function ClientCalendar() {
  const { date, handleChangeRange, skeletonSettings } = useGeneralCalendar();
  const { toursAvailable, tours, isLoadingTours } = useTours({ refData: date });
  const { chargesToExpired, charges, isLoadingCharge } = useChargesToExpire({ refData: date });
  const { handleToggleModal } = useModalContext();
  const { t } = useI18n()

  const events = useMemo(() => {
    return helperRemoveDuplicatesInArrayOfObjects(
      [
        ...toursAvailable,
        ...chargesToExpired,
      ],
      "resource"
    );
  }, [toursAvailable, chargesToExpired]);

  return (
    <Skeleton
      settings={skeletonSettings.current}
      isLoading={isLoadingCharge || isLoadingTours}
    >
      <div className="relative z-0 h-[75vh] p-4 bg-white rounded-xl shadow mt-4">
        <div className="md:absolute md:right-4">
          <h2 className="text-2xl font-bold text-theme mb-4">{t("Words.calendar")}</h2>
        </div>
        <Calendar
          events={events}
          style={{ height: "60vh", width: "100%" }}
          views={["month"]}

          onSelectEvent={(event) => {
            handleToggleModal("SCHEDULED", event.resource)
          }}
          onChangeRange={handleChangeRange}
        />
      </div>
      <ModalScheduled tours={tours} charges={charges} />
    </Skeleton>
  );
}
