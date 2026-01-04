import { PaymentShape } from "@type/Payments";

export type GetPaymentsRequest = {
  payment_id?: string;
  charge_id?: number;
};

export type GetPaymentsResponse = {
  rows: Array<PaymentShape>;
  count: number;
};
