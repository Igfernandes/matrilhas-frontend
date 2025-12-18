import { TourShape } from "@type/Tours";
import { TourAddressShape } from "@type/Tours/Address";

export type PostToursPayload = Omit<
  TourShape,
  "id" | "created_at" | "updated_at"
> & {
  address?: Omit<TourAddressShape, "agency_id" | "created_at" | "updated_at">;

};
