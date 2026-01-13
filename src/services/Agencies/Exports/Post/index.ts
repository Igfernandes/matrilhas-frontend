import { useAxios } from "@hooks/useAxios";
import { PostExportsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { getPayloadJSON } from "@helpers/payload";

export function usePostService() {
  const { axios } = useAxios();
  const { agenciesExports } = API_ROUTES;

  async function post(payload: PostExportsPayload) {
    return axios.post(agenciesExports, getPayloadJSON(payload));
  }
  return {
    post,
  };
}
