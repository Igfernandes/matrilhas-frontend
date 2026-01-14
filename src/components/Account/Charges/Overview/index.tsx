import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import i18n from "@configs/i18n";
import { useCharges } from "./hooks/useCharges";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";

export function ChargesOverview() {
  const { clientsCharges } = API_ROUTES
  const {
    tHeadsFinance,
    updateChargeForTable
  } = useCharges();
  const { filters } = useFiltersContext()

  return (
    <>
      <div className="mt-6 relative z-0">
        <SmartTable
          ajax={{
            key: "CLIENTS/CHARGES",
            builder: updateChargeForTable,
            url: clientsCharges
          }}
          options={{
            pagination: {
              max: 10,
            },
            filters: filters["CHARGES"] ?? {},
          }}
          title={i18n("Words.charges")}
          excludes={["created_at", "updated_at"]}
          tHeads={{
            data: tHeadsFinance,
            widths: [ 300, 100, 100, 150,  150, 48],
          }}
        />
      </div>
    </>
  );
}
