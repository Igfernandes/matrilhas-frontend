import i18n from "@configs/i18n";
import { z } from "zod";

export const ToursAgenciesSchema = z.object({
  agencies: z
    .array(z.string().or(z.boolean()))
    .refine((arr) => arr.some((item) => typeof item === "string"), {
      message: i18n("Validations.invalid_schedule_linked"),
    }),
});

export type ToursAgenciesUpdatePayload = z.infer<typeof ToursAgenciesSchema>;
