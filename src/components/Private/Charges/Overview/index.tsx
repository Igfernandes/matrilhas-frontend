import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { useCharges } from "./hooks/useCharges";
import { API_ROUTES } from "@configs/routes/Api/api";
import { Shared } from "@components/shared/others/Shared";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";

export function ChargesOverview() {
  const { charges: apiCharges } = API_ROUTES
  const {
    selectors,
    setSelectors,
    tHeadsFinance,
    handleToggleModal,
    modal,
    handleDeleteCharge,
    isLoading,
    updateChargeForTable
  } = useCharges();
  const { filters } = useFiltersContext()

  return (
    <>
      <div className="mt-6 relative z-0">
        <SmartTable
          ajax={{
            key: "CHARGES",
            builder: updateChargeForTable,
            url: apiCharges
          }}
          options={{
            selector: {
              setSelectorRef: setSelectors,
            },
            pagination: {
              max: 6,
            },
            buttons: (
              <Shared
                entity="CHARGES"
                in_ids={selectors
                  .filter((selector) => !!selector.isChecked)
                  .map((selector) => +selector.value)}
              />
            ),
            filters: filters["CHARGES"] ?? {},
          }}
          title={i18n("Words.my_charges")}
          excludes={["created_at", "updated_at"]}
          tHeads={{
            data: tHeadsFinance.current,
            widths: [60, 300, 100, 100, 100, 100, 48],
          }}
        />
      </div>
      <div className="relative z-10">
        <Notice
          headerTitle={i18n("Words.attention")}
          title={i18n("Screens.dashboard.finances.title_already_exclude")}
          text={i18n("Screens.dashboard.finances.text_already_exclude")}
          onSubmit={handleDeleteCharge}
          isShowModal={modal.type === "DELETE"}
          isLoading={isLoading}
          onModal={handleToggleModal}
        />
      </div>
    </>
  );
}
