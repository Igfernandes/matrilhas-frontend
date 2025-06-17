import { API_ROUTES } from "@configs/routes/Api/api";
import { GetFillFieldsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { FormFillField } from "@type/Forms/FormsFill";

export default function useGet() {
  const { formsFillsFields } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getForms({ formId, ref }: GetFillFieldsRequest) {
    return await axios.get<Array<FormFillField[]>>(
      setQueries({
        url: setParams({
          url: formsFillsFields,
          data: {
            id: formId,
            package: ref ?? "",
          },
        }),
      })
    );
  }

  return {
    getForms,
  };
}
