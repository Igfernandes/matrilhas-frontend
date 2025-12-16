import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateAgencyPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostAgenciesService() {
  const { axios } = useAxios();
  const { agencies } = API_ROUTES;

  async function postCreateAgency(payload: PostCreateAgencyPayload) {
    return axios.post(agencies, getPayloadJSON(payload));
  }

  return {
    postCreateAgency,
  };
}
