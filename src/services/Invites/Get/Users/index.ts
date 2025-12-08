import { API_ROUTES } from "@configs/routes/Api/api";
import { GetInvitesRequest, GetInvitesResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { inviteUser } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getInvites(request?: GetInvitesRequest) {
    const { ...query } = request ?? {};
    return await axios.get<GetInvitesResponse>(
      setQueries({
        url: setParams({ url: inviteUser }),
        query,
      })
    );
  }

  return {
    getInvites,
  };
}
