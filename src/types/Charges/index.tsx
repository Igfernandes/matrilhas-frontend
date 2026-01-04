export type ChargeShape = {
  id: number;
  title: string;
  description?: string;
  status: "ACTIVE" | "INACTIVE";
  type: "APPELLANT" | "PUNCTUAL";
  amount?: number;
  privacy: "PUBLIC" | "PRIVATE";
  period?: number;
  reference: string;
  expired_days?: number;
  price: number;
  promotional_price?: number;
  clients?: Array<ClientsData>;
  agencies?: Array<AgencyData>;
  started_at?: string;
  created_at?: string;
  updated_at?: string;
};

export type ClientsData = {
  id: number;
  name: string;
};

export type AgencyData = {
  id: number;
  name: string;
};

export type ChargeType = "APPELLANT" | "PUNCTUAL";
