export type PaymentShape = {
  id: number;
  payment_id: string;
  client_id: number;
  client: DataProps;
  charge_id: number;
  bank_id: number;
  bank: DataProps;
  paid_amount: number;
  status: "PAID" | "PENDENT" | "CANCELED";
  created_at: string;
  updated_at: string;
};

type DataProps = {
  id: number;
  name: string;
};
