import { UsersGroupShape } from "@type/Users/UsersGroup";

export type GetGroupsRequest = {
  id?: number;
  in_ids?: Array<number>;
  name?: string;
  name_contains?: string;
  status?: "ACTIVE" | "INACTIVE";
};

export type GetGroupsResponse = {
  rows: Array<UsersGroupShape>;
  count: number;
};
