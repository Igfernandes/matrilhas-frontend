import { useTours } from "./hooks/useTours";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { ModalTourOperationType } from "../type";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";

export function ToursTable() {
  const {
    handleDelete, isLoadingDelete, tHeads, selectors, updateForTable, getSelected
  } = useTours();
  const { handleToggleModal, modal } =
    useModalContext<ModalTourOperationType>();
  const { hasPermission } = useUserNavigationContext();
  const { filters } = useFiltersContext();

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            key: "tours",
            url: API_ROUTES.tours,
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
                permissions: [PERMISSIONS.tours.delete],
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
                permissions: [PERMISSIONS.tours.delete],
              },

            ].filter((action) => hasPermission(action.permissions)),
            buttons: (
              <Shared
                entity="TOURS"
                in_ids={selectors.current
                  .filter((selector) => !!selector.isChecked)
                  .map((selector) => +selector.value)}
              />
            ),
            filters: filters["TOURS"] ?? {},
          }}
          title={i18n("Words.tours")}
          tHeads={{
            data: tHeads.current,
            widths: [60, 250, 90, 150, 150, 48],
          }}
        />
      </div>

      <div className="relative z-10">
         <Notice
          headerTitle={i18n("Words.attention")}
          title={i18n("Screens.dashboard.tours.title_already_exclude")}
          text={i18n("Screens.dashboard.tours.text_already_exclude")}
          onSubmit={handleDelete}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingDelete}
        />
      </div>
    </>
  );
}
