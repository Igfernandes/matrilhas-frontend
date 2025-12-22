import { GetRequestShape } from "@type/service";
import { TourPreviewShape } from "@type/Tours";

export type GetToursPreviewRequest = GetRequestShape & {
  id?: number;
  agency_id?: number;
  slug?: string;
  available_at?: string;
};
export type GetToursPreviewResponse = {
  rows: Array<TourPreviewShape>;
  count: number;
};
