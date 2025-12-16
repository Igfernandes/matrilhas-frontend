import i18n from "@configs/i18n";
import { REGEXES } from "@constants/regexes";
import { z } from "zod";

export const AgencyProfileSchema = z.object({
  id: z.number({ required_error: i18n("Validations.required") }).optional(),
  name: z.string({ required_error: i18n("Validations.required") }).min(3, {
    message: (i18n("Validations.min_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "3"),
  }),
  status: z.enum(["ACTIVE", "INACTIVE"], {
    required_error: i18n("Validations.required"),
  }).default("ACTIVE"),
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
  describe: z.string({ required_error: i18n("Validations.required") }).optional().nullable(),
  website: z.string({ required_error: i18n("Validations.required") }).optional(),
  logotype: z.string({ required_error: i18n("Validations.required") }).optional(),
  address: z.object({
    country: z.string({ required_error: i18n("Validations.required") }),
    state: z.string({ required_error: i18n("Validations.required") }),
    city: z.string({ required_error: i18n("Validations.required") }),
    zipcode: z.string({ required_error: i18n("Validations.required") }),
    number: z.string({ required_error: i18n("Validations.required") }),
    complement: z.string({ required_error: i18n("Validations.required") }),
  }),
  social_media: z
    .array(
      z.object({
        platform: z.enum(["FACEBOOK", "INSTAGRAM", "TWITTER", "LINKEDIN", "WHATSAPP"], { required_error: i18n("Validations.required") }),
        link: z.string({ required_error: i18n("Validations.required") }),
      })
    )
    .optional(),
});

export type AgencyProfilePayload = z.infer<typeof AgencyProfileSchema>;
