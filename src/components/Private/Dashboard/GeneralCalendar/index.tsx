import { Calendar } from "@components/shared/others/Calendar";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { useGeneralCalendar } from "./hooks/useGeneralCalendar";
import { ModalScheduled } from "./Modal";
import { helperRemoveDuplicatesInArrayOfObjects } from "@helpers/array";
import { Skeleton } from "@components/utilities/Skeleton";
import { useBirthday } from "./hooks/useBirthday";
import { useChargesToExpire } from "./hooks/useChargesToExpire";
import { useAvailableForms } from "./hooks/useAvailableForms";
import { useMemo } from "react";

export function GeneralCalendar() {
  const { date, handleChangeRange, skeletonSettings } = useGeneralCalendar();
  const { birthdayPeople, users, clients, isLoadingBirthday } = useBirthday({
    refData: date,
  });
  const { forms, formsAvailable, isLoadingForm } = useAvailableForms({ refData: date });
  const { chargesToExpired, charges, isLoadingCharge } = useChargesToExpire({ refData: date });
  const { handleToggleModal } = useModalContext();

  const events = useMemo(() => {
    return helperRemoveDuplicatesInArrayOfObjects(
      [
        ...birthdayPeople,
        ...formsAvailable,
        ...chargesToExpired,
      ],
      "resource"
    );
  }, [birthdayPeople, formsAvailable, chargesToExpired]);

  return (
    <Skeleton
      settings={skeletonSettings.current}
      isLoading={isLoadingBirthday || isLoadingCharge || isLoadingForm}
    >
      <div className="relative z-0 h-[75vh] p-4 bg-white rounded-xl shadow mt-4">
        <div className="md:absolute md:right-4">
          <h2 className="text-2xl font-bold text-theme mb-4">{i18n("Words.calendar")}</h2>
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
      <ModalScheduled users={users} clients={clients} charges={charges} forms={forms} />
    </Skeleton>
  );
}
