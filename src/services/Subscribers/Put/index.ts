import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutAgencyPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePutAgencyService() {
  const { axios } = useAxios();
  const { agencies } = API_ROUTES;

  async function putAgency({ id, ...payload }: PutAgencyPayload) {
    return axios.put(`${agencies}/${id}`, getPayloadJSON(payload));
  }

  return {
    putAgency,
  };
}
