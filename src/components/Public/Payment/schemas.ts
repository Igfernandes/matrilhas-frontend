import i18n from "@configs/i18n";
import { z } from "zod";

export const paymentFormSchema = z.object({
  amounts: z.array(
    z.string({ required_error: i18n("errors.fields.required") })
  ),
  email: z
    .string({ required_error: i18n("errors.fields.required") })
    .email({ message: i18n("errors.fields.invalid_email") }),
  cpf: z.string({ required_error: i18n("errors.fields.required") }),
  phone: z.string({ required_error: i18n("errors.fields.required") }),
  name: z.string({ required_error: i18n("errors.fields.required") }),
});

export type PaymentPayload = z.infer<typeof paymentFormSchema>;
