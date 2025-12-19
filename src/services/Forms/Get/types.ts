import { FormShape } from "@type/Forms";
import { GetRequestShape } from "@type/service";

export type GetFormsRequest = GetRequestShape & {
  id?: number;
  name?: string;
  name_contains?: string
  slug?: string;
  description_contains?: string;
  service_id?: number;
  started_at?: string;
  status?: "PUBLISHED" | "DRAFT";
};

export type GetFormsResponse = {
  rows: FormShape[];
  count: number;
};
