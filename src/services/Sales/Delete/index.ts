import { useAxios } from "@hooks/useAxios";
import { DeleteAgencyPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { getPayloadJSON } from "@helpers/payload";

export function useDeleteSalesService() {
  const { axios } = useAxios();
  const { sales } = API_ROUTES;

  async function deleteSale(payload: DeleteAgencyPayload) {
    return axios.delete(`${sales}/${payload.sale_id ?? ""}`, {
      data: getPayloadJSON(payload),
    });
  }

  return {
    deleteSale,
  };
}
