import { useMemo, useState } from "react";

import { ChargeShape } from "@type/Charges";
import dayjs from "dayjs";
import { useModalContext } from "@contexts/Modal";
import { TDataCharges } from "../type";
import useDeleteCharges from "@services/Charges/Delete/useDelete";
import { Period } from "@type/status";
import { ChargesActions } from "../ChargesActions";
import { Status } from "@components/utilities/Status";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useI18n } from "@contexts/I18n";

export function useCharges() {
  const { t } = useI18n()
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

  const tHeadsFinance = useMemo<Array<string>>(() => [
    "ID",
    t("Words.name"),
    t("Words.type"),
    t("Words.status"),
    t("Words.clients"),
    t("Words.agencies"),
    t("Words.actions"),
  ], [t]);

  const updateChargeForTable = (data: unknown): TDataCharges => {
    const { id, title, type, status, clients, agencies, reference, created_at }: ChargeShape = data as ChargeShape;
    const chargeId = String(id);
    return {
      id: chargeId,
      title,
      type: t(`Words.${type?.toLowerCase()}`) as Period,
      status: <Status is={status} />,
      clients: clients?.length ?? 0,
      agencies: agencies?.length ?? 0,
      created_at: dayjs(created_at).format(t("Configs.format.date")),
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
