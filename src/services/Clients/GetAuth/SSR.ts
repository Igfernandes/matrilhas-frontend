import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { ClientShape } from "@type/Clients";

export async function getClient(token_navigation: string) {
  return axios.get<ClientShape>(`${API_ROUTES.clientsAuth}`, {
    headers: {
      Authorization: `Bearer ${token_navigation}`,
    },
  });
}
