import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetToursPreviewRequest, GetToursPreviewResponse } from "./types";

export async function getToursPreview(
  request?: GetToursPreviewRequest
): Promise<GetToursPreviewResponse> {
  const query = request ?? {};

  const { toursPreview } = API_ROUTES;
  const { data, ...rest } = await axios.get<GetToursPreviewResponse>(
    setQueries({
      url: toursPreview,
      query,
    })
  );

  return {
    rows: data.rows ?? [],
    count: data.count ?? 0,
    ...rest,
  };
}
