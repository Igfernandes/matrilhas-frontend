import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostToursAgencyPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostToursAgencyPayload() {
  const { axios } = useAxios();
  const { toursAgencies } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postCreateAgency(payload: PostToursAgencyPayload) {
    return axios.post(
      setParams({
        url: toursAgencies,
        data: { id: payload.tour_id ?? "" },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postCreateAgency,
  };
}
