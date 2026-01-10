import { useGalleries } from "./hooks/useGalleries";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { ModalGalleryOperationType } from "../type";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { GalleryCreateModal } from "./Modals/Store";
import { useI18n } from "@contexts/I18n";

export function GalleriesTable() {
  const { t } = useI18n()
  const {
    handleDelete, isLoadingDelete, tHeads, selectors, setSelectors, updateForTable, getSelected
  } = useGalleries();
  const { handleToggleModal, modal } =
    useModalContext<ModalGalleryOperationType>();
  const { hasPermission } = useUserNavigationContext();
  const { filters } = useFiltersContext();

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            key: "galleries",
            url: API_ROUTES.galleries,
            builder: updateForTable
          }}
          options={{
            selector: {
              setSelectorRef: setSelectors,
            },
            pagination: {
              max: 6,
            },
            actionsBar: [
              {
                handle: () =>
                  handleToggleModal(
                    "DELETE",
                    getSelected(selectors)
                  ),
                text: t("Texts.selected_delete"),
                permissions: [PERMISSIONS.galleries.delete],
              },
            ].filter((action) => hasPermission(action.permissions)),
            actions: [
              {
                handle: () =>
                  handleToggleModal(
                    "DELETE",
                    "-1"
                  ),
                text: t("Texts.all_delete"),
                permissions: [PERMISSIONS.galleries.delete],
              },

            ].filter((action) => hasPermission(action.permissions)),
            filters: filters["GALLERIES"] ?? {},
          }}
          title={t("Words.galleries")}
          tHeads={{
            data: tHeads.current,
            widths: [60, 250, 70, 150, 48],
          }}
        />
      </div>

      <div className="relative z-10">
        <Notice
          headerTitle={t("Words.attention")}
          title={t("Screens.dashboard.galleries.title_already_exclude")}
          text={t("Screens.dashboard.galleries.text_already_exclude")}
          onSubmit={handleDelete}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingDelete}
        />
        <GalleryCreateModal
        />
      </div>
    </>
  );
}
