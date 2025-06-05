import { ClientShape } from "../../../types/Clients/client";

export type PutClientPayload = Pick<
  ClientShape,
  "id" | "name" | "email" | "phone" | "birthdate"
>;
