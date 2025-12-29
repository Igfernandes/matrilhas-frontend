import i18n from "@configs/i18n";
import { z } from "zod";

export const SalesSchema = z.object({
  name: z
    .string({ required_error: i18n("Validations.required") })
    .min(3, {
      message: i18n("Validations.min_length", {
        field: i18n("Words.title"),
        length: "3",
      }),
    })
    .max(150, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.title"),
        length: "150",
      }),
    }),
  cpf: z.string({ message: i18n("Validations.string") }),
  birthdate: z.string({ message: i18n("Validations.string") }),
  phone: z.string({ message: i18n("Validations.string") }),
  email: z
    .string({ message: i18n("Validations.string") })
    .email(i18n("Validations.email")),
  country: z.string({ required_error: i18n("Validations.required") }),
  state: z.string({ required_error: i18n("Validations.required") }),
  city: z.string({ required_error: i18n("Validations.required") }),
  contacts: z.object({
    name: z.string({ required_error: i18n("Validations.required") }),
    phone: z.string({ message: i18n("Validations.string") }),
    kinship: z.string({ required_error: i18n("Validations.required") }),
  }),
  boarding: z.string({ required_error: i18n("Validations.required") }),
  landing: z.string({ required_error: i18n("Validations.required") }),
  residency: z.string().optional(),
  dependents: z
    .array(
      z.object({
        name: z.string({ required_error: i18n("Validations.required") }),
        cpf: z.string({ required_error: i18n("Validations.required") }),
        birthdate: z.string({ required_error: i18n("Validations.required") }),
      })
    )
    .optional(),
});

export type SalesPayload = z.infer<typeof SalesSchema>;
