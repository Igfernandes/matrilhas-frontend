import { BaseShape } from "@type/data";

export type SaleShape = BaseShape & {
  id: number;
  status: SaleStatus;
  amount: number;
  price: number;
  discount: number;
  currency: "REAL" | "USD" | "EURO";
  reference: string;
  payment_id: string;
  metadata?: Record<string, unknown>;
  tour: Data;
  bank: Data;
  client: Data;
  agency?: Data;
  created_at: string;
  updated_at: string;
};

type Data = {
  id: number;
  name: string;
};

export type SaleStatus = "PAID" | "PENDING" | "CANCELED";
