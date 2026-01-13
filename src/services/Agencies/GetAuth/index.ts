import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { UserShape } from "../../../types/Users";
import { redirect } from "next/navigation";
import { getCookie } from "cookies-next";

export default function useGetAuth() {
  const { agenciesAuth } = API_ROUTES;
  const { axios } = useAxios();

  async function getAgency() {
    const tokenAccess = getCookie("token_access"); // Substitua com o token real    if(!tokenNavigation)

    if (!tokenAccess) return redirect("/access");

    return axios.get<UserShape>(`${agenciesAuth}`, {
      headers: {
        Authorization: `Bearer ${tokenAccess}`,
      },
    });
  }

  return {
    getAgency,
  };
}
