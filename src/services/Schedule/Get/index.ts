import { API_ROUTES } from "@configs/routes/Api/api";
import { GetSchedulesRequest, GetSchedulesResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { scheduleId } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getSchedules(request?: GetSchedulesRequest) {
    const { id, ...query } = request ?? {};
    return await axios.get<GetSchedulesResponse>(
      setQueries({
        url: setParams({
          url: scheduleId,
          data: {
            id: id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getSchedules,
  };
}
