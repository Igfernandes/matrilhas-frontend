import { z } from "zod";

export const RulesSchema = z.object({
  rule: z.array(
    z.object({
      type: z.enum(["AGE", "RESIDENCY", "SLOT"]),
      expression: z.enum(["MAX", "IN", "MIN", "EQ", "NEQ"]),

      amount: z.coerce.number().optional(),

      action: z.enum(["FREE", "PRICE", "LIMIT"]).optional(),
      price: z.coerce.number().optional(),
      applies_at: z.string().optional().nullable(),

      value: z.preprocess(
        (v) => v ?? undefined,
        z
          .object({
            country: z.string(),
            state: z.string(),
            city: z.string(),
          })
          .optional()
      ),
    })
  ),
});

export type RulesPayload = z.infer<typeof RulesSchema>;
