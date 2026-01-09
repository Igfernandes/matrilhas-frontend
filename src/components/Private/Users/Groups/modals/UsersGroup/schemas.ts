import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const GroupModalSchema = (t: TFunction) =>
  z.object({
    name: z
      .string({ required_error: t("Validations.required") })
      .min(3, {
        message: t("Validations.min_length", {
          field: t("Words.name"),
          length: "3",
        }) as string,
      })
      .max(100, {
        message: t("Validations.max_length", {
          field: t("Words.name"),
          length: "100",
        }) as string,
      }),
    permissions: z.array(
      z
        .string({ required_error: t("Validations.required") })
        .or(z.number())
        .or(z.boolean())
    ),
  });

export type UsersGroupPayload = z.infer<ReturnType<typeof GroupModalSchema>>;
