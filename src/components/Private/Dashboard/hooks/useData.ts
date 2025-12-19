import useGetCharges from "@services/Charges/Get/useGetCharges";
import useGetClients from "@services/Clients/Get/useGet";
import useGetForms from "@services/Forms/Get/useGetForms";
import useGetUsers from "@services/Users/Get/useGetUsers";
export function useOverviewData() {
  const { count: clientsCount, isPending: isLoadingClients } = useGetClients({
    limit: 0,
  });
  const { count: formsCount, isPending: isLoadingForms } = useGetForms({
    limit: 0,
  });
  const { count: chargesCount, isPending: isLoadingCharges } = useGetCharges({
    limit: 0,
  });
  const { count: usersCount, isPending: isLoadingUsers } = useGetUsers({
    limit: 0,
  });

  return {
    clientsCount,
    formsCount,
    chargesCount,
    usersCount,
    isLoading: isLoadingClients || isLoadingForms || isLoadingCharges || isLoadingUsers,
  };
}
