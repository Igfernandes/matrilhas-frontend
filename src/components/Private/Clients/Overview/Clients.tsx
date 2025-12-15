import { useClients } from "./hooks/useClients";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { ModalFormCategories } from "./Modals/Categories";
import { useModalContext } from "@contexts/Modal";
import { ModalClientsOperationType } from "../type";
import { ClientCreateModal } from "./Modals/Clients";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { ClientCategoriesModal } from "./Modals/ClientCategories";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { ImportModal } from "./Modals/Import";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";

export function Clients() {
  const {
    tHeadsClient,
    selectors,
    categories,
    getSelectedClients,
    handleDeleteClient,
    isLoadingClientDelete,

    updateClientForTable,
  } = useClients();
  const { handleToggleModal, modal } =
    useModalContext<ModalClientsOperationType>();
  const { hasPermission } = useUserNavigationContext();
  const { filters } = useFiltersContext();

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            key: "clients",
            url: API_ROUTES.clients,
            builder: updateClientForTable
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
                handle: () => handleToggleModal("CHANGE_CATEGORY"),
                text: i18n("Texts.selected_alter_category"),
                permissions: [PERMISSIONS.clients.update],
              },
              {
                handle: () =>
                  handleToggleModal(
                    "DELETE",
                    getSelectedClients(selectors.current)
                  ),
                text: i18n("Texts.selected_delete"),
                permissions: [PERMISSIONS.clients.delete],
              },
            ].filter((action) => hasPermission(action.permissions)),
            actions: [
              {
                handle: () => handleToggleModal("CHANGE_CATEGORY", "-1"),
                text: i18n("Texts.all_alter_category"),
                permissions: [PERMISSIONS.clients.update],
              },
              {
                handle: () =>
                  handleToggleModal(
                    "DELETE",
                    "-1"
                  ),
                text: i18n("Texts.all_delete"),
                permissions: [PERMISSIONS.clients.delete],
              },

            ].filter((action) => hasPermission(action.permissions)),
            buttons: (
              <Shared
                entity="CLIENTS"
                in_ids={selectors.current
                  .filter((selector) => !!selector.isChecked)
                  .map((selector) => +selector.value)}
              />
            ),
            filters: filters["CLIENTS"] ?? {},
          }}
          title={i18n("Words.clients")}
          excludes={["created_at", "updated_at"]}
          tHeads={{
            data: tHeadsClient.current,
            widths: [60, 250, 70, 200, 100, 48],
          }}
        />
      </div>

      <div>
        <ModalFormCategories
          title={i18n("Words.category")}
          isShowModal={modal.type === "CATEGORY"}
          onModal={handleToggleModal}
          categories={categories}
        />
        <Notice
          headerTitle={i18n("Words.attention")}
          title={i18n("Screens.dashboard.clients.client.title_already_exclude")}
          text={i18n("Screens.dashboard.clients.client.text_already_exclude")}
          onSubmit={handleDeleteClient}
          isShowModal={modal.type === "DELETE"}
          onModal={handleToggleModal}
          isLoading={isLoadingClientDelete}
        />
        <ClientCategoriesModal
          isShowModal={modal.type === "CHANGE_CATEGORY"}
          onModal={handleToggleModal}
          categories={categories}
          selectors={selectors.current}
        />
        <ClientCreateModal
          isShowModal={modal.type === "CLIENT"}
          onModal={handleToggleModal}
          title={i18n("Words.new_client")}
          categories={categories ?? []}
        />
        <ImportModal
          isShowModal={modal.type === "IMPORT"}
          onModal={handleToggleModal}
        />
      </div>
    </>
  );
}
