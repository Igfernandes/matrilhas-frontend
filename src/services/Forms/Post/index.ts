import { useAxios } from "@hooks/useAxios";
import { PostCreateFormPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostFormService() {
  const { axios } = useAxios();
  const { formFills } = API_ROUTES;

  async function postForm(payload: PostCreateFormPayload) {
    return axios.post(formFills, payload);
  }
  return {
    postForm,
  };
}
