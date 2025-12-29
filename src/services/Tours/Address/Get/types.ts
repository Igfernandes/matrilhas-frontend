import { GetRequestShape } from "@type/service";
import { TourAddressShape } from "@type/Tours/Address";

export type GetTourAddressRequest = GetRequestShape & {
  tour_id?: number;
  city?: string;
  state?: string;
  country?: string;
  type?: "ORIGIN" | "DESTINY";
};
export type GetToursAddressResponse = {
  rows: TourAddressShape[];
  count: number;
};
