import { API_ROUTES } from "@configs/routes/Api/api";
import { GetPaymentsRequest, GetPaymentsResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { chargesPayments } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getPayments(request?: GetPaymentsRequest) {
    const { ...query } = request ?? {};
    return await axios.get<GetPaymentsResponse>(
      setQueries({
        url: setParams({
          url: chargesPayments,
          data: { id: request?.charge_id },
        }),
        query,
      })
    );
  }

  return {
    getPayments,
  };
}
