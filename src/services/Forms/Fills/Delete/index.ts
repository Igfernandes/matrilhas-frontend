import { useAxios } from "@hooks/useAxios";
import { DeleteFillFieldPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function useDeleteFillFieldService() {
  const { axios } = useAxios();
  const { formsFillsFields } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteFillFields({ form_id, ref }: DeleteFillFieldPayload) {
    return axios.delete(
      setParams({
        url: formsFillsFields,
        data: {
          id: form_id,
          package: ref,
        },
      })
    );
  }

  return {
    deleteFillFields,
  };
}
