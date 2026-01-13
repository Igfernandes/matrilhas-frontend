import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import {
  ModalMessagesDispatcherOperationType,

} from "./type";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { useMessagesDispatcher } from "./hooks/useMessagesDispatcher";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useI18n } from "@contexts/I18n";

export function MessagesDispatcherTable() {
  const { t } = useI18n()
  const {
    tHeadsServices,
    handleDeleteMessageDispatcher,
    isLoadingDeleteDispatcher,
    setSelectors, updateDispatchersForTable
  } = useMessagesDispatcher();
  const { handleToggleModal, modal } =
    useModalContext<ModalMessagesDispatcherOperationType>();
  const { filters } = useFiltersContext();

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            key: "clients",
            url: API_ROUTES.messagesDispatcher,
            builder: updateDispatchersForTable
          }}
          options={{
            selector: {
              setSelectorRef: setSelectors,
            },
            pagination: {
              max: 6,
            },
            filters: filters["DISPATCHERS"] ?? {},
          }}
          title={t("Texts.my_shipments")}
          excludes={["updated_at"]}
          tHeads={{
            data: tHeadsServices,
            widths: [70, 250, 200, 100, 100, 48],
          }}
        />
      </div>
      <Notice
        headerTitle={t("Words.attention")}
        title={t("Screens.dashboard.dispatchers.title_already_exclude")}
        text={t("Screens.dashboard.dispatchers.text_already_exclude")}
        onSubmit={handleDeleteMessageDispatcher}
        isShowModal={modal.type === "DELETE"}
        isLoading={isLoadingDeleteDispatcher}
        onModal={handleToggleModal}
      />
    </>
  );
}
