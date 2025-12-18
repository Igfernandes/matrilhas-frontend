import { TourShape } from "@type/Tours";

export type PutTourPayload = Omit<
  TourShape,
  "address" | "owner_id" | "created_at" | "updated_at"
>;
