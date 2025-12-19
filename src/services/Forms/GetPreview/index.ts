import { API_ROUTES } from "@configs/routes/Api/api";
import { GetFormsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { FormShape } from "@type/Forms";

export default function useGet() {
  const { formPreview } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getForms(request?: GetFormsRequest): Promise<FormShape> {
    const { id, ...query } = request ?? {};

    const { data } = await axios.get<FormShape>(
      setQueries({
        url: setParams({
          url: formPreview,
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
