import { useAxios } from "@hooks/useAxios";
import { DeleteSubscriberPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { getPayloadJSON } from "@helpers/payload";

export function useDeleteSubscribersService() {
  const { axios } = useAxios();
  const { subscribers } = API_ROUTES;

  async function deleteSubscriber(payload: DeleteSubscriberPayload) {
    return axios.delete(`${subscribers}/${payload.id ?? ""}`, {
      data: getPayloadJSON(payload),
    });
  }

  return {
    deleteSubscriber,
  };
}
