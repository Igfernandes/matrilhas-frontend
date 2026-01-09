import { useCallback, useMemo, useState } from "react";
import {
  ModalAgencyOperationType,
} from "../../type";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useModalContext } from "@contexts/Modal";
import { getNumberFormatted } from "@helpers/string";
import { AgencyShape } from "@type/Agencies";
import useDeleteAgencies from "@services/Agencies/Delete/useDeleteAgencies";
import { DeleteAgencyPayload } from "@services/Agencies/Delete/type";
import { AgencyActions } from "../AgencyActions";
import dayjs from "dayjs";
import { Status } from "@components/utilities/Status";
import { useI18n } from "@contexts/I18n";

export function useAgencies() {
  const { t } = useI18n()
  const { handleToggleModal, modal } =
    useModalContext<ModalAgencyOperationType>();
  /** Esse sim precisa ser state */
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);

  const { mutateAsync: deleteAgency, isPending: isLoadingDelete } =
    useDeleteAgencies();

  /** tHeads NÃO depende de estado → useRef é perfeito aqui */
  const tHeads = useMemo(() => ([
    "ID",
    t("Words.name"),
    t("Words.status"),
    t("Words.phone"),
    t("Words.created_at"),
    t("Words.actions"),
  ]), [t]);

  /** 🔥 useCallback para estável */
  const updateForTable = useCallback(
    (data: unknown) => {
      const { id, name, status, phone, created_at, cnpj } = data as AgencyShape;
      const clientId = String(id);

      return {
        id: clientId,
        name,
        status: <Status is={status} />,
        phone: getNumberFormatted(phone),
        created_at: dayjs(created_at).format("DD/MM/YYYY HH:mm"),
        actions: <AgencyActions cnpj={cnpj} handleToggleModal={handleToggleModal} id={id} />,
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

    deleteAgency(payload).then(() => handleToggleModal(false));
  }, [deleteAgency, modal.id, handleToggleModal])

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
