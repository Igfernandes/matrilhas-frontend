import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { UserShape } from "../../../types/Users";
import { redirect } from "next/navigation";

export default function useGetAuth() {
  const { users } = API_ROUTES;
  const { axios } = useAxios();

  async function getUser(tokenNavigation: string) {
    if(!tokenNavigation)
        return redirect('/login');

    return axios.get<UserShape>(`${users}/?current=true`, {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    });
  }

  return {
    getUser,
  };
}
