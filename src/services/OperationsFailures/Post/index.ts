import { useAxios } from "@hooks/useAxios";
import { PostOperationsFailuresPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostOperationsFailuresService() {
  const { axios } = useAxios();
  const { operationsFailures } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postOperationsFailures({ id }: PostOperationsFailuresPayload) {
    return axios.post(
      setParams({
        url: operationsFailures,
        data: {
          id,
        },
      })
    );
  }

  return {
    postOperationsFailures,
  };
}
