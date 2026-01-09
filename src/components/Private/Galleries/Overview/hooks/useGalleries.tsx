import { useCallback, useRef, useState } from "react";
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
import { useI18n } from "@contexts/I18n";

export function useGalleries() {
  const { t } = useI18n()
  const { handleToggleModal, modal } =
    useModalContext<ModalGalleryOperationType>();
  /** Esse sim precisa ser state */
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);

  const { mutateAsync: deleteGallery, isPending: isLoadingDelete } =
    useDeleteGalleries();

  /** tHeads NÃO depende de estado → useRef é perfeito aqui */
  const tHeads = useRef<Array<string>>([
    "ID",
    t("Words.title"),
    t("Words.status"),
    t("Words.created_at"),
    t("Words.actions"),
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
        created_at: dayjs(created_at).format(t("Configs.format.datetime")),
        actions: <GalleriesActions handleToggleModal={handleToggleModal} id={id} />,
      };
    },
    [handleToggleModal, t]
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
    selectors, setSelectors,
    handleDelete,
    isLoadingDelete,
    updateForTable,
    getSelected
  };
}
