import { API_ROUTES } from "@configs/routes/Api/api";
import { GetTourPeriodRequest, GetToursPeriodResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { toursPeriod } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getToursPeriod(request?: GetTourPeriodRequest) {
    const { tour_id, ...query } = request ?? {};
    return await axios.get<GetToursPeriodResponse>(
      setQueries({
        url: setParams({
          url: toursPeriod,
          data: {
            id: tour_id,
          },
        }),
        query,
      })
    );
  }

  return {
    getToursPeriod,
  };
}
