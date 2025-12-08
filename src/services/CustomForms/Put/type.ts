import { FormShape } from "../../../types/Forms";

export type PutFormPayload = Pick<
  FormShape,
  "id" | "name" | "status" | "components"
> & {
  description?: string | null;
};
