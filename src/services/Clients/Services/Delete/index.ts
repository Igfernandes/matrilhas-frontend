import { useAxios } from "@hooks/useAxios";
import { DeleteClientServicePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function useDeleteClientServiceService() {
  const { axios } = useAxios();
  const { clientsServices } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteClient({
    client_id,
    serviceId,
  }: DeleteClientServicePayload) {
    return axios.delete(
      setParams({
        url: clientsServices,
        data: {
          id: client_id,
          serviceId,
        },
      })
    );
  }

  return {
    deleteClient,
  };
}
