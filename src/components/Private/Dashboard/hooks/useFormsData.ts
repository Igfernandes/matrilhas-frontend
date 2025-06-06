import useGetForms from "@services/CustomForms/Get/useGetForms";

export function useFormsData() {
  const { data: forms } = useGetForms();

  return {
    forms,
  };
}
