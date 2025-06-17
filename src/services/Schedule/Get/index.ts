import { API_ROUTES } from "@configs/routes/Api/api";
import { GetSchedulesRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ScheduleShape } from "@type/Schedule";

export default function useGet() {
  const { schedule } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getSchedules(request?: GetSchedulesRequest) {
    const { id, ...query } = request ?? {};
    return await axios.get<ScheduleShape[]>(
      setQueries({
        url: setParams({
          url: schedule,
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
