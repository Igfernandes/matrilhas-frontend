import { GetRequestShape } from "@type/service";
import { TourRuleShape } from "@type/Tours/Rule";

export type GetTourRulesRequest = GetRequestShape & {
  tour_id?: number;
  type?: "AGE" | "RESIDENCY" | "SLOT";
  expression?: "MAX" | "IN" | "MIN" | "EQ" | "IN" | "NEQ";
  action?: "FREE" | "PRICE" | "LIMIT";
  applies_at?: string;
};
export type GetToursRulesResponse = {
  rows: TourRuleShape[];
  count: number;
};
