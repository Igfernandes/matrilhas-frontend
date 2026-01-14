import i18n from "@configs/i18n";
import { z } from "zod";

export const SettingsSchema = z.object({
  name: z.string({ required_error: i18n("Validations.required") }).min(3, {
    message: (i18n("Validations.min_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "3"),
  }),
  phone: z.string({ required_error: i18n("Validations.required") }),
  email: z.string({ required_error: i18n("Validations.required") }),
});

export type SettingsPayload = z.infer<typeof SettingsSchema>;
