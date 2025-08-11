import { CategoryData } from "@services/Clients/Get/types";
import { ChargeShape } from "@type/Charges";
import { ClientShape } from "@type/Clients";
import { FormsShape } from "@type/Forms";
import { ServicesShape } from "@type/Services";
import { UsersShape } from "@type/Users";

export type CategoryStaticData = {
  clients?: number;
} & CategoryData;

export type ClientsByDDDStaticData = {
  ddd: string;
  amount: number;
};

export type ManagerEntitiesProps = {
  clients?: Array<ClientShape>;
  services?: Array<ServicesShape>;
  users?: Array<UsersShape>;
  forms?: Array<FormsShape>;
  charges?: Array<ChargeShape>;
};
export type DashboardPageProps = {
  user: UsersShape;
};
