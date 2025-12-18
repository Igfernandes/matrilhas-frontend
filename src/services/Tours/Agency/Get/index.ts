import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { GetToursAgenciesResponse, GetTourAgenciesRequest } from "./types";

export default function useGet() {
  const { toursAgencies } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getToursAgencies(request?: GetTourAgenciesRequest) {
    const { tour_id } = request ?? {};
    return await axios.get<GetToursAgenciesResponse>(
      setQueries({
        url: setParams({
          url: toursAgencies,
          data: {
            id: tour_id
          },
        }),
      })
    );
  }

  return {
    getToursAgencies,
  };
}
