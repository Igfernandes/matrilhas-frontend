import { useAxios } from "@hooks/useAxios";
import { PostExportsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { getPayloadJSON } from "@helpers/payload";

export function usePostService() {
  const { axios } = useAxios();
  const { clientsExports } = API_ROUTES;

  async function post(payload: PostExportsPayload) {
    return axios.post(clientsExports, getPayloadJSON(payload));
  }
  return {
    post,
  };
}
