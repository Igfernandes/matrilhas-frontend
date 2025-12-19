import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutFormPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePutFormService() {
  const { axios } = useAxios();
  const { forms } = API_ROUTES;
  const { setParams } = useRoutes();

  async function putForm({ id, ...payload }: PutFormPayload) {
    return axios.put(
      setParams({
        url: forms,
        data: {
          id,
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    putForm,
  };
}
