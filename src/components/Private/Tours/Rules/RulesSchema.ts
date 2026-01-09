import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const RulesSchema = (t: TFunction) =>
  z.object({
    rule: z.array(
      z.object({
        type: z.enum(["AGE", "RESIDENCY", "SLOT"], {
          message: t("Validations.list", {
            field: t("Words.type"),
            list: "AGE, RESIDENCY, SLOT",
          }),
        }),
        expression: z.enum(["MAX", "IN", "MIN", "EQ", "NEQ"], {
          message: t("Validations.list", {
            field: t("Words.expression"),
            list: "MAX, IN, MIN, EQ, NEQ",
          }),
        }),
        amount: z.coerce.number().optional(),
        action: z.preprocess(
          (value) => (value === "" ? null : value),
          z
            .enum(["FREE", "PRICE", "LIMIT"], {
              required_error: t("Words.action", {
                field: t("Words.action"),
                list:
                  t("Words.free") +
                  ", " +
                  t("Words.price") +
                  ", " +
                  t("Words.limit"),
              }),
            })
            .nullable()
            .optional()
        ),
        price: z.coerce
          .number({
            invalid_type_error: t("Validations.number"),
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
