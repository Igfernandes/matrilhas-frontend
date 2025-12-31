import { useFormRules } from "@hooks/Forms/useFormRules";
import useGetSalesStatics from "@services/Sales/GetStatics/useGet";
import { SalesStaticsResponse } from "@type/Sales/statics";
import { useCallback, useMemo, useState } from "react";
import { FiltersPayload, FiltersSchema } from "../FiltersSchema";

export function useStatics() {
  const { formMethods, register, handleSubmit } = useFormRules<FiltersPayload>({
    schema: FiltersSchema,
  });
  const [filters, setFilters] = useState({});
  const { data: dataStatics, isPending: isLoading } =
    useGetSalesStatics(filters);

  const statics = useMemo(
    () => dataStatics ?? ({} as SalesStaticsResponse),
    [dataStatics]
  );

  const onSubmit = useCallback((payload: FiltersPayload) => {
    setFilters(payload);
  }, []);

  return {
    statics,
    isLoading,
    formMethods,
    register,
    onSubmit,
    handleSubmit,
  };
}
