import { useAxios } from "@hooks/useAxios";
import { DeleteAgencyPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { getPayloadJSON } from "@helpers/payload";

export function useDeleteAgenciesService() {
  const { axios } = useAxios();
  const { agencies } = API_ROUTES;

  async function deleteAgency(payload: DeleteAgencyPayload) {
    return axios.delete(`${agencies}/${payload.agency_id ?? ""}`, {
      data: getPayloadJSON(payload),
    });
  }

  return {
    deleteAgency,
  };
}
