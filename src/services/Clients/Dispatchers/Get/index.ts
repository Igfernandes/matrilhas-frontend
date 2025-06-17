import { API_ROUTES } from "@configs/routes/Api/api";
import { GetClientsDispatchersRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ClientsMessagesDispatcherShape } from "@type/MessagesDispatcherShape/ClientsMessagesDispatcher";

export default function useGet() {
  const { clientsDispatchers } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getClientsDispatchers(payload?: GetClientsDispatchersRequest) {
    const { id, ...query } = payload ?? {};

    return await axios.get<ClientsMessagesDispatcherShape[]>(
      setQueries({
        url: setParams({
          url: clientsDispatchers,
          data: {
            id: id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getClientsDispatchers,
  };
}
