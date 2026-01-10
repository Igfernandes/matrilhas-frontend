export type AgencySocialMediaShape = {
  id: number;
  agency_id: number;
  platform: AgencySocialMediaPlatforms;
  link: string;
  created_at: string;
};

export type AgencySocialMediaPlatforms =
  "FACEBOOK" | "INSTAGRAM" | "TWITTER" | "LINKEDIN" | "WHATSAPP";