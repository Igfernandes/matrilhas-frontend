import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const loginFormSchema = (t: TFunction) =>
  z.object({
    login: z
      .string({ required_error: t("Validations.required") })
      .email({ message: t("Validations.email") }),
    password: z.string({ required_error: t("Validations.email") }),
    rememberMe: z
      .boolean({ required_error: t("Validations.boolean") })
      .nullable(),
  });
