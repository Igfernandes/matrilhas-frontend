import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { redirect } from "next/navigation";
import { getCookie } from "cookies-next";
import { ClientShape } from "@type/Clients";

export default function useGetAuth() {
  const { clientsAuth } = API_ROUTES;
  const { axios } = useAxios();

  async function getClient() {
    const tokenAccess = getCookie("token_access"); // Substitua com o token real    if(!tokenNavigation)

    if (!tokenAccess) return redirect("/access");

    return axios.get<ClientShape>(`${clientsAuth}`, {
      headers: {
        Authorization: `Bearer ${tokenAccess}`,
      },
    });
  }

  return {
    getClient,
  };
}
