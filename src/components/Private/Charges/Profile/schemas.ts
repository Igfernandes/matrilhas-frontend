import i18n from "@configs/i18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const ChargeUpdateSchema = z.object({
  title: z.string({ required_error: i18n("Validations.required") }).min(3, {
    message: (i18n("Validations.min_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "3"),
  }),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  type: z.enum(["APPELLANT", "PUNCTUAL"]),
  privacy: z.enum(["PUBLIC", "PRIVATE"]),
  period: z.number({ required_error: i18n("Validations.required") }),
  expired_days: z.number({ required_error: i18n("Validations.required") }),
  started_at: z.string({ required_error: i18n("Validations.required") }),
  amount: optionalNumber(i18n("Validations.required")),
  price: z.number({ required_error: i18n("Validations.required") }),
  promotional_price: z.number({
    required_error: i18n("Validations.required"),
  }),
});

export type ChargeUpdatePayload = z.infer<typeof ChargeUpdateSchema>;
