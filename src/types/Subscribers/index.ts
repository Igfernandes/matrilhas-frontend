import { BaseShape } from "@type/data";
import { AgencyAddressShape } from "./Address";
import { AgencySocialMediaShape } from "./SocialMedia";

export type AgencyShape = BaseShape & {
  id: number;
  name: string;
  logotype?: string;
  phone?: string;
  cnpj: string;
  status: "ACTIVE" | "INACTIVE";
  social_media?: AgencySocialMediaShape[];
  email?: string;
  describe?: string;
  address?: AgencyAddressShape;
  created_at: string;
  updated_at: string;
};
