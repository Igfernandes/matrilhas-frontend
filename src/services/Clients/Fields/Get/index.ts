import { API_ROUTES } from "@configs/routes/Api/api";
import { GetClientsFieldsRequest, GetClientsFieldsResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { clientsFields } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getClientsFields(payload?: GetClientsFieldsRequest) {
    const { id, fieldId, ...query } = payload ?? {};

    return await axios.get<GetClientsFieldsResponse>(
      setQueries({
        url: setParams({
          url: clientsFields,
          data: {
            id: id ?? "",
            fieldId: fieldId ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getClientsFields,
  };
}
