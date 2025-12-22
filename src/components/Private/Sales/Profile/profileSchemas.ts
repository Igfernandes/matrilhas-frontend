import i18n from "@configs/i18n";
import { REGEXES } from "@constants/regexes";
import { z } from "zod";

export const AgencyProfileSchema = z.object({
  id: z.number({ required_error: i18n("Validations.required") }).optional(),
  name: z
    .string({ required_error: i18n("Validations.required") })
    .min(3, {
      message: i18n("Validations.min_length", {
        field: i18n("Words.name"),
        length: "3",
      }),
    })
    .max(150, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.name"),
        length: "150",
      }),
    }),
  status: z
    .enum(["ACTIVE", "INACTIVE"], {
      required_error: i18n("Validations.required"),
    })
    .default("ACTIVE"),
  email: z
    .string({ required_error: i18n("Validations.required") })
    .optional() // Permite que o campo seja omitido ou vazio
    .or(z.literal("")) // Permite string vazia ("")
    .refine((email) => email === "" || REGEXES.EMAIL.test(`${email}`), {
      message: i18n("Validations.email"),
    }),
  phone: z.string({ required_error: i18n("Validations.required") }),
  cnpj: z
    .string({ required_error: i18n("Validations.required") })
    .nonempty(i18n("Validations.required")),
  describe: z
    .string({ required_error: i18n("Validations.required") })
    .max(1000, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.description"),
        length: "1000",
      }),
    })
    .optional(),
  website: z
    .string({ required_error: i18n("Validations.required") })
    .max(250, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.website"),
        length: "250",
      }),
    })
    .optional(),
  logotype: z
    .string({ required_error: i18n("Validations.required") })
    .optional(),
  address: z.object({
    country: z.string({ required_error: i18n("Validations.required") }),
    state: z.string({ required_error: i18n("Validations.required") }),
    city: z.string({ required_error: i18n("Validations.required") }),
    zip_code: z.string({ required_error: i18n("Validations.required") }),
    number: z.string({ required_error: i18n("Validations.required") }),
    complement: z.string({ required_error: i18n("Validations.required") }),
  }),
  social_media: z
    .array(
      z.object({
        platform: z.enum(
          ["FACEBOOK", "INSTAGRAM", "TWITTER", "LINKEDIN", "WHATSAPP"],
          { required_error: i18n("Validations.required") }
        ),
        link: z.string({ required_error: i18n("Validations.required") }),
      })
    )
    .optional(),
});

export type AgencyProfilePayload = z.infer<typeof AgencyProfileSchema>;
