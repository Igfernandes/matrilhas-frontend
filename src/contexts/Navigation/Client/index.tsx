import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ClientNavigationContextData, ClientNavigationProps } from "./types";

import { ClientShape } from "@type/Clients";
import useGetClientAuth from "@services/Clients/GetAuth/useGetClient";

export const ClientNavigationContext = createContext(
  {} as ClientNavigationContextData
);

const ClientNavigationProvider = ({ children, client }: ClientNavigationProps) => {
  const [clientAuth, setClientAuth] = useState<ClientShape>(client as ClientShape);
  const { data: clientData } = useGetClientAuth();

  useEffect(() => {
    if (clientData) {
      setClientAuth(clientData);
    }
  }, [clientData]);

  const value = useMemo(
    () => ({
      clientAuth,
    }),
    [clientAuth]
  );

  return (
    <ClientNavigationContext.Provider value={value}>
      {children}
    </ClientNavigationContext.Provider>
  );
};

export default ClientNavigationProvider;
export function useClientNavigationContext() {
  return useContext(ClientNavigationContext);
}
