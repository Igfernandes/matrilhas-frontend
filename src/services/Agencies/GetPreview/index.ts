import { API_ROUTES } from "@configs/routes/Api/api";
import { GetClientsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ClientShape } from "../../../types/Clients";

export default function useGetPreview() {
  const { clientPreview } = API_ROUTES;
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function getClient(request?: GetClientsRequest) {
    const { ...query } = request ?? {};
    return await axios.get<Pick<ClientShape, "name" | "email" | "phone">>(
      setQueries({
        url: clientPreview,
        query,
      })
    );
  }

  return {
    getClient,
  };
}
