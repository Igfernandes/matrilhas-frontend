import { AgencyAddressShape } from "@type/Agencies/Address";

export type PatchAgencyAddressPayload = Omit<
  AgencyAddressShape,
  "created_at" | "updated_at"
>;
