import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostSaleGatewayPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostGatewayService() {
  const { axios } = useAxios();
  const { clientsSaleGateway } = API_ROUTES;

  async function postCreateSaleGateway(payload: PostSaleGatewayPayload) {
    return axios.post(clientsSaleGateway, getPayloadJSON(payload));
  }

  return {
    postCreateSaleGateway,
  };
}
