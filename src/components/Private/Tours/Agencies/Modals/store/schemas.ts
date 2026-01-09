import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const ToursAgenciesSchema = (t: TFunction) => z.object({
  agencies: z
    .array(z.string().or(z.boolean()))
    .refine((arr) => arr.some((item) => typeof item === "string"), {
      message: t("Validations.invalid_schedule_linked"),
    }),
});

export type ToursAgenciesUpdatePayload = z.infer<ReturnType<typeof ToursAgenciesSchema>>;