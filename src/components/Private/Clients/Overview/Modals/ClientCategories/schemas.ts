import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const ClientCategoryModalSchema = (t: TFunction) =>
  z.object({
    category: z.string({ required_error: t("Validations.required") }),
  });

export type ClientCategoryPayload = z.infer<
  ReturnType<typeof ClientCategoryModalSchema>
>;
