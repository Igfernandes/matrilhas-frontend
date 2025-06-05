import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateChargeClientsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostChargeClientsService() {
  const { axios } = useAxios();
  const { chargesClients } = API_ROUTES;

  async function postCreateCharge(payload: PostCreateChargeClientsPayload) {
    return axios.post(chargesClients, getPayloadJSON(payload));
  }

  return {
    postCreateCharge,
  };
}
