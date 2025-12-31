import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { API_ROUTES } from "@configs/routes/Api/api";
import { PutSalePayload } from "./type";

export function usePutSaleService() {
  const { axios } = useAxios();
  const { sales } = API_ROUTES;

  async function putSale({ id, ...payload }: PutSalePayload) {
    return axios.put(`${sales}/${id}`, getPayloadJSON(payload));
  }

  return {
    putSale,
  };
}
