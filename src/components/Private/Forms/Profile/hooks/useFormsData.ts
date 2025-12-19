import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import useGetForms from "@services/Forms/Get/useGetForms";
import { useMemo } from "react";

export function useFormsData() {
  const { rows: formsData } = useGetForms();
  const { data: categories } = useGetCategories();
  const forms = useMemo(() => formsData, [formsData]);

  return {
    forms,
    categories,
  };
}
