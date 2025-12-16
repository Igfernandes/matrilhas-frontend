import { AgencyShape } from "@type/Agencies";
import { GetRequestShape } from "@type/service";

export type GetAgenciesRequest = GetRequestShape & {
  id?: number;
  name?: string;
  name_contains?: string;
  cnpj_contains?: string;
  phone?: string;
  email?: string;
  status?: "ACTIVE" | "INACTIVE";
};
export type GetAgenciesResponse = {
  rows: AgencyShape[];
  count: number;
};
