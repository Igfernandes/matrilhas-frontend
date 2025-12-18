export type TourAgencyShape = {
  tour_id: number;
  agency_id: number;
  name: string;
  phone?: string;
  email?: string;
  cnpj: string;
  status: "ACTIVE" | "INACTIVE";
  created_at: string;
};
