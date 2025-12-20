import i18n from "@configs/i18n";
import { z } from "zod";

export const UsersModalSchema = z.object({
  id: z.number().nullable().optional(),
  group: z.array(z.string({ required_error: i18n("Validations.required") })),
  name: z
    .string({ required_error: i18n("Validations.required") })
    .min(3, {
      message: i18n("Validations.min_length", {
        field: i18n("Words.name"),
        length: "3",
      }) as string,
    })
    .max(100, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.name"),
        length: "100",
      }) as string,
    }),
  email: z
    .string({ required_error: i18n("Validations.required") })
    .max(250, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.email"),
        length: "250",
      }) as string,
    })
    .email({ message: i18n("Validations.email") }),
  phone: z.string({ required_error: i18n("Validations.required") }).max(15, {
    message: i18n("Validations.max_length", {
      field: i18n("Words.phone"),
      length: "15",
    }) as string,
  }),
});

export type UsersPayload = z.infer<typeof UsersModalSchema>;
