export type TourPeriodShape = {
  tour_id: number;
  model: "SALE" | "TOUR";
  frequency?: "ONE_TIME" | "WEEKLY" | "MONTHLY" | "YEARLY";
  by_weekday?: string[];
  by_monthday?: number[];
  by_month?: number[];
  by_datetime?: string[];
  created_at: string;
  updated_at: string;
};
