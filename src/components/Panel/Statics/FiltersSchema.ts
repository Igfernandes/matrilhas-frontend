import i18n from "@configs/i18n";
import { z } from "zod";

export const FiltersSchema = z.object({
  started_at: z
    .string({
      message: i18n("Validations.string"),
    })
    .optional()
    .nullable(),
  ended_at: z
    .string({
      message: i18n("Validations.string"),
    })
    .optional()
    .nullable(),
});

export type FiltersPayload = z.infer<typeof FiltersSchema>;
