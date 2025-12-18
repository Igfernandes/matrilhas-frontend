import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostToursRulePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostToursRuleService() {
  const { axios } = useAxios();
  const { toursRules } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postCreateRule(payload: PostToursRulePayload) {
    return axios.post(
      setParams({
        url: toursRules,
        data: { id: payload?.[0]?.tour_id ?? "" },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postCreateRule,
  };
}
