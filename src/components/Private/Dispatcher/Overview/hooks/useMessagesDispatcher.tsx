import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import {
  HookMessagesDispatcherProps,
  ModalMessagesDispatcherOperationType,
  TDataMessagesDispatcher,
} from "../type";
import { NotificationsActions } from "../NotificationsActions";
import useGetMessagesDispatcher from "@services/MessagesDispatcher/Get/useGetMessagesDispatcher";
import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";
import useDeleteMessageDispatcher from "@services/MessagesDispatcher/Delete/useDelete";

export function useMessagesDispatcher({
  handleFilter,
  filter,
}: HookMessagesDispatcherProps<MessagesDispatcherShape>) {
  const [tDatMessagesDispatcher, settDatMessagesDispatcher] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { handleToggleModal, modal } =
    useModalContext<ModalMessagesDispatcherOperationType>();
  const { data: dispatchersData } = useGetMessagesDispatcher();
  const {
    mutateAsync: deleteMessageDispatcher,
    isPending: isLoadingDeleteDispatcher,
  } = useDeleteMessageDispatcher();
  const tHeadsServices = useRef<Array<string>>([
    "ID",
    i18n("words.title"),
    i18n("words.linked"),
    i18n("words.author"),
    i18n("words.status"),
    i18n("words.actions"),
  ]);

  const updateUserForTable = ({
    id,
    title,
    linked,
    author,
    status,
  }: MessagesDispatcherShape): TDataMessagesDispatcher => {
    return {
      id,
      title,
      linked,
      author,
      status: i18n(`words.${status.toLowerCase()}`),
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

  /** Adding news keys of table and the lasted column to table data services */
  useEffect(() => {
    if (!dispatchersData) return;

    const notificationsFiltered = dispatchersData.filter((tDataDispatcher) =>
      handleFilter(tDataDispatcher)
    );

    const tDataDispatcher = notificationsFiltered.map((notification) =>
      updateUserForTable(notification)
    );

    settDatMessagesDispatcher(tDataDispatcher);
  }, [dispatchersData, filter]);

  return {
    tDatMessagesDispatcher,
    tHeadsServices,
    handleDeleteMessageDispatcher,
    isLoadingDeleteDispatcher,
  };
}
