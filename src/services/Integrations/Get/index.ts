import { API_ROUTES } from "@configs/routes/Api/api";
import { GetIntegrationsRequest, GetIntegrationsResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { integrations } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getIntegrations(request?: GetIntegrationsRequest) {
    const { id, ...query } = request ?? {};

    return await axios.get<GetIntegrationsResponse>(
      setQueries({
        url: setParams({
          url: integrations,
          data: {
            id: id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getIntegrations,
  };
}
