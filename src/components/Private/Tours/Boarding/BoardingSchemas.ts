import i18n from "@configs/i18n";
import { z } from "zod";

export const BoardingSchemas = z.object({
  address: z.array(
    z.object({
      type: z.enum(["DESTINY", "ORIGIN"]),
      tour_id: z.number().optional(),
      country: z.string({ required_error: i18n("Validations.required") }),
      state: z.string({ required_error: i18n("Validations.required") }),
      city: z.string({ required_error: i18n("Validations.required") }),
      complement: z.string({ required_error: i18n("Validations.required") }),
    })
  ),
});

export type BoardingPayload = z.infer<typeof BoardingSchemas>;
