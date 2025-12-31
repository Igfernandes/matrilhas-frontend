import { TourRuleAction, TourRuleShape } from "@type/Tours/Rule";

export type PostToursRulePayload = Array<
  Omit<TourRuleShape, "action" | "created_at" | "updated_at">
> & {
  action?: TourRuleAction;
};
