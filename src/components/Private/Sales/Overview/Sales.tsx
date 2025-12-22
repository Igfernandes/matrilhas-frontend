import { useAgencies } from "./hooks/useAgencies";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { ModalSaleOperationType } from "../type";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";

export function SalesTable() {
  const {
    handleDelete, isLoadingDelete, tHeads, selectors, updateForTable, getSelected
  } = useAgencies();
  const { handleToggleModal, modal } =
    useModalContext<ModalSaleOperationType>();
  const { hasPermission } = useUserNavigationContext();
  const { filters } = useFiltersContext();

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            key: "agencies",
            url: API_ROUTES.sales,
            builder: updateForTable
          }}
          options={{
            selector: {
              selectorRef: selectors,
            },
            pagination: {
              max: 6,
            },
            actionsBar: [
              {
                handle: () =>
                  handleToggleModal(
                    "DELETE",
                    getSelected(selectors.current)
                  ),
                text: i18n("Texts.selected_delete"),
                permissions: [PERMISSIONS.agencies.delete],
              },
            ].filter((action) => hasPermission(action.permissions)),
            actions: [
              {
                handle: () =>
                  handleToggleModal(
                    "DELETE",
                    "-1"
                  ),
                text: i18n("Texts.all_delete"),
                permissions: [PERMISSIONS.agencies.delete],
              },

            ].filter((action) => hasPermission(action.permissions)),
            buttons: (
              <Shared
                entity="SALES"
                in_ids={selectors.current
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
            widths: [60, 250, 70, 150, 150, 48],
          }}
        />
      </div>

      <div className="relative z-10">
        <Notice
          headerTitle={i18n("Words.attention")}
          title={i18n("Screens.dashboard.agencies.title_already_exclude")}
          text={i18n("Screens.dashboard.agencies.text_already_exclude")}
          onSubmit={handleDelete}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingDelete}
        />
      </div>
    </>
  );
}
