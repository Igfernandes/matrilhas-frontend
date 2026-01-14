import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const ForgotPasswordSchema = (t: TFunction) =>
  z.object({
    login: z.string().nonempty({ message: t("Validations.login") }),
  });

export type ForgotPasswordPayload = z.infer<
  ReturnType<typeof ForgotPasswordSchema>
>;
