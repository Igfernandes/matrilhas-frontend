import i18n from "@configs/i18n";
import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const ScheduleSchema = (t: TFunction) => z
  .object({
    title: z
      .string({ required_error: t("Validations.required") })
      .min(3, {
        message: t("Validations.min_length", {
          field: t("Words.title"),
          length: "3",
        }) as string,
      })
      .max(200, {
        message: t("Validations.max_length", {
          field: t("Words.title"),
          length: "200",
        }) as string,
      }),
    date: z
      .string({ required_error: t("Validations.required") })
      .nonempty({ message: t("Validations.required") }),
    end_date: z
      .string({ required_error: t("Validations.required") })
      .optional(),
    describe: z
      .string({ required_error: t("Validations.required") })
      .optional()
      .nullable(),
    color: z.string({ required_error: t("Validations.required") }),
    linked: z
      .array(z.string().or(z.boolean()))
      .refine((arr) => arr.some((item) => typeof item === "string"), {
        message: t("Validations.invalid_schedule_linked"),
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

export type SchedulePayload = z.infer<ReturnType<typeof ScheduleSchema>>;
