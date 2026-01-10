import { AgencyShape } from "@type/Agencies";
import { AgencyAddressShape } from "@type/Agencies/Address";
import { AgencySocialMediaShape } from "@type/Agencies/SocialMedia";

export type PutAgencyPayload = Omit<
  AgencyShape,
  "address" | "social_media" | "created_at" | "updated_at"
> & {
  address?: Omit<AgencyAddressShape, "agency_id" | "created_at" | "updated_at">;
  social_media?: Omit<
    AgencySocialMediaShape,
     "id" | "agency_id" | "created_at" | "updated_at"
  >[];
};
