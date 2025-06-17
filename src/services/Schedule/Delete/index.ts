import { useAxios } from "@hooks/useAxios";
import { DeleteSchedulePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function useDeleteScheduleService() {
  const { axios } = useAxios();
  const { scheduleId } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteSchedule({ id }: DeleteSchedulePayload) {
    return axios.delete(
      setParams({
        url: scheduleId,
        data: {
          id,
        },
      })
    );
  }

  return {
    deleteSchedule,
  };
}
