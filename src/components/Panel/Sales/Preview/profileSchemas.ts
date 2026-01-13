import i18n from "@configs/i18n";
import { z } from "zod";

export const AgencyProfileSchema = z.object({
  id: z.number({ required_error: i18n("Validations.required") }),
  status: z
    .enum(["PAID", "PENDING", "CANCELED"], {
      required_error: i18n("Validations.required"),
    })
    .default("PENDING"),
});

export type AgencyProfilePayload = z.infer<typeof AgencyProfileSchema>;
