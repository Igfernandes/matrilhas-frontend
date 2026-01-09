import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const RulesSchema = (t: TFunction) =>
  z.object({
    rule: z.array(
      z.object({
        type: z.enum(["AGE", "RESIDENCY", "SLOT"], {
          message: t("Validations.enum", {
            list: "AGE, RESIDENCY, SLOT",
          }),
        }),
        expression: z.enum(["MAX", "IN", "MIN", "EQ", "NEQ"], {
          message: t("Validations.enum", {
            list: "MAX, IN, MIN, EQ, NEQ",
          }),
        }),
        amount: z.coerce.number().optional(),
        action: z
          .enum(["FREE", "PRICE", "LIMIT"], {
            message: t("Validations.enum", {
              list: "FREE, PRICE, LIMIT",
            }),
          })
          .optional(),
        price: z.coerce
          .number({
            message: t("Validations.number"),
          })
          .optional(),
        applies_at: z
          .string({
            message: t("Validations.string"),
          })
          .optional()
          .nullable(),

        value: z.preprocess(
          (v) => v ?? undefined,
          z
            .object({
              country: z.string({
                message: t("Validations.string"),
              }),
              state: z.string({
                message: t("Validations.string"),
              }),
              city: z.string({
                message: t("Validations.string"),
              }),
            })
            .optional()
        ),
      })
    ),
  });

export type RulesPayload = z.infer<ReturnType<typeof RulesSchema>>;
