import useGetForms from "@services/CustomForms/Get/useGetForms";
import { FormsShape } from "@type/Forms";
import { useEffect, useState } from "react";

export function useFormsData() {
  const { data: formsData } = useGetForms();
  const [forms, setForms] = useState<Array<FormsShape>>([]);

  useEffect(() => {
    if (!formsData) return;

    setForms(formsData);
  }, [formsData]);

  return {
    forms,
  };
}
