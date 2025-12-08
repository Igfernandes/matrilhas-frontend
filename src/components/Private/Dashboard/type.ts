import { CategoryData } from "@services/Clients/Get/types";
import { ChargeShape } from "@type/Charges";
import { ClientShape } from "@type/Clients";
import { FormShape } from "@type/Forms";
import { UserShape } from "@type/Users";

export type CategoryStaticData = {
  clients?: number;
} & CategoryData;

export type ClientsByDDDStaticData = {
  ddd: string;
  amount: number;
};

export type ManagerProps = {
  clients: number;
  users: number;
  forms: number;
  charges: number;
  isLoading?: boolean;
};

export type ManagerEntitiesProps = {
  clients: Array<ClientShape>;
  users: Array<UserShape>;
  forms: Array<FormShape>;
  charges: Array<ChargeShape>;
};
export type DashboardPageProps = {
  user: UserShape;
};
