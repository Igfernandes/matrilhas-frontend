import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostToursPeriodPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostToursPeriodService() {
  const { axios } = useAxios();
  const { toursPeriod } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postCreatePeriod(payload: PostToursPeriodPayload) {
    return axios.post(
      setParams({
        url: toursPeriod,
        data: { id: payload?.[0]?.tour_id ?? "" },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postCreatePeriod,
  };
}
