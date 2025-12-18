import { TourRuleShape } from "@type/Tours/Rule";

export type PostToursRulePayload = Array<Omit<
  TourRuleShape,
  "created_at" | "updated_at"
>>
