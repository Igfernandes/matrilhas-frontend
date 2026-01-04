import { useRef, useState } from "react";
import i18n from "@configs/i18n";

import { ChargeShape } from "@type/Charges";
import dayjs from "dayjs";
import { useModalContext } from "@contexts/Modal";
import { TDataCharges } from "../type";
import useDeleteCharges from "@services/Charges/Delete/useDelete";
import { Period } from "@type/status";
import { ChargesActions } from "../ChargesActions";
import { Status } from "@components/utilities/Status";
import { SelectorShape } from "@components/shared/layouts/Selector/type";

export function useCharges() {
  const [selectors, setSelectors] = useState<Array<SelectorShape>>([])
  const { handleToggleModal, modal } = useModalContext();
  const { mutateAsync: deleteCharge, isPending } = useDeleteCharges();

  const handleDeleteCharge = () => {
    deleteCharge({
      id: modal.id as number,
    }).then(() => {
      handleToggleModal(false);
    });
  };

  const tHeadsFinance = useRef<Array<string>>([
    "ID",
    i18n("Words.name"),
    i18n("Words.type"),
    i18n("Words.status"),
    i18n("Words.clients"),
    i18n("Words.agencies"),
    i18n("Words.actions"),
  ]);

  const updateChargeForTable = (data: unknown): TDataCharges => {
    const { id, title, type, status, clients, agencies, reference, created_at }: ChargeShape = data as ChargeShape;
    const chargeId = String(id);
    return {
      id: chargeId,
      title,
      type: i18n(`Words.${type?.toLowerCase()}`) as Period,
      status: <Status is={status} />,
      clients: clients?.length ?? 0,
      agencies: agencies?.length ?? 0,
      created_at: dayjs(created_at).format(i18n("Configs.format.date")),
      actions: <ChargesActions reference={reference} handleToggleModal={handleToggleModal} id={id} />,
    };
  };

  return {
    tHeadsFinance,
    modal,
    handleToggleModal,
    handleDeleteCharge,
    isLoading: isPending,
    updateChargeForTable,
    setSelectors, selectors
  };
}
