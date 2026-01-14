import { ReactNode } from "react";
import { AgencyShape } from "@type/Agencies";

export type AgencyNavigationContextData = {
  agencyAuth: AgencyShape;
};

export type AgencyNavigationProps = {
  children: ReactNode;
  agency?: AgencyShape;
};
