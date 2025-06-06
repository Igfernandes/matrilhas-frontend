import { UsersShape } from "@type/Users/Users";

export type PutUsersPayload = Pick<UsersShape, "id" | "name" | "phone"> & {
  email?: string;
  birthdate?: string;
};
