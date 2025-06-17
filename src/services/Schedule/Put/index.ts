import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutSchedulePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePutScheduleService() {
  const { axios } = useAxios();
  const { scheduleId } = API_ROUTES;
  const { setParams } = useRoutes();

  async function putSchedule({ id, ...payload }: PutSchedulePayload) {
    return axios.put(
      setParams({
        url: scheduleId,
        data: {
          id,
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    putSchedule,
  };
}
