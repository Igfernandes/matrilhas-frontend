import useGetServices from "@services/Services/Get/useGetServices";
import { ServicesShape } from "@type/Services";
import { useEffect, useState } from "react";

export function useDefinitions() {
  const { data: servicesData } = useGetServices({ status: "ACTIVE" });

  const [services, setServices] = useState<Array<ServicesShape>>([]);

  useEffect(() => {
    if (!servicesData) return;

    setServices(servicesData);
  }, [servicesData]);

  return {
    services,
  };
}
