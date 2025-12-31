import { API_ROUTES } from "@configs/routes/Api/api";
import { GetSalesStaticsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { SalesStaticsResponse } from "@type/Sales/statics";

export default function useGet() {
  const { saleStatics } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getSales(request?: GetSalesStaticsRequest) {
    const { ...query } = request ?? {};
    return await axios.get<SalesStaticsResponse>(
      setQueries({
        url: setParams({ url: saleStatics }),
        query,
      })
    );
  }

  return {
    getSales,
  };
}
