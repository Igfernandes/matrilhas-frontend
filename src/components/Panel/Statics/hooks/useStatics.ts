import { useFormRules } from "@hooks/Forms/useFormRules";
import { SalesStaticsResponse } from "@type/Sales/statics";
import { useCallback, useMemo, useState } from "react";
import { FiltersPayload, FiltersSchema } from "../FiltersSchema";
import useGetAgenciesSalesStatics from "@services/Agencies/Sales/GetStatics/useGet";

export function useStatics() {
  const { formMethods, register, handleSubmit } = useFormRules<FiltersPayload>({
    schema: FiltersSchema,
  });
  const [filters, setFilters] = useState({});
  const { data: dataStatics, isPending: isLoading } =
    useGetAgenciesSalesStatics(filters);

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
