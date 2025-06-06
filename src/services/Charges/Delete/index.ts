import { useAxios } from "@hooks/useAxios";
import { DeleteChargePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function useDeleteChargeService() {
  const { axios } = useAxios();
  const { charges } = API_ROUTES;

  async function deleteCharge({ id }: DeleteChargePayload) {
    return axios.delete(`${charges}/${id}`);
  }

  return {
    deleteCharge,
  };
}
