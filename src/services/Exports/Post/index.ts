import { useAxios } from "@hooks/useAxios";
import { PostExportsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { getPayloadJSON } from "@helpers/payload";

export function usePostFormService() {
  const { axios } = useAxios();
  const { exports } = API_ROUTES;

  async function postForm(payload: PostExportsPayload) {
    return axios.post(exports, getPayloadJSON(payload));
  }
  return {
    postForm,
  };
}
