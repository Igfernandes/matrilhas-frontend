import i18n from "@configs/i18n";
import { z } from "zod";

export const ChargeUpdateSchema = z.object({
  title: z.string({ required_error: i18n("errors.fields.required") }).min(3, {
    message: (i18n("errors.fields.min_length") as string)
      .replace("${field}", i18n("words.name"))
      .replace("${length}", "3"),
  }),
  service_id: z
    .string({ required_error: i18n("errors.fields.required") })
    .optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  type: z.enum(["APPELLANT", "PUNCTUAL"]),
  privacy: z.enum(["PUBLIC", "PRIVATE"]),
  expired_at: z
    .string({ required_error: i18n("errors.fields.required") })
    .or(z.literal("")),
  amount: z.string({ required_error: i18n("errors.fields.required") }),
  price: z.string({ required_error: i18n("errors.fields.required") }),
  promotional_price: z.string({
    required_error: i18n("errors.fields.required"),
  }),
});

export type ChargeUpdatePayload = z.infer<typeof ChargeUpdateSchema>;
