import { ReactNode } from "react";
import { ClientShape } from "@type/Clients";

export type ClientNavigationContextData = {
  clientAuth: ClientShape;
};

export type ClientNavigationProps = {
  children: ReactNode;
  client?: ClientShape;
};
