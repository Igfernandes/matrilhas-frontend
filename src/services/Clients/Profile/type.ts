import { UserShape } from "@type/Users";

export type PutClientProfilePayload = Pick<UserShape, "id" | "name" | "phone"> & {
  email?: string;
};
