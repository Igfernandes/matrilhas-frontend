import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { UserShape } from "@type/Users";

export async function getUserAuth(token_navigation: string) {
  return axios.get<UserShape>(`${API_ROUTES.users}?current=true`, {
    headers: {
      Authorization: `Bearer ${token_navigation}`,
    },
  });
}
