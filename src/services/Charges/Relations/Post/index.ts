import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateChargeRelationsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostChargeRelationsService() {
  const { axios } = useAxios();
  const { chargesRelations } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postCreateCharge(payload: PostCreateChargeRelationsPayload) {
    return axios.post(
      setParams({
        url: chargesRelations,
        data: {
          id: payload.charge_id,
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postCreateCharge,
  };
}
