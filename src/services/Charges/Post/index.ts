import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateChargePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostChargeService() {
  const { axios } = useAxios();
  const { charges } = API_ROUTES;

  async function postCreateCharge(payload: PostCreateChargePayload) {
    return axios.post(charges, getPayloadJSON(payload));
  }

  return {
    postCreateCharge,
  };
}
