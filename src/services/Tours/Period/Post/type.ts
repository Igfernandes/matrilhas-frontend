import { TourPeriodShape } from "@type/Tours/Period";

export type PostToursPeriodPayload = Array<
  Omit<TourPeriodShape, "created_at" | "updated_at">
>;
