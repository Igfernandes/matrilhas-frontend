import { AgencyShape } from "@type/Agencies";

export type GetAgenciesPreviewRequest = {
  cnpj?: string;
  cnpj_contains?: string;
  name_contains?: string;
};
export type GetAgenciesPreviewResponse = {
  rows: Omit<AgencyShape, "password" | "status" | "updated_at">[];
  count: number;
};
