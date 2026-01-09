import { useAxios } from "@hooks/useAxios";
import { PostImportAgencyPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function useImportAgenciesService() {
  const { axios } = useAxios();
  const { agenciesImport } = API_ROUTES;

  async function postImportAgency(payload: PostImportAgencyPayload) {
    const formData = new FormData();

    formData.append("excel", payload.excel[0]);

    return axios.post(agenciesImport, formData);
  }

  return {
    postImportAgency,
  };
}
