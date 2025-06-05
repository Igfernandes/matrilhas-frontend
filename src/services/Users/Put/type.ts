import { UsersShape } from "@type/Users/Users";

export type PutUsersPayload = Pick<
  UsersShape,
  "id" | "name" | "email" | "phone"
>;
