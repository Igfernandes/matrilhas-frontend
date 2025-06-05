import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutChargePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePutChargeService() {
  const { axios } = useAxios();
  const { chargesId } = API_ROUTES;
  const { setParams } = useRoutes();

  async function putCreateCharge({ id, ...payload }: PutChargePayload) {
    return axios.put(
      setParams({
        url: chargesId,
        data: {
          id,
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    putCreateCharge,
  };
}
