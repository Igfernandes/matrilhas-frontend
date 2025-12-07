import { InvitesShape } from "@type/Invites";
import { GetRequestShape } from "@type/service";

export type GetInvitesRequest = GetRequestShape & {
  email?: string;
  email_contains?: string;
  is_valid?: boolean;
  expired_at?: string;
};

export type GetInvitesResponse = {
  rows: InvitesShape[];
  count: number;
};
