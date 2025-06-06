import { FormsShape } from "../../../types/Forms";

export type PutFormPayload = Pick<
  FormsShape,
  "id" | "name" | "status" | "components" | "description"
>;
