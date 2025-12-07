import { API_ROUTES } from "@configs/routes/Api/api";
import { GetFormsRequest, GetFormsResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { forms } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getForms(
    request?: GetFormsRequest
  ): Promise<GetFormsResponse> {
    const { id, ...query } = request ?? {};

    const { data } = await axios.get<GetFormsResponse>(
      setQueries({
        url: setParams({
          url: forms,
          data: {
            id,
          },
        }),
        query,
      })
    );
    return data;
  }

  return {
    getForms,
  };
}
