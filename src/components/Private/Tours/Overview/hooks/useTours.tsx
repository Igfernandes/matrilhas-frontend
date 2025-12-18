import { useCallback, useRef } from "react";
import i18n from "@configs/i18n";
import {
  ModalTourOperationType,
} from "../../type";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useModalContext } from "@contexts/Modal";
import { DeleteAgencyPayload } from "@services/Agencies/Delete/type";
import { TourActions } from "../ToursActions";
import dayjs from "dayjs";
import { Status } from "@components/utilities/Status";
import useDeleteTours from "@services/Tours/Delete/useDeleteTours";
import { TourShape } from "@type/Tours";

export function useTours() {
  const { handleToggleModal, modal } =
    useModalContext<ModalTourOperationType>();
  /** Esse sim precisa ser state */
  const selectors = useRef<SelectorShape[]>([]);

  const { mutateAsync: deleteTour, isPending: isLoadingDelete } =
    useDeleteTours();

  /** tHeads NÃO depende de estado → useRef é perfeito aqui */
  const tHeads = useRef<Array<string>>([
    "ID",
    i18n("Words.title"),
    i18n("Words.status"),
    i18n("Words.available_at"),
    i18n("Words.created_at"),
    i18n("Words.actions"),
  ]);

  /** 🔥 useCallback para estável */
  const updateForTable = useCallback(
    (data: unknown) => {
      const { id, title, status,  available_at, created_at } = data as TourShape;
      const clientId = String(id);

      return {
        id: clientId,
        title,
        status: <Status is={status} />,
        available_at: dayjs(available_at).format("DD/MM/YYYY HH:mm"),
        created_at: dayjs(created_at).format("DD/MM/YYYY HH:mm"),
        actions: <TourActions handleToggleModal={handleToggleModal} id={id} />,
      };
    },
    [handleToggleModal]
  );


  /** DELETE otimizado */
  const handleDelete = useCallback(() => {
    const payload = {} as DeleteAgencyPayload;
    const idString = String(modal.id);

    if (idString.includes(",")) {
      payload.in_agencies = idString.split(",").map(Number);
    } else if (idString === "-1") {
      payload.all = true;
    } else {
      payload.agency_id = Number(modal.id);
    }

    deleteTour(payload).then(() => handleToggleModal(false));
  }, [deleteTour, modal.id, handleToggleModal])

  const getSelected = useCallback((selectors: SelectorShape[]) => {
    return selectors
      .filter((s) => s.value !== "all" && s.isChecked)
      .map((s) => s.value)
      .join(",");
  }, []);



  return {
    tHeads,
    selectors,
    handleDelete,
    isLoadingDelete,
    updateForTable,
    getSelected
  };
}
