import { useMemo, useState } from "react";
import { useModalContext } from "@contexts/Modal";
import {
  ModalMessagesDispatcherOperationType,
  TDataMessagesDispatcher,
} from "../type";
import { NotificationsActions } from "../NotificationsActions";
import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";
import useDeleteMessageDispatcher from "@services/Dispatchers/Delete/useDelete";
import { Status } from "@type/status";
import { SelectorShape } from "@components/shared/layouts/Tables/utilities/Selector/type";
import { useI18n } from "@contexts/I18n";

export function useMessagesDispatcher() {
  const { t } = useI18n()
  /** Esse sim precisa ser state */
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const { handleToggleModal, modal } =
    useModalContext<ModalMessagesDispatcherOperationType>();
  const {
    mutateAsync: deleteMessageDispatcher,
    isPending: isLoadingDeleteDispatcher,
  } = useDeleteMessageDispatcher();
  const tHeadsServices = useMemo<Array<string>>(() => [
    "ID",
    t("Words.title"),
    t("Words.author"),
    t("Words.linked"),
    t("Words.status"),
    t("Words.actions"),
  ], [t]);

  const updateDispatchersForTable = (data: unknown): TDataMessagesDispatcher => {
    const {
      id,
      title,
      linked,
      author,
      status,
    } = data as MessagesDispatcherShape

    return {
      id,
      title,
      author,
      linked,
      status:  t(`Words.${status.toLowerCase()}`) as Status,
      actions: (
        <NotificationsActions handleToggleModal={handleToggleModal} id={id} />
      ),
    };
  };

  const handleDeleteMessageDispatcher = () => {
    deleteMessageDispatcher({ id: modal.id as number }).then(() =>
      handleToggleModal(false)
    );
  };


  return {
    tHeadsServices,
    updateDispatchersForTable,
    handleDeleteMessageDispatcher,
    isLoadingDeleteDispatcher, setSelectors, selectors
  };
}
