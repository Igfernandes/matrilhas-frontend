import { useSalesContext } from "@components/Public/Sales/context";
import { SalesPayload } from "@components/Public/Sales/salesSchemas";
import usePostSaleResume from "@services/Sales/postResume/usePost";
import dayjs from "dayjs";
import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export function useResume() {
  const { tour } = useSalesContext();
  const { mutateAsync: postResume, data } = usePostSaleResume();
  const { getValues } = useFormContext();

  const resume = useMemo(() => {
    return data?.resume;
  }, [data]);
  const isClient = useMemo(() => {
    return data?.is_client;
  }, [data]);

  useEffect(() => {
    if (!tour) return;

    const payload = (getValues() ?? {}) as SalesPayload;

    if (!payload.name || !payload.cpf || !payload.birthdate) return;

    postResume({
      ...payload,
      dependents: payload.dependents?.map((dependent) => ({
        name: dependent.name,
        cpf: dependent.cpf,
        birthdate: dayjs(dependent.birthdate, "DD/MM/YYYY").format(
          "YYYY-MM-DD"
        ),
      })),
      tour_id: tour?.id,
    });
  }, [postResume, getValues, tour]);

  return {
    resume,
    isClient,
  };
}
