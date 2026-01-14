import {
  hasSomeLetterLowercase,
  hasSomeLetterUppercase,
  hasSomeNumber,
  hasSomeSpecialCharacter,
} from "@helpers/string";
import { z } from "zod";

export const alterPasswordFormSchema = (t: (key: string) => string) => z
  .object({
    password: z
      .string({ required_error: t("Validations.required") })
      .min(8, t("Validations.has_min_eight_letters"))
      .refine(hasSomeLetterUppercase)
      .refine(hasSomeLetterLowercase)
      .refine(hasSomeNumber)
      .refine(hasSomeSpecialCharacter),
    passwordConfirm: z.string({
      required_error: t("Validations.required"),
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: t("Validations.required"),
    path: ["passwordConfirm"],
  });

export type AlterPasswordPayload = z.infer<ReturnType<typeof alterPasswordFormSchema>>;
