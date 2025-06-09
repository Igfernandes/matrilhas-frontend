import i18n from "@configs/i18n";
import { z } from "zod";

export const ChargeSchema = z.object({
  title: z.string({ required_error: i18n("errors.fields.required") }),
  service_id: z.string({ required_error: i18n("errors.fields.required") }),
  type: z.enum(["APPELLANT", "PUNCTUAL"]),
  privacy: z.enum(["PUBLIC", "PRIVATE"]),
  period: z
    .string({ required_error: i18n("errors.fields.required") })
    .optional(),
  amount: z
    .string({ required_error: i18n("errors.fields.required") })
    .optional(),
  price: z.string({ required_error: i18n("errors.fields.required") }),
  started_at: z
    .string({ required_error: i18n("errors.fields.required") })
    .optional(),
  expired_days: z
    .string({ required_error: i18n("errors.fields.required") })
    .optional(),
  promotional_price: z.string({
    required_error: i18n("errors.fields.required"),
  }),
});

export type ChargesPayload = z.infer<typeof ChargeSchema>;
