import { TourAddressShape } from "@type/Tours/Address";

export type PostToursAddressPayload = Array<
  Omit<TourAddressShape, "id" | "created_at" | "updated_at">
>;
