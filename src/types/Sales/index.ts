import { BaseShape } from "@type/data";

export type SalesShape = BaseShape & {
  id: number;
  name?: string;
  cpf?: string;
  phone?: string;
  birthdate?: string;
  tour_id: number;
  status: "PAID" | "PENDING" | "CANCELED";
  agency?: AgencyData;
  metadata?: Record<string, unknown>;
  client_id?: number;
  bank: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
};

type AgencyData = {
  id: number;
  name: string;
};
