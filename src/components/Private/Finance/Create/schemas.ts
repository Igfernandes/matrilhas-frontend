import i18n from "@configs/i18n";
import { z } from "zod";

export const ChargeSchema = z.object({
  title: z.string({ required_error: i18n("errors.fields.required") }),
  service_id: z.string({ required_error: i18n("errors.fields.required") }),
  type: z.enum(["APPELLANT", "PUNCTUAL"]),
  privacy: z.enum(["PUBLIC", "PRIVATE"]),
  amount: z.string({ required_error: i18n("errors.fields.required") }),
  price: z.string({ required_error: i18n("errors.fields.required") }),
  expired_at: z.string({ required_error: i18n("errors.fields.required") }),
  promotional_price: z.string({
    required_error: i18n("errors.fields.required"),
  }),
});

export type ChargesPayload = z.infer<typeof ChargeSchema>;
