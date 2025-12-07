import { GetRequestShape } from "@type/service";
import { UserShape } from "@type/Users";

export type GetUserRequest = GetRequestShape & {
  id?: number;
  current?: boolean;
};

export type GetUsersRequest = GetRequestShape & {
  name?: string;
  name_contains?: string;
  id?: number;
  current?: boolean;
  birthdate?: string;
};

export type GetUsersResponse = {
  rows: UserShape[];
  count: number;
};
