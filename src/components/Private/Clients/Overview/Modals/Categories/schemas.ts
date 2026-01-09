import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const CategoryModalSchema = (t: TFunction) =>
  z.object({
    categories: z.array(
      z.object({
        id: z.number(),
        value: z.string({ required_error: t("Validations.required") }).min(3, {
          message: t("Validations.min_length", {
            length: "3",
            field: t("Words.category"),
          }) as string,
        }),
      })
    ),
  });

export type CategoryPayload = z.infer<ReturnType<typeof CategoryModalSchema>>;
