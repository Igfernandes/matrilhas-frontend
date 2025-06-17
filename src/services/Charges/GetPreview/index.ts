import { API_ROUTES } from "@configs/routes/Api/api";
import { GetChargePreviewRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ChargeShape } from "@type/Charges";

export default function useGetPreview() {
  const { chargesId } = API_ROUTES;
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function getCharge({ reference }: GetChargePreviewRequest) {
    return await axios.get<ChargeShape>(
      setQueries({
        url: chargesId,
        query: { reference },
      })
    );
  }

  return {
    getCharge,
  };
}
