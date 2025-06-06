import i18n from "@configs/i18n";
import { z } from "zod";

export const ScheduleSchema = z.object({
  title: z.string({ required_error: i18n("errors.fields.required") }).min(3, {
    message: (i18n("errors.fields.min_length") as string)
      .replace("${field}", i18n("words.name"))
      .replace("${length}", "3"),
  }),
  date: z.string({ required_error: i18n("errors.fields.required") }),
  end_date: z
    .string({ required_error: i18n("errors.fields.required") })
    .optional().nullable(),
  describe: z.string({ required_error: i18n("errors.fields.required") }),
  color: z.string({ required_error: i18n("errors.fields.required") }),
  linked: z.array(z.string()),
});

export type ScheduleUpdatePayload = z.infer<typeof ScheduleSchema>;
