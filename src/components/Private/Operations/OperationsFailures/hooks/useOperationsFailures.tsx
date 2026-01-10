import { useEffect, useMemo, useState } from "react";
import i18n from "@configs/i18n";

import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { HookFinancesProps, TDataOperationsFailures } from "../../type";
import {
  OperationFailureShape,
  StatusOperationsFailures,
} from "@type/OperationsFailures";
import useGetOperationsFailures from "@services/OperationsFailures/Get/useGet";
import { OperationsFailuresActions } from "../OperationsFailuresActions";
import { useI18n } from "@contexts/I18n";

type Props = Pick<
  HookFinancesProps,
  "filter"
>;

export function useOperationsFailures({ filter }: Props) {
  const { t } = useI18n()
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const [tDataOperationsFailures, setTDataOperationsFailures] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { data: operationsFailuresData } = useGetOperationsFailures();

  const tHeadsOperationsFailures = useMemo<Array<string>>(() => [
    "ID",
    t("Texts.operation_type"),
    t("Words.status"),
    t("Texts.error_message"),
    t("Texts.resolved_at"),
    t("Words.actions"),
  ], [t]);
  const updateOperationsFailuresForTable = ({
    id,
    operation_type,
    status,
    error_message,
    resolved_at,
  }: OperationFailureShape): TDataOperationsFailures => {
    return {
      id,
      operation_type,
      status: i18n(
        `Words.${status.toLocaleLowerCase()}`
      ) as StatusOperationsFailures,
      error: error_message,
      resolved_at: resolved_at,
      actions: <OperationsFailuresActions id={id} />,
    };
  };

  useEffect(() => {
    if (!operationsFailuresData) return;

    const operationsFailuresFiltered = operationsFailuresData.filter(
      (tDataOF) => tDataOF
    );

    setSelectors([
      ...operationsFailuresFiltered.map((operationsFailures) => ({
        value: operationsFailures.id.toString(),
        isChecked: false,
      })),
      {
        value: "all",
        isChecked: false,
      },
    ] as Array<SelectorShape>);

    const tDataClient = operationsFailuresFiltered.map((ClientProps) =>
      updateOperationsFailuresForTable(ClientProps)
    );

    setTDataOperationsFailures(tDataClient);
  }, [operationsFailuresData, filter]);

  return {
    tHeadsOperationsFailures,
    setSelectors,
    selectors,
    tDataOperationsFailures,
  };
}
