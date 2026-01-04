import i18n from "@configs/i18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const ChargeSchema = z.object({
  title: z.string({ required_error: i18n("Validations.required") }),
  type: z.enum(["APPELLANT", "PUNCTUAL"]),
  privacy: z.enum(["PUBLIC", "PRIVATE"]),
  client_ids: z
    .preprocess((value) => {
      if (!Array.isArray(value)) return [];

      return value.map((v) => Number(v)).filter((v) => Number.isInteger(v));
    }, z.array(z.number().int()))
    .optional(),
  agency_ids: z
    .preprocess((value) => {
      if (!Array.isArray(value)) return [];

      return value.map((v) => Number(v)).filter((v) => Number.isInteger(v));
    }, z.array(z.number().int()))
    .optional(),
  period: z.string({ required_error: i18n("Validations.required") }).optional(),
  amount: optionalNumber(i18n("Validations.required")),
  price: z.number({ required_error: i18n("Validations.required") }),
  started_at: z
    .string({ required_error: i18n("Validations.required") })
    .optional(),
  expired_days: z
    .number({ required_error: i18n("Validations.required") })
    .optional(),
  promotional_price: z.number({
    required_error: i18n("Validations.required"),
  }),
});

export type ChargesPayload = z.infer<typeof ChargeSchema>;
