import { useCallback, useMemo, useState } from "react";
import {
  ModalSubscriberOperationType,
} from "../../type";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useModalContext } from "@contexts/Modal";
import { getNumberFormatted } from "@helpers/string";
import { SubscriberShape } from "@type/Agencies";
import { DeleteAgencyPayload } from "@services/Agencies/Delete/type";
import { SubscribersActions } from "../SubscribersActions";
import dayjs from "dayjs";
import { useI18n } from "@contexts/I18n";
import useDeleteSubscribers from "@services/Subscribers/Delete/useDeleteSubscribers";

export function useSubscribers() {
  const { t } = useI18n()
  const { handleToggleModal, modal } =
    useModalContext<ModalSubscriberOperationType>();
  /** Esse sim precisa ser state */
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);

  const { mutateAsync: deleteSubscriber, isPending: isLoadingDelete } =
    useDeleteSubscribers();

  /** tHeads NÃO depende de estado → useRef é perfeito aqui */
  const tHeads = useMemo(() => ([
    "ID",
    t("Words.name"),
    t("Words.type"),
    t("Words.phone"),
    t("Words.created_at"),
    t("Words.actions"),
  ]), [t]);

  /** 🔥 useCallback para estável */
  const updateForTable = useCallback(
    (data: unknown) => {
      const { id, name, type, phone, created_at } = data as SubscriberShape;
      const clientId = String(id);

      return {
        id: clientId,
        name,
        type: t(`Words.${type.toLowerCase()}`),
        phone: getNumberFormatted(phone),
        created_at: dayjs(created_at).format("DD/MM/YYYY HH:mm"),
        actions: <SubscribersActions handleToggleModal={handleToggleModal} id={id} />,
      };
    },
    [handleToggleModal, t]
  );


  /** DELETE otimizado */
  const handleDelete = useCallback(() => {
    const payload = {} as DeleteAgencyPayload;
    const idString = String(modal.id);

    if (idString.includes(",")) {
      payload.in_subscribers = idString.split(",").map(Number);
    } else if (idString === "-1") {
      payload.all = true;
    } else {
      payload.id = Number(modal.id);
    }

    deleteSubscriber(payload).then(() => handleToggleModal(false));
  }, [deleteSubscriber, modal.id, handleToggleModal])

  const getSelected = useCallback((selectors: SelectorShape[]) => {
    return selectors
      .filter((s) => s.value !== "all" && s.isChecked)
      .map((s) => s.value)
      .join(",");
  }, []);



  return {
    tHeads,
    selectors, setSelectors,
    handleDelete,
    isLoadingDelete,
    updateForTable,
    getSelected
  };
}
