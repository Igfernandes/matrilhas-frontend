import { useCallback, useMemo, useRef, useState } from "react";
import {
  ModalClientsOperationType,
} from "../../type";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useModalContext } from "@contexts/Modal";
import { ClientActions } from "../ClientActions";
import { ClientShape } from "../../../../../types/Clients"
import useDeleteClient from "../../../../../services/Clients/Delete/useDeleteClient";
import { DeleteClientPayload } from "../../../../../services/Clients/Delete/type";
import { getNumberFormatted } from "@helpers/string";
import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import { useI18n } from "@contexts/I18n";

export function useClients() {
  const { t } = useI18n()
  const { data: categoryData } = useGetCategories();
  const categories = useMemo(() => categoryData, [categoryData]);
  const { handleToggleModal, modal } =
    useModalContext<ModalClientsOperationType>();
  /** Esse sim precisa ser state */
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);

  const { mutateAsync: deleteClient, isPending: isLoadingClientDelete } =
    useDeleteClient();

  /** tHeads NÃO depende de estado → useRef é perfeito aqui */
  const tHeadsClient = useRef<Array<string>>([
    "ID",
    t("Words.name"),
    t("Words.status"),
    t("Words.phone"),
    t("Words.category"),
    t("Words.actions"),
  ]);

  /** 🔥 useCallback para estável */
  const updateClientForTable = useCallback(
    (data: unknown) => {
      const { id, name, status, phone, categories = [] } = data as ClientShape;
      const clientId = String(id);

      return {
        id: clientId,
        name,
        status: t(`Words.${status.toLowerCase()}`) as "ACTIVE" | "INACTIVE",
        phone: getNumberFormatted(phone),
        category: categories.map((c) => c.name).join(", "),
        actions: <ClientActions handleToggleModal={handleToggleModal} id={id} />,
      };
    },
    [handleToggleModal, t]
  );

  /** Criar nomes selecionados */
  const getSelectedClients = useCallback((selectors: SelectorShape[]) => {
    return selectors
      .filter((s) => s.value !== "all" && s.isChecked)
      .map((s) => s.value)
      .join(",");
  }, []);

  /** DELETE otimizado */
  const handleDeleteClient = useCallback(() => {
    const payload = {} as DeleteClientPayload;
    const idString = String(modal.id);

    if (idString.includes(",")) {
      payload.in_clients = idString.split(",").map(Number);
    } else if (idString === "-1") {
      payload.all = true;
    } else {
      payload.client_id = Number(modal.id);
    }

    deleteClient(payload).then(() => handleToggleModal(false));
  }, [deleteClient, modal.id, handleToggleModal])

  return {
    tHeadsClient,
    selectors,
    setSelectors,
    categories,
    getSelectedClients,
    handleDeleteClient,
    isLoadingClientDelete,
    updateClientForTable
  };
}
