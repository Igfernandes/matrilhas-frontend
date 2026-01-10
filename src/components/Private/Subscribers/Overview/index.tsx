import { useSubscribers } from "./hooks/useSubscribers";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { ModalSubscriberOperationType } from "../type";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";

export function SubscribersTable() {
  const { t } = useI18n()
  const {
    handleDelete, isLoadingDelete, tHeads, selectors, updateForTable, getSelected, setSelectors
  } = useSubscribers();
  const { handleToggleModal, modal } =
    useModalContext<ModalSubscriberOperationType>();
  const { hasPermission } = useUserNavigationContext();
  const { filters } = useFiltersContext();

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            key: "subscribers",
            url: API_ROUTES.subscribers,
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
                permissions: [PERMISSIONS.subscribers.delete],
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
                permissions: [PERMISSIONS.subscribers.delete],
              },

            ].filter((action) => hasPermission(action.permissions)),
            buttons: (
              <Shared
                entity="SUBSCRIBERS"
                in_ids={selectors
                  .filter((selector) => !!selector.isChecked)
                  .map((selector) => +selector.value)}
              />
            ),
            filters: filters["SUBSCRIBERS"] ?? {},
          }}
          title={t("Words.subscribers")}
          tHeads={{
            data: tHeads,
            widths: [60, 250, 70, 150, 150, 48],
          }}
        />
      </div>

      <div className="relative z-10">
        <Notice
          headerTitle={t("Words.attention")}
          title={t("Screens.dashboard.subscribers.title_already_exclude")}
          text={t("Screens.dashboard.subscribers.text_already_exclude")}
          onSubmit={handleDelete}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingDelete}
        />
      </div>
    </>
  );
}
