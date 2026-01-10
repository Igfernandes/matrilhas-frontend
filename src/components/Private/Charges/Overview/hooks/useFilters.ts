import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import useGetAgenciesPreview from "@services/Agencies/GetPreview/useGet";
import useGetClients from "@services/Clients/Get/useGet";
import { useMemo } from "react";

export function useChargesFilter() {
  const { updateReferences } = useFiltersContext();
  const { rows: agenciesData } = useGetAgenciesPreview();
  const { rows: clientsData } = useGetClients();

  const agencies = useMemo(() => {
    updateReferences("agency_id", (agencyId: unknown) => {
      return agenciesData?.find((agency) => agency.id == agencyId)?.name || "";
    });
    return agenciesData || [];
  }, [agenciesData, updateReferences]);

  const clients = useMemo(() => {
    updateReferences("client_id", (clientId: unknown) => {
      return clientsData?.find((client) => client.id == clientId)?.name || "";
    });
    return clientsData || [];
  }, [clientsData, updateReferences]);
  
  return {
    agencies,
    clientsData,
    clients,
  };
}
