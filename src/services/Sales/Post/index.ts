import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateSalePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostSaleService() {
  const { axios } = useAxios();
  const { sales } = API_ROUTES;

  async function postCreateSale(payload: PostCreateSalePayload) {
    return axios.post(sales, getPayloadJSON(payload));
  }

  return {
    postCreateSale,
  };
}
