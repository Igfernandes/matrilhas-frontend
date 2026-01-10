import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const UsersModalSchema = (t: TFunction) => z.object({
  id: z.number().nullable().optional(),
  group: z.array(z.string({ required_error: t("Validations.required") })),
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
  email: z
    .string({ required_error: t("Validations.required") })
    .max(250, {
      message: t("Validations.max_length", {
        field: t("Words.email"),
        length: "250",
      }) as string,
    })
    .email({ message: t("Validations.email") }),
  phone: z.string({ required_error: t("Validations.required") }).max(20, {
    message: t("Validations.max_length", {
      field: t("Words.phone"),
      length: "20",
    }) as string,
  }),
});

export type UsersPayload = z.infer<ReturnType<typeof UsersModalSchema>>;
