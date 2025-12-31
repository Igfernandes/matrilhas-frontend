export type TourRuleShape = {
  tour_id: number;
  type: "AGE" | "RESIDENCY" | "SLOT";
  expression: "MAX" | "IN" | "MIN" | "EQ" | "IN" | "NEQ";
  value?: Record<string, string>;
  amount?: number;
  price?: number;
  action?: "FREE" | "PRICE" | "LIMIT";
  applies_at?: string | null;
  created_at: string;
  updated_at: string;
};
export type TourRuleAction = "FREE" | "PRICE" | "LIMIT";