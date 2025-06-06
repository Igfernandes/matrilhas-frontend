export type GetPaymentsRequest = {
  id?: number;
  in_ids?: Array<number>;
  payment_id?: string;
  client_id?: number;
  charge_id?: number;
  bank_id?: number;
  status?: "PAID" | "PENDENT" | "CANCELED";
  created_at?: string;
  updated_at?: string;
};
