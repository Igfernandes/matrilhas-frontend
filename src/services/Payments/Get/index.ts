import { API_ROUTES } from "@configs/routes/Api/api";
import { GetPaymentsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { PaymentShape } from "@type/Payments";

export default function useGet() {
  const { payments } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getPayments(request?: GetPaymentsRequest) {
    const { ...query } = request ?? {};
    return await axios.get<PaymentShape[]>(
      setQueries({
        url: setParams({ url: payments }),
        query,
      })
    );
  }

  return {
    getPayments,
  };
}
