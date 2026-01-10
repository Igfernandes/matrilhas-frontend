import { API_ROUTES } from "@configs/routes/Api/api";
import { GetAgenciesRequest, GetAgenciesResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { agencies } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getAgencies(request?: GetAgenciesRequest) {
    const { ...query } = request ?? {};
    return await axios.get<GetAgenciesResponse>(
      setQueries({
        url: setParams({ url: agencies }),
        query,
      })
    );
  }

  return {
    getAgencies,
  };
}
