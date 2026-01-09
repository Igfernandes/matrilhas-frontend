import { TFunction } from "@contexts/I18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const PeriodsSchemas = (t: TFunction) =>
  z.object({
    period: z.array(
      z.object({
        model: z.enum(["SALE", "TOUR"], {
          message: t("Validations.enum", {
            list: "SALE, TOUR",
          }),
        }),
        frequency: z
          .enum(["ONE_TIME", "WEEKLY", "MONTHLY", "YEARLY"], {
            message: t("Validations.enum", {
              list: "ONE_TIME, WEEKLY, MONTHLY, YEARLY",
            }),
          })
          .optional()
          .default("ONE_TIME"),
        by_weekday: z.preprocess(
          (v) => {
            if (typeof v === "string") return [v];
            if (Array.isArray(v)) return v;
            return [];
          },
          z.array(
            z.string({
              invalid_type_error: t("Validations.required"),
              required_error: t("Validations.required"),
            })
          )
        ),
        by_monthday: z.preprocess(
          (v) => v ?? [],
          z.array(optionalNumber(t("Validations.required")))
        ),
        by_month: z.preprocess(
          (v) => v ?? [],
          z.array(
            z.number({
              invalid_type_error: t("Validations.required"),
              required_error: t("Validations.required"),
            })
          )
        ),
        by_datetime: z.preprocess(
          (v) => v ?? [],
          z.array(
            z.string({
              invalid_type_error: t("Validations.required"),
              required_error: t("Validations.required"),
            })
          )
        ),
      })
    ),
  });

export type PeriodsPayload = z.infer<ReturnType<typeof PeriodsSchemas>>;
