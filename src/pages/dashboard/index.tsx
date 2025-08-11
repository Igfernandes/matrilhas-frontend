import { GeneralCalendar } from "@components/Private/Dashboard/GeneralCalendar";
import { GraphicsClients } from "@components/Private/Dashboard/GraphicsClients";
import { DashboardHeader } from "@components/Private/Dashboard/Header";
import { useChargesData } from "@components/Private/Dashboard/hooks/useChargesData";
import { useClientsData } from "@components/Private/Dashboard/hooks/useClientsData";
import { useFormsData } from "@components/Private/Dashboard/hooks/useFormsData";
import { useServicesData } from "@components/Private/Dashboard/hooks/useServicesData";
import { useUsersData } from "@components/Private/Dashboard/hooks/useUsersData";
import { DashboardPageProps } from "@components/Private/Dashboard/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function Dashboard({ user }: DashboardPageProps) {
  const { clients, categories, clientsByDDD } = useClientsData();
  const { services } = useServicesData();
  const { users, invitesValid } = useUsersData();
  const { forms } = useFormsData();
  const { charges } = useChargesData();

  return (
    <DashboardContainer user={user}>
      <DashboardHeader
        clients={clients}
        forms={forms}
        users={users}
        services={services}
        charges={charges}
      />
      <GeneralCalendar
        clients={clients}
        forms={forms}
        users={users}
        services={services}
        charges={charges}
      />
      <GraphicsClients
        invites={invitesValid}
        clients={clients ?? []}
        categories={categories.slice(0, 4)}
        clientsByDDD={clientsByDDD}
      />
    </DashboardContainer>
  );
}
