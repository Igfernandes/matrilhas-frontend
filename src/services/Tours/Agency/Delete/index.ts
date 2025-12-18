import { useAxios } from "@hooks/useAxios";
import { DeleteTourAgencyPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";
import { getPayloadJSON } from "@helpers/payload";

export function useDeleteToursAgencyService() {
  const { axios } = useAxios();
  const { toursAgencies } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteAgencies(payload: DeleteTourAgencyPayload) {
    return axios.delete(
      setParams({
        url: toursAgencies,
        data: {
          id: payload.tour_id ?? "",
        },
      }),
      {
        data: getPayloadJSON(payload),
      }
    );
  }

  return {
    deleteAgencies,
  };
}
