import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostSubscribePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostSubscribe() {
  const { axios } = useAxios();
  const { subscribers } = API_ROUTES;

  async function postSubscribe(payload: PostSubscribePayload) {
    return axios.post(subscribers, getPayloadJSON({ ...payload }));
  }

  return {
    postSubscribe,
  };
}
