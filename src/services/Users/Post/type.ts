import { UsersShape } from "@type/Users";

export type PostCreateUsersPayload = Pick<UsersShape, "cpf" | "birthdate"> & {
  password: string;
  keyword: string;
};
