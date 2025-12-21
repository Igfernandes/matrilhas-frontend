import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetToursRequest, GetToursResponse } from "./types";

export async function getTours(
  tokenNavigation: string,
  { id, ...request }: GetToursRequest = {} as GetToursRequest,
): Promise<GetToursResponse> {
  const query = request ?? {};

  const { toursById } = API_ROUTES;
  const { data } = await axios.get<GetToursResponse>(
    setQueries({
      url: setParams({
        url: toursById,
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
