import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetToursRequest, GetToursResponse } from "./types";

export async function getTours(
  tokenNavigation: string,
  { id, ...request }: GetToursRequest = {} as GetToursRequest,
): Promise<GetToursResponse> {
  const query = request ?? {};

  const { tours } = API_ROUTES;
  const { data } = await axios.get<GetToursResponse>(
    setQueries({
      url: setParams({
        url: tours,
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
