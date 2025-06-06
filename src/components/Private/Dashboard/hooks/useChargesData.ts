import useGetCharges from "@services/Charges/Get/useGetCharges";

export function useChargesData() {
  const { data: charges } = useGetCharges();

  return {
    charges,
  };
}
