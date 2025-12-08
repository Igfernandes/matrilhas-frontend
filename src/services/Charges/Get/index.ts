import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { GetChargesRequest, GetChargesResponse } from "./types";

export default function useGet() {
  const { charges } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getCharges(
    request?: GetChargesRequest
  ): Promise<GetChargesResponse> {
    const { ...query } = request ?? {};
    const { data } = await axios.get<GetChargesResponse>(
      setQueries({
        url: setParams({ url: charges }),
        query,
      })
    );

    return data;
  }

  return {
    getCharges,
  };
}
