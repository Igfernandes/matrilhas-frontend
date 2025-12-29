export type TourAddressShape = {
  id: number;
  tour_id: number;
  type: "DESTINY" | "ORIGIN";
  complement?: string;
  city?: string;
  state?: string;
  country?: string;
  created_at: string;
  updated_at: string;
};
