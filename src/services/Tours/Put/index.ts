import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { API_ROUTES } from "@configs/routes/Api/api";
import { PutTourPayload } from "./type";

export function usePutTourService() {
  const { axios } = useAxios();
  const { tours } = API_ROUTES;

  async function putTour({ id, ...payload }: PutTourPayload) {
    return axios.put(`${tours}/${id}`, getPayloadJSON(payload));
  }

  return {
    putTour,
  };
}
