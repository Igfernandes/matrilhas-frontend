import { FormShape } from "../../../types/Forms";

export type PostCreateFormPayload = Pick<
  FormShape,
  "name" | "status" | "components"
>;
