import { JSX } from "react";
import { AgencyShape } from "@type/Agencies";

export type HookAgenciesProps<ClientType> = {
  filter: string;
  handleFilter: (data: ClientType) => boolean;
};

export type TDataAgency = {
  id: React.ReactNode;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  phone: string;
  category: string;
  actions: JSX.Element;
};

export type AgenciesStructProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalAgencyOperationType =
  | "AGENCY"
  | "DELETE"
  | "SHARED"
  | "IMPORT"
  | boolean;

export type AgencyTabOption = "PROFILE" | "ADDRESS" | "SOCIAL_MEDIA";

export type AgencyPageProps = {
  targetAgency: AgencyShape;
};
