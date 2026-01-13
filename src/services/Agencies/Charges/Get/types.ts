import { ChargeShape } from "@type/Charges";
import { GetRequestShape } from "@type/service";

export type GetChargesRequest = GetRequestShape & {
  id?: number;
  charge_id?: number;
  started_at?: string;
};

export type GetChargesResponse = {
  rows: ChargeShape[];
  count: number;
};
