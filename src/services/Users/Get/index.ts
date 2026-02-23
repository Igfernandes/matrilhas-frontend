import { API_ROUTES } from "@configs/routes/Api/api";
import { GetUsersRequest, GetUsersResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { users } = API_ROUTES;
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function getUsers(request?: GetUsersRequest) {
    const query = request ?? {};

    return await axios.get<GetUsersResponse>(
      setQueries({
        url: users,
        query,
      }),
    );
  }
  return {
    getUsers,
  };
}
