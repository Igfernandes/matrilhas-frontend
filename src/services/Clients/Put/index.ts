import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutClientPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePutClientsService() {
  const { axios } = useAxios();
  const { clients } = API_ROUTES;

  async function putClient({ id, ...payload }: PutClientPayload) {
    return axios.put(`${clients}/${id}`, getPayloadJSON(payload));
  }

  return {
    putClient,
  };
}
