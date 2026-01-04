import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetChargePreviewRequest, GetChargePreviewResponse } from "./types";

export async function getCharge(
  request?: GetChargePreviewRequest
): Promise<GetChargePreviewResponse> {
  const query = request ?? {};

  const { chargesPreview } = API_ROUTES;

  const { data, ...rest } = await axios.get<GetChargePreviewResponse>(
    setQueries({
      url: chargesPreview,
      query,
    })
  );

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
