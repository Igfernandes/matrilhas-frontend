import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import useGetForms from "@services/CustomForms/Get/useGetForms";
import { FormShape } from "@type/Forms";
import { useEffect, useState } from "react";

export function useFormsData() {
  const { rows: formsData } = useGetForms();
  const { data: categories } = useGetCategories();

  const [forms, setForms] = useState<Array<FormShape>>([]);

  useEffect(() => {
    if (!formsData) return;

    setForms(formsData);
  }, [formsData]);

  return {
    forms,
    categories,
  };
}
