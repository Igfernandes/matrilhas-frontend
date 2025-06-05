import { CreateCharge } from "@components/Private/Finance/Create";
import { useFinance } from "@components/Private/Finance/Create/hooks/useFinance";
import { ClientsPayedModal } from "@components/shared/others/ClientsTable/modals/ClientsModal";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function FinanceCreate() {
  const { clients, updateClientsSelected, clientsSelected } = useFinance();

  return (
    <DashboardContainer>
      <CreateCharge
        clients={clients}
        clientsSelected={clientsSelected}
        handleUpdateClients={updateClientsSelected}
      />
      <ClientsPayedModal
        clientsSelected={clientsSelected}
        clients={clients}
        handleAddClients={updateClientsSelected}
      />
    </DashboardContainer>
  );
}
