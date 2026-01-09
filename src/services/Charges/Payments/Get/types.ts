import { PaymentShape } from "@type/Payments";
import { GetRequestShape } from "@type/service";

export type GetPaymentsRequest = GetRequestShape & {
  payment_id?: string;
  charge_id?: number;
};

export type GetPaymentsResponse = {
  rows: Array<PaymentShape>;
  count: number;
};
