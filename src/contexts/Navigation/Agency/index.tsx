import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AgencyNavigationContextData, AgencyNavigationProps } from "./types";
import { AgencyShape } from "@type/Agencies";
import useGetAgencyAuth from "@services/Agencies/GetAuth/useGetAgencies";

export const AgencyNavigationContext = createContext(
  {} as AgencyNavigationContextData
);

const AgencyNavigationProvider = ({ children, agency }: AgencyNavigationProps) => {
  const [agencyAuth, setAgencyAuth] = useState<AgencyShape>(agency as AgencyShape);
  const { data: agencyData } = useGetAgencyAuth();

  useEffect(() => {
    if (agencyData) {
      setAgencyAuth(agencyData);
    }
  }, [agencyData]);

  const value = useMemo(
    () => ({
      agencyAuth,
    }),
    [agencyAuth]
  );

  return (
    <AgencyNavigationContext.Provider value={value}>
      {children}
    </AgencyNavigationContext.Provider>
  );
};

export default AgencyNavigationProvider;
export function useAgencyNavigationContext() {
  return useContext(AgencyNavigationContext);
}
