import { TourAddressShape } from "@type/Tours/Address";

export type PostToursAddressPayload = Array<Omit<
  TourAddressShape,
  "created_at" | "updated_at"
>>
