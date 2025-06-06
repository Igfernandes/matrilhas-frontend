import { useAxios } from "@hooks/useAxios";
import { DeleteFormPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function useDeleteFormService() {
  const { axios } = useAxios();
  const { forms } = API_ROUTES;

  async function deleteForm({ id }: DeleteFormPayload) {
    return axios.delete(`${forms}/${id}`);
  }

  return {
    deleteForm,
  };
}
