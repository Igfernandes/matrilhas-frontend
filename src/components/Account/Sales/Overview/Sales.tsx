import { useSales } from "./hooks/useSales";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";

export function SalesTable() {
  const { t } = useI18n()
  const {
    tHeads, updateForTable
  } = useSales();
  const { filters } = useFiltersContext();

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            key: "clients/sales",
            url: API_ROUTES.clientsSales,
            builder: updateForTable
          }}
          options={{
            pagination: {
              max: 6,
            },
            filters: filters["SALES"] ?? {},
          }}
          title={t("Texts.latest_purchases")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeads,
            widths: [230, 100, 80, 70, 50, 150, 48],
          }}
        />
      </div>
    </>
  );
}
