export type ServicesShape = {
  id: number;
  name: string;
  description?: string;
  stock: number;
  reservations: number;
  type: "APPELLANT" | "PUNCTUAL";
  status: "ACTIVE" | "INACTIVE";
  privacy: "PUBLIC" | "PRIVACY";
  created_at: string;
  updated_at: string;
};
