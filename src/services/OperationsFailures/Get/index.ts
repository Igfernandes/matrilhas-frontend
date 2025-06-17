import { API_ROUTES } from "@configs/routes/Api/api";
import { GetOperationsFailuresRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { OperationFailureShape } from "@type/OperationsFailures";

export default function useGet() {
  const { operationsFailures } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getOperationsFailures(request?: GetOperationsFailuresRequest) {
    const { id, ...query } = request ?? {};
    return await axios.get<OperationFailureShape[]>(
      setQueries({
        url: setParams({
          url: operationsFailures,
          data: {
            id: id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getOperationsFailures,
  };
}
