import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostIntegrationsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostIntegrationsService() {
  const { axios } = useAxios();
  const { integrations } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postIntegrations(payload: PostIntegrationsPayload) {
    return axios.post(
      setParams({
        url: integrations,
        data: {
          id: "",
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postIntegrations,
  };
}
