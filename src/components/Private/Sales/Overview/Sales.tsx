import { useSales } from "./hooks/useSales";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { ModalSaleOperationType } from "../type";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { Shared } from "@components/shared/others/Shared";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { SaleHeader } from "./SaleHeader";

export function SalesTable() {
  const {
    handleDelete, setSelectors, isLoadingDelete, tHeads, selectors, updateForTable
  } = useSales();
  const { handleToggleModal, modal } =
    useModalContext<ModalSaleOperationType>();
  const { filters } = useFiltersContext();

  return (
    <>
      <div>
        <SaleHeader />
        <SmartTable
          ajax={{
            key: "agencies",
            url: API_ROUTES.sales,
            builder: updateForTable
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
                entity="SALES"
                in_ids={selectors
                  .filter((selector) => !!selector.isChecked)
                  .map((selector) => +selector.value)}
              />
            ),
            filters: filters["SALES"] ?? {},
          }}
          title={i18n("Words.sales")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeads.current,
            widths: [230, 120, 70, 70, 70, 70, 150, 48],
          }}
        />
      </div>
      <div className="relative z-10">
        <Notice
          headerTitle={i18n("Words.attention")}
          title={i18n("Screens.dashboard.sales.title_already_exclude")}
          text={i18n("Screens.dashboard.sales.text_already_exclude")}
          onSubmit={handleDelete}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingDelete}
        />
      </div>
    </>
  );
}
