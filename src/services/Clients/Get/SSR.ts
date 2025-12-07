import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetClientsRequest, GetClientsResponse } from "./types";

export async function getClients(
  tokenNavigation: string,
  { id, ...request }: GetClientsRequest = {}
): Promise<GetClientsResponse> {
  const query = request ?? {};

  const { clientsById } = API_ROUTES;
  const { data } = await axios.get<GetClientsResponse>(
    setQueries({
      url: setParams({
        url: clientsById,
        data: {
          id: id ?? "",
        },
      }),
      query,
    }),
    {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    }
  );

  return data;
}
