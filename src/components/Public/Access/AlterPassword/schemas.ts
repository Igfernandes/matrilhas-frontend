import i18n from "@configs/i18n";
import { TFunction } from "@contexts/I18n";
import {
  hasSomeLetterLowercase,
  hasSomeLetterUppercase,
  hasSomeNumber,
  hasSomeSpecialCharacter,
} from "@helpers/string";
import { z } from "zod";

export const AlterPasswordFormSchema = (t: TFunction) =>
  z
    .object({
      password: z
        .string({ required_error: i18n("Validations.required") })
        .min(8)
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

export type AlterPasswordPayload = z.infer<
  ReturnType<typeof AlterPasswordFormSchema>
>;
