import i18n from "@configs/i18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

const messageRequired = {
  invalid_type_error: i18n("Validations.required"),
  required_error: i18n("Validations.required"),
};

export const PeriodsSchemas = z.object({
  period: z.array(
    z.object({
      model: z.enum(["SALE", "TOUR"]),
      frequency: z.enum(["ONE_TIME", "WEEKLY", "MONTHLY", "YEARLY"]).optional().default("ONE_TIME"),
      by_weekday: z.preprocess((v) => {
        if (typeof v === "string") return [v];
        if (Array.isArray(v)) return v;
        return [];
      }, z.array(z.string(messageRequired))),
      by_monthday: z.preprocess(
        (v) => v ?? [],
        z.array(optionalNumber(i18n("Validations.required")))
      ),
      by_month: z.preprocess(
        (v) => v ?? [],
        z.array(z.number(messageRequired))
      ),
      by_datetime: z.preprocess(
        (v) => v ?? [],
        z.array(z.string(messageRequired))
      ),
    })
  ),
});

export type PeriodsPayload = z.infer<typeof PeriodsSchemas>;
