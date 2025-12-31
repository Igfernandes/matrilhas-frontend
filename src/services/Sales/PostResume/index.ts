import { useAxios } from "@hooks/useAxios";
import { PostSaleResumePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { getPayloadJSON } from "@helpers/payload";

export function usePostSaleResumeService() {
  const { axios } = useAxios();
  const { saleResume } = API_ROUTES;

  async function postSaleResume(payload: PostSaleResumePayload) {
    return axios.post(saleResume, getPayloadJSON(payload));
  }

  return {
    postSaleResume,
  };
}
