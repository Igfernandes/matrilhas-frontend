import { useModalContext } from "@contexts/Modal";
import useGetIntegrations from "@services/Integrations/Get/useGet";
import { useMemo } from "react";

type Props = {
  search: string;
};

export function useApi({}: Props) {
  const { handleToggleModal, modal } = useModalContext();
  const { rows: data } = useGetIntegrations();
  const integrations = useMemo(() => data, [data]);

  return {
    integrations,
    handleToggleModal,
    modal,
  };
}
