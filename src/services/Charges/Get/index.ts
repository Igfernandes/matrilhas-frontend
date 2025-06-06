import { API_ROUTES } from "@configs/routes/Api/api";
import { GetChargesRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ChargeShape } from "@type/Charges";

export default function useGet() {
  const { charges } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getCharges(request?: GetChargesRequest) {
    const { ...query } = request ?? {};
    return await axios.get<ChargeShape[]>(
      setQueries({
        url: setParams({ url: charges }),
        query,
      })
    );
  }

  return {
    getCharges,
  };
}
