import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetFormsRequest } from "./types";
import { FormShape } from "@type/Forms";

export async function getFormPreview(
  request?: GetFormsRequest
): Promise<FormShape> {
  const { id, ...query } = request ?? {};

  const { formPreview } = API_ROUTES;
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
