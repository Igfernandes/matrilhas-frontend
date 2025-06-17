import useGetServices from "@services/Services/Get/useGetServices";

export function useServicesData() {
  const { data: services } = useGetServices();

  return {
    services,
  };
}
