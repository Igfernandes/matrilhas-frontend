import { useSales } from "./hooks/useSales";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { SaleHeader } from "./SaleHeader";
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
        <SaleHeader />
        <SmartTable
          ajax={{
            key: "agencies/sales",
            url: API_ROUTES.agenciesSales,
            builder: updateForTable
          }}
          options={{
            pagination: {
              max: 6,
            },
            filters: filters["SALES"] ?? {},
          }}
          title={t("Words.sales")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeads,
            widths: [230, 150, 100, 80, 70, 50, 150, 48],
          }}
        />
      </div>
    </>
  );
}
