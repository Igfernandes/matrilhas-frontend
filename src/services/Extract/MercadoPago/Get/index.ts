import { API_ROUTES } from "@configs/routes/Api/api";
import { GetExtractRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ChargeShape } from "@type/Charges";

export default function useGet() {
  const { extract } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getCharges(request?: GetExtractRequest) {
    const { ...query } = request ?? {};
    return await axios.get<ChargeShape[]>(
      setQueries({
        url: setParams({ url: extract }),
        query,
      })
    );
  }

  return {
    getCharges,
  };
}
