import { API_ROUTES } from "@configs/routes/Api/api";
import { GetRelationsRequest, GetRelationsResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { chargesRelations } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getRelations(request?: GetRelationsRequest) {
    const { ...query } = request ?? {};
    return await axios.get<GetRelationsResponse>(
      setQueries({
        url: setParams({
          url: chargesRelations,
          data: { id: request?.charge_id ?? "" },
        }),
        query,
      })
    );
  }

  return {
    getRelations,
  };
}
