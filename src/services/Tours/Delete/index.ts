import { useAxios } from "@hooks/useAxios";
import { DeleteTourPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { getPayloadJSON } from "@helpers/payload";

export function useDeleteToursService() {
  const { axios } = useAxios();
  const { tours } = API_ROUTES;

  async function deleteTour(payload: DeleteTourPayload) {
    return axios.delete(`${tours}/${payload.tour_id ?? ""}`, {
      data: getPayloadJSON(payload),
    });
  }

  return {
    deleteTour,
  };
}
