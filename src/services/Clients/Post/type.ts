import { ClientShape } from "../../../types/Clients";

export type PostCreateClientPayload = Pick<
  ClientShape,
  "name" | "email" | "phone" | "birthdate"
>;
