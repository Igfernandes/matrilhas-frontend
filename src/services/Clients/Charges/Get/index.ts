import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { GetChargesRequest, GetChargesResponse } from "./types";

export default function useGetClientsCharges() {
  const { clientsCharges } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getClientsCharges(
    request?: GetChargesRequest
  ): Promise<GetChargesResponse> {
    const { ...query } = request ?? {};
    const { data } = await axios.get<GetChargesResponse>(
      setQueries({
        url: setParams({
          url: clientsCharges,
          data: { id: request?.id ?? "" },
        }),
        query,
      })
    );

    return data;
  }

  return {
    getClientsCharges,
  };
}
