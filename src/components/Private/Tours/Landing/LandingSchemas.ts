import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const LandingSchemas = (t: TFunction) => z.object({
  address: z.array(
    z.object({
      type: z.enum(["DESTINY", "ORIGIN"]),
      tour_id: z.number().optional(),
      country: z.string({ required_error: t("Validations.required") }),
      state: z.string({ required_error: t("Validations.required") }),
      city: z.string({ required_error: t("Validations.required") }),
      complement: z.string({ required_error: t("Validations.required") }),
    })
  ),
});

export type LandingPayload = z.infer<ReturnType<typeof LandingSchemas>>;
