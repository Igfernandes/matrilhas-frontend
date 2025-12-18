import { API_ROUTES } from "@configs/routes/Api/api";
import { GetTourRulesRequest, GetToursRulesResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { toursRules } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getToursRules(request?: GetTourRulesRequest) {
    const { tour_id, ...query } = request ?? {};
    return await axios.get<GetToursRulesResponse>(
      setQueries({
        url: setParams({
          url: toursRules,
          data: {
            id: tour_id,
          },
        }),
        query,
      })
    );
  }

  return {
    getToursRules,
  };
}
