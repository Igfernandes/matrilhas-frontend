import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostToursPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostToursService() {
  const { axios } = useAxios();
  const { tours } = API_ROUTES;

  async function postCreateTour(payload: PostToursPayload) {
    return axios.post(tours, getPayloadJSON(payload));
  }

  return {
    postCreateTour,
  };
}
