import { GetRequestShape } from "@type/service";
import { TourAgencyShape } from "@type/Tours/Agency";

export type GetTourAgenciesRequest = GetRequestShape & {
  tour_id?: number;
};
export type GetToursAgenciesResponse = {
  rows: TourAgencyShape[];
  count: number;
};
