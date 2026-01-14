import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutClientProfilePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePutClientService() {
  const { axios } = useAxios();
  const { clientsProfile } = API_ROUTES;

  async function putUsers({ id, ...payload }: PutClientProfilePayload) {
    return axios.put(`${clientsProfile}/${id}`, getPayloadJSON(payload));
  }

  return {
    putUsers,
  };
}
