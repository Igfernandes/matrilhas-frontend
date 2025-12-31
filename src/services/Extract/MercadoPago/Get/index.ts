import { API_ROUTES } from "@configs/routes/Api/api";
import { GetExtractRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { MercadoPagoPaymentShape } from "@type/Extracts/MercadoPago/MercadoPago";

export default function useGet() {
  const { mercadoPagoExtract } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getPayments(request?: GetExtractRequest) {
    const { ...query } = request ?? {};
    return await axios.get<MercadoPagoPaymentShape>(
      setQueries({
        url: setParams({ url: mercadoPagoExtract }),
        query,
      })
    );
  }

  return {
    getPayments,
  };
}
