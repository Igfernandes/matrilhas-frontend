import { useTours } from "./hooks/useTours";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { useAgencyNavigationContext } from "@contexts/Navigation/Agency";

export function ToursTable() {
  const { t } = useI18n()
  const { tHeads, updateForTable } = useTours();
  const { filters } = useFiltersContext();
  const { agencyAuth } = useAgencyNavigationContext()

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            key: "tours",
            url: API_ROUTES.toursPreview,
            builder: updateForTable
          }}
          options={{
            pagination: {
              max: 6,
            },
            filters: { ...(filters["TOURS"] ?? {}), agency_id: agencyAuth?.id },
          }}
          title={t("Words.tours")}
          tHeads={{
            data: tHeads,
            widths: [310, 90, 150, 150, 48],
          }}
        />
      </div>
    </>
  );
}
