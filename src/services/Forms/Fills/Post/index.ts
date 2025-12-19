import { useAxios } from "@hooks/useAxios";
import { PostCreateFormPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostFormService() {
  const { axios } = useAxios();
  const { formFills } = API_ROUTES;

  async function postForm({ payload, csrf }: PostCreateFormPayload) {
    return axios.post(formFills, payload, {
      headers: {
        "X-CSRF-TOKEN": csrf.csrf_hash,
      },
    });
  }
  return {
    postForm,
  };
}
