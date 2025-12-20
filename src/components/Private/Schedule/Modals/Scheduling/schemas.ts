import i18n from "@configs/i18n";
import { z } from "zod";

export const ScheduleSchema = z
  .object({
    title: z
      .string({ required_error: i18n("Validations.required") })
      .min(3, {
        message: i18n("Validations.min_length", {
          field: i18n("Words.title"),
          length: "3",
        }) as string,
      })
      .max(200, {
        message: i18n("Validations.max_length", {
          field: i18n("Words.title"),
          length: "200",
        }) as string,
      }),
    date: z
      .string({ required_error: i18n("Validations.required") })
      .nonempty({ message: i18n("Validations.required") }),
    end_date: z
      .string({ required_error: i18n("Validations.required") })
      .optional(),
    describe: z
      .string({ required_error: i18n("Validations.required") })
      .optional()
      .nullable(),
    color: z.string({ required_error: i18n("Validations.required") }),
    linked: z
      .array(z.string().or(z.boolean()))
      .refine((arr) => arr.some((item) => typeof item === "string"), {
        message: i18n("Validations.invalid_schedule_linked"),
      }),
  })
  .superRefine((data, ctx) => {
    if (!data.end_date) return;

    // Remove caracteres não numéricos
    const startNum = data.date.replaceAll(/\D/g, "");
    const endNum = data.end_date.replaceAll(/\D/g, "");

    if (startNum >= endNum) {
      ctx.addIssue({
        path: ["end_date"],
        code: z.ZodIssueCode.custom,
        message: i18n("Validations.invalid_end_date"),
      });
    }
  });

export type SchedulePayload = z.infer<typeof ScheduleSchema>;
