export type ChargeShape = {
  id: number;
  title: string;
  description?: string;
  status: "ACTIVE" | "INACTIVE";
  service_id?: number;
  type: "APPELLANT" | "PUNCTUAL";
  amount: number;
  privacy: "PUBLIC" | "PRIVATE";
  reference: string;
  expired_at?: string;
  price: number;
  promotional_price?: number;
  service?: ServiceData;
  clients?: Array<ClientsData>;
  created_at?: string;
  updated_at?: string;
};

export type ClientsData = {
  id: number;
  name: string;
};

export type ServiceData = {
  id: number;
  name: string;
};
