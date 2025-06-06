import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutFormPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePutFormService() {
  const { axios } = useAxios();
  const { forms } = API_ROUTES;

  async function putForm({ id, ...payload }: PutFormPayload) {
    return axios.put(`${forms}/${id}`, getPayloadJSON(payload));
  }

  return {
    putForm,
  };
}
