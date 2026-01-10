import { TFunction } from "@contexts/I18n";
import {
  hasSomeLetterLowercase,
  hasSomeLetterUppercase,
  hasSomeNumber,
  hasSomeSpecialCharacter,
} from "@helpers/string";
import { z } from "zod";

export const CreateUserSchema = (t: TFunction) => z
  .object({
    keyword: z
      .string({ required_error: t("Validations.required") })
      .nonempty(t("Validations.required")),
    password: z
      .string({ required_error: t("Validations.required") })
      .nonempty(t("Validations.required"))
      .min(8)
      .refine(hasSomeLetterUppercase)
      .refine(hasSomeLetterLowercase)
      .refine(hasSomeNumber)
      .refine(hasSomeSpecialCharacter),
    passwordConfirm: z
      .string({
        required_error: t("Validations.required"),
      })
      .nonempty(t("Validations.required")),
    cpf: z
      .string({ required_error: t("Validations.required") })
      .nonempty(t("Validations.required")),
    birthdate: z
      .string({ required_error: t("Validations.required") })
      .nonempty(t("Validations.required")),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: t("Validations.required"),
    path: ["passwordConfirm"],
  });


export type CreateUserPayload = z.infer<ReturnType<typeof CreateUserSchema>>;
