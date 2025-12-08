import { ClientShape } from "@type/Clients";
import { GetRequestShape } from "@type/service";

export type GetClientsRequest = GetRequestShape & {
  id?: number;
  name?: string;
  name_contains?: string;
  phone_contains?: string;
  phone?: string;
  email?: string;
  category?: CategoryData;
  birthdate?: string;
  status?: "ACTIVE" | "INACTIVE";
  description_contains?: string;
};

export type GetClientsResponse = {
  rows: ClientShape[];
  count: number;
};
export type CategoryData = {
  id: number;
  name: string;
};
