import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { AgencyShape } from "@type/Agencies";

export async function getAgency(token_navigation: string) {
  return axios.get<AgencyShape>(`${API_ROUTES.agenciesAuth}`, {
    headers: {
      Authorization: `Bearer ${token_navigation}`,
    },
  });
}
