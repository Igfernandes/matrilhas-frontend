import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCheckoutPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostCheckoutService() {
  const { axios } = useAxios();
  const { checkout } = API_ROUTES;

  async function postCheckout(payload: PostCheckoutPayload) {
    return axios.post(checkout, getPayloadJSON(payload));
  }

  return {
    postCheckout,
  };
}
