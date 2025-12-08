import { UserShape } from "@type/Users";

export type PostCreateUsersPayload = Pick<UserShape, "cpf" | "birthdate"> & {
  password: string;
  keyword: string;
};
