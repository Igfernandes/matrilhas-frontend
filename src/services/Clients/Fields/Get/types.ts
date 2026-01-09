import { FieldsShape } from "@type/Fields";

export type GetClientsFieldsRequest = {
  id?: number;
  fieldId?: number;
  name?: string;
  name_contains?: string;
  phone_contains?: string;
  phone?: string;
  email?: string;
  birthdate?: string;
  status?: "ACTIVE" | "INACTIVE";
  description_contains?: string;
};

export type GetClientsFieldsResponse = {
  rows: Array<FieldsShape>;
  count: number;
};
