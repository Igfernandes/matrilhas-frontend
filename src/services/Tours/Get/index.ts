import { API_ROUTES } from "@configs/routes/Api/api";
import { GetToursRequest, GetToursResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { tours } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getTours(request?: GetToursRequest) {
    const { ...query } = request ?? {};
    return await axios.get<GetToursResponse>(
      setQueries({
        url: setParams({ url: tours }),
        query,
      })
    );
  }

  return {
    getTours,
  };
}
