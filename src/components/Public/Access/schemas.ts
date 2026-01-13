import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const loginFormSchema = (t: TFunction) =>
  z.object({
    login: z
      .string({ required_error: t("Validations.required") }),
    password: z.string({ required_error: t("Validations.required") }),
  });
