import { API_ROUTES } from "@configs/routes/Api/api";
import { GetSalesRequest, GetSalesResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { salesById } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getSales(request?: GetSalesRequest) {
    const { ...query } = request ?? {};
    return await axios.get<GetSalesResponse>(
      setQueries({
        url: setParams({ url: salesById }),
        query,
      })
    );
  }

  return {
    getSales,
  };
}
