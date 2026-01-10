export type TourPeriodShape = {
  tour_id: number;
  model: TourPeriodModelOptions;
  frequency: TourPeriodFrequencyOptions;
  by_weekday?: string[];
  by_monthday?: number[];
  by_month?: number[];
  by_datetime?: string[];
  created_at: string;
  updated_at: string;
};

export type TourPeriodModelOptions = "SALE" | "TOUR";
export type TourPeriodFrequencyOptions =
  | "ONE_TIME"
  | "WEEKLY"
  | "MONTHLY"
  | "YEARLY";
