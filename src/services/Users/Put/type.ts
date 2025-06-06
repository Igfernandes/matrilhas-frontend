import { UsersShape } from "@type/Users";

export type PutUsersPayload = Pick<UsersShape, "id" | "name" | "phone"> & {
  email?: string;
  birthdate?: string;
};
