import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateSchedulePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostScheduleService() {
  const { axios } = useAxios();
  const { schedule } = API_ROUTES;

  async function postCreateSchedule(payload: PostCreateSchedulePayload) {
    return axios.post(schedule, getPayloadJSON(payload));
  }

  return {
    postCreateSchedule,
  };
}
