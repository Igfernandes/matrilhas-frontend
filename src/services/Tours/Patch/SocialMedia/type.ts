import { AgencySocialMediaShape } from "@type/Agencies/SocialMedia";

export type PatchSocialMediaPayload = {
  agency_id: number;
  social_media: Array<
    Omit<AgencySocialMediaShape, "id" | "agency_id" | "created_at">
  >;
};
