import { UserShape } from "@type/Users";

export type PutUsersPayload = Pick<UserShape, "id" | "name" | "phone"> & {
  email?: string;
  birthdate?: string;
};
