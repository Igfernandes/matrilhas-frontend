import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { CSRFShape } from "./types";

export async function getCSRF(): Promise<CSRFShape> {
  const { csrf } = API_ROUTES;
  const { data } = await axios.post<string>(csrf);

  return JSON.parse(data);
}
