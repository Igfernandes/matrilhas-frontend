import { useCallback, useRef } from "react";
import i18n from "@configs/i18n";
import {
  DeleteGalleryPayload,
  ModalGalleryOperationType,
} from "../../type";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useModalContext } from "@contexts/Modal";
import dayjs from "dayjs";
import { Status } from "@components/utilities/Status";
import { GalleryShape } from "@type/Galleries";
import { GalleriesActions } from "../GalleriesActions";
import useDeleteGalleries from "@services/Galleries/Delete/useDelete";

export function useGalleries() {
  const { handleToggleModal, modal } =
    useModalContext<ModalGalleryOperationType>();
  /** Esse sim precisa ser state */
  const selectors = useRef<SelectorShape[]>([]);

  const { mutateAsync: deleteGallery, isPending: isLoadingDelete } =
    useDeleteGalleries();

  /** tHeads NÃO depende de estado → useRef é perfeito aqui */
  const tHeads = useRef<Array<string>>([
    "ID",
    i18n("Words.title"),
    i18n("Words.status"),
    i18n("Words.created_at"),
    i18n("Words.actions"),
  ]);

  /** 🔥 useCallback para estável */
  const updateForTable = useCallback(
    (data: unknown) => {
      const { id, title, status, created_at } = data as GalleryShape;
      const clientId = String(id);

      return {
        id: clientId,
        title,
        status: <Status is={status} />,
        created_at: dayjs(created_at).format("DD/MM/YYYY HH:mm"),
        actions: <GalleriesActions handleToggleModal={handleToggleModal} id={id} />,
      };
    },
    [handleToggleModal]
  );


  /** DELETE otimizado */
  const handleDelete = useCallback(() => {
    const payload = {} as DeleteGalleryPayload;
    const idString = String(modal.id);

    if (idString.includes(",")) {
      payload.in_galleries = idString.split(",").map(Number);
    } else if (idString === "-1") {
      payload.all = true;
    } else {
      payload.gallery_id = Number(modal.id);
    }

    deleteGallery(payload).then(() => handleToggleModal(false));
  }, [deleteGallery, modal.id, handleToggleModal])

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
