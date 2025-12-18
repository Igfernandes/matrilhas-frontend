import { GetRequestShape } from "@type/service";
import { TourPeriodShape } from "@type/Tours/Period";

export type GetTourPeriodRequest = GetRequestShape & {
  tour_id?: number;
  city?: string;
  state?: string;
  country?: string;
};
export type GetToursPeriodResponse = {
  rows: TourPeriodShape[];
  count: number;
};
