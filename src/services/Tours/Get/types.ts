import { GetRequestShape } from "@type/service";
import { TourShape } from "@type/Tours";

export type GetToursRequest = GetRequestShape & {
  id?: number;
  name?: string;
  title_contains?: string;
  available_at?: string;
  owner_id?: number;
  status?: "PUBLISHED" | "DRAFT" | "ARCHIVED";
};
export type GetToursResponse = {
  rows: TourShape[];
  count: number;
};
