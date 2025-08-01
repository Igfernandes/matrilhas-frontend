import useGetServices from "@services/Services/Get/useGetServices";
import { ServicesShape } from "@type/Services";

export function useServicesData() {
  const { data: services } = useGetServices();

  return {
    services: services as Array<ServicesShape>,
  };
}
