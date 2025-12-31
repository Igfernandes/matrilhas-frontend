import i18n from "@configs/i18n";
import { z } from "zod";

export const RulesSchema = z.object({
  rule: z.array(
    z.object({
      type: z.enum(["AGE", "RESIDENCY", "SLOT"], {
        message: i18n("Validations.list", {
          field: i18n("Words.type"),
          list: "AGE, RESIDENCY, SLOT",
        }),
      }),
      expression: z.enum(["MAX", "IN", "MIN", "EQ", "NEQ"]),

      amount: z.coerce.number().optional(),

      action: z.preprocess(
        (value) => (value === "" ? null : value),
        z
          .enum(["FREE", "PRICE", "LIMIT"], {
            required_error: i18n("Words.action", {
              field: i18n("Words.action"),
              list:
                i18n("Words.free") +
                ", " +
                i18n("Words.price") +
                ", " +
                i18n("Words.limit"),
            }),
          })
          .nullable()
          .optional()
      ),
      price: z.coerce
        .number({
          invalid_type_error: i18n("Validations.number"),
        })
        .optional(),
      applies_at: z
        .string({
          message: i18n("Validations.string"),
        })
        .optional()
        .nullable(),

      value: z.preprocess(
        (v) => v ?? undefined,
        z
          .object({
            country: z.string({
              message: i18n("Validations.string"),
            }),
            state: z.string({
              message: i18n("Validations.string"),
            }),
            city: z.string({
              message: i18n("Validations.string"),
            }),
          })
          .optional()
      ),
    })
  ),
});

export type RulesPayload = z.infer<typeof RulesSchema>;
